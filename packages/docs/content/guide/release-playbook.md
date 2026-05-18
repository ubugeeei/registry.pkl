---
title: Release Playbook
description: Practical release method and step-by-step flow for publishing first-party Pkl packages.
---

# Release Playbook

This page is the operational answer for actually distributing first-party
packages from this repository.

> Status: first-party package publication is not live until a real package host,
> release variables, release secrets, and the `package-release` GitHub
> environment are configured. Local commands that use `pkg.example.invalid` are
> rehearsals only.

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

## Required GitHub Setup

The `Release Packages` workflow publishes through the `package-release`
environment. Create that environment before adding real publish credentials.

Repository variables. If you deliberately scope variables to the
`package-release` environment instead, define the same names there:

| Name | Required | Used for |
| --- | --- | --- |
| `PACKAGE_HOST` | yes | Host portion of generated `package://` base URIs, without a scheme. |
| `PACKAGE_BASE_URL` | yes | HTTPS origin that serves generated package metadata and release ZIPs. |
| `PACKAGE_BASE_PATH` | no | Optional path prefix when the package host serves files below a subdirectory. |
| `PACKAGE_BUCKET` | yes | S3-compatible bucket that receives the publish layout. |
| `PACKAGE_S3_ENDPOINT` | yes | S3-compatible API endpoint used by `aws s3api` and `aws s3 cp`. |
| `PACKAGE_AWS_REGION` | no | Storage provider region; the workflow defaults this to `auto`. |

Environment secrets, preferred, or repository secrets if environment-scoped
secrets are not available:

| Name | Required | Used for |
| --- | --- | --- |
| `PACKAGE_AWS_ACCESS_KEY_ID` | yes | Access key for the package bucket or package bucket prefix. |
| `PACKAGE_AWS_SECRET_ACCESS_KEY` | yes | Secret key for the package bucket or package bucket prefix. |

The workflow also sets `PACKAGE_OUTPUT_DIR`, `PUBLISH_DIR`, and
`SKIP_PUBLISH_CHECK` internally. Do not add repository variables for those unless
the workflow is intentionally changed.

These values must agree with each other:

- `PACKAGE_HOST` and `PACKAGE_BASE_URL` should describe the same public package
  origin.
- If `PACKAGE_BASE_PATH` is set, it must be included in the public URL layout
  and object-key prefix.
- Bucket credentials should be limited to the package bucket or prefix and
  should not grant delete permissions.
- The package host must serve metadata and ZIP files immutably once published.

## Environment Protection

Recommended protection for the `package-release` environment:

- require approval from at least one maintainer before deployment
- prevent self-review if that option is available for the repository
- restrict deployments to `main` and release tags matching `target.*-v*`
- keep package publishing secrets on the environment instead of broad
  repository secrets where practical
- use storage credentials that can read existing objects, write new objects,
  and refuse delete-based workflows

The workflow validates tag shape and requires release tags to point at commits
contained in `origin/main`. Environment protection is still important because a
manual workflow dispatch becomes a real publish as soon as host variables and
secrets exist.

## Dry-Run Checklist

Run this before enabling real package host sync:

1. Confirm the checkout uses the canonical remote:

   ```bash
   git remote -v
   ```

   The remote should point at `ubugeeei/registry.pkl`, not
   `ubugeeei/compat.pkl`.

2. Regenerate workspace files and dependency metadata:

   ```bash
   pkl eval -m . root-files.pkl
   pkl project resolve . packages/target.*
   ```

3. Build package artifacts with the neutral placeholder host:

   ```bash
   rm -rf dist/package-artifacts dist/publish
   PACKAGE_HOST=pkg.example.invalid \
   PACKAGE_BASE_URL=https://pkg.example.invalid \
   ./scripts/package-artifacts.sh
   ./scripts/build-publish-layout.sh
   find dist/publish -type f | sort
   ```

4. Inspect `dist/publish/` and confirm the generated package metadata, ZIP
   names, checksums, and paths match the intended release.

5. If testing a real host before it is reachable, use
   `ALLOW_SKIP_PUBLISH_CHECK=1 SKIP_PUBLISH_CHECK=1` only for that explicit dry
   run. Do not use skipped publish checks for an actual release.

6. Do not run `./scripts/sync-publish-layout.sh` against the production bucket
   as a rehearsal. The uploader has no dry-run mode. If you must test uploader
   behavior, use a disposable bucket or prefix and a throwaway package version.

7. Add `package-release` environment protection and publish credentials only
   after the local artifact layout is correct.

## Local Commands

Local rehearsal with placeholder host values:

```bash
./scripts/package-artifacts.sh
./scripts/build-publish-layout.sh
```

Target a subset during local rehearsal:

```bash
./scripts/package-artifacts.sh packages/target.js
./scripts/build-publish-layout.sh
```

Build artifacts for a real, already provisioned host:

```bash
PACKAGE_HOST=<your-package-host> \
PACKAGE_BASE_URL=https://<your-package-host> \
./scripts/package-artifacts.sh

PACKAGE_HOST=<your-package-host> \
PACKAGE_BASE_URL=https://<your-package-host> \
./scripts/build-publish-layout.sh
```

Publish the prepared layout only after replacing every placeholder:

```bash
PACKAGE_BUCKET=<your-package-bucket> \
PACKAGE_S3_ENDPOINT=https://<your-s3-endpoint> \
PACKAGE_AWS_REGION=<your-region-or-auto> \
AWS_ACCESS_KEY_ID=<your-access-key-id> \
AWS_SECRET_ACCESS_KEY=<your-secret-access-key> \
./scripts/sync-publish-layout.sh
```

If the host uses a path prefix, also set `PACKAGE_BASE_PATH`.
The uploader uses that same prefix for object keys, so the stored files and the
derived package URLs stay aligned.

## Release Steps

1. Bump the version in the package `PklProject` you want to release.
2. Regenerate dependency metadata if package relationships changed.
3. Build package artifacts into `dist/package-artifacts/`.
4. Build the static publish layout into `dist/publish/`.
5. Upload `dist/publish/` to the package host.
6. Open or update the registry record PR that points at the published package.

## Release Workflow

The repository includes a `Release Packages` GitHub Actions workflow.

It does a few things:

- validates that the package host configuration exists
- resolves the release set from a tag such as `target.js-v0.1.0` or a manual
  `projects` input
- validates that a tag-triggered release matches the version declared in that
  package's `PklProject`
- runs `pkl project package` for the selected first-party package set
- prepares the static publish layout
- uploads only new publish-layout objects to an S3-compatible package host
- uploads package ZIPs and metadata as workflow artifacts and GitHub Release assets

## Why This Is The Safer Default

The key constraint is immutability.

Docs are fine to rebuild on every push.
Package versions are not.

Separating those deployment paths keeps the release process honest and avoids a
class of accidental republish mistakes. The uploader also refuses to overwrite
an existing object with different bytes, which preserves package-host
immutability on retries and partial releases.
