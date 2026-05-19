---
title: target.js.Oxlint
description: A typed authoring surface for `.oxlintrc.json`.
---

# `target.js.Oxlint`

A typed authoring surface for `.oxlintrc.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L6-L6)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L7-L7)

#### `rules`

```pkl
rules: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L8-L8)

#### `globals`

```pkl
globals: Mapping<String, String|Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L9-L9)

#### `ignorePatterns`

```pkl
ignorePatterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L10-L10)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L11-L11)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L12-L12)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L30-L30)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxlint/Oxlint.pkl#L31-L31)

