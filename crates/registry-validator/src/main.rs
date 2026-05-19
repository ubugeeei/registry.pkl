use std::path::PathBuf;
use std::process::ExitCode;

use anyhow::{Context, Result};
use clap::Parser;
use registry_validator::{validate_file, validate_tree, Issue, Report};

#[derive(Parser, Debug)]
#[command(
    name = "registry-validator",
    version,
    about = "Validate registry.pkl JSON records against the canonical schema."
)]
struct Cli {
    /// Path to a record file or a directory tree. Directories are scanned
    /// recursively for `*.json` files.
    #[arg(value_name = "PATH", default_value = "registry")]
    path: PathBuf,

    /// Print one issue per line instead of grouping by file. Useful for
    /// piping into `grep`.
    #[arg(long)]
    flat: bool,
}

fn main() -> Result<ExitCode> {
    let cli = Cli::parse();

    if !cli.path.exists() {
        return Err(anyhow::anyhow!(
            "path does not exist: {}",
            cli.path.display()
        ));
    }

    let report = if cli.path.is_dir() {
        validate_tree(&cli.path)
    } else {
        let issues = validate_file(&cli.path);
        Report {
            issues,
            validated: 1,
        }
    };

    print_report(&report, cli.flat);
    let _ = std::io::Write::flush(&mut std::io::stdout()).context("flush stdout");

    if report.ok() {
        eprintln!("OK: {} record(s) validated", report.validated);
        Ok(ExitCode::SUCCESS)
    } else {
        eprintln!(
            "FAIL: {} issue(s) across {} record(s)",
            report.issues.len(),
            report.validated
        );
        Ok(ExitCode::from(1))
    }
}

fn print_report(report: &Report, flat: bool) {
    if report.ok() {
        return;
    }
    if flat {
        for issue in &report.issues {
            println!("{}\t{}", issue.path.display(), issue.message);
        }
        return;
    }
    let mut by_path: std::collections::BTreeMap<&std::path::Path, Vec<&Issue>> =
        std::collections::BTreeMap::new();
    for issue in &report.issues {
        by_path.entry(&issue.path).or_default().push(issue);
    }
    for (path, issues) in by_path {
        println!("{}", path.display());
        for issue in issues {
            println!("  - {}", issue.message);
        }
    }
}
