---
layout: entry
title: target.editor
description: Shared editor and workspace defaults, starting with VS Code settings and recommendations.
hero:
  name: target.editor
  text: Editor and workspace defaults
  tagline: VS Code settings and extension recommendations that teams otherwise copy between repositories by hand.
  actions:
    - theme: brand
      text: Browse Packages
      link: /packages/index.html
    - theme: alt
      text: Target Notes
      link: /targets/editor/index.html
    - theme: alt
      text: Quickstart
      link: /start/quickstart/index.html
features:
  - icon: "mdi:cog-outline"
    title: vscode/Settings.pkl
    details: Editor behavior, file rules, search settings, TypeScript preferences, Git behavior, and window settings.
  - icon: "mdi:puzzle-outline"
    title: vscode/Extensions.pkl
    details: Recommended and unwanted workspace extension lists for VS Code teams.
---

## Install

```pkl
amends "package://pkg.registry.pkl/target.editor@0.1.0#/vscode/Settings.pkl"
```

## What This Package Emits

- `.vscode/settings.json`
- `.vscode/extensions.json`

## Why This Package Exists

Editor defaults are repeated everywhere. Typed presets make it easier to
standardize formatting, TypeScript behavior, search behavior, and extension
bundles at the repository level.

## Related Docs

- [Package catalog](/packages/index.html)
- [Editor target notes](../targets/editor.md)
- [Quickstart](../start/quickstart.md)
