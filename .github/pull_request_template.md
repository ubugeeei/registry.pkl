## Summary

-

## Validation

- [ ] `pkl eval -m . root-files.pkl`
- [ ] `pkl project resolve . packages/target.*`
- [ ] `./scripts/package-artifacts.sh`
- [ ] `./scripts/build-publish-layout.sh`
- [ ] `pnpm check`
- [ ] `pnpm test`
- [ ] `pnpm build`
- [ ] Not applicable, with reason:

## Checklist

- [ ] I kept generated ecosystem files derived from the Pkl source of truth.
- [ ] I included generated `PklProject.deps.json` changes when package dependencies or versions changed.
- [ ] I added or updated package API tests, fixtures, or docs evidence for package behavior changes.
- [ ] I marked package catalog/API examples as planned or experimental unless hosted artifacts are already live.
- [ ] I used neutral package host placeholders for unprovisioned hosts.
- [ ] I checked release risk: semver, immutable artifact URLs, credentials, GitHub environment protection, and dry-run evidence.
- [ ] I updated docs when changing package ownership, release setup, registry metadata, or user-facing examples.
