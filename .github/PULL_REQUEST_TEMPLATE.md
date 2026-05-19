<!--
  Thanks for contributing to registry.pkl. A few notes that save reviewer
  time — drop sections that don't apply.
-->

## Summary

<!--
  One paragraph: what changes, why now, and the user-facing effect.
  If this closes an issue, write `Closes #N`.
-->

## What lands

<!--
  A short bullet list of the concrete files / behaviors added. Skip if the
  summary already covers it.
-->

## Test plan

<!--
  Tick the boxes that apply; add new ones as needed.
-->

- [ ] `bash scripts/test.sh` passes 100% across the family / families touched
- [ ] `bash scripts/render-examples.sh` passes (if any example changed)
- [ ] `bash scripts/render-registry.sh` passes (if any registry record changed)
- [ ] `cargo test --release --workspace` passes (if any Rust code changed)
- [ ] `cargo clippy --release --all-targets -- -D warnings` clean (if any Rust code changed)
- [ ] `pnpm build` passes (if any docs file changed)
- [ ] CI on this PR

## Notes for reviewers

<!--
  Anything reviewers should look at twice (renames, output shape changes,
  schema bumps, security implications, etc.).
-->
