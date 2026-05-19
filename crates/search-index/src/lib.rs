//! Build a deterministic static search index from the on-disk registry
//! records under `registry/`.
//!
//! The index is intentionally simple — a flat JSON document with one
//! `Hit` per record. The docs site loads it once and filters in-memory.
//! Anything more sophisticated (BM25, prefix tries) is overkill for the
//! ~hundreds of records we expect over the next year.

use std::collections::BTreeMap;
use std::fs;
use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Deserialize)]
#[allow(dead_code)]
struct RawRecord {
    name: String,
    version: String,
    #[serde(rename = "docsUrl")]
    docs_url: String,
    #[serde(rename = "packageUri")]
    package_uri: String,
    #[serde(default)]
    description: Option<String>,
    ecosystem: String,
    targets: Vec<String>,
    formats: Vec<String>,
    #[serde(default)]
    tags: Vec<String>,
    maintainers: Vec<String>,
    #[serde(default)]
    #[serde(rename = "releasedAt")]
    released_at: Option<String>,
    #[serde(default)]
    #[serde(rename = "firstParty")]
    first_party: Option<bool>,
}

/// One entry in the static search index.
///
/// A flat view of a record the docs-site client uses to render hits.
/// Field order here is the serialization order — keep it stable so
/// consumers can diff.
#[derive(Debug, Clone, Serialize)]
pub struct Hit {
    pub name: String,
    pub version: String,
    pub ecosystem: String,
    #[serde(rename = "firstParty")]
    pub first_party: bool,
    #[serde(rename = "docsUrl")]
    pub docs_url: String,
    pub description: String,
    pub targets: Vec<String>,
    pub formats: Vec<String>,
    pub tags: Vec<String>,
    pub maintainers: Vec<String>,
    /// Newline-joined search corpus (lowercased) — clients can substring
    /// against this for free-text filtering without re-deriving from the
    /// individual fields.
    pub haystack: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct Index {
    pub version: u32,
    pub generated: String,
    pub hits: Vec<Hit>,
    /// Reverse index: target file name → list of `name@version` keys whose
    /// records list that target. Lets the docs site answer "which package
    /// emits `eslint.config.js`?" without scanning every hit.
    #[serde(rename = "byTarget")]
    pub by_target: BTreeMap<String, Vec<String>>,
    /// Reverse index: ecosystem → list of `name@version` keys.
    #[serde(rename = "byEcosystem")]
    pub by_ecosystem: BTreeMap<String, Vec<String>>,
}

/// The schema version of the produced index. Bump when fields change in
/// a way the docs-site client cannot ignore.
pub const INDEX_VERSION: u32 = 1;

#[derive(Debug)]
pub struct BuildOptions<'a> {
    pub root: &'a Path,
    pub generated_at: &'a str,
}

/// Walk `root` recursively and build a deterministic [`Index`].
///
/// Parses every `*.json` file under `options.root`. The returned hits
/// are sorted by `(name, version)` and the reverse-index value lists
/// are sorted, so re-running with the same input is byte-identical.
pub fn build(options: &BuildOptions) -> anyhow::Result<Index> {
    let mut hits: Vec<Hit> = Vec::new();
    let mut stack: Vec<PathBuf> = vec![options.root.to_path_buf()];

    while let Some(dir) = stack.pop() {
        let entries = match fs::read_dir(&dir) {
            Ok(e) => e,
            Err(err) => {
                anyhow::bail!("cannot read {}: {err}", dir.display());
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
            let bytes =
                fs::read(&path).map_err(|e| anyhow::anyhow!("read {}: {e}", path.display()))?;
            let record: RawRecord = serde_json::from_slice(&bytes)
                .map_err(|e| anyhow::anyhow!("parse {}: {e}", path.display()))?;
            hits.push(hit_from(record));
        }
    }

    hits.sort_by(|a, b| (&a.name, &a.version).cmp(&(&b.name, &b.version)));

    let mut by_target: BTreeMap<String, Vec<String>> = BTreeMap::new();
    let mut by_ecosystem: BTreeMap<String, Vec<String>> = BTreeMap::new();
    for hit in &hits {
        let key = format!("{}@{}", hit.name, hit.version);
        for target in &hit.targets {
            by_target
                .entry(target.clone())
                .or_default()
                .push(key.clone());
        }
        by_ecosystem
            .entry(hit.ecosystem.clone())
            .or_default()
            .push(key.clone());
    }
    for refs in by_target.values_mut() {
        refs.sort();
        refs.dedup();
    }
    for refs in by_ecosystem.values_mut() {
        refs.sort();
        refs.dedup();
    }

    Ok(Index {
        version: INDEX_VERSION,
        generated: options.generated_at.to_string(),
        hits,
        by_target,
        by_ecosystem,
    })
}

fn hit_from(record: RawRecord) -> Hit {
    let description = record.description.unwrap_or_default();
    let haystack_parts: Vec<String> = std::iter::once(record.name.clone())
        .chain(std::iter::once(record.version.clone()))
        .chain(std::iter::once(record.ecosystem.clone()))
        .chain(std::iter::once(description.clone()))
        .chain(record.targets.iter().cloned())
        .chain(record.formats.iter().cloned())
        .chain(record.tags.iter().cloned())
        .chain(record.maintainers.iter().cloned())
        .collect();
    let haystack = haystack_parts.join("\n").to_lowercase();
    Hit {
        name: record.name,
        version: record.version,
        ecosystem: record.ecosystem,
        first_party: record.first_party.unwrap_or(false),
        docs_url: record.docs_url,
        description,
        targets: record.targets,
        formats: record.formats,
        tags: record.tags,
        maintainers: record.maintainers,
        haystack,
    }
}

/// Render an index to canonical pretty-printed JSON with a trailing newline.
///
/// Pretty-printing keeps `git diff` legible — the file is small and
/// clients already gzip it on the wire.
///
/// # Panics
///
/// Panics if `serde_json` cannot serialize the index, which would only
/// happen on internal type misuse (custom `Serialize` impl that errors).
/// The current shape is plain owned data, so this never panics in practice.
pub fn to_json(index: &Index) -> String {
    let mut out = serde_json::to_string_pretty(index).expect("serialize index");
    out.push('\n');
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::Path;

    fn write(path: &Path, body: &str) {
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent).unwrap();
        }
        fs::write(path, body).unwrap();
    }

    fn fixture(name: &str, version: &str) -> String {
        format!(
            r#"{{
              "name": "{name}",
              "version": "{version}",
              "packageUri": "package://pkg.example.com/{name}@{version}",
              "metadataUrl": "https://example.com/{name}/{version}.json",
              "packageZipUrl": "https://example.com/{name}@{version}.zip",
              "docsUrl": "https://example.com/{name}/",
              "ecosystem": "javascript",
              "firstParty": true,
              "targets": ["package.json"],
              "formats": ["json"],
              "tags": ["tooling"],
              "maintainers": ["ubugeeei"],
              "description": "Test fixture",
              "source": {{
                "repo": "https://example.com/repo",
                "directory": "packages/{name}"
              }}
            }}"#
        )
    }

    #[test]
    fn deterministic_output() {
        let tmp = tempfile::tempdir().unwrap();
        write(&tmp.path().join("a/0.2.0.json"), &fixture("a", "0.2.0"));
        write(&tmp.path().join("a/0.1.0.json"), &fixture("a", "0.1.0"));
        write(&tmp.path().join("b/0.1.0.json"), &fixture("b", "0.1.0"));

        let opts = BuildOptions {
            root: tmp.path(),
            generated_at: "2026-05-19T00:00:00Z",
        };
        let first = build(&opts).unwrap();
        let second = build(&opts).unwrap();
        assert_eq!(to_json(&first), to_json(&second));

        // Sorted by (name, version)
        assert_eq!(first.hits[0].name, "a");
        assert_eq!(first.hits[0].version, "0.1.0");
        assert_eq!(first.hits[1].name, "a");
        assert_eq!(first.hits[1].version, "0.2.0");
        assert_eq!(first.hits[2].name, "b");
    }

    #[test]
    fn reverse_indices_populated() {
        let tmp = tempfile::tempdir().unwrap();
        write(&tmp.path().join("a/0.1.0.json"), &fixture("a", "0.1.0"));
        let opts = BuildOptions {
            root: tmp.path(),
            generated_at: "2026-05-19T00:00:00Z",
        };
        let index = build(&opts).unwrap();
        assert_eq!(
            index.by_target.get("package.json").unwrap(),
            &vec!["a@0.1.0".to_string()]
        );
        assert_eq!(
            index.by_ecosystem.get("javascript").unwrap(),
            &vec!["a@0.1.0".to_string()]
        );
    }

    #[test]
    fn haystack_combines_searchable_fields() {
        let tmp = tempfile::tempdir().unwrap();
        write(&tmp.path().join("a/0.1.0.json"), &fixture("a", "0.1.0"));
        let opts = BuildOptions {
            root: tmp.path(),
            generated_at: "now",
        };
        let index = build(&opts).unwrap();
        let h = &index.hits[0].haystack;
        assert!(h.contains('a'));
        assert!(h.contains("0.1.0"));
        assert!(h.contains("javascript"));
        assert!(h.contains("package.json"));
        assert!(h.contains("tooling"));
        assert!(h.contains("ubugeeei"));
        // All lowercased.
        assert_eq!(h, &h.to_lowercase());
    }
}
