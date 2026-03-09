---
layout: entry
title: Guides
description: Explanations for package boundaries, authoring rules, generation, distribution, and registry operation.
hero:
  name: Guides
  text: Design and operating notes
  tagline: "Use this section when you already know the package names and want the deeper reasoning: how packages are shaped, how files are generated, and how registry records are reviewed."
  actions:
    - theme: brand
      text: Package Ecosystem
      link: ./package-ecosystem/index.html
    - theme: alt
      text: Distribution
      link: ./distribution/index.html
    - theme: alt
      text: Registry Flow
      link: ./registry-flow/index.html
features:
  - icon: "mdi:layers-outline"
    title: Package Ecosystem
    details: Why the first-party surface is split into target.core, target.js, target.env, target.rust, target.editor, target.ci, and target.agent.
    link: ./package-ecosystem/index.html
  - icon: "mdi:vector-polyline"
    title: Authoring Model
    details: Rules for package APIs, presets, naming, and escape hatches.
    link: ./authoring-model/index.html
  - icon: "mdi:file-cog-outline"
    title: Generating Files
    details: Output strategy for JSON, YAML, TOML, and multi-file generation.
    link: ./generating-files/index.html
  - icon: "mdi:package-variant-closed"
    title: Distribution
    details: How third-party packages can publish immutable metadata and ZIPs without inventing a custom host up front.
    link: ./distribution/index.html
  - icon: "mdi:source-pull"
    title: Registry Flow
    details: The Pull Request-based review and indexing model for registry entries.
    link: ./registry-flow/index.html
  - icon: "mdi:tag-multiple-outline"
    title: Versioning
    details: Rules for immutable releases, latest views, and version-aware search.
    link: ./versioning/index.html
---

## Read By Intent

| If you want to understand... | Start here |
| --- | --- |
| package boundaries | [Package Ecosystem](./package-ecosystem/index.html) |
| API and preset design rules | [Authoring Model](./authoring-model/index.html) |
| renderer and output decisions | [Generating Files](./generating-files/index.html) |
| hosting and release shape | [Distribution](./distribution/index.html) |
| how the registry itself should operate | [Registry Flow](./registry-flow/index.html) |
| version semantics in the UI | [Versioning](./versioning/index.html) |
