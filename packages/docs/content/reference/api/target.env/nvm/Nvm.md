---
title: target.env.nvm.Nvm
description: A typed authoring surface for `.nvmrc`.
---

# `target.env.nvm.Nvm`

A typed authoring surface for `.nvmrc`.

`.nvmrc` is a single-line file containing a Node.js version string
(or alias like "lts/*"). This module models that scalar plus an
optional leading comment block, since nvm tolerates `#`-prefixed
comment lines.

## Fields

#### `version`

Node version or alias (e.g. "20.10.0", "lts/*", "node").

```pkl
version: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/nvm/Nvm.pkl#L10-L10)

#### `comments`

Leading `#`-prefixed comment lines to write before the version.

```pkl
comments: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/nvm/Nvm.pkl#L13-L13)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/nvm/Nvm.pkl#L22-L22)

