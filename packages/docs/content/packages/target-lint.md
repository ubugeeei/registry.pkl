---
layout: entry
title: target.lint
description: Typed authoring for cross-language linters — markdownlint, commitlint, and gitleaks.
hero:
  name: target.lint
  text: Cross-language linters
  tagline: markdownlint, commitlint, and gitleaks — three lints that don't fit cleanly under a single ecosystem.
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
  - icon: "mdi:format-text"
    title: markdownlint/Markdownlint.pkl
    details: Typed `.markdownlint.json` with rule-by-id overrides plus convenience knobs (lineLength, headingStyle, ulStyle, code fence style).
  - icon: "mdi:source-commit"
    title: commitlint/Commitlint.pkl
    details: Typed `commitlint.config.json` — extends, plugins, rules as severity / applicable / value triples, ignores.
  - icon: "mdi:shield-key"
    title: gitleaks/Gitleaks.pkl
    details: Typed `.gitleaks.toml` with Rule and Allowlist classes covering regex / keywords / tags / per-rule allowlists.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.lint@0.1.0#/markdownlint/Markdownlint.pkl"
```

## What This Package Emits

- `.markdownlint.json`
- `commitlint.config.json`
- `.gitleaks.toml`

## Why This Package Exists

These three lints are cross-cutting: they apply to repos written in JavaScript,
Rust, Go, or Python alike. Grouping them under `target.lint` keeps the
ecosystem-shaped families (`target.js`, `target.rust`, …) focused on tooling
that belongs to one language.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)
