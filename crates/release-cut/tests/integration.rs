use std::fs;
use std::path::Path;

use release_cut::{cut, CutOptions};

fn seed_repo(root: &Path) {
    let pkl_dir = root.join("packages/target.js");
    fs::create_dir_all(&pkl_dir).unwrap();
    fs::write(
        pkl_dir.join("PklProject"),
        r#"/// Typed modules for JavaScript, TypeScript, and monorepo tooling.
amends "../basePklProject.pkl"

dependencies {
  ["target.core"] = import("../target.core/PklProject")
}

package {
  version = "0.1.0"
}
"#,
    )
    .unwrap();
    let records_dir = root.join("registry-records/target.js");
    fs::create_dir_all(&records_dir).unwrap();
    fs::write(
        records_dir.join("0.1.0.pkl"),
        r#"amends "@target.core/FirstPartyRecord.pkl"

family = "target.js"
version = "0.1.0"
ecosystem = "javascript"

targets {
  "package.json"
}

formats {
  "json"
}
"#,
    )
    .unwrap();
}

#[test]
fn bumps_pkl_project_and_writes_new_record_source() {
    let tmp = tempfile::tempdir().unwrap();
    seed_repo(tmp.path());

    let report = cut(&CutOptions {
        root: tmp.path(),
        family: "target.js",
        new_version: "0.2.0",
        dry_run: false,
    })
    .unwrap();
    assert_eq!(report.previous_version.as_deref(), Some("0.1.0"));

    let pkl = fs::read_to_string(tmp.path().join("packages/target.js/PklProject")).unwrap();
    assert!(pkl.contains("version = \"0.2.0\""));
    assert!(!pkl.contains("version = \"0.1.0\""));

    let new_record =
        fs::read_to_string(tmp.path().join("registry-records/target.js/0.2.0.pkl")).unwrap();
    assert!(new_record.contains("version = \"0.2.0\""));
    assert!(new_record.contains("supersedes = \"target.js@0.1.0\""));

    // Old source untouched.
    let old_record =
        fs::read_to_string(tmp.path().join("registry-records/target.js/0.1.0.pkl")).unwrap();
    assert!(old_record.contains("version = \"0.1.0\""));
}

#[test]
fn rejects_older_version() {
    let tmp = tempfile::tempdir().unwrap();
    seed_repo(tmp.path());

    let err = cut(&CutOptions {
        root: tmp.path(),
        family: "target.js",
        new_version: "0.0.9",
        dry_run: false,
    })
    .expect_err("should fail");
    assert!(err.to_string().contains("older"), "got: {err}");
}

#[test]
fn rejects_equal_version() {
    let tmp = tempfile::tempdir().unwrap();
    seed_repo(tmp.path());

    let err = cut(&CutOptions {
        root: tmp.path(),
        family: "target.js",
        new_version: "0.1.0",
        dry_run: false,
    })
    .err()
    .unwrap();
    assert!(err.to_string().contains("equals"), "got: {err}");
}

#[test]
fn rejects_unknown_family() {
    let tmp = tempfile::tempdir().unwrap();
    seed_repo(tmp.path());

    let err = cut(&CutOptions {
        root: tmp.path(),
        family: "target.bogus",
        new_version: "0.2.0",
        dry_run: false,
    })
    .err()
    .unwrap();
    assert!(err.to_string().contains("unknown family"), "got: {err}");
}

#[test]
fn dry_run_does_not_touch_disk() {
    let tmp = tempfile::tempdir().unwrap();
    seed_repo(tmp.path());

    cut(&CutOptions {
        root: tmp.path(),
        family: "target.js",
        new_version: "0.2.0",
        dry_run: true,
    })
    .unwrap();

    let pkl = fs::read_to_string(tmp.path().join("packages/target.js/PklProject")).unwrap();
    assert!(pkl.contains("version = \"0.1.0\""));
    assert!(!tmp
        .path()
        .join("registry-records/target.js/0.2.0.pkl")
        .exists());
}
