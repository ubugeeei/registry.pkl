---
title: Package Ecosystem
description: The first-party package family and why each package boundary exists.
---

# Package Ecosystem

## First-Party Packages

The first-party package family is planned as `compat.*`.

| Package | Purpose |
|------|---------|
| `compat.core` | shared primitives, emitters, enums, helpers |
| `compat.js` | JS and TS toolchain config |
| `compat.env` | runtime and toolchain environment config |
| `compat.rust` | Rust package and lint config |
| `compat.editor` | editor and workspace config |
| `compat.ci` | CI systems and reusable workflow pieces |
| `compat.agent` | AI agent and MCP-oriented config |

## Why Split Instead of One Package

One package sounds simpler and becomes unmaintainable quickly.

Different ecosystems change at different speeds.

- `tsconfig.json` evolves differently from GitLab CI.
- agent config churns faster than VS Code settings.
- TOML emitters are shared, but schema surfaces are not.

Independent packages make semver more honest.

## First Implementation Order

Recommended order:

1. `compat.core`
2. `compat.js`
3. `compat.env`
4. `compat.rust`
5. `compat.editor`
6. `compat.agent`
7. `compat.ci`

That order maximizes real-world usefulness while delaying the messiest schemas.

