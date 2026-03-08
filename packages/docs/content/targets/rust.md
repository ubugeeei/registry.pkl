---
title: Rust
description: Cargo and lint configuration are strong TOML targets, especially when the renderer strategy is shared.
---

# Rust

`compat.rust` is strategically important because Rust projects already accept a
lot of declarative configuration.

## First Targets

- `Cargo.toml`
- `clippy.toml`
- later `rustfmt.toml`

## Design Note

These modules need a shared TOML output story.

That means `compat.rust` should not ship before `compat.core` has wrappers or
converters around one shared TOML renderer strategy.
