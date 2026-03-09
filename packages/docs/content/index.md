---
layout: entry
title: registry.pkl
description: Third-party design notes for a searchable, versioned, GitHub PR-based registry for Pkl config packages.
hero:
  name: registry.pkl
  text: Third-party design study for a Pkl package registry
  tagline: "This site is the design and package catalog for registry.pkl. Start with the docs map below, then move into packages, targets, guides, or reference pages depending on the question you are trying to answer."
  image:
    src: registry-mark.svg
    alt: registry.pkl mark
  actions:
    - theme: brand
      text: Start Here
      link: ./start/index.html
    - theme: alt
      text: Browse Packages
      link: ./packages/index.html
    - theme: alt
      text: Read Guides
      link: ./guide/index.html
features:
  - icon: "mdi:compass-outline"
    title: Start Here
    details: "The fastest route if you are new: mental model, quickstart, and why Pkl."
    link: ./start/index.html
  - icon: "mdi:package-variant-closed"
    title: Packages
    details: Browse the first-party target.* catalog from package boundaries instead of long prose pages.
    link: ./packages/index.html
  - icon: "mdi:file-cog-outline"
    title: Targets
    details: See the ecosystem grouped by downstream file and tool family.
    link: ./targets/index.html
  - icon: "mdi:book-open-variant"
    title: Guides
    details: Read the deeper design notes for authoring, distribution, registry flow, and versioning.
    link: ./guide/index.html
  - icon: "mdi:table-large"
    title: Reference
    details: Use lookup tables and the proposed registry record schema when you need a compact answer.
    link: ./reference/index.html
  - icon: "mdi:graph-outline"
    title: Architecture
    details: See the split between package layer, registry layer, and the surrounding Rust tooling.
    link: ./architecture/index.html
---

> This is a third-party design study hosted on GitHub Pages. It is not an official `pkl-lang.org` property, and the `pkg.pkl-lang.org` imports in this repository are upstream pantry dependencies, not this project's own package host.

## Read By Intent

| If you want to... | Go here | Why |
| --- | --- | --- |
| understand the idea quickly | [Start Here](./start/index.html) | It gives the shortest path through the docs. |
| browse what this project plans to ship | [Packages](./packages/index.html) | Package pages are the clearest unit of ownership. |
| find which package should own a specific file | [Targets](./targets/index.html) | Targets are grouped by downstream tool and file name. |
| understand design decisions and release rules | [Guides](./guide/index.html) | This section covers authoring, distribution, registry flow, and versioning. |
| look up current tables and schema shapes | [Reference](./reference/index.html) | This is the compact lookup layer. |

## Featured Packages

| Package | Focus | Start with | Emits |
| --- | --- | --- | --- |
| [target.js](./packages/target-js/index.html) | JavaScript and TypeScript workspace config | `#/tsconfig/TsConfig.pkl` | JSON and YAML |
| [target.rust](./packages/target-rust/index.html) | Cargo metadata and Clippy policy | `#/cargo/Cargo.pkl` | TOML |
| [target.agent](./packages/target-agent/index.html) | MCP server config for recent agent clients | `#/vscode/Mcp.pkl` | JSON |
| [target.env](./packages/target-env/index.html) | Toolchain, tasks, and runtime config | `#/mise/Mise.pkl` | TOML and JSON |

## Registry Model

| Layer | Purpose | Example |
| --- | --- | --- |
| Authoring | Write typed, reusable modules in Pkl | `target.js`, `target.rust` |
| Generation | Render normal config files | `tsconfig.json`, `Cargo.toml`, `mcp.json` |
| Artifacts | Host docs, metadata, and release assets | static site, GitHub Releases |
| Discovery | Search packages and review versions | `registry.pkl` |

## Recommended Read Order

1. Read [Start Here](./start/index.html) if you are new.
2. Open [Packages](./packages/index.html) when you want the package boundary and entrypoint.
3. Use [Targets](./targets/index.html) when the question starts from a file name or tool family.
4. Use [Guides](./guide/index.html) and [Reference](./reference/index.html) once you need the deeper rules.

## Read Next

- [Start here](./start/index.html)
- [Browse the package catalog](./packages/index.html)
- [Read the guides](./guide/index.html)
- [See the current target matrix](./targets/index.html)
