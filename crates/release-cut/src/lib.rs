//! Library half of `release-cut`.
//!
//! Bumping a `target.*` family's version touches several files:
//!
//! 1. `packages/<family>/PklProject` — the `version = "..."` literal.
//! 2. `registry-records/<family>/<previous-version>.pkl` — needs a sibling
//!    `<new-version>.pkl` rendered + the prior pinned via `supersedes`.
//! 3. `registry/<family>/<new-version>.json` — the rendered output.
//!
//! Doing all of this by hand is the kind of error-prone manual step that
//! drifts under load. This crate makes it a single `release-cut <family>
//! <version>` invocation.

#![allow(clippy::doc_markdown)]

use std::fs;
use std::path::{Path, PathBuf};

use anyhow::{anyhow, bail, Context, Result};

/// SemVer accepted by Pkl projects.
pub fn is_semver(version: &str) -> bool {
    let core_then = version.split('-').next().unwrap_or("");
    let parts: Vec<&str> = core_then.split('.').collect();
    if parts.len() != 3 {
        return false;
    }
    parts.iter().all(|p| {
        !p.is_empty()
            && p.chars().all(|c| c.is_ascii_digit())
            && (p.len() == 1 || !p.starts_with('0'))
    })
}

/// Parse a SemVer "X.Y.Z[-pre]" into (major, minor, patch, pre).
fn parse_semver(version: &str) -> Option<(u32, u32, u32, Option<String>)> {
    let (core_part, pre) = match version.split_once('-') {
        Some((c, p)) => (c, Some(p.to_string())),
        None => (version, None),
    };
    let parts: Vec<&str> = core_part.split('.').collect();
    if parts.len() != 3 {
        return None;
    }
    let mut nums = [0u32; 3];
    for (i, p) in parts.iter().enumerate() {
        nums[i] = p.parse().ok()?;
    }
    Some((nums[0], nums[1], nums[2], pre))
}

/// Compare two SemVers. Returns `Less`, `Equal`, or `Greater`.
pub fn compare_semver(a: &str, b: &str) -> Option<std::cmp::Ordering> {
    let (am, an, ap, _) = parse_semver(a)?;
    let (bm, bn, bp, _) = parse_semver(b)?;
    Some((am, an, ap).cmp(&(bm, bn, bp)))
}

/// Approved first-party families. Mirrors the regex in
/// `scripts/release.sh` and `.github/workflows/release-package.yml`.
pub const KNOWN_FAMILIES: &[&str] = &[
    "target.core",
    "target.js",
    "target.env",
    "target.rust",
    "target.editor",
    "target.agent",
    "target.ci",
    "target.python",
    "target.lint",
    "target.container",
    "target.go",
    "target.deploy",
    "target.docs",
    "target.k8s",
];

#[derive(Debug)]
pub struct CutOptions<'a> {
    pub root: &'a Path,
    pub family: &'a str,
    pub new_version: &'a str,
    pub dry_run: bool,
}

#[derive(Debug, Default)]
pub struct CutReport {
    pub touched: Vec<PathBuf>,
    pub previous_version: Option<String>,
}

/// Perform a release cut. Returns the list of files updated (or that
/// would have been updated if `dry_run`).
///
/// # Errors
///
/// - The family is not in [`KNOWN_FAMILIES`].
/// - The new version is not SemVer.
/// - The PklProject does not exist.
/// - The new version is not strictly greater than the current.
pub fn cut(options: &CutOptions) -> Result<CutReport> {
    if !KNOWN_FAMILIES.contains(&options.family) {
        bail!(
            "unknown family `{}` — must be one of: {}",
            options.family,
            KNOWN_FAMILIES.join(", ")
        );
    }
    if !is_semver(options.new_version) {
        bail!("version `{}` is not SemVer", options.new_version);
    }

    let mut report = CutReport::default();

    let pkl_project = options
        .root
        .join("packages")
        .join(options.family)
        .join("PklProject");
    if !pkl_project.exists() {
        bail!("PklProject does not exist: {}", pkl_project.display());
    }

    let current = read_pkl_version(&pkl_project)?;
    report.previous_version = Some(current.clone());

    match compare_semver(options.new_version, &current) {
        Some(std::cmp::Ordering::Greater) => {}
        Some(std::cmp::Ordering::Equal) => bail!(
            "new version {} equals current {} — pick a higher version",
            options.new_version,
            current
        ),
        Some(std::cmp::Ordering::Less) => bail!(
            "new version {} is older than current {}",
            options.new_version,
            current
        ),
        None => bail!(
            "could not compare versions {} vs {}",
            options.new_version,
            current
        ),
    }

    rewrite_pkl_version(&pkl_project, &current, options.new_version, options.dry_run)?;
    report.touched.push(pkl_project);

    let records_dir = options.root.join("registry-records").join(options.family);
    if records_dir.exists() {
        let existing_record = records_dir.join(format!("{current}.pkl"));
        let new_record = records_dir.join(format!("{}.pkl", options.new_version));
        if !existing_record.exists() {
            bail!("expected record source at {}", existing_record.display());
        }
        if new_record.exists() {
            bail!(
                "record source already exists for new version: {}",
                new_record.display()
            );
        }
        let body = fs::read_to_string(&existing_record)
            .with_context(|| format!("read {}", existing_record.display()))?;
        let new_body = bump_record_source(&body, options.new_version, &current);
        if !options.dry_run {
            fs::write(&new_record, &new_body)
                .with_context(|| format!("write {}", new_record.display()))?;
        }
        report.touched.push(new_record);
    }

    Ok(report)
}

fn read_pkl_version(path: &Path) -> Result<String> {
    let body = fs::read_to_string(path).with_context(|| format!("read {}", path.display()))?;
    for line in body.lines() {
        let trimmed = line.trim();
        if let Some(rest) = trimmed.strip_prefix("version = \"") {
            if let Some(end) = rest.find('"') {
                return Ok(rest[..end].to_string());
            }
        }
    }
    Err(anyhow!(
        "no `version = \"...\"` line found in {}",
        path.display()
    ))
}

fn rewrite_pkl_version(path: &Path, from: &str, to: &str, dry_run: bool) -> Result<()> {
    let body = fs::read_to_string(path).with_context(|| format!("read {}", path.display()))?;
    let needle = format!("version = \"{from}\"");
    let replacement = format!("version = \"{to}\"");
    if !body.contains(&needle) {
        bail!(
            "expected `{needle}` in {}, but it was not found",
            path.display()
        );
    }
    let updated = body.replacen(&needle, &replacement, 1);
    if !dry_run {
        fs::write(path, updated).with_context(|| format!("write {}", path.display()))?;
    }
    Ok(())
}

/// Produce a new record source body: bump the `version` assignment and
/// add a `supersedes = "<family>@<previous-version>"` line if not present.
fn bump_record_source(body: &str, new_version: &str, previous: &str) -> String {
    let mut family: Option<String> = None;
    for line in body.lines() {
        let trimmed = line.trim();
        if let Some(rest) = trimmed.strip_prefix("family = \"") {
            if let Some(end) = rest.find('"') {
                family = Some(rest[..end].to_string());
            }
        }
    }
    let with_version = body.replacen(
        &format!("version = \"{previous}\""),
        &format!("version = \"{new_version}\""),
        1,
    );
    if with_version.contains("\nsupersedes ") {
        return with_version;
    }
    let supersedes_value =
        family.map_or_else(|| previous.to_string(), |fam| format!("{fam}@{previous}"));
    let supersedes_line = format!("\nsupersedes = \"{supersedes_value}\"\n");
    if with_version.ends_with('\n') {
        format!("{with_version}{}", supersedes_line.trim_start_matches('\n'))
    } else {
        format!("{with_version}{supersedes_line}")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn semver_validation() {
        assert!(is_semver("0.1.0"));
        assert!(is_semver("1.2.3"));
        assert!(is_semver("1.0.0-rc.1"));
        assert!(!is_semver("01.0.0"));
        assert!(!is_semver("v1.0.0"));
        assert!(!is_semver("1.0"));
    }

    #[test]
    fn semver_comparison() {
        assert_eq!(
            compare_semver("0.2.0", "0.1.0"),
            Some(std::cmp::Ordering::Greater)
        );
        assert_eq!(
            compare_semver("1.0.0", "1.0.0"),
            Some(std::cmp::Ordering::Equal)
        );
        assert_eq!(
            compare_semver("0.1.0", "0.2.0"),
            Some(std::cmp::Ordering::Less)
        );
    }

    #[test]
    fn bump_record_adds_supersedes() {
        let body = r#"amends "@target.core/FirstPartyRecord.pkl"

family = "target.js"
version = "0.1.0"
ecosystem = "javascript"
"#;
        let out = bump_record_source(body, "0.2.0", "0.1.0");
        assert!(out.contains("version = \"0.2.0\""));
        assert!(out.contains("supersedes = \"target.js@0.1.0\""));
        assert!(!out.contains("version = \"0.1.0\""));
    }

    #[test]
    fn bump_record_preserves_existing_supersedes() {
        let body = r#"amends "@target.core/FirstPartyRecord.pkl"

family = "target.js"
version = "0.1.0"
ecosystem = "javascript"

supersedes = "target.js@0.0.9"
"#;
        let out = bump_record_source(body, "0.2.0", "0.1.0");
        assert!(out.contains("supersedes = \"target.js@0.0.9\""));
        // Should not add a second supersedes line.
        assert_eq!(out.matches("supersedes = ").count(), 1);
    }
}
