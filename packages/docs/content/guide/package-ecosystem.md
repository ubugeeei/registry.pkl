---
title: Package Ecosystem
description: The first-party package family and why each package boundary exists.
---

# Package Ecosystem

## First-Party Packages

The first-party package family is planned as `target.*`.

| Package | Purpose |
|------|---------|
| `target.core` | shared primitives, emitters, enums, helpers |
| `target.js` | JS and TS toolchain config |
| `target.env` | runtime and toolchain environment config |
| `target.rust` | Rust package and lint config |
| `target.editor` | editor and workspace config |
| `target.ci` | CI systems and reusable workflow pieces |
| `target.agent` | AI agent and MCP-oriented config |

## Why Split Instead of One Package

One package sounds simpler and becomes unmaintainable quickly.

Different ecosystems change at different speeds.

- `tsconfig.json` evolves differently from GitLab CI.
- agent config churns faster than VS Code settings.
- TOML emitters are shared, but schema surfaces are not.

Independent packages make semver more honest.

## First Implementation Order

Recommended order:

1. `target.core`
2. `target.js`
3. `target.env`
4. `target.rust`
5. `target.editor`
6. `target.agent`
7. `target.ci`

That order maximizes real-world usefulness while delaying the messiest schemas.

