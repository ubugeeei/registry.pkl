---
title: target.js.ViteEnv
description: A typed authoring surface for Vite's `.env*` files.
---

# `target.js.ViteEnv`

A typed authoring surface for Vite's `.env*` files.

Vite's primary configuration lives in `vite.config.ts` (a TypeScript
module that the registry intentionally does not model). The `.env`,
`.env.local`, `.env.<mode>` companions, however, are dotenv text
files that benefit from a typed wrapper: the VITE_* prefix rule, the
`MODE` and `BASE_URL` variables, and per-mode overlays.

`amends "@target.js/vite-env/ViteEnv.pkl"` renders a single dotenv
file. Generate `.env`, `.env.development`, and `.env.production` by
amending three different module instances and routing each through
the multi-file output (see examples/vite-env.pkl).

## Fields

#### `viteVars`

VITE_*-prefixed variables exposed to client bundles via `import.meta.env`.

```pkl
viteVars: Mapping<String, String|Entry> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L23-L23)

#### `serverVars`

Server-only environment variables. Not prefixed with VITE_; available
to the Node process running Vite, not to the client bundle.

```pkl
serverVars: Mapping<String, String|Entry> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L27-L27)

#### `banner`

Banner comments rendered at the top of the file.

```pkl
banner: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L30-L30)

#### `mode`

Mode (development/production/preview) annotated as a comment so the
generated file documents which mode it applies to.

```pkl
mode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L34-L34)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L80-L80)

## Classes

### `Entry`

#### `value`

```pkl
value: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L18-L18)

#### `comment`

```pkl
comment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite-env/ViteEnv.pkl#L19-L19)

