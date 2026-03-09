---
layout: entry
title: target.env
description: Runtime and toolchain environment config for mise.toml and deno.json.
hero:
  name: target.env
  text: Runtime and toolchain environment config
  tagline: mise.toml, deno.json, task wiring, and tool version pinning that should stay separate from application package metadata.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Target Notes
      link: ../../targets/env/index.html
    - theme: alt
      text: Package Ecosystem
      link: ../../guide/package-ecosystem/index.html
features:
  - icon: "mdi:wrench-cog-outline"
    title: mise/Mise.pkl
    details: Tool versions, environment variables, task definitions, and settings rendered through the shared TOML path.
  - icon: "mdi:alpha-d-box-outline"
    title: deno/Deno.pkl
    details: Tasks, imports, scopes, formatter and lint config, test options, and runtime flags.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.env@0.1.0#/mise/Mise.pkl"
```

## What This Package Emits

- `mise.toml`
- `deno.json`

## Why This Package Exists

`package.json` and `mise.toml` solve different problems. Keeping environment
tooling separate avoids a giant mixed-scope package that drifts in every
direction at once.

## Related Docs

- [Package catalog](../index.html)
- [Environment target notes](../../targets/env/index.html)
- [Package Ecosystem](../../guide/package-ecosystem/index.html)
