---
layout: entry
title: target.js
description: Typed authoring for package.json, tsconfig, biome, Prettier, Oxlint, Oxfmt, and pnpm workspace config.
hero:
  name: target.js
  text: JavaScript and TypeScript workspace config
  tagline: package.json, tsconfig.json, biome.json, .prettierrc, .oxlintrc.json, .oxfmtrc.json, and pnpm-workspace.yaml.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Target Notes
      link: ../../targets/javascript/index.html
    - theme: alt
      text: Quickstart
      link: ../../start/quickstart/index.html
features:
  - icon: "mdi:package-variant-closed"
    title: package-json/PackageJson.pkl
    details: Package metadata, scripts, dependencies, exports, and publish config.
  - icon: "mdi:file-code-outline"
    title: tsconfig/TsConfig.pkl
    details: Compiler options, references, include and exclude sets, and watch options.
  - icon: "mdi:format-list-bulleted"
    title: biome/Biome.pkl
    details: Formatter, linter, assist, file selection, and per-language settings.
  - icon: "mdi:format-text"
    title: prettier/Prettier.pkl
    details: Compatibility wrapper for teams still standardizing on Prettier.
  - icon: "mdi:shield-check-outline"
    title: oxlint/Oxlint.pkl
    details: Plugins, rules, globals, ignore patterns, and settings.
  - icon: "mdi:brush-variant"
    title: oxfmt/Oxfmt.pkl
    details: Typed wrapper for the Oxfmt JSON configuration surface.
  - icon: "mdi:source-fork"
    title: pnpm-workspace/PnpmWorkspace.pkl
    details: Workspace package boundaries, catalogs, overrides, and package extensions.
  - icon: "mdi:shield-alert-outline"
    title: eslint/Eslint.pkl
    details: Legacy `.eslintrc.json` surface with parserOptions, env, rules, overrides, and ignorePatterns.
  - icon: "mdi:rocket-launch-outline"
    title: turbo/Turbo.pkl
    details: Turborepo `turbo.json` pipeline definitions, remote cache wiring, and env mode.
  - icon: "mdi:autorenew"
    title: renovate/Renovate.pkl
    details: "Renovate bot policy — extends, schedule, package rules, and vulnerability alerts."
  - icon: "mdi:test-tube"
    title: vitest/Vitest.pkl
    details: Vitest JSON config surface — coverage, reporters, pool options, retries, mock controls, and the rest of the test runner shape.
  - icon: "mdi:flash-outline"
    title: vite-env/ViteEnv.pkl
    details: Typed authoring for `.env*` dotenv files Vite consumes — banner comments, VITE_-prefixed client vars, server vars, per-mode overlays.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.js@0.1.0#/tsconfig/TsConfig.pkl"
```

## What This Package Emits

- `package.json`
- `tsconfig.json`
- `biome.json`
- `.prettierrc`
- `.oxlintrc.json`
- `.oxfmtrc.json`
- `pnpm-workspace.yaml`
- `.eslintrc.json`
- `turbo.json`
- `renovate.json`

## Why This Package Exists

`target.js` should go first because the files are high-frequency, mostly JSON or
YAML, and a good fit for presets plus typed escape hatches.

## Related Docs

- [Package catalog](../index.html)
- [JavaScript target notes](../../targets/javascript/index.html)
- [Quickstart](../../start/quickstart/index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
