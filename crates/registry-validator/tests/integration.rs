use std::fs;
use std::path::PathBuf;

use registry_validator::{validate_file, validate_tree};

fn write_record(dir: &std::path::Path, name: &str, version: &str, body: &str) -> PathBuf {
    let target = dir.join(name);
    fs::create_dir_all(&target).expect("create record dir");
    let path = target.join(format!("{version}.json"));
    fs::write(&path, body).expect("write record");
    path
}

fn valid_record(name: &str, version: &str) -> String {
    format!(
        r#"{{
  "name": "{name}",
  "version": "{version}",
  "packageUri": "package://pkg.example.com/{name}@{version}",
  "metadataUrl": "https://example.com/registry/{name}/{version}.json",
  "packageZipUrl": "https://example.com/{name}@{version}.zip",
  "packageZipSha256Url": "https://example.com/{name}@{version}.zip.sha256",
  "docsUrl": "https://example.com/{name}/",
  "ecosystem": "javascript",
  "firstParty": true,
  "targets": ["package.json"],
  "formats": ["json"],
  "tags": ["typescript"],
  "maintainers": ["ubugeeei"],
  "description": "An example record for tests.",
  "source": {{
    "repo": "https://github.com/ubugeeei/registry.pkl",
    "directory": "packages/{name}"
  }},
  "releasedAt": "2026-05-19T00:00:00Z"
}}
"#
    )
}

#[test]
fn valid_record_passes() {
    let tmp = tempfile::tempdir().expect("tmp");
    let path = write_record(
        tmp.path(),
        "target.js",
        "0.1.0",
        &valid_record("target.js", "0.1.0"),
    );
    assert!(validate_file(&path).is_empty());
}

#[test]
fn invalid_semver_rejected() {
    let tmp = tempfile::tempdir().expect("tmp");
    let body = valid_record("target.js", "0.1.0")
        .replace(r#""version": "0.1.0""#, r#""version": "v0.1.0""#);
    let path = write_record(tmp.path(), "target.js", "0.1.0", &body);
    let issues = validate_file(&path);
    assert!(
        issues.iter().any(|i| i.message.contains("SemVer")),
        "expected semver issue, got {issues:?}"
    );
}

#[test]
fn missing_package_uri_match_rejected() {
    let tmp = tempfile::tempdir().expect("tmp");
    let body = valid_record("target.js", "0.1.0").replace(
        r#""packageUri": "package://pkg.example.com/target.js@0.1.0""#,
        r#""packageUri": "package://pkg.example.com/wrong-name@0.1.0""#,
    );
    let path = write_record(tmp.path(), "target.js", "0.1.0", &body);
    let issues = validate_file(&path);
    assert!(issues.iter().any(|i| i.message.contains("packageUri")));
}

#[test]
fn unknown_format_rejected() {
    let tmp = tempfile::tempdir().expect("tmp");
    let body = valid_record("target.js", "0.1.0")
        .replace(r#""formats": ["json"]"#, r#""formats": ["binary"]"#);
    let path = write_record(tmp.path(), "target.js", "0.1.0", &body);
    let issues = validate_file(&path);
    assert!(issues.iter().any(|i| i.message.contains("binary")));
}

#[test]
fn unknown_field_rejected_as_json_error() {
    let tmp = tempfile::tempdir().expect("tmp");
    let mut body = valid_record("target.js", "0.1.0");
    // inject an unknown top-level key
    body = body.replace(
        r#""name": "target.js""#,
        r#""extraneous": true, "name": "target.js""#,
    );
    let path = write_record(tmp.path(), "target.js", "0.1.0", &body);
    let issues = validate_file(&path);
    assert!(issues
        .iter()
        .any(|i| i.message.contains("invalid JSON") || i.message.contains("extraneous")));
}

#[test]
fn wrong_path_rejected() {
    let tmp = tempfile::tempdir().expect("tmp");
    let body = valid_record("target.js", "0.1.0");
    // Place under target.k8s/0.1.0.json — mismatched
    let path = write_record(tmp.path(), "target.k8s", "0.1.0", &body);
    let issues = validate_file(&path);
    assert!(issues
        .iter()
        .any(|i| i.message.contains("file path must end")));
}

#[test]
fn validate_tree_walks_subdirs() {
    let tmp = tempfile::tempdir().expect("tmp");
    write_record(
        tmp.path(),
        "target.js",
        "0.1.0",
        &valid_record("target.js", "0.1.0"),
    );
    write_record(
        tmp.path(),
        "target.rust",
        "0.2.0",
        &valid_record("target.rust", "0.2.0"),
    );
    let report = validate_tree(tmp.path());
    assert_eq!(report.validated, 2);
    assert!(report.ok(), "unexpected issues: {:?}", report.issues);
}
