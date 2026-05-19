# Contributing to registry.pkl

Thanks for the interest. The catalog is opinionated about a few things;
following the conventions here makes a review a sanity-check rather than
a design discussion.

## What this repo is

`registry.pkl` ships two artifacts:

1. A family of typed Pkl modules under `packages/target.*` that author
   real on-disk config files (`package.json`, `.gitlab-ci.yml`, etc).
2. A registry index (`registry/<family>/<version>.json`) consumed by the
   docs site search and validated by `crates/registry-validator`.

Source-of-truth files are committed and rendered outputs (e.g.
`package.json` at the repo root) are gitignored. Pkl wins.

## The change loop

Most changes follow the same shape:

```bash
# 1. Regenerate workspace manifests from their Pkl sources.
pkl eval -m . root-files.pkl

# 2. Run the test suite — every family has its own pkl test set.
bash scripts/test.sh

# 3. Sanity-check every example renders.
bash scripts/render-examples.sh

# 4. If you touched a typed module, regenerate the API reference.
cargo build --release -p pkl-reference
./target/release/pkl-reference --packages-root packages \
  --output packages/docs/content/reference/api \
  --source-url-template "https://github.com/ubugeeei/registry.pkl/blob/main/packages/%path#L%line-L%endLine"

# 5. If you touched a registry record source, regenerate the JSON.
bash scripts/render-registry.sh

# 6. If you touched a Rust crate, the usual cycle.
cargo fmt --all -- --check
cargo clippy --release --all-targets -- -D warnings
cargo test --release --workspace

# 7. Build the docs.
cd packages/docs && pnpm build
```

CI runs all of the above. If your PR is green locally, it'll be green there.

## Adding a typed Pkl module

The standard recipe for a new tool — say `target.js/<tool>/<Tool>.pkl`:

1. Open an issue with the `feat(<family>): add typed Pkl module for <tool>`
   template (one is provided under [.github/ISSUE_TEMPLATE](.github/ISSUE_TEMPLATE/schema-add.yml)).
2. Add the module file under `packages/<family>/<tool>/<Tool>.pkl`.
3. Add a test under `packages/<family>/tests/<Tool>Test.pkl`. Tests use
   `amends "pkl:test"` with `facts { ... }` blocks.
4. Add a runnable example under `examples/<tool>.pkl`. It should
   `amends "@<family>/<tool>/<Tool>.pkl"` and demonstrate every
   non-trivial knob.
5. Update [reference/tool-matrix.md](packages/docs/content/reference/tool-matrix.md) with the new row.
6. Update the family's docs page under
   `packages/docs/content/packages/<family>.md` to include the new module
   in the feature cards.

The validator + search index pick up everything else automatically.

## Adding a new family

1. Open the family-add issue template.
2. Add `packages/target.<family>/` with at least one module, plus
   `PklProject` (amending `../basePklProject.pkl`), and `tests/`.
3. Wire the family into the root `PklProject`'s dependencies.
4. Add it to:
   - `scripts/test.sh` family list
   - `scripts/release.sh` regex
   - `.github/workflows/release-package.yml` validator regex
   - `crates/release-cut/src/lib.rs::KNOWN_FAMILIES`
   - `packages/docs/content/packages/index.md` feature cards
5. Add `registry-records/target.<family>/0.1.0.pkl` amending
   `@target.core/FirstPartyRecord.pkl`. Run `bash scripts/render-registry.sh`
   to materialize the JSON.

## Cutting a release

`cargo run -p release-cut -- target.<family> 0.<minor>.<patch>` does the
boilerplate (PklProject version bump + new registry record source with
`supersedes`). Then:

```bash
bash scripts/render-registry.sh
./target/release/search-index \
  --registry registry \
  --output dist/docs/registry-search.json \
  --emit-markdown packages/docs/content/reference/by-target.md
bash scripts/release.sh target.<family> 0.<minor>.<patch>
```

CI handles the actual GitHub Release publish via
`.github/workflows/release-package.yml`.

## Code style

- Rust: `cargo fmt`, `cargo clippy --all-targets -- -D warnings`. Lint
  config lives in the workspace `Cargo.toml`.
- Pkl: keep doc comments (`///`) on every public field, class, and
  module. The `pkl-reference` CLI mines those for the auto-generated
  API docs.
- Markdown: keep lines under ~100 characters. CI does not enforce this.
- Commits: conventional commits — `feat(family): subject`,
  `fix(family): subject`, etc.

## Security

See [SECURITY.md](SECURITY.md) for the supported channels.
