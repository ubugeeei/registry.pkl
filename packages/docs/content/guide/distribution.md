---
title: Distribution
description: How first-party packages should be published without inventing a new package host.
---

# Distribution

## Publish Pkl Packages Directly

The right distribution unit is a normal Pkl package, not a registry-specific
artifact.

Each first-party package should have its own `PklProject` and version:

- `target.core`
- `target.js`
- `target.env`
- `target.rust`
- `target.editor`
- `target.ci`
- `target.agent`

Build artifacts with `pkl project package`.

That keeps the project aligned with the package model Pkl already understands.

## Reuse Pantry Packages Where It Helps

Do not rebuild upstream packages that already exist and are maintained well.

The clearest current candidates are:

- `package://pkg.pkl-lang.org/pkl-pantry/pkl.toml@1.0.2`
- `package://pkg.pkl-lang.org/pkl-pantry/com.github.actions@1.3.1`
- `package://pkg.pkl-lang.org/pkl-pantry/com.github.dependabot@1.0.0`

`target.ci` should wrap those packages with repository presets and team-facing
entrypoints instead of cloning their full schema surface.

## Hosting Reality For This Repository

This repository is a third-party design study.

That means:

- the docs site should publish to `https://ubugeeei.github.io/registry.pkl/`
- the project should not pretend to own `pkg.pkl-lang.org`
- `pkg.pkl-lang.org` references inside this repo are only official upstream pantry dependencies

## Recommended Hosting Shape

Use a package origin you actually control for immutable artifacts.

Recommended split:

- docs UI: `https://ubugeeei.github.io/registry.pkl/`
- package host: `package://<a-host-you-control>/<package>@<version>`
- registry index repo: GitHub Pull Request-based metadata records

If you do not control a package origin yet, start with GitHub Releases plus a
static metadata host. Do not invent a fake `pkg.*` domain in public docs.

The package host should serve both:

- the metadata file at the package URI's derived HTTPS URL
- the ZIP file at `packageZipUrl`

Keeping metadata and ZIP files on the same origin makes enterprise mirroring
much simpler. If the host needs a path prefix, publish artifacts into that same
prefix instead of rewriting URLs by hand after packaging.

## Why Same-Origin Package Hosting Matters

Pkl package mirrors work by rewriting HTTP origins.

If metadata lives on one host and ZIP files live on another, users need to
mirror both origins. That is workable, but it is unnecessary friction for the
exact audience that wants centrally managed configuration.

For first-party packages, keep artifacts byte-for-byte immutable and serve them
from one host.

## What The Registry Should Add

`registry.pkl` should not replace package distribution.

It should add:

- searchable package pages
- reviewed first-party and community records
- target and ecosystem facets
- changelog and compatibility visibility
- copy-pasteable pinned import URIs

The registry record should point at real package artifacts, docs, and checksums.

## Release Discipline

Release each `target.*` package independently.

Rules:

- pin imports to exact semver
- treat `latest` as a registry UI convenience, not an import target
- run snapshot tests before packaging
- run package API tests through `pkl project package`
- publish immutable metadata, ZIPs, and checksums
- avoid delete-based bucket sync for package hosts; add new objects and refuse
  conflicting rewrites

This keeps semver honest and lets high-churn targets evolve without forcing a
repo-wide version.

## Operational Next Step

Use [Release Playbook](../release-playbook/index.html) for the concrete
repository workflow, commands, and release automation.
