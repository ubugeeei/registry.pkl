---
layout: entry
title: Packages
description: Browse the first-party target.* package catalog and current module coverage.
hero:
  name: Packages
  text: First-party target.* catalog
  tagline: Start from package scope, not prose. Each entry tells you what a package owns, what modules it ships, and which install URI to open first.
  actions:
    - theme: brand
      text: Start Here
      link: ../start/index.html
    - theme: alt
      text: Guides
      link: ../guide/index.html
    - theme: alt
      text: Reference
      link: ../reference/index.html
features:
  - icon: "mdi:layers-outline"
    title: target.core
    details: Shared helpers and renderer-facing utilities reused across every other first-party package.
    link: ./target-core/index.html
  - icon: "mdi:language-javascript"
    title: target.js
    details: Package metadata, compiler config, formatter, lint, and pnpm workspace authoring for JavaScript and TypeScript projects.
    link: ./target-js/index.html
  - icon: "mdi:tools"
    title: target.env
    details: Toolchain versions, workspace tasks, and runtime config that should not live inside application package metadata.
    link: ./target-env/index.html
  - icon: "mdi:language-rust"
    title: target.rust
    details: Cargo and Clippy configuration with one shared TOML output strategy.
    link: ./target-rust/index.html
  - icon: "mdi:monitor-dashboard"
    title: target.editor
    details: Workspace editor settings and recommendations, starting with VS Code defaults that teams copy everywhere.
    link: ./target-editor/index.html
  - icon: "mdi:source-branch"
    title: target.ci
    details: Repository-level workflow wrappers and CI presets for GitHub Actions, GitLab CI, and dependency automation.
    link: ./target-ci/index.html
  - icon: "mdi:robot-outline"
    title: target.agent
    details: Shared MCP server types and thin wrappers for fast-moving agent clients such as VS Code, Cursor, Claude, and Windsurf.
    link: ./target-agent/index.html
  - icon: "mdi:language-python"
    title: target.python
    details: Typed authoring for pyproject.toml, ruff, and pytest. TOML output via the shared pkl.toml renderer.
    link: ./target-python/index.html
  - icon: "mdi:shield-search"
    title: target.lint
    details: Cross-language linters — markdownlint, commitlint, gitleaks.
    link: ./target-lint/index.html
  - icon: "mdi:docker"
    title: target.container
    details: Docker Compose, Dockerfile, and Devbox manifests authored in Pkl.
    link: ./target-container/index.html
  - icon: "mdi:language-go"
    title: target.go
    details: golangci-lint and goreleaser configuration for Go projects.
    link: ./target-go/index.html
  - icon: "mdi:rocket-launch"
    title: target.deploy
    details: Vercel, Netlify, Fly, and Render — one typed module per platform.
    link: ./target-deploy/index.html
  - icon: "mdi:book-open-page-variant"
    title: target.docs
    details: VitePress, Docusaurus, and TypeDoc — typed documentation generator configs.
    link: ./target-docs/index.html
  - icon: "mdi:kubernetes"
    title: target.k8s
    details: Kustomize, Helm chart metadata, and the Helm values surface.
    link: ./target-k8s/index.html
---

## How To Use This Section

1. Open a package page first when the question is "what owns this config surface?"
2. Use [Targets](../targets/index.html) when the question starts from a tool or file name.
3. Use [Guides](../guide/index.html) when you need design rules, distribution, or registry behavior.

## Package Snapshot

| Package | Status | Focus | Modules | First entrypoint |
| --- | --- | --- | --- | --- |
| [target.core](./target-core.md) | Base package | Shared helpers and renderer glue | 1 | `@target.core/Maps.pkl` |
| [target.js](./target-js.md) | Flagship | JS and TS workspace config | 7 | `#/tsconfig/TsConfig.pkl` |
| [target.env](./target-env.md) | First wave | Runtime and toolchain config | 2 | `#/mise/Mise.pkl` |
| [target.rust](./target-rust.md) | First wave | Cargo and Clippy | 2 | `#/cargo/Cargo.pkl` |
| [target.editor](./target-editor.md) | First wave | Editor defaults and recommendations | 2 | `#/vscode/Settings.pkl` |
| [target.ci](./target-ci.md) | Second wave | Repository automation and workflows | 4 | `#/github/NodeCiWorkflow.pkl` |
| [target.agent](./target-agent.md) | Second wave | MCP wrappers for agent clients | 6 | `#/vscode/Mcp.pkl` |
| [target.python](./target-python.md) | First wave | Python project metadata, linting, testing | 3 | `#/pyproject/PyProject.pkl` |
| [target.lint](./target-lint.md) | Second wave | Cross-language linting | 3 | `#/markdownlint/Markdownlint.pkl` |
| [target.container](./target-container.md) | Second wave | Compose, Dockerfile, Devbox | 3 | `#/docker-compose/DockerCompose.pkl` |
| [target.go](./target-go.md) | Second wave | golangci-lint + goreleaser | 2 | `#/golangci/Golangci.pkl` |
| [target.deploy](./target-deploy.md) | Second wave | Vercel / Netlify / Fly / Render | 4 | `#/vercel/Vercel.pkl` |
| [target.docs](./target-docs.md) | Second wave | VitePress / Docusaurus / TypeDoc | 3 | `#/vitepress/VitePress.pkl` |
| [target.k8s](./target-k8s.md) | Second wave | Kustomize + Helm | 3 | `#/kustomization/Kustomization.pkl` |

## Catalog Rules

1. Separate packages by change velocity so versioning stays honest.
2. Keep module names close to the downstream tools they emit.
3. Put shared helpers in `target.core` only when multiple packages truly reuse them.
4. Make package discovery easier than architecture archaeology.

## Current First-Party Wave

- `target.js`, `target.env`, `target.rust`, and `target.editor` are the clearest first-wave authoring surfaces.
- `target.ci` and `target.agent` matter, but their surrounding ecosystems move faster and need thinner wrappers.
- `target.core` should remain intentionally small even as the package family grows.
