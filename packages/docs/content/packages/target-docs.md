---
layout: entry
title: target.docs
description: Typed authoring for documentation generators — VitePress, Docusaurus, TypeDoc.
hero:
  name: target.docs
  text: Documentation generators
  tagline: Typed config for VitePress, Docusaurus, and TypeDoc.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Tool matrix
      link: ../../reference/tool-matrix/index.html
    - theme: alt
      text: By Target
      link: ../../reference/by-target/index.html
features:
  - icon: "mdi:book-open-page-variant"
    title: vitepress/VitePress.pkl
    details: Typed VitePress `.vitepress/config.json` — site metadata, themeConfig, head, markdown, sitemap.
  - icon: "mdi:dinosaur"
    title: docusaurus/Docusaurus.pkl
    details: Typed Docusaurus `docusaurus.config.json` — site fields, presets, themeConfig, plugins, i18n.
  - icon: "mdi:file-document-multiple-outline"
    title: typedoc/Typedoc.pkl
    details: Typed `typedoc.json` — entry points, exclude patterns, plugins, themes, validation, GitHub Pages hooks.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.docs@0.1.0#/vitepress/VitePress.pkl"
```

## What This Package Emits

- `.vitepress/config.json`
- `docusaurus.config.json`
- `typedoc.json`

## Why This Package Exists

Three different documentation generators with overlapping concepts (site
metadata, theme, plugins, sidebar). Grouping them under `target.docs` makes
the per-tool overlap browsable and gives `target.js` a cleaner scope: build
tooling, not documentation.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)
