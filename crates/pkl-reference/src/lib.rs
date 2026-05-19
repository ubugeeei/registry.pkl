//! Extract a markdown reference page from a typed Pkl module source.
//!
//! This isn't a full Pkl parser. It walks the file line-by-line and
//! recognizes the subset of syntax our typed modules actually use:
//!
//! - leading `///` doc comments
//! - `module <path>` declarations
//! - top-level field declarations (`name: Type = default` or
//!   `name: Type` or `name = default`)
//! - `typealias` declarations
//! - `class <Name> { ... }` blocks
//!
//! The output is a markdown page with one section per field block,
//! suitable for embedding under
//! `packages/docs/content/reference/api/<family>/<module>.md`.

#![allow(
    clippy::doc_markdown,
    clippy::format_push_string,
    clippy::manual_map,
    clippy::option_if_let_else,
    clippy::manual_pattern_char_comparison
)]

use std::fs;
use std::path::Path;

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct Field {
    pub name: String,
    pub type_str: Option<String>,
    pub default: Option<String>,
    pub doc: Vec<String>,
    /// Source line (1-indexed) where the field is declared. Used to
    /// generate `sourceCodeUrl` deep links.
    pub line: usize,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct TypeAlias {
    pub name: String,
    pub body: String,
    pub doc: Vec<String>,
    pub line: usize,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct Class {
    pub name: String,
    pub doc: Vec<String>,
    pub fields: Vec<Field>,
    pub line: usize,
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct Module {
    pub module_path: Option<String>,
    pub leading_doc: Vec<String>,
    pub fields: Vec<Field>,
    pub typealiases: Vec<TypeAlias>,
    pub classes: Vec<Class>,
}

/// Parse a Pkl source string into a [`Module`] AST suitable for rendering.
pub fn parse(source: &str) -> Module {
    let mut module = Module::default();
    let mut pending_doc: Vec<String> = Vec::new();
    let mut leading_doc_taken = false;
    let mut class_stack: Vec<Class> = Vec::new();

    for (idx, raw_line) in source.lines().enumerate() {
        let line_num = idx + 1;
        let line = raw_line.trim_start();

        if let Some(rest) = line.strip_prefix("///") {
            let text = rest.strip_prefix(' ').unwrap_or(rest).to_string();
            pending_doc.push(text);
            continue;
        }
        if line.is_empty() {
            if !leading_doc_taken {
                if !pending_doc.is_empty() && module.leading_doc.is_empty() {
                    module.leading_doc = std::mem::take(&mut pending_doc);
                }
                continue;
            }
            // Blank line clears pending doc for non-leading sections.
            if !pending_doc.is_empty() {
                pending_doc.clear();
            }
            continue;
        }

        if let Some(rest) = line.strip_prefix("module ") {
            let path = rest.trim_end_matches(';').trim().to_string();
            module.module_path = Some(path);
            leading_doc_taken = true;
            if !pending_doc.is_empty() && module.leading_doc.is_empty() {
                module.leading_doc = std::mem::take(&mut pending_doc);
            }
            pending_doc.clear();
            continue;
        }

        if line.starts_with("amends ") {
            if !leading_doc_taken {
                if !pending_doc.is_empty() && module.leading_doc.is_empty() {
                    module.leading_doc = std::mem::take(&mut pending_doc);
                }
                leading_doc_taken = true;
            }
            pending_doc.clear();
            continue;
        }

        if line.starts_with("import ") {
            pending_doc.clear();
            continue;
        }

        if let Some(rest) = line.strip_prefix("typealias ") {
            if let Some((name, body)) = rest.split_once('=') {
                module.typealiases.push(TypeAlias {
                    name: name.trim().to_string(),
                    body: body.trim().trim_end_matches(';').to_string(),
                    doc: std::mem::take(&mut pending_doc),
                    line: line_num,
                });
            }
            continue;
        }

        if let Some(rest) = line.strip_prefix("class ") {
            let name = rest
                .split(|c: char| c == ' ' || c == '{' || c == ':')
                .next()
                .unwrap_or("")
                .trim()
                .to_string();
            if !name.is_empty() {
                class_stack.push(Class {
                    name,
                    doc: std::mem::take(&mut pending_doc),
                    fields: Vec::new(),
                    line: line_num,
                });
                continue;
            }
        }

        // Class closing brace.
        if line.starts_with('}') && !class_stack.is_empty() {
            if let Some(c) = class_stack.pop() {
                module.classes.push(c);
            }
            continue;
        }

        // Field declaration: name[: Type][ = default]
        // Skip things that aren't field-like.
        if let Some(field) = parse_field_line(line, &pending_doc, line_num) {
            if let Some(current) = class_stack.last_mut() {
                current.fields.push(field);
            } else {
                module.fields.push(field);
            }
            pending_doc.clear();
            continue;
        }

        // Anything else clears pending doc so it doesn't attach to the
        // wrong declaration.
        pending_doc.clear();
    }

    // Close any unterminated classes (paranoid).
    while let Some(c) = class_stack.pop() {
        module.classes.push(c);
    }

    module
}

fn parse_field_line(line: &str, pending_doc: &[String], line_num: usize) -> Option<Field> {
    // Field name: identifier, possibly backtick-quoted.
    let (name_part, after_name) = scan_identifier(line)?;
    if name_part.is_empty() {
        return None;
    }
    let rest = after_name.trim_start();

    // Three shapes:
    //   name: Type = default
    //   name: Type
    //   name = default
    let (type_str, after_type): (Option<String>, &str) =
        if let Some(after_colon) = rest.strip_prefix(':') {
            let after_colon = after_colon.trim_start();
            let (ty, remainder) = split_type_and_default(after_colon);
            (Some(ty), remainder)
        } else {
            (None, rest)
        };
    let default = if let Some(after_eq) = after_type.strip_prefix('=') {
        Some(after_eq.trim().to_string())
    } else {
        None
    };

    if type_str.is_none() && default.is_none() {
        return None;
    }

    Some(Field {
        name: name_part.to_string(),
        type_str,
        default,
        doc: pending_doc.to_vec(),
        line: line_num,
    })
}

fn scan_identifier(line: &str) -> Option<(&str, &str)> {
    let bytes = line.as_bytes();
    if bytes.first() == Some(&b'`') {
        // backtick-quoted identifier
        let end = bytes.iter().skip(1).position(|c| *c == b'`')? + 1;
        return Some((&line[..=end], &line[end + 1..]));
    }
    if !bytes
        .first()
        .is_some_and(|c| c.is_ascii_alphabetic() || *c == b'_')
    {
        return None;
    }
    let end = bytes
        .iter()
        .position(|c| !(c.is_ascii_alphanumeric() || *c == b'_'))
        .unwrap_or(bytes.len());
    Some((&line[..end], &line[end..]))
}

fn split_type_and_default(s: &str) -> (String, &str) {
    // Find the `=` that delimits the default value at depth 0.
    let mut depth = 0i32;
    let mut in_str = false;
    let mut idx = None;
    for (i, c) in s.char_indices() {
        if c == '"' && !s[..i].ends_with('\\') {
            in_str = !in_str;
        }
        if in_str {
            continue;
        }
        match c {
            '(' | '<' | '{' | '[' => depth += 1,
            ')' | '>' | '}' | ']' => depth -= 1,
            '=' if depth == 0 => {
                idx = Some(i);
                break;
            }
            _ => {}
        }
    }
    match idx {
        Some(i) => (s[..i].trim().to_string(), &s[i..]),
        None => (s.trim().to_string(), ""),
    }
}

/// Render a parsed module as docs-site-friendly markdown.
///
/// `module_label` is the human-facing title (e.g. `target.js.eslint.Eslint`).
/// `source_url` is the deep-link template — `%path` and `%line` placeholders
/// are replaced per field with the actual source path / line numbers.
pub fn render_markdown(module_label: &str, module: &Module, source_url: Option<&str>) -> String {
    let mut out = String::new();
    out.push_str("---\n");
    out.push_str(&format!("title: {module_label}\n"));
    let desc = module
        .leading_doc
        .first()
        .cloned()
        .filter(|d| !d.trim().is_empty())
        .unwrap_or_else(|| format!("Module reference for `{module_label}`."));
    out.push_str(&format!("description: {desc}\n"));
    out.push_str("---\n\n");
    out.push_str(&format!("# `{module_label}`\n\n"));

    if !module.leading_doc.is_empty() {
        for line in &module.leading_doc {
            out.push_str(line);
            out.push('\n');
        }
        out.push('\n');
    }

    if !module.typealiases.is_empty() {
        out.push_str("## Type aliases\n\n");
        for ta in &module.typealiases {
            out.push_str(&format!("### `{}`\n\n", ta.name));
            for line in &ta.doc {
                out.push_str(line);
                out.push('\n');
            }
            if !ta.doc.is_empty() {
                out.push('\n');
            }
            out.push_str(&format!(
                "```pkl\ntypealias {} = {}\n```\n\n",
                ta.name, ta.body
            ));
        }
    }

    if !module.fields.is_empty() {
        out.push_str("## Fields\n\n");
        for f in &module.fields {
            render_field(&mut out, f, source_url);
        }
    }

    if !module.classes.is_empty() {
        out.push_str("## Classes\n\n");
        for c in &module.classes {
            out.push_str(&format!("### `{}`\n\n", c.name));
            for line in &c.doc {
                out.push_str(line);
                out.push('\n');
            }
            if !c.doc.is_empty() {
                out.push('\n');
            }
            for f in &c.fields {
                render_field(&mut out, f, source_url);
            }
        }
    }

    out
}

fn render_field(out: &mut String, f: &Field, source_url: Option<&str>) {
    out.push_str(&format!("#### `{}`\n\n", f.name));
    for line in &f.doc {
        out.push_str(line);
        out.push('\n');
    }
    if !f.doc.is_empty() {
        out.push('\n');
    }
    out.push_str("```pkl\n");
    out.push_str(&f.name);
    if let Some(t) = &f.type_str {
        out.push_str(": ");
        out.push_str(t);
    }
    if let Some(d) = &f.default {
        out.push_str(" = ");
        out.push_str(d);
    }
    out.push_str("\n```\n\n");
    if let Some(url) = source_url {
        let link = url
            .replace("%line", &f.line.to_string())
            .replace("%endLine", &f.line.to_string());
        out.push_str(&format!("[source]({link})\n\n"));
    }
}

/// Render the whole module reference page from disk.
///
/// `source_path` is the file we read; `source_url_template` is the
/// `sourceCodeUrl` deep-link template from the family's `PklProject`.
pub fn render_file(
    source_path: &Path,
    module_label: &str,
    source_url_template: Option<&str>,
) -> anyhow::Result<String> {
    let body = fs::read_to_string(source_path)?;
    let module = parse(&body);
    Ok(render_markdown(module_label, &module, source_url_template))
}

#[cfg(test)]
mod tests {
    use super::*;

    const SAMPLE: &str = r#"/// Module-level doc comment.
/// Spans two lines.
module target.example.Foo

import "Bar.pkl"

/// A typealias.
typealias Severity = "warn"|"error"

/// Severity scalar.
severity: Severity = "warn"

/// A class.
class Rule {
  /// Required id.
  id: String
  /// Optional description.
  description: String? = null
}

/// Module field after class.
enabled: Boolean = true
"#;

    #[test]
    fn parses_module_path() {
        let m = parse(SAMPLE);
        assert_eq!(m.module_path.as_deref(), Some("target.example.Foo"));
    }

    #[test]
    fn captures_leading_doc() {
        let m = parse(SAMPLE);
        assert_eq!(m.leading_doc.len(), 2);
        assert!(m.leading_doc[0].contains("Module-level"));
    }

    #[test]
    fn captures_typealias() {
        let m = parse(SAMPLE);
        assert_eq!(m.typealiases.len(), 1);
        assert_eq!(m.typealiases[0].name, "Severity");
    }

    #[test]
    fn captures_top_level_fields() {
        let m = parse(SAMPLE);
        // severity + enabled (NOT class fields)
        let names: Vec<&str> = m.fields.iter().map(|f| f.name.as_str()).collect();
        assert_eq!(names, vec!["severity", "enabled"]);
    }

    #[test]
    fn captures_class_fields() {
        let m = parse(SAMPLE);
        assert_eq!(m.classes.len(), 1);
        let c = &m.classes[0];
        assert_eq!(c.name, "Rule");
        let field_names: Vec<&str> = c.fields.iter().map(|f| f.name.as_str()).collect();
        assert_eq!(field_names, vec!["id", "description"]);
    }

    #[test]
    fn renders_markdown_with_module_label() {
        let m = parse(SAMPLE);
        let md = render_markdown("target.example.Foo", &m, None);
        assert!(md.contains("# `target.example.Foo`"));
        assert!(md.contains("## Fields"));
        assert!(md.contains("## Classes"));
        assert!(md.contains("### `Rule`"));
    }

    #[test]
    fn renders_source_link_per_field() {
        let m = parse(SAMPLE);
        let md = render_markdown(
            "target.example.Foo",
            &m,
            Some("https://example.com/source.pkl#L%line-L%endLine"),
        );
        assert!(md.contains("#L"));
        assert!(md.contains("[source]"));
    }
}
