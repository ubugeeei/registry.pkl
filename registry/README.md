# Registry Records

Each subdirectory under `registry/<name>/` holds the per-version JSON
records produced from a corresponding Pkl source under
`registry-records/<name>/<version>.pkl`. The release workflow renders
the Pkl source to JSON, appends it here, and the docs build picks the
files up for search indexing.

The canonical schema is defined as a Pkl module:

- `packages/target.core/RegistryRecord.pkl`

To write a new record, amend the schema module:

```pkl
amends "@target.core/RegistryRecord.pkl"

name = "target.<family>"
version = "0.1.0"
# ...
```

Then render to JSON and commit the output to `registry/<family>/<version>.json`.

The validator CLI under `crates/registry-validator/` enforces the
schema (and a few additional invariants) on every PR that touches this
directory; see `.github/workflows/registry-validate.yml`.
