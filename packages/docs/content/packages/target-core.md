---
layout: entry
title: target.core
description: Shared helpers and conventions used across every first-party target.* package.
hero:
  name: target.core
  text: Shared helpers and renderer conventions
  tagline: Foundation layer for every first-party package. It owns shared primitives, not end-user target files.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Generating Files
      link: ../../guide/generating-files/index.html
    - theme: alt
      text: Package Ecosystem
      link: ../../guide/package-ecosystem/index.html
features:
  - icon: "mdi:function-variant"
    title: Maps.pkl
    details: Merges typed output with `extra` escape-hatch fields so target wrappers stay strict without blocking odd vendor fields.
---

## Import

```pkl
import "@target.core/Maps.pkl" as Maps
```

## What This Package Owns

- Shared helpers reused by multiple `target.*` packages.
- Renderer-facing utilities and naming conventions that should not be copied everywhere.
- No direct target files on its own.

## Design Rule

If a helper is not shared across multiple packages, keep it local.
`target.core` should stay narrow and boring.

## Related Docs

- [Package catalog](../index.html)
- [Generating Files](../../guide/generating-files/index.html)
- [Package Ecosystem](../../guide/package-ecosystem/index.html)
