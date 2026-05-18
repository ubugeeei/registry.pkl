# Registry Records

Place proposed registry records under this directory as JSON files.

Recommended layout:

```text
registry/<package-name>/<version>.json
```

Validate every checked-in record:

```bash
node scripts/validate-registry-records.mjs
```

Validate only records changed against a base ref:

```bash
node scripts/validate-registry-records.mjs --changed --base-ref origin/main
```

The validator treats each `name@version` as immutable once it exists on the
base ref. Publish a new version instead of editing or deleting an existing
record.
