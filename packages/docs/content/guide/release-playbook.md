---
title: Release Playbook
description: Practical release method and step-by-step flow for publishing first-party Pkl packages.
---

# Release Playbook

This page is the operational answer for actually distributing first-party
packages from this repository.

## Recommended Method

Use a static HTTPS package host that you control, and keep the registry itself
as a GitHub PR-reviewed index.

Recommended split:

- docs UI: GitHub Pages
- package host: a dedicated static origin such as R2, S3, or another immutable
  object store behind HTTPS
- registry index: GitHub Pull Requests and CI validation

This keeps package hosting independent from docs deploys, which matters because
package versions should be immutable while docs can change on every commit.

## Methods Compared

| Method | When to use it | Upside | Cost |
| --- | --- | --- | --- |
| static host plus custom domain | recommended default | same-origin metadata and ZIPs, clean mirroring, immutable releases | requires bucket and domain setup |
| GitHub Pages for package hosting | acceptable only if docs and package publishing are fully separated | no extra vendor | easy to accidentally overwrite immutable artifacts during docs deploys |
| GitHub Releases plus separate metadata host | temporary bootstrap | easy human-facing downloads | metadata and ZIPs split across origins |

## Repository Decision

For this repository, the most practical release shape is:

- keep docs on GitHub Pages
- generate package artifacts with `pkl project package`
- stage a publishable static layout under `dist/publish/`
- upload that layout to a dedicated package host
- optionally mirror ZIPs on GitHub Releases for humans

## Release Steps

1. Bump the version in the package `PklProject` you want to release.
2. Regenerate dependency metadata if package relationships changed.
3. Build package artifacts into `dist/package-artifacts/`.
4. Build the static publish layout into `dist/publish/`.
5. Upload `dist/publish/` to the package host.
6. Open or update the registry record PR that points at the published package.

## Local Commands

Build every first-party package with placeholder host values:

```bash
./scripts/package-artifacts.sh
./scripts/build-publish-layout.sh
./scripts/sync-publish-layout.sh
```

Build artifacts for a real host:

```bash
PACKAGE_HOST=pkg.ubugeeei.dev \
PACKAGE_BASE_URL=https://pkg.ubugeeei.dev \
./scripts/package-artifacts.sh

PACKAGE_HOST=pkg.ubugeeei.dev \
PACKAGE_BASE_URL=https://pkg.ubugeeei.dev \
./scripts/build-publish-layout.sh

PACKAGE_BUCKET=registry-pkl-packages \
PACKAGE_S3_ENDPOINT=https://<account>.r2.cloudflarestorage.com \
./scripts/sync-publish-layout.sh
```

If the host uses a path prefix, also set `PACKAGE_BASE_PATH`.

## Release Workflow

The repository includes a `Release Packages` GitHub Actions workflow.

It does four things:

- validates that the package host configuration exists
- runs `pkl project package` for every first-party package
- prepares the static publish layout
- syncs the publish layout to an S3-compatible package host
- uploads package ZIPs and metadata as workflow artifacts and GitHub Release assets

The workflow expects these repository variables:

- `PACKAGE_HOST`
- `PACKAGE_BASE_URL`
- `PACKAGE_BASE_PATH` if needed
- `PACKAGE_BUCKET`
- `PACKAGE_S3_ENDPOINT`
- `PACKAGE_AWS_REGION` when the provider needs a real region

It also expects these repository secrets:

- `PACKAGE_AWS_ACCESS_KEY_ID`
- `PACKAGE_AWS_SECRET_ACCESS_KEY`

## Why This Is The Safer Default

The key constraint is immutability.

Docs are fine to rebuild on every push.
Package versions are not.

Separating those deployment paths keeps the release process honest and avoids a
class of accidental republish mistakes.
