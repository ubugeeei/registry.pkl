---
title: target.js.rollup.Rollup
description: A typed authoring surface for `rollup.config.json`.
---

# `target.js.rollup.Rollup`

A typed authoring surface for `rollup.config.json`.

Rollup's documented config is a JS module, but Rollup will read a
`rollup.config.json` when invoked with `--config rollup.config.json`.
This module covers the JSON-shaped subset.

Reference: https://rollupjs.org/configuration-options/

## Fields

#### `input`

```pkl
input: (String|Listing<String>|Mapping<String, String>)
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L50-L50)

#### `outputs`

```pkl
outputs: (OutputOptions|Listing<OutputOptions>)
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L51-L51)

#### ``external``

```pkl
`external`: (Listing<String>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L52-L52)

#### `plugins`

```pkl
plugins: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L53-L53)

#### `context`

```pkl
context: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L54-L54)

#### `moduleContext`

```pkl
moduleContext: (Mapping<String, String>|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L55-L55)

#### `treeshake`

```pkl
treeshake: (Boolean|String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L56-L56)

#### `preserveEntrySignatures`

```pkl
preserveEntrySignatures: ("strict"|"allow-extension"|"exports-only"|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L57-L57)

#### `strictDeprecations`

```pkl
strictDeprecations: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L58-L58)

#### `maxParallelFileOps`

```pkl
maxParallelFileOps: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L59-L59)

#### `cache`

```pkl
cache: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L60-L60)

#### `logLevel`

```pkl
logLevel: ("silent"|"warn"|"info"|"debug")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L61-L61)

#### `makeAbsoluteExternalsRelative`

```pkl
makeAbsoluteExternalsRelative: (Boolean|"ifRelativeSource")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L62-L62)

#### `perf`

```pkl
perf: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L63-L63)

#### `shimMissingExports`

```pkl
shimMissingExports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L64-L64)

#### `watch`

```pkl
watch: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L65-L65)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L66-L66)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L203-L203)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L204-L204)

## Classes

### `OutputOptions`

#### `file`

```pkl
file: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L13-L13)

#### `dir`

```pkl
dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L14-L14)

#### `format`

```pkl
format: ("amd"|"cjs"|"es"|"iife"|"system"|"umd")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L15-L15)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L16-L16)

#### `globals`

```pkl
globals: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L17-L17)

#### `entryFileNames`

```pkl
entryFileNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L18-L18)

#### `chunkFileNames`

```pkl
chunkFileNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L19-L19)

#### `assetFileNames`

```pkl
assetFileNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L20-L20)

#### `sourcemap`

```pkl
sourcemap: (Boolean|"inline"|"hidden")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L21-L21)

#### `sourcemapExcludeSources`

```pkl
sourcemapExcludeSources: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L22-L22)

#### `sourcemapFile`

```pkl
sourcemapFile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L23-L23)

#### `banner`

```pkl
banner: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L24-L24)

#### `footer`

```pkl
footer: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L25-L25)

#### `intro`

```pkl
intro: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L26-L26)

#### `outro`

```pkl
outro: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L27-L27)

#### `exports`

```pkl
exports: ("default"|"named"|"none"|"auto")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L28-L28)

#### `extend`

```pkl
extend: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L29-L29)

#### `inlineDynamicImports`

```pkl
inlineDynamicImports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L30-L30)

#### `manualChunks`

```pkl
manualChunks: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L31-L31)

#### `hoistTransitiveImports`

```pkl
hoistTransitiveImports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L32-L32)

#### `paths`

```pkl
paths: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L33-L33)

#### `generatedCode`

```pkl
generatedCode: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L34-L34)

#### `externalLiveBindings`

```pkl
externalLiveBindings: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L35-L35)

#### `esModule`

```pkl
esModule: (Boolean|"if-default-prop")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L36-L36)

#### `freeze`

```pkl
freeze: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L37-L37)

#### `interop`

```pkl
interop: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L38-L38)

#### `minifyInternalExports`

```pkl
minifyInternalExports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L39-L39)

#### `noConflict`

```pkl
noConflict: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L40-L40)

#### `preserveModules`

```pkl
preserveModules: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L41-L41)

#### `preserveModulesRoot`

```pkl
preserveModulesRoot: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L42-L42)

#### `preferConst`

```pkl
preferConst: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L43-L43)

#### `strict`

```pkl
strict: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L44-L44)

#### `systemNullSetters`

```pkl
systemNullSetters: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L45-L45)

#### `validate`

```pkl
validate: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/rollup/Rollup.pkl#L47-L47)

