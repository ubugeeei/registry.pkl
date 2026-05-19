# Security policy

## Supported versions

Pre-1.0 releases of `target.*` families ship best-effort fixes on the
latest published version only. After 1.0, supported versions will be
declared per-family.

## Reporting a vulnerability

Use [GitHub's private security advisory flow](https://github.com/ubugeeei/registry.pkl/security/advisories/new)
to report:

- a Pkl module that emits output that could lead to insecure downstream
  behavior (e.g. a renderer that fails to escape a string used in a
  shell context);
- a registry record that points at an artifact whose URL or checksum
  has been compromised;
- a validator / search-index / pkl-reference / release-cut bug that
  could let a malicious record bypass schema enforcement or write
  outside the expected directory tree.

Please do **not** open a public issue for these.

## Scope

In scope:

- the typed Pkl modules under `packages/target.*`
- the Rust crates under `crates/`
- the docs-site assets under `packages/docs/public`
- the registry record JSON under `registry/`
- the CI workflows under `.github/workflows/`

Out of scope:

- third-party tools that consume our generated outputs — report
  vulnerabilities there to the respective projects (eslint, biome,
  GitHub Actions, etc.).
- speculative attacks against the placeholder `pkg.registry.invalid`
  host. Pkl resolves artifacts through `packageZipUrl`, so the
  placeholder host is intentionally unreachable.

## Disclosure timeline

We aim to triage reports within 7 days and ship a fix within 30 days
of confirmation. Reporters will be credited in the release notes if
they wish.
