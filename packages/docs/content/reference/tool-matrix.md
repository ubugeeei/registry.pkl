---
title: Tool Matrix
description: Priority, package placement, and output format for each planned target.
---

# Tool Matrix

| Target | Package | Format | Priority |
|------|---------|--------|----------|
| `package.json` | `compat.js` | JSON | first |
| `tsconfig.json` | `compat.js` | JSON | first |
| `biome.json` | `compat.js` | JSON | first |
| `.prettierrc` | `compat.js` | JSON | first |
| `.oxlintrc.json` | `compat.js` | JSON | first |
| `.oxfmtrc.json` | `compat.js` | JSON | first |
| `pnpm-workspace.yaml` | `compat.js` | YAML | first |
| `mise.toml` | `compat.env` | TOML | first |
| `deno.json` | `compat.env` | JSON | first |
| `Cargo.toml` | `compat.rust` | TOML | first |
| `clippy.toml` | `compat.rust` | TOML | first |
| `settings.json` | `compat.editor` | JSON | first |
| `extensions.json` | `compat.editor` | JSON | second |
| GitHub Actions | `compat.ci` | YAML | second |
| GitLab CI | `compat.ci` | YAML | second |
| `.github/dependabot.yml` | `compat.ci` | YAML | second |
| agent MCP JSON | `compat.agent` | JSON | second |
| `renovate.json` | `compat.js` | JSON | third |
| `devcontainer.json` | `compat.editor` | JSON | third |
| `rustfmt.toml` | `compat.rust` | TOML | third |
| `turbo.json` | `compat.js` | JSON | third |
| `wrangler.toml` | `compat.env` | TOML | third |
| `docker-compose.yml` | `compat.env` | YAML | third |
| `lefthook.yml` | `compat.env` | YAML | third |

## What This Table Optimizes For

- broad usefulness first
- standard renderers first where possible
- shared TOML infrastructure before TOML-heavy expansion
- reuse pantry packages where strong upstream packages already exist
- agent config after the core package pattern is proven
