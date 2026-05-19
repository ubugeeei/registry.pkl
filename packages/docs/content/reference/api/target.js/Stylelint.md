---
title: target.js.Stylelint
description: A typed authoring surface for `.stylelintrc.json` / `stylelint.config.json`.
---

# `target.js.Stylelint`

A typed authoring surface for `.stylelintrc.json` / `stylelint.config.json`.

## Type aliases

### `RuleValue`

A stylelint rule value:
  - `null` disables the rule
  - `Boolean` toggles it on with defaults
  - `String` / `Int` / `Listing` are the rule's primary option
  - `Listing<Any>` ([primary, secondary]) gives both options

```pkl
typealias RuleValue = Null|Boolean|String|Int|Float|Listing<Any>|Mapping<String, Any>
```

## Fields

#### ``extends``

```pkl
`extends`: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L22-L22)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L23-L23)

#### `customSyntax`

```pkl
customSyntax: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L24-L24)

#### `rules`

```pkl
rules: Mapping<String, RuleValue> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L25-L25)

#### `ignoreFiles`

```pkl
ignoreFiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L26-L26)

#### `overrides`

```pkl
overrides: Listing<OverrideEntry> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L27-L27)

#### `allowEmptyInput`

```pkl
allowEmptyInput: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L28-L28)

#### `cache`

```pkl
cache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L29-L29)

#### `defaultSeverity`

```pkl
defaultSeverity: ("warning"|"error")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L30-L30)

#### `reportNeedlessDisables`

```pkl
reportNeedlessDisables: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L31-L31)

#### `reportInvalidScopeDisables`

```pkl
reportInvalidScopeDisables: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L32-L32)

#### `reportDescriptionlessDisables`

```pkl
reportDescriptionlessDisables: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L33-L33)

#### `fix`

```pkl
fix: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L35-L35)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L104-L104)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L105-L105)

## Classes

### `OverrideEntry`

#### `files`

```pkl
files: String|Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L14-L14)

#### `customSyntax`

```pkl
customSyntax: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L15-L15)

#### `rules`

```pkl
rules: Mapping<String, RuleValue> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L16-L16)

#### `extends_`

```pkl
extends_: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L17-L17)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/stylelint/Stylelint.pkl#L19-L19)

