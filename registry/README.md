# Registry Records

Each subdirectory under `registry/<name>/` holds the per-version JSON
records produced from a corresponding Pkl source under
`registry-records/<name>/<version>.pkl`. The release workflow renders
the Pkl source to JSON, appends it here, and the docs build picks the
files up for search indexing.

The canonical schemas are Pkl modules:

- `packages/target.core/RegistryRecord.pkl` — the full record shape
- `packages/target.core/FirstPartyRecord.pkl` — the first-party
  convenience layer that fills in the boilerplate (packageUri,
  packageZipUrl, docsUrl, source, firstParty) from `family + version`

For a first-party release, the source file is intentionally tiny:

```pkl
amends "@target.core/FirstPartyRecord.pkl"

family = "target.js"
version = "0.1.0"
ecosystem = "javascript"

targets {
  "package.json"
  "tsconfig.json"
}

formats {
  "json"
}

description = "Typed Pkl modules for JavaScript tooling."
```

Render every source to JSON with:

```bash
bash scripts/render-registry.sh
```

Or render a single source:

```bash
pkl eval registry-records/target.js/0.1.0.pkl > registry/target.js/0.1.0.json
```

The validator CLI under `crates/registry-validator/` enforces the
schema (and a few additional invariants) on every PR that touches this
directory; see `.github/workflows/registry-validate.yml`.

`target.core` itself does not have a registry record — it is a
library/helpers package, not a target emitter.
