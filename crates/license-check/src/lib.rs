//! License declaration consistency check for the registry.pkl workspace.
//!
//! Scope:
//!
//! 1. The repo root has a `LICENSE` file naming Apache-2.0.
//! 2. Every `Cargo.toml` either declares `license = "Apache-2.0"` or
//!    inherits via `license.workspace = true` (and the workspace
//!    declaration matches).
//! 3. Every `packages/target.*/PklProject` amends `../basePklProject.pkl`,
//!    which in turn pins the same license string.
//!
//! No per-file SPDX headers are required — Pkl + Rust files use module-
//! level documentation, and adding 200+ headers would just be noise.

#![allow(
    clippy::doc_markdown,
    clippy::redundant_clone,
    clippy::if_not_else
)]

use std::fs;
use std::path::{Path, PathBuf};

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

#[derive(Debug, Default)]
pub struct Report {
    pub issues: Vec<Issue>,
    pub checked: usize,
}

impl Report {
    pub const fn ok(&self) -> bool {
        self.issues.is_empty()
    }
}

pub const EXPECTED_LICENSE: &str = "Apache-2.0";

/// Run the full repo check.
pub fn check(root: &Path) -> Report {
    let mut report = Report::default();
    check_root_license(root, &mut report);
    check_cargo_manifests(root, &mut report);
    check_pkl_projects(root, &mut report);
    report
}

fn check_root_license(root: &Path, report: &mut Report) {
    report.checked += 1;
    let path = root.join("LICENSE");
    if !path.exists() {
        report
            .issues
            .push(Issue::new(path, "LICENSE file is missing at the repo root"));
        return;
    }
    let body = match fs::read_to_string(&path) {
        Ok(b) => b,
        Err(err) => {
            report
                .issues
                .push(Issue::new(path, format!("cannot read LICENSE: {err}")));
            return;
        }
    };
    if !body.contains("Apache License") || !body.contains("Version 2.0") {
        report.issues.push(Issue::new(
            path,
            "LICENSE does not appear to be Apache License 2.0",
        ));
    }
}

fn check_cargo_manifests(root: &Path, report: &mut Report) {
    let mut workspace_has_license = false;
    let workspace_toml = root.join("Cargo.toml");
    if workspace_toml.exists() {
        report.checked += 1;
        match fs::read_to_string(&workspace_toml) {
            Ok(body) => {
                if !body.contains(&format!("license = \"{EXPECTED_LICENSE}\"")) {
                    report.issues.push(Issue::new(
                        workspace_toml.clone(),
                        format!(
                            "workspace Cargo.toml is missing `license = \"{EXPECTED_LICENSE}\"`"
                        ),
                    ));
                } else {
                    workspace_has_license = true;
                }
            }
            Err(err) => {
                report.issues.push(Issue::new(
                    workspace_toml,
                    format!("cannot read workspace Cargo.toml: {err}"),
                ));
            }
        }
    }

    // Walk crates/.
    let crates_dir = root.join("crates");
    if !crates_dir.is_dir() {
        return;
    }
    for entry in fs::read_dir(&crates_dir).into_iter().flatten().flatten() {
        let crate_root = entry.path();
        if !crate_root.is_dir() {
            continue;
        }
        let manifest = crate_root.join("Cargo.toml");
        if !manifest.exists() {
            continue;
        }
        report.checked += 1;
        let body = match fs::read_to_string(&manifest) {
            Ok(b) => b,
            Err(err) => {
                report
                    .issues
                    .push(Issue::new(manifest, format!("cannot read: {err}")));
                continue;
            }
        };
        let inherits = body.contains("license.workspace = true")
            || body.contains("license = { workspace = true }");
        let direct = body.contains(&format!("license = \"{EXPECTED_LICENSE}\""));
        if !(direct || (inherits && workspace_has_license)) {
            report.issues.push(Issue::new(
                manifest,
                format!(
                    "Cargo.toml does not declare `license = \"{EXPECTED_LICENSE}\"` or inherit it from the workspace"
                ),
            ));
        }
    }
}

fn check_pkl_projects(root: &Path, report: &mut Report) {
    // The canonical license string lives in basePklProject.pkl.
    let base = root.join("packages/basePklProject.pkl");
    if base.exists() {
        report.checked += 1;
        match fs::read_to_string(&base) {
            Ok(body) => {
                if !body.contains(&format!("license = \"{EXPECTED_LICENSE}\"")) {
                    report.issues.push(Issue::new(
                        base.clone(),
                        format!("basePklProject does not pin `license = \"{EXPECTED_LICENSE}\"`"),
                    ));
                }
            }
            Err(err) => {
                report.issues.push(Issue::new(
                    base,
                    format!("cannot read basePklProject: {err}"),
                ));
            }
        }
    }
    // Every packages/target.*/PklProject must amend basePklProject.
    let pkgs = root.join("packages");
    if !pkgs.is_dir() {
        return;
    }
    for entry in fs::read_dir(&pkgs).into_iter().flatten().flatten() {
        let family_dir = entry.path();
        let name = match family_dir.file_name().and_then(|n| n.to_str()) {
            Some(n) if n.starts_with("target.") => n.to_string(),
            _ => continue,
        };
        let pkl_project = family_dir.join("PklProject");
        if !pkl_project.exists() {
            continue;
        }
        report.checked += 1;
        let body = match fs::read_to_string(&pkl_project) {
            Ok(b) => b,
            Err(err) => {
                report
                    .issues
                    .push(Issue::new(pkl_project, format!("cannot read: {err}")));
                continue;
            }
        };
        if !body.contains("../basePklProject.pkl") {
            report.issues.push(Issue::new(
                pkl_project,
                format!(
                    "{name}/PklProject must `amends \"../basePklProject.pkl\"` to inherit Apache-2.0"
                ),
            ));
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn write(path: &Path, body: &str) {
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent).unwrap();
        }
        fs::write(path, body).unwrap();
    }

    fn seed_clean_repo(root: &Path) {
        write(&root.join("LICENSE"), "Apache License\nVersion 2.0\n");
        write(
            &root.join("Cargo.toml"),
            "[workspace]\n[workspace.package]\nlicense = \"Apache-2.0\"\n",
        );
        write(
            &root.join("crates/foo/Cargo.toml"),
            "[package]\nname = \"foo\"\nlicense.workspace = true\n",
        );
        write(
            &root.join("packages/basePklProject.pkl"),
            "amends \"pkl:Project\"\npackage { license = \"Apache-2.0\" }\n",
        );
        write(
            &root.join("packages/target.foo/PklProject"),
            "amends \"../basePklProject.pkl\"\n",
        );
    }

    #[test]
    fn clean_repo_passes() {
        let tmp = tempfile::tempdir().unwrap();
        seed_clean_repo(tmp.path());
        let report = check(tmp.path());
        assert!(report.ok(), "unexpected issues: {:?}", report.issues);
        assert!(report.checked >= 4);
    }

    #[test]
    fn missing_license_fails() {
        let tmp = tempfile::tempdir().unwrap();
        seed_clean_repo(tmp.path());
        fs::remove_file(tmp.path().join("LICENSE")).unwrap();
        let report = check(tmp.path());
        assert!(report
            .issues
            .iter()
            .any(|i| i.message.contains("LICENSE file is missing")));
    }

    #[test]
    fn crate_missing_license_inherit_fails() {
        let tmp = tempfile::tempdir().unwrap();
        seed_clean_repo(tmp.path());
        write(
            &tmp.path().join("crates/foo/Cargo.toml"),
            "[package]\nname = \"foo\"\n",
        );
        let report = check(tmp.path());
        assert!(report
            .issues
            .iter()
            .any(|i| i.message.contains("does not declare `license")));
    }

    #[test]
    fn pkl_project_not_amending_base_fails() {
        let tmp = tempfile::tempdir().unwrap();
        seed_clean_repo(tmp.path());
        write(
            &tmp.path().join("packages/target.foo/PklProject"),
            "amends \"pkl:Project\"\n",
        );
        let report = check(tmp.path());
        assert!(report
            .issues
            .iter()
            .any(|i| i.message.contains("must `amends")));
    }
}
