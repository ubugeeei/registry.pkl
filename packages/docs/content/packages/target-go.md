---
layout: entry
title: target.go
description: Typed authoring for golangci-lint and goreleaser config.
hero:
  name: target.go
  text: Go tooling
  tagline: Lint and release configuration for Go projects.
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
  - icon: "mdi:check-decagram"
    title: golangci/Golangci.pkl
    details: Typed `.golangci.yml` — run/output/linters/linters-settings/issues with the full coverage of golangci-lint v1.55+.
  - icon: "mdi:rocket-launch"
    title: goreleaser/Goreleaser.pkl
    details: Typed `.goreleaser.yml` — builds, archives, brews, checksums, signs, release, and announce blocks.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.go@0.1.0#/golangci/Golangci.pkl"
```

## What This Package Emits

- `.golangci.yml`
- `.goreleaser.yml`

## Why This Package Exists

Go's lint and release ecosystem stabilized around two tools whose config
schemas are wide enough to benefit from typed authoring. The rest of the Go
toolchain (gofmt, go.mod) is fully derivable from source and does not need a
typed Pkl module on top.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)
