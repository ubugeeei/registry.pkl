---
title: Getting Started
description: The shortest path to understanding registry.pkl and the compat.* package family.
---

# Getting Started

This documentation is optimized for people who have not yet bought into the
idea.

You should leave this page understanding three things:

1. `registry.pkl` is a registry and discovery service.
2. `compat.*` is the planned first-party package family.
3. The output is still normal JSON, YAML, or TOML for existing tools.

## Mental Model

There are four layers.

| Layer | Purpose | Example |
|------|---------|---------|
| Authoring | Write readable, typed Pkl modules | `compat.js.tsconfig` |
| Generation | Render tool-native config files | `tsconfig.json`, `Cargo.toml` |
| Artifacts | Host package metadata, zips, docs | GitHub Releases, static docs |
| Discovery | Search, version history, review flow | `registry.pkl` |

## What registry.pkl Is Not

It is not an alternative config runtime.

It does not ask downstream tools to embed Pkl.

It does not need a package publishing API on day one.

Instead, package authors can publish artifacts wherever they want and register
them through a GitHub Pull Request.

## What To Read Next

- [Why Pkl](./why-pkl.md)
- [Quickstart](./quickstart.md)
- [Package Ecosystem](../guide/package-ecosystem.md)

## Initial First-Party Scope

The first-party `compat.*` packages should focus on boring, high-value config:

- `compat.js`
- `compat.env`
- `compat.rust`
- `compat.editor`

`compat.ci` and `compat.agent` are important, but they should follow after the
basic package model is proven.

## Implementation Status

This repo is pre-implementation. Treat code snippets in these docs as target API
shape unless they are explicitly marked as current repository files.

## Implementation Language

When this repository needs programs instead of static docs or package source, the
default should be Rust.

Examples:

- registry validator CLI
- search index builder
- package metadata normalizer
- snapshot-oriented fixture generators
