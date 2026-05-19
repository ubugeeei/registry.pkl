//! Registry record validation, the schema enforcement layer shared by the
//! CLI binary and CI integration tests.
//!
//! The canonical schema is defined as a Pkl module under
//! `packages/target.core/RegistryRecord.pkl`. The validator does not depend
//! on Pkl at runtime — by the time records reach CI, they are JSON files
//! under `registry/<family>/<version>.json`. This crate enforces the JSON
//! shape and a handful of cross-field invariants.

use std::collections::BTreeSet;
use std::fs;
use std::path::{Path, PathBuf};

use serde::Deserialize;

/// One validation problem against a single record file.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Issue {
    pub path: PathBuf,
    pub message: String,
}

impl Issue {
    pub fn new(path: impl Into<PathBuf>, message: impl Into<String>) -> Self {
        Self {
            path: path.into(),
            message: message.into(),
        }
    }
}

#[derive(Debug, Default, Clone)]
pub struct Report {
    pub issues: Vec<Issue>,
    pub validated: usize,
}

impl Report {
    pub const fn ok(&self) -> bool {
        self.issues.is_empty()
    }

    pub fn merge(&mut self, other: Self) {
        self.issues.extend(other.issues);
        self.validated += other.validated;
    }
}

/// The on-disk shape of a record. Mirrors `RegistryRecord.pkl`. Unknown
/// fields are rejected — community contributions extending the schema must
/// land schema changes first.
///
/// Several fields are deserialized only to enforce that the JSON contains
/// the right shape; their values are not used directly by the validator.
#[derive(Debug, Deserialize)]
#[serde(deny_unknown_fields)]
#[allow(dead_code)]
struct Record {
    name: String,
    version: String,
    #[serde(rename = "packageUri")]
    package_uri: String,
    #[serde(rename = "metadataUrl")]
    metadata_url: String,
    #[serde(rename = "packageZipUrl")]
    package_zip_url: String,
    #[serde(rename = "packageZipSha256Url")]
    #[serde(default)]
    package_zip_sha256_url: Option<String>,
    #[serde(rename = "docsUrl")]
    docs_url: String,
    ecosystem: String,
    #[serde(default)]
    #[serde(rename = "firstParty")]
    first_party: Option<bool>,
    targets: Vec<String>,
    formats: Vec<String>,
    #[serde(default)]
    tags: Vec<String>,
    maintainers: Vec<String>,
    #[serde(default)]
    description: Option<String>,
    source: Source,
    #[serde(default)]
    #[serde(rename = "releasedAt")]
    released_at: Option<String>,
    #[serde(default)]
    supersedes: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(deny_unknown_fields)]
struct Source {
    repo: String,
    directory: String,
}

const ALLOWED_FORMATS: &[&str] = &[
    "json",
    "yaml",
    "toml",
    "ini",
    "text",
    "hcl",
    "dotenv",
    "properties",
];

const KNOWN_ECOSYSTEMS: &[&str] = &[
    "javascript",
    "typescript",
    "rust",
    "python",
    "go",
    "editor",
    "agent",
    "ci",
    "env",
    "container",
    "deploy",
    "docs",
    "k8s",
    "lint",
    "core",
];

/// Validate every `*.json` under `root`, recursing into subdirectories.
pub fn validate_tree(root: &Path) -> Report {
    let mut report = Report::default();
    let mut stack: Vec<PathBuf> = vec![root.to_path_buf()];
    while let Some(dir) = stack.pop() {
        let entries = match fs::read_dir(&dir) {
            Ok(e) => e,
            Err(err) => {
                report.issues.push(Issue::new(
                    dir.clone(),
                    format!("cannot read directory: {err}"),
                ));
                continue;
            }
        };
        for entry in entries.flatten() {
            let path = entry.path();
            if path.is_dir() {
                stack.push(path);
                continue;
            }
            if path.extension().and_then(|s| s.to_str()) != Some("json") {
                continue;
            }
            report.validated += 1;
            report.issues.extend(validate_file(&path));
        }
    }
    report
}

/// Validate a single record file. Returns one issue per problem found.
pub fn validate_file(path: &Path) -> Vec<Issue> {
    let bytes = match fs::read(path) {
        Ok(b) => b,
        Err(err) => {
            return vec![Issue::new(path, format!("cannot read file: {err}"))];
        }
    };
    let record: Record = match serde_json::from_slice(&bytes) {
        Ok(r) => r,
        Err(err) => {
            return vec![Issue::new(path, format!("invalid JSON: {err}"))];
        }
    };
    validate_record(path, &record)
}

#[allow(clippy::too_many_lines)]
fn validate_record(path: &Path, record: &Record) -> Vec<Issue> {
    let mut issues = Vec::new();

    if !is_valid_semver(&record.version) {
        issues.push(Issue::new(
            path,
            format!("version `{}` is not SemVer", record.version),
        ));
    }
    if !is_valid_package_uri(&record.package_uri, &record.name, &record.version) {
        issues.push(Issue::new(
            path,
            format!(
                "packageUri `{}` does not match `package://<host>/{}@{}`",
                record.package_uri, record.name, record.version
            ),
        ));
    }
    if !is_https(&record.package_zip_url) {
        issues.push(Issue::new(
            path,
            "packageZipUrl must be an https:// URL".to_string(),
        ));
    }
    if !is_https(&record.metadata_url) {
        issues.push(Issue::new(
            path,
            "metadataUrl must be an https:// URL".to_string(),
        ));
    }
    if !is_https(&record.docs_url) {
        issues.push(Issue::new(
            path,
            "docsUrl must be an https:// URL".to_string(),
        ));
    }
    if let Some(sha_url) = record.package_zip_sha256_url.as_deref() {
        if !is_https(sha_url) {
            issues.push(Issue::new(
                path,
                "packageZipSha256Url must be an https:// URL".to_string(),
            ));
        }
        if !sha_url.ends_with(".sha256") {
            issues.push(Issue::new(
                path,
                "packageZipSha256Url should end with `.sha256`".to_string(),
            ));
        }
    }
    if record.targets.is_empty() {
        issues.push(Issue::new(
            path,
            "targets must list at least one config file".to_string(),
        ));
    }
    if record.formats.is_empty() {
        issues.push(Issue::new(
            path,
            "formats must list at least one output format".to_string(),
        ));
    }
    let allowed: BTreeSet<&str> = ALLOWED_FORMATS.iter().copied().collect();
    for format in &record.formats {
        if !allowed.contains(format.as_str()) {
            issues.push(Issue::new(
                path,
                format!(
                    "format `{format}` is not one of: {}",
                    ALLOWED_FORMATS.join(", ")
                ),
            ));
        }
    }
    if record.maintainers.is_empty() {
        issues.push(Issue::new(
            path,
            "maintainers must list at least one entry".to_string(),
        ));
    }
    if !KNOWN_ECOSYSTEMS.contains(&record.ecosystem.as_str()) && !is_lower_kebab(&record.ecosystem)
    {
        issues.push(Issue::new(
            path,
            format!(
                "ecosystem `{}` is not a known ecosystem and is not lower-kebab-case",
                record.ecosystem
            ),
        ));
    }
    if !record.source.repo.starts_with("https://") {
        issues.push(Issue::new(
            path,
            "source.repo must be an https:// URL".to_string(),
        ));
    }
    if record.source.directory.starts_with('/') || record.source.directory.starts_with("./") {
        issues.push(Issue::new(
            path,
            "source.directory must be a repo-relative path (no leading `/` or `./`)".to_string(),
        ));
    }
    if let Some(prev) = record.supersedes.as_deref() {
        let expected_prefix = format!("{}@", record.name);
        if !prev.starts_with(&expected_prefix) {
            issues.push(Issue::new(
                path,
                format!("supersedes `{prev}` must start with `{expected_prefix}`"),
            ));
        }
    }

    let path_str = path.to_string_lossy();
    let expected_segment = format!("{}/{}.json", record.name, record.version);
    if !path_str.replace('\\', "/").ends_with(&expected_segment) {
        issues.push(Issue::new(
            path,
            format!("file path must end with `{expected_segment}`"),
        ));
    }

    issues
}

fn is_valid_semver(version: &str) -> bool {
    let mut parts = version.split('-');
    let core = parts.next().unwrap_or("");
    let nums: Vec<&str> = core.split('.').collect();
    if nums.len() != 3 {
        return false;
    }
    nums.iter().all(|n| {
        !n.is_empty()
            && n.chars().all(|c| c.is_ascii_digit())
            && (n.len() == 1 || !n.starts_with('0'))
    })
}

fn is_valid_package_uri(uri: &str, name: &str, version: &str) -> bool {
    let expected_suffix = format!("/{name}@{version}");
    uri.starts_with("package://") && uri.ends_with(&expected_suffix)
}

fn is_https(url: &str) -> bool {
    url.starts_with("https://")
}

fn is_lower_kebab(value: &str) -> bool {
    !value.is_empty()
        && value
            .chars()
            .all(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || c == '-')
        && value.chars().next().is_some_and(|c| !c.is_ascii_digit())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn semver_basic() {
        assert!(is_valid_semver("0.1.0"));
        assert!(is_valid_semver("1.2.3"));
        assert!(is_valid_semver("1.0.0-alpha.1"));
        assert!(!is_valid_semver("v1.0.0"));
        assert!(!is_valid_semver("1.0"));
        assert!(!is_valid_semver("01.0.0"));
    }

    #[test]
    fn package_uri_matches() {
        assert!(is_valid_package_uri(
            "package://pkg.example.com/target.js@0.1.0",
            "target.js",
            "0.1.0",
        ));
        assert!(!is_valid_package_uri(
            "package://pkg.example.com/target.js@0.2.0",
            "target.js",
            "0.1.0",
        ));
        assert!(!is_valid_package_uri(
            "https://example.com/target.js@0.1.0",
            "target.js",
            "0.1.0",
        ));
    }
}
