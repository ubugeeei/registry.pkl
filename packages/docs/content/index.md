---
layout: entry
title: registry.pkl
description: Searchable, versioned, GitHub PR-based registry for Pkl config packages, starting with first-party target.* modules.
hero:
  name: registry.pkl
  text: A package registry for typed config
  tagline: "Browse first-party target.* packages the way you would browse npm: clear package boundaries, install entrypoints, shipped modules, and native output files."
  image:
    src: registry-mark.svg
    alt: registry.pkl mark
  actions:
    - theme: brand
      text: Browse Packages
      link: /packages/index.html
    - theme: alt
      text: Registry Flow
      link: /guide/registry-flow/index.html
    - theme: alt
      text: Tool Matrix
      link: /reference/tool-matrix/index.html
features:
  - icon: "mdi:file-tree"
    title: Package catalog first
    details: Browse package summaries, shipped modules, and install URIs before diving into the deeper design notes.
    link: /packages/index.html
  - icon: "mdi:source-pull"
    title: GitHub PR registry
    details: The registry does not need a publish API. Package versions are reviewed and indexed by Pull Request.
    link: /guide/registry-flow/index.html
  - icon: "mdi:tag-search"
    title: Search and versioning
    details: Search should work like a package registry, not a handbook table of contents.
    link: /guide/versioning/index.html
  - icon: "mdi:robot-outline"
    title: AI agent config too
    details: Recent agent and MCP JSON configs are a strong target for typed, composable authoring.
    link: /targets/agents/index.html
  - icon: "mdi:language-rust"
    title: Rust registry tooling
    details: Registry validators, indexers, and emitters should be Rust programs that integrate with Pkl through pklrust.
    link: /architecture/index.html
---

## Featured Packages

| Package | Focus | Start with | Emits |
| --- | --- | --- | --- |
| [target.js](./packages/target-js.md) | JavaScript and TypeScript workspace config | `#/tsconfig/TsConfig.pkl` | JSON and YAML |
| [target.rust](./packages/target-rust.md) | Cargo metadata and Clippy policy | `#/cargo/Cargo.pkl` | TOML |
| [target.agent](./packages/target-agent.md) | MCP server config for recent agent clients | `#/vscode/Mcp.pkl` | JSON |
| [target.env](./packages/target-env.md) | Toolchain, tasks, and runtime config | `#/mise/Mise.pkl` | TOML and JSON |

## Registry Model

| Layer | Purpose | Example |
| --- | --- | --- |
| Authoring | Write typed, reusable modules in Pkl | `target.js`, `target.rust` |
| Generation | Render normal config files | `tsconfig.json`, `Cargo.toml`, `mcp.json` |
| Artifacts | Host docs, metadata, and release assets | static site, GitHub Releases |
| Discovery | Search packages and review versions | `registry.pkl` |

## Use This Site Like A Registry

1. Start from a package boundary, not a long guide.
2. Open the package entry to see what files it owns and which module to import first.
3. Use target notes when you want ecosystem rationale.
4. Use guides when you need the registry flow, publishing model, or versioning rules.

## Read Next

- [Browse the package catalog](/packages/index.html)
- [Read the quickstart](./start/quickstart.md)
- [Understand the package ecosystem](./guide/package-ecosystem.md)
- [See the current target matrix](/targets/index.html)
