---
title: Targets
description: Supported and proposed configuration targets across ecosystems.
---

# Targets

This ecosystem is only useful if the target selection is opinionated.

## How To Read This Section

Use targets when the question starts from a downstream file or tool family.

- Go to [Packages](../packages/index.html) if you want package ownership and entrypoints.
- Go to [Reference](../reference/tool-matrix/index.html) if you want the compact package-to-file lookup table.

## Mandatory Targets

- `package.json`: Package metadata, scripts, and dependency policy.
- `mise.toml`: Toolchain pinning and workspace task entrypoints.
- `Cargo.toml`: Package identity, dependencies, and cargo workspace metadata.
- `.gitlab-ci.yml`: Pipeline stages, jobs, and merge-time policy.
- `.github/workflows/*.yml`: GitHub Actions workflows for build, release, and verification.
- `.oxlintrc.json`: Lint rules and static-analysis posture.
- `.oxfmtrc.json`: Formatter defaults that stay readable as source code.
- `.vscode/settings.json`: Workspace-level editor behavior and tooling integration.
- `.prettierrc`: Formatting compatibility for projects that still standardize on Prettier.
- `tsconfig.json`: Compiler options, path aliases, and project references.
- `biome.json`: Lint, format, and assist settings in one typed entrypoint.
- `pnpm-workspace.yaml`: Workspace package boundaries and monorepo layout.
- `deno.json`: Runtime flags, task aliases, and import-map-adjacent config.
- `clippy.toml`: Lint allowances and policy for Rust codebases.

## Strong Additional Targets

- `.github/dependabot.yml`: Dependency update policy with ecosystem-specific schedules and grouping.
- `renovate.json`: Dependency update policy and grouping rules.
- `devcontainer.json`: Portable local environments for editors and agents.
- `.vscode/extensions.json`: Recommended editor extension bundle.
- `turbo.json`: Task graph and caching behavior for monorepos.
- `rustfmt.toml`: Rust formatting policy with reusable presets.
- `wrangler.toml`: Workers deployment, bindings, and environment metadata.
- `docker-compose.yml`: Service topology and local stack orchestration.
- `lefthook.yml`: Fast pre-commit and pre-push automation.

## New Important Bucket: AI Agent Config

Recent AI tooling has created a new class of config worth standardizing:

- MCP server declarations: Attach tools and servers without hand-authoring nested JSON.
- Model and provider selection: Pin model families, fallbacks, and provider-specific options.
- Sandbox and approval policy: Express execution boundaries with composable presets.
- Instruction composition: Amend shared profiles instead of copying long prompts around.
- Tool allowlists and runtime settings: Keep tool exposure explicit and reviewable.

See [AI Agent Config](./agents.md).
