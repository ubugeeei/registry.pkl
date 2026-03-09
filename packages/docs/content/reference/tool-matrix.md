---
title: Tool Matrix
description: Priority, package placement, and output format for each planned target.
---

# Tool Matrix

| Target | Package | Format | Priority |
|------|---------|--------|----------|
| `package.json` | `target.js` | JSON | first |
| `tsconfig.json` | `target.js` | JSON | first |
| `biome.json` | `target.js` | JSON | first |
| `.prettierrc` | `target.js` | JSON | first |
| `.oxlintrc.json` | `target.js` | JSON | first |
| `.oxfmtrc.json` | `target.js` | JSON | first |
| `pnpm-workspace.yaml` | `target.js` | YAML | first |
| `mise.toml` | `target.env` | TOML | first |
| `deno.json` | `target.env` | JSON | first |
| `Cargo.toml` | `target.rust` | TOML | first |
| `clippy.toml` | `target.rust` | TOML | first |
| `settings.json` | `target.editor` | JSON | first |
| `extensions.json` | `target.editor` | JSON | second |
| GitHub Actions | `target.ci` | YAML | second |
| GitLab CI | `target.ci` | YAML | second |
| `.github/dependabot.yml` | `target.ci` | YAML | second |
| agent MCP JSON | `target.agent` | JSON | second |
| `renovate.json` | `target.js` | JSON | third |
| `devcontainer.json` | `target.editor` | JSON | third |
| `rustfmt.toml` | `target.rust` | TOML | third |
| `turbo.json` | `target.js` | JSON | third |
| `wrangler.toml` | `target.env` | TOML | third |
| `docker-compose.yml` | `target.env` | YAML | third |
| `lefthook.yml` | `target.env` | YAML | third |

## What This Table Optimizes For

- broad usefulness first
- standard renderers first where possible
- shared TOML infrastructure before TOML-heavy expansion
- reuse pantry packages where strong upstream packages already exist
- agent config after the core package pattern is proven
