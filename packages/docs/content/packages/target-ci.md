---
layout: entry
title: target.ci
description: Reusable CI wrappers and presets for GitHub Actions, GitLab CI, and dependency update workflows.
hero:
  name: target.ci
  text: Repository automation and CI wrappers
  tagline: GitHub Actions, GitLab CI, and dependency update workflows with a strong bias toward repository-level presets.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Target Notes
      link: ../../targets/ci/index.html
    - theme: alt
      text: Distribution
      link: ../../guide/distribution/index.html
features:
  - icon: "mdi:github"
    title: github/NodeCiWorkflow.pkl
    details: Batteries-included GitHub Actions workflow for Node repositories with matrix, install, lint, test, and build steps.
  - icon: "mdi:source-branch"
    title: github/Workflow.pkl
    details: Thin preset over the official pantry workflow package with opinionated default permissions.
  - icon: "mdi:update"
    title: github/Dependabot.pkl
    details: Thin preset over the official Dependabot package.
  - icon: "mdi:gitlab"
    title: gitlab/GitLabCi.pkl
    details: Typed GitLab CI jobs, rules, cache, artifacts, defaults, and workflow config — full pipeline surface, not a thin preset.
  - icon: "mdi:rocket-launch"
    title: github/ReleaseWorkflow.pkl
    details: Tag-driven release preset that scopes contents write to the publish job and uploads artifacts via softprops/action-gh-release.
  - icon: "mdi:web"
    title: github/DeployPagesWorkflow.pkl
    details: GitHub Pages deploy preset with the canonical configure-pages / upload-pages-artifact / deploy-pages chain and a separately-permissioned deploy job.
  - icon: "mdi:shield-search"
    title: github/CodeqlWorkflow.pkl
    details: CodeQL scan preset for push, pull_request, and a weekly cron with a per-language matrix and manual build hooks.
  - icon: "mdi:archive-clock"
    title: github/StaleWorkflow.pkl
    details: Stale issue and PR sweep preset with exempt labels, daily cron, and reasonable defaults.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.ci@0.1.0#/github/NodeCiWorkflow.pkl"
```

## What This Package Emits

- `.github/workflows/ci.yml` (NodeCiWorkflow)
- `.github/workflows/release.yml` (ReleaseWorkflow)
- `.github/workflows/deploy-pages.yml` (DeployPagesWorkflow)
- `.github/workflows/codeql.yml` (CodeqlWorkflow)
- `.github/workflows/stale.yml` (StaleWorkflow)
- `.github/dependabot.yml`
- `.gitlab-ci.yml` — full Job / Defaults / Workflow surface

## Why This Package Exists

CI is a natural fit for Pkl composition, but it works best when the package
starts from wrappers and repository presets instead of trying to model every
vendor field at once.

## Related Docs

- [Package catalog](../index.html)
- [CI target notes](../../targets/ci/index.html)
- [Distribution](../../guide/distribution/index.html)
