---
title: Environment and Runtime Tooling
description: Why mise.toml and deno.json belong in target.env.
---

# Environment and Runtime Tooling

`target.env` holds configuration that describes the development environment or
runtime toolchain rather than the application package graph itself.

## First Targets

- `mise.toml`
- `deno.json`

## Why This Boundary Exists

`package.json` belongs to the JS package ecosystem.

`mise.toml` and `deno.json` are closer to runtime or workspace environment
selection, task wiring, and tool versions.

That is a different axis of concern and deserves its own package.

