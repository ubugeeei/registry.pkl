---
title: CI
description: CI is a great fit for Pkl, but it should not be the first package to ship.
---

# CI

CI config is a natural fit for typed composition and reusable presets.

## Targets

- GitHub Actions
- GitLab CI

## Why CI Ships Later

- schemas are large
- edge cases are numerous
- vendor-specific expressions are awkward
- docs burden is much higher than for local config files

## Recommended Strategy

Start with wrappers and presets.

Do not rush into rebuilding every single vendor field before the package model is
stable.

