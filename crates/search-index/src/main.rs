use std::fs;
use std::io::Write;
use std::path::PathBuf;
use std::process::ExitCode;
use std::time::{SystemTime, UNIX_EPOCH};

use anyhow::{Context, Result};
use clap::Parser;
use search_index::{build, to_json, BuildOptions};

#[derive(Parser, Debug)]
#[command(
    name = "search-index",
    version,
    about = "Build a deterministic static search index from registry records."
)]
struct Cli {
    /// Path to the registry root directory.
    #[arg(long, value_name = "DIR", default_value = "registry")]
    registry: PathBuf,

    /// Output JSON file.
    #[arg(
        long,
        value_name = "FILE",
        default_value = "dist/docs/registry-search.json"
    )]
    output: PathBuf,

    /// Override the `generated` timestamp baked into the index. Useful for
    /// reproducible builds — defaults to the current UTC second.
    #[arg(long)]
    generated_at: Option<String>,
}

fn main() -> Result<ExitCode> {
    let cli = Cli::parse();
    if !cli.registry.exists() {
        return Err(anyhow::anyhow!(
            "registry root does not exist: {}",
            cli.registry.display()
        ));
    }
    let generated = cli.generated_at.unwrap_or_else(rfc3339_now);
    let opts = BuildOptions {
        root: &cli.registry,
        generated_at: &generated,
    };
    let index = build(&opts).context("build search index")?;
    let body = to_json(&index);
    if let Some(parent) = cli.output.parent() {
        fs::create_dir_all(parent).with_context(|| format!("create {}", parent.display()))?;
    }
    let mut file = fs::File::create(&cli.output)
        .with_context(|| format!("create {}", cli.output.display()))?;
    file.write_all(body.as_bytes())
        .with_context(|| format!("write {}", cli.output.display()))?;
    eprintln!("wrote {} ({} hits)", cli.output.display(), index.hits.len());
    Ok(ExitCode::SUCCESS)
}

fn rfc3339_now() -> String {
    let secs = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    let (y, m, d, hh, mm, ss) = unix_to_ymd_hms(secs);
    format!("{y:04}-{m:02}-{d:02}T{hh:02}:{mm:02}-:{ss:02}Z").replace("-:", ":")
}

#[allow(
    clippy::cast_possible_wrap,
    clippy::cast_sign_loss,
    clippy::cast_possible_truncation
)]
fn unix_to_ymd_hms(secs: u64) -> (u32, u32, u32, u32, u32, u32) {
    let days = (secs / 86_400) as i64;
    let day_secs = (secs % 86_400) as u32;
    let hh = day_secs / 3600;
    let mm = (day_secs % 3600) / 60;
    let ss = day_secs % 60;
    // Civil-from-days algorithm by Howard Hinnant.
    let z = days + 719_468;
    let era = z.div_euclid(146_097);
    let doe = (z - era * 146_097) as u64;
    let yoe = (doe - doe / 1460 + doe / 36_524 - doe / 146_096) / 365;
    let y_int = yoe as i64 + era * 400;
    let doy = doe - (365 * yoe + yoe / 4 - yoe / 100);
    let mp = (5 * doy + 2) / 153;
    let d = doy - (153 * mp + 2) / 5 + 1;
    let m = if mp < 10 { mp + 3 } else { mp - 9 };
    let y = if m <= 2 { y_int + 1 } else { y_int };
    (
        u32::try_from(y).unwrap_or(1970),
        u32::try_from(m).unwrap_or(1),
        u32::try_from(d).unwrap_or(1),
        hh,
        mm,
        ss,
    )
}
