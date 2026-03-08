---
layout: entry
title: registry.pkl
description: Searchable, versioned, GitHub PR-based registry for Pkl config packages, starting with first-party compat.* modules.
hero:
  name: registry.pkl
  text: Typed config without inventing a new runtime
  tagline: Author real-world tool configs in Pkl, review them in GitHub Pull Requests, and discover versioned packages through a searchable registry.
  image:
    src: registry-mark.svg
    alt: registry.pkl mark
  actions:
    - theme: brand
      text: Start Here
      link: /start/getting-started.html
    - theme: alt
      text: Registry Flow
      link: /guide/registry-flow.html
    - theme: alt
      text: Target Matrix
      link: /reference/tool-matrix.html
features:
  - icon: "mdi:file-tree"
    title: Typed authoring
    details: Model package.json, tsconfig, Cargo.toml, CI files, and agent config as typed Pkl modules instead of raw text blobs.
    link: /guide/authoring-model.html
  - icon: "mdi:source-pull"
    title: GitHub PR registry
    details: The registry does not need a publish API. Package versions are reviewed and indexed by Pull Request.
    link: /guide/registry-flow.html
  - icon: "mdi:tag-search"
    title: Search and versioning
    details: Discover packages by tool, format, tag, maintainer, or ecosystem, and keep immutable semver history.
    link: /guide/versioning.html
  - icon: "mdi:robot-outline"
    title: AI agent config too
    details: Recent agent and MCP JSON configs are a strong target for typed, composable authoring.
    link: /targets/agents.html
  - icon: "mdi:language-rust"
    title: Rust registry tooling
    details: Registry validators, indexers, and emitters should be Rust programs that integrate with Pkl through pklrust.
    link: /architecture/index.html
---

## What This Project Is

`registry.pkl` is the public discovery layer for Pkl config packages.

It indexes packages that generate tool-native config files such as:

- JSON files like `package.json`, `tsconfig.json`, `biome.json`, `settings.json`
- YAML files like GitHub Actions, GitLab CI, and `pnpm-workspace.yaml`
- TOML files like `Cargo.toml`, `mise.toml`, `clippy.toml`, and `rustfmt.toml`

The first-party package family is currently planned as `compat.*`.

Examples:

- `compat.js`
- `compat.env`
- `compat.rust`
- `compat.ci`
- `compat.editor`
- `compat.agent`

## Current Status

This repository is still in design and bootstrap mode.

What is real already:

- the package strategy
- the registry model
- the documentation structure
- the target matrix

What is not shipped yet:

- published Pkl packages
- the PR-backed registry implementation
- search UI
- version index generation

This documentation is written to make the intended system obvious before the
implementation hardens around bad defaults.

## Why This Exists

Raw `json`, `yaml`, and `toml` are everywhere because tools consume them, not
because humans enjoy authoring them.

Pkl gives the missing authoring layer:

- strong typing
- `amends`-based reuse
- readable defaults
- module boundaries
- editor navigation and completion

The generated output should remain boring. The authoring experience should not.

## Read In This Order

1. [Getting Started](./start/getting-started.md)
   Start with the two-layer model: `compat.*` packages plus `registry.pkl`.
2. [Why Pkl](./start/why-pkl.md)
   See why raw JSON, YAML, and TOML are the wrong authoring surface.
3. [Quickstart](./start/quickstart.md)
   Read the intended Pkl authoring shape before first-party packages ship.
4. [Authoring Model](./guide/authoring-model.md)
   Learn how schema overlays, presets, and generated files should fit together.
5. [Registry Flow](./guide/registry-flow.md)
   Understand the GitHub Pull Request review model for package discovery.
6. [Distribution](./guide/distribution.md)
   See how packages, docs, and the registry should be published together.

## Important Constraint

Pkl has standard renderers for JSON and YAML, and the official pantry ships a
TOML renderer package as `pkl.toml`.

That means this project needs a shared output strategy:

- JSON and YAML targets can lean on Pkl's standard renderers.
- TOML targets should standardize on one renderer package and only fall back to
  custom emitters when a schema truly needs it.

That constraint shapes the package API, docs, tests, and registry metadata.

## Implementation Stack

If this project needs actual programs, they should be Rust programs.

That includes:

- registry record validation
- search index generation
- package page materialization helpers
- TOML helpers shared across packages when renderer adapters are justified

The intended bridge to Pkl is `pklrust`.
