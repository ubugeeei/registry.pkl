---
title: target.js.Husky
description: A typed authoring surface for `.husky/` git hook scripts.
---

# `target.js.Husky`

A typed authoring surface for `.husky/` git hook scripts.

Husky v9+ replaces the legacy `package.json` `husky` block with raw
shell scripts under `.husky/`. Each hook is a tiny shell file that
husky installs into `.git/hooks`. This module models a single hook
script — render it once per file with the appropriate output path.

Example: `examples/husky.pkl` renders a pre-commit script.

## Fields

#### `shebang`

Optional shebang. Husky v9 documents that hooks no longer need a shebang,
but legacy v8 scripts and CI tooling may still expect one.

```pkl
shebang: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/husky/Husky.pkl#L13-L13)

#### `body`

Body of the hook script. Each entry is a single shell line.

husky v9 deprecated the legacy `. "$(dirname -- "$0")/_/husky.sh"`
preamble — set `legacy = true` if you still need it for v8.

```pkl
body: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/husky/Husky.pkl#L19-L19)

#### `legacy`

Render the v8 husky.sh preamble. Defaults to `false` for v9 compatibility.

```pkl
legacy: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/husky/Husky.pkl#L22-L22)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/husky/Husky.pkl#L40-L40)

