---
layout: entry
title: target.rust
description: Cargo and Clippy configuration with one shared TOML output strategy.
hero:
  name: target.rust
  text: Cargo metadata and Clippy policy
  tagline: Cargo.toml and clippy.toml authoring with a strong bias toward one shared TOML renderer strategy.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Target Notes
      link: ../../targets/rust/index.html
    - theme: alt
      text: Generating Files
      link: ../../guide/generating-files/index.html
features:
  - icon: "mdi:package-variant"
    title: cargo/Cargo.pkl
    details: Package metadata, workspace settings, dependencies, features, profiles, and lint tables.
  - icon: "mdi:shield-half-full"
    title: clippy/Clippy.pkl
    details: Thresholds and policy toggles for Clippy without dropping to raw TOML by default.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.rust@0.1.0#/cargo/Cargo.pkl"
```

## What This Package Emits

- `Cargo.toml`
- `clippy.toml`

## Why This Package Exists

Rust projects already accept a lot of declarative configuration and benefit from
stable TOML output. This package should only expand if the TOML story stays
centralized.

## Related Docs

- [Package catalog](../index.html)
- [Rust target notes](../../targets/rust/index.html)
- [Generating Files](../../guide/generating-files/index.html)
