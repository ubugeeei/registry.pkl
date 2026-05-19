#![allow(clippy::doc_markdown, clippy::unnecessary_wraps)]

use std::path::PathBuf;
use std::process::ExitCode;

use anyhow::Result;
use clap::Parser;
use license_check::check;

#[derive(Parser, Debug)]
#[command(
    name = "license-check",
    version,
    about = "Verify Apache-2.0 license declarations across the workspace."
)]
struct Cli {
    /// Path to the repo root. Defaults to the current directory.
    #[arg(value_name = "DIR", default_value = ".")]
    root: PathBuf,
}

fn main() -> Result<ExitCode> {
    let cli = Cli::parse();
    let report = check(&cli.root);
    if report.ok() {
        eprintln!("OK: {} location(s) checked", report.checked);
        Ok(ExitCode::SUCCESS)
    } else {
        for issue in &report.issues {
            println!("{}\t{}", issue.path.display(), issue.message);
        }
        eprintln!(
            "FAIL: {} issue(s) across {} location(s)",
            report.issues.len(),
            report.checked
        );
        Ok(ExitCode::from(1))
    }
}
