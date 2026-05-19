#![allow(clippy::doc_markdown)]

use std::path::PathBuf;
use std::process::ExitCode;

use anyhow::Result;
use clap::Parser;
use release_cut::{cut, CutOptions};

#[derive(Parser, Debug)]
#[command(
    name = "release-cut",
    version,
    about = "Bump a target.<family> version + its registry record source in one shot."
)]
struct Cli {
    /// Family name, e.g. `target.js`.
    family: String,

    /// New SemVer version.
    new_version: String,

    /// Path to the repo root. Defaults to the current directory.
    #[arg(long, value_name = "DIR", default_value = ".")]
    root: PathBuf,

    /// Print what would change without writing any files.
    #[arg(long)]
    dry_run: bool,
}

fn main() -> Result<ExitCode> {
    let cli = Cli::parse();
    let opts = CutOptions {
        root: &cli.root,
        family: &cli.family,
        new_version: &cli.new_version,
        dry_run: cli.dry_run,
    };
    let report = cut(&opts)?;

    if let Some(prev) = &report.previous_version {
        eprintln!(
            "bumped {} from {} to {}{}",
            cli.family,
            prev,
            cli.new_version,
            if cli.dry_run { " (dry run)" } else { "" }
        );
    }
    for path in &report.touched {
        println!("{}", path.display());
    }
    if !cli.dry_run {
        eprintln!();
        eprintln!("Next steps:");
        eprintln!("  bash scripts/render-registry.sh");
        eprintln!(
            "  cargo run -q --release -p search-index -- --registry registry \\\n    --output dist/docs/registry-search.json \\\n    --emit-markdown packages/docs/content/reference/by-target.md"
        );
        eprintln!(
            "  bash scripts/release.sh {} {}",
            cli.family, cli.new_version
        );
    }

    Ok(ExitCode::SUCCESS)
}
