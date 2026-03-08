---
title: JavaScript and TypeScript
description: The first package that should ship is compat.js.
---

# JavaScript and TypeScript

`compat.js` should be the flagship package.

## Why This Package Goes First

- daily use across many repositories
- strong need for presets
- mostly JSON or YAML output
- great demo surface for `amends`

## Initial Modules

- `package.json`
- `tsconfig.json`
- `biome.json`
- `.prettierrc`
- `.oxlintrc.json`
- `.oxfmtrc.json`
- `pnpm-workspace.yaml`

## Preset Candidates

- library
- application
- workspace package
- browser app
- node package
- bun package

