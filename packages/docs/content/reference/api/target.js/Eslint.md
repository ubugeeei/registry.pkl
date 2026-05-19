---
title: target.js.Eslint
description: A typed authoring surface for `.eslintrc.json` (legacy config).
---

# `target.js.Eslint`

A typed authoring surface for `.eslintrc.json` (legacy config).

Targets the JSON config schema documented at
https://eslint.org/docs/latest/use/configure/configuration-files-deprecated.
The newer flat-config (`eslint.config.js`) is intentionally not modeled
here because its surface is a JavaScript module, not a JSON document.

## Type aliases

### `Globals`

```pkl
typealias Globals = Mapping<String, "readonly"|"writable"|"off"|Boolean>
```

### `RuleConfig`

```pkl
typealias RuleConfig = String|Int|Listing<Any>
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L42-L42)

#### `root`

```pkl
root: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L43-L43)

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L44-L44)

#### `parser`

```pkl
parser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L45-L45)

#### `parserOptions`

```pkl
parserOptions: ParserOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L46-L46)

#### `env`

```pkl
env: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L47-L47)

#### `globals`

```pkl
globals: Globals = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L48-L48)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L49-L49)

#### `rules`

```pkl
rules: Mapping<String, RuleConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L50-L50)

#### `overrides`

```pkl
overrides: Listing<Override> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L51-L51)

#### `ignorePatterns`

```pkl
ignorePatterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L52-L52)

#### `noInlineConfig`

```pkl
noInlineConfig: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L53-L53)

#### `reportUnusedDisableDirectives`

```pkl
reportUnusedDisableDirectives: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L54-L54)

#### `settings`

```pkl
settings: Settings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L55-L55)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L56-L56)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L164-L164)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L165-L165)

## Classes

### `ParserOptions`

#### `ecmaVersion`

```pkl
ecmaVersion: Int|"latest"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L15-L15)

#### `sourceType`

```pkl
sourceType: "script"|"module"|"commonjs"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L16-L16)

#### `ecmaFeatures`

```pkl
ecmaFeatures: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L17-L17)

#### `project`

```pkl
project: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L18-L18)

#### `tsconfigRootDir`

```pkl
tsconfigRootDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L19-L19)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L20-L20)

### `Override`

#### `files`

```pkl
files: String|Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L24-L24)

#### `excludedFiles`

```pkl
excludedFiles: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L25-L25)

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L26-L26)

#### `rules`

```pkl
rules: Mapping<String, RuleConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L27-L27)

#### `env`

```pkl
env: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L28-L28)

#### `parser`

```pkl
parser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L29-L29)

#### `parserOptions`

```pkl
parserOptions: ParserOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L30-L30)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L31-L31)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L32-L32)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L33-L33)

### `Settings`

#### `react`

```pkl
react: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L37-L37)

#### `importResolver`

```pkl
importResolver: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/eslint/Eslint.pkl#L39-L39)

