---
title: target.lint.commitlint.Commitlint
description: A typed authoring surface for `commitlint.config.json`.
---

# `target.lint.commitlint.Commitlint`

A typed authoring surface for `commitlint.config.json`.

## Type aliases

### `Severity`

commitlint severity. Allowed values are `0` (off), `1` (warn), or `2` (error).

```pkl
typealias Severity = Int
```

### `Applicable`

```pkl
typealias Applicable = "always"|"never"
```

### `RuleConfig`

commitlint rule entry — the canonical `[severity, applicable, value]` triple.

```pkl
typealias RuleConfig = Listing<Any>
```

## Fields

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L18-L18)

#### `plugins`

```pkl
plugins: Listing<String|Plugin> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L19-L19)

#### `parserPreset`

```pkl
parserPreset: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L20-L20)

#### `formatter`

```pkl
formatter: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L21-L21)

#### `defaultIgnores`

```pkl
defaultIgnores: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L22-L22)

#### `rules`

Each entry is the canonical [severity, applicable, value] triple
rendered as a JSON array. Use `new Listing { 2; "always"; 100 }`.

```pkl
rules: Mapping<String, RuleConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L26-L26)

#### `ignores`

```pkl
ignores: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L29-L29)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L60-L60)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L61-L61)

## Classes

### `Plugin`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L14-L14)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/commitlint/Commitlint.pkl#L15-L15)

