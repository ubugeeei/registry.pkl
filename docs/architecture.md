# Architecture Notes

The canonical public architecture docs now live in
`packages/docs/content/architecture/`.

This file remains as a short maintainer note.

## Current Direction

- service name: `registry.pkl`
- first-party package family: `compat.*`
- registry model: GitHub Pull Request-based, not custom publish API
- docs stack: `ox-content`
- implementation language for programs: Rust
- Pkl bridge for programs: `pklrust`

## Hard Constraints

- JSON and YAML can use Pkl standard renderers
- TOML should prefer a shared renderer dependency such as `pkl.toml`
- package discovery should layer on top of Pkl package URIs, not replace them
<!-- TODO: Model supported ecosystem schemas as amends-based overlay modules,
not plain format emitters, so definitions/defaults remain navigable in IDEs. -->

## Source Of Truth

See:

- `packages/docs/content/index.md`
- `packages/docs/content/guide/registry-flow.md`
- `packages/docs/content/guide/versioning.md`
- `packages/docs/content/architecture/index.md`
