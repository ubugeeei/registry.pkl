---
title: Tool Matrix
description: Priority, package placement, and output format for each target shipped or planned.
---

# Tool Matrix

| Target | Package | Format | Priority | Status |
|------|---------|--------|----------|---------|
| `package.json` | `target.js` | JSON | first | shipped |
| `tsconfig.json` | `target.js` | JSON | first | shipped |
| `biome.json` | `target.js` | JSON | first | shipped |
| `.prettierrc` | `target.js` | JSON | first | shipped |
| `.oxlintrc.json` | `target.js` | JSON | first | shipped |
| `.oxfmtrc.json` | `target.js` | JSON | first | shipped |
| `pnpm-workspace.yaml` | `target.js` | YAML | first | shipped |
| `.eslintrc.json` | `target.js` | JSON | first | shipped |
| `turbo.json` | `target.js` | JSON | first | shipped |
| `renovate.json` | `target.js` | JSON | first | shipped |
| `mise.toml` | `target.env` | TOML | first | shipped |
| `deno.json` | `target.env` | JSON | first | shipped |
| `Cargo.toml` | `target.rust` | TOML | first | shipped |
| `clippy.toml` | `target.rust` | TOML | first | shipped |
| `rustfmt.toml` | `target.rust` | TOML | first | shipped |
| `settings.json` | `target.editor` | JSON | first | shipped |
| `extensions.json` | `target.editor` | JSON | first | shipped |
| `.editorconfig` | `target.editor` | INI-like | first | shipped |
| `devcontainer.json` | `target.editor` | JSON | first | shipped |
| GitHub Actions | `target.ci` | YAML | second | shipped |
| GitLab CI | `target.ci` | YAML | second | shipped |
| `.github/dependabot.yml` | `target.ci` | YAML | second | shipped |
| agent MCP JSON | `target.agent` | JSON | second | shipped |
| `~/.codex/config.toml` | `target.agent` | JSON | second | shipped |
| `.eslintignore` | `target.js` | text | second | planned |
| `vite.config` | `target.js` | js | third | not modeled (JS surface) |
| `vitest.config` | `target.js` | js | third | not modeled (JS surface) |
| `wrangler.toml` | `target.env` | TOML | third | planned |
| `docker-compose.yml` | `target.container` | YAML | third | planned (new family) |
| `lefthook.yml` | `target.env` | YAML | third | planned |
| `rust-toolchain.toml` | `target.rust` | TOML | third | planned |
| `cargo-deny.toml` | `target.rust` | TOML | third | planned |
| `pyproject.toml` | `target.python` | TOML | third | planned (new family) |
| `ruff.toml` | `target.python` | TOML | third | planned (new family) |
| CircleCI | `target.ci` | YAML | third | planned |
| Drone CI | `target.ci` | YAML | third | planned |
| Aider | `target.agent` | YAML | third | planned |
| Continue | `target.agent` | JSON | third | planned |
| `.markdownlint.json` | `target.lint` | JSON | third | planned (new family) |
| `commitlint.config.json` | `target.lint` | JSON | third | planned (new family) |
| `vercel.json` | `target.deploy` | JSON | third | planned (new family) |
| `netlify.toml` | `target.deploy` | TOML | third | planned (new family) |
| `fly.toml` | `target.deploy` | TOML | third | planned (new family) |
| Zed | `target.editor` | JSON | third | planned |
| Helix | `target.editor` | TOML | third | planned |

## What This Table Optimizes For

- broad usefulness first
- standard renderers first where possible
- shared TOML infrastructure before TOML-heavy expansion
- reuse pantry packages where strong upstream packages already exist
- agent config after the core package pattern is proven

## Why Some Targets Are Not Modeled

Tools whose configuration surface is itself JavaScript or TypeScript
(`vite.config.ts`, `vitest.config.ts`, `playwright.config.ts`, modern
`eslint.config.js` flat config) are intentionally outside the registry's
scope. Pkl renders structured data; those surfaces are programs. The
project models their JSON-based predecessors where users have a choice
(`.eslintrc.json`) and leaves the JS module forms to be authored
directly.
