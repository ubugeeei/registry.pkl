#![allow(clippy::doc_markdown, clippy::format_push_string)]

use std::fs;
use std::path::PathBuf;
use std::process::ExitCode;

use anyhow::{anyhow, Context, Result};
use clap::Parser;
use pkl_reference::render_file;

#[derive(Parser, Debug)]
#[command(
    name = "pkl-reference",
    version,
    about = "Render markdown reference pages from typed Pkl module sources."
)]
struct Cli {
    /// Root of the Pkl packages tree (e.g. `packages`).
    #[arg(long, value_name = "DIR", default_value = "packages")]
    packages_root: PathBuf,

    /// Output directory under the docs site (created if missing).
    #[arg(
        long,
        value_name = "DIR",
        default_value = "packages/docs/content/reference/api"
    )]
    output: PathBuf,

    /// Optional sourceCodeUrl template — `%path` / `%line` / `%endLine`
    /// placeholders are replaced per field.
    #[arg(long)]
    source_url_template: Option<String>,

    /// Only render this family (e.g. `target.js`). Defaults to all.
    #[arg(long)]
    family: Option<String>,

    /// Check that the on-disk output matches what we'd generate. Exits
    /// 1 if anything would change. Useful in CI to keep the api/ tree
    /// in sync with the Pkl module sources.
    #[arg(long)]
    check: bool,
}

fn main() -> Result<ExitCode> {
    let cli = Cli::parse();
    if !cli.packages_root.exists() {
        return Err(anyhow!(
            "packages root does not exist: {}",
            cli.packages_root.display()
        ));
    }
    if !cli.check {
        fs::create_dir_all(&cli.output)
            .with_context(|| format!("create {}", cli.output.display()))?;
    }

    let mut written = 0;
    let mut drift: Vec<PathBuf> = Vec::new();
    let mut family_pages: Vec<(String, Vec<(String, PathBuf)>)> = Vec::new();
    for family_entry in fs::read_dir(&cli.packages_root)? {
        let family_dir = family_entry?.path();
        if !family_dir.is_dir() {
            continue;
        }
        let family_name = match family_dir.file_name().and_then(|n| n.to_str()) {
            Some(n) if n.starts_with("target.") => n.to_string(),
            _ => continue,
        };
        if let Some(only) = &cli.family {
            if &family_name != only {
                continue;
            }
        }

        let mut modules_for_family: Vec<(String, PathBuf)> = Vec::new();
        for module_entry in fs::read_dir(&family_dir)? {
            let module_dir = module_entry?.path();
            if !module_dir.is_dir() {
                continue;
            }
            // Skip the per-family test directory.
            if module_dir.file_name().and_then(|n| n.to_str()) == Some("tests") {
                continue;
            }
            // Find any .pkl file directly in the module dir.
            let mut module_files: Vec<PathBuf> = fs::read_dir(&module_dir)?
                .filter_map(|e| e.ok().map(|e| e.path()))
                .filter(|p| p.extension().and_then(|s| s.to_str()) == Some("pkl"))
                .filter(|p| {
                    p.file_stem()
                        .and_then(|s| s.to_str())
                        .is_some_and(|stem| !stem.ends_with("Test"))
                })
                .collect();
            module_files.sort();

            let module_dir_name = module_dir
                .file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("")
                .to_string();
            for src in module_files {
                let module_basename = src
                    .file_stem()
                    .and_then(|s| s.to_str())
                    .unwrap_or("Module")
                    .to_string();
                let label = format!("{family_name}.{module_dir_name}.{module_basename}");
                let out_dir = cli.output.join(&family_name).join(&module_dir_name);
                if !cli.check {
                    fs::create_dir_all(&out_dir)?;
                }
                let out_path = out_dir.join(format!("{module_basename}.md"));
                let url = cli.source_url_template.as_deref().map(|template| {
                    template.replace(
                        "%path",
                        &src.strip_prefix(&cli.packages_root)
                            .unwrap_or(&src)
                            .display()
                            .to_string(),
                    )
                });
                let md = render_file(&src, &label, url.as_deref())
                    .with_context(|| format!("render {}", src.display()))?;
                if cli.check {
                    if fs::read_to_string(&out_path).ok().as_ref() != Some(&md) {
                        drift.push(out_path.clone());
                    }
                } else {
                    fs::write(&out_path, md)
                        .with_context(|| format!("write {}", out_path.display()))?;
                }
                modules_for_family.push((label, out_path));
                written += 1;
            }
        }

        if !modules_for_family.is_empty() {
            family_pages.push((family_name, modules_for_family));
        }
    }

    // Emit a family-level index per family.
    family_pages.sort_by(|a, b| a.0.cmp(&b.0));
    for entry in &mut family_pages {
        entry.1.sort();
        let idx_path = cli.output.join(&entry.0).join("index.md");
        let body = render_family_index(&entry.0, &entry.1);
        if cli.check {
            if fs::read_to_string(&idx_path).ok().as_ref() != Some(&body) {
                drift.push(idx_path.clone());
            }
        } else {
            fs::write(&idx_path, body).with_context(|| format!("write {}", idx_path.display()))?;
        }
        written += 1;
    }

    // Emit a top-level api/index.md.
    let top_idx = cli.output.join("index.md");
    let top_body = render_top_index(&family_pages);
    if cli.check {
        if fs::read_to_string(&top_idx).ok().as_ref() != Some(&top_body) {
            drift.push(top_idx);
        }
    } else {
        fs::write(&top_idx, top_body)?;
    }
    written += 1;

    if cli.check {
        if drift.is_empty() {
            eprintln!("OK: {written} page(s) are up to date");
            Ok(ExitCode::SUCCESS)
        } else {
            eprintln!("DRIFT: {} page(s) differ from sources:", drift.len());
            for p in &drift {
                eprintln!("  - {}", p.display());
            }
            eprintln!();
            eprintln!("Re-run `pkl-reference` without --check to regenerate.");
            Ok(ExitCode::from(1))
        }
    } else {
        eprintln!("wrote {written} page(s)");
        Ok(ExitCode::SUCCESS)
    }
}

fn render_family_index(family: &str, modules: &[(String, PathBuf)]) -> String {
    let mut out = String::new();
    out.push_str("---\n");
    out.push_str(&format!("title: {family} API\n"));
    out.push_str(&format!(
        "description: Auto-generated module reference for {family}.\n"
    ));
    out.push_str("---\n\n");
    out.push_str(&format!("# `{family}` API\n\n"));
    out.push_str("Auto-generated from the Pkl module sources. One section per shipped module.\n\n");
    out.push_str("## Modules\n\n");
    for (label, path) in modules {
        let parent = path
            .parent()
            .and_then(|p| p.file_name())
            .and_then(|s| s.to_str())
            .unwrap_or("");
        let slug = path
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("module");
        out.push_str(&format!("- [`{label}`](./{parent}/{slug}.html)\n"));
    }
    out
}

fn render_top_index(family_pages: &[(String, Vec<(String, PathBuf)>)]) -> String {
    let mut out = String::new();
    out.push_str("---\n");
    out.push_str("title: API Reference\n");
    out.push_str(
        "description: Auto-generated module-by-module reference for every first-party family.\n",
    );
    out.push_str("---\n\n");
    out.push_str("# API Reference\n\n");
    out.push_str(
        "One sub-page per first-party `target.*` family. The content under each \
         family is generated from the Pkl module sources by the `pkl-reference` CLI.\n\n",
    );
    out.push_str("## Families\n\n");
    for (family, _) in family_pages {
        out.push_str(&format!("- [`{family}`](./{family}/index.html)\n"));
    }
    out
}
