---
title: target.js.swc.Swc
description: A typed authoring surface for `.swcrc`.
---

# `target.js.swc.Swc`

A typed authoring surface for `.swcrc`.

SWC's config is structured in two nested groups: `jsc` (parser, transform,
target) and `module` (output module format). This module models the most
frequently tuned knobs and forwards the rest via `extra`.

## Fields

#### `jsc`

```pkl
jsc: JscConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L59-L59)

#### ``module``

```pkl
`module`: ModuleConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L60-L60)

#### `minify`

```pkl
minify: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L61-L61)

#### `sourceMaps`

```pkl
sourceMaps: (Boolean|"inline")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L62-L62)

#### `inlineSourcesContent`

```pkl
inlineSourcesContent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L63-L63)

#### `env`

```pkl
env: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L64-L64)

#### `test`

```pkl
test: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L65-L65)

#### `exclude`

```pkl
exclude: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L66-L66)

#### `isModule`

```pkl
isModule: (Boolean|"unknown")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L68-L68)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L191-L191)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L192-L192)

## Classes

### `ParserConfig`

#### `syntax`

```pkl
syntax: ("ecmascript"|"typescript")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L11-L11)

#### `jsx`

```pkl
jsx: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L12-L12)

#### `tsx`

```pkl
tsx: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L13-L13)

#### `decorators`

```pkl
decorators: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L14-L14)

#### `decoratorsBeforeExport`

```pkl
decoratorsBeforeExport: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L15-L15)

#### `dynamicImport`

```pkl
dynamicImport: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L16-L16)

#### `privateMethod`

```pkl
privateMethod: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L17-L17)

#### `functionBind`

```pkl
functionBind: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L18-L18)

#### `exportDefaultFrom`

```pkl
exportDefaultFrom: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L19-L19)

#### `exportNamespaceFrom`

```pkl
exportNamespaceFrom: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L20-L20)

#### `importAssertions`

```pkl
importAssertions: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L21-L21)

#### `topLevelAwait`

```pkl
topLevelAwait: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L23-L23)

### `TransformConfig`

#### `legacyDecorator`

```pkl
legacyDecorator: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L27-L27)

#### `decoratorMetadata`

```pkl
decoratorMetadata: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L28-L28)

#### `react`

```pkl
react: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L29-L29)

#### `optimizer`

```pkl
optimizer: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L30-L30)

#### `treatConstEnumAsEnum`

```pkl
treatConstEnumAsEnum: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L31-L31)

#### `useDefineForClassFields`

```pkl
useDefineForClassFields: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L32-L32)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L33-L33)

### `JscConfig`

#### `parser`

```pkl
parser: ParserConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L37-L37)

#### `target`

```pkl
target: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L38-L38)

#### `loose`

```pkl
loose: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L39-L39)

#### `keepClassNames`

```pkl
keepClassNames: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L40-L40)

#### `externalHelpers`

```pkl
externalHelpers: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L41-L41)

#### `minify`

```pkl
minify: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L42-L42)

#### `transform`

```pkl
transform: TransformConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L43-L43)

#### `paths`

```pkl
paths: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L44-L44)

#### `baseUrl`

```pkl
baseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L46-L46)

### `ModuleConfig`

#### `type`

```pkl
type: ("commonjs"|"amd"|"umd"|"es6"|"nodenext"|"systemjs")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L50-L50)

#### `strict`

```pkl
strict: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L51-L51)

#### `strictMode`

```pkl
strictMode: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L52-L52)

#### `lazy`

```pkl
lazy: (Boolean|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L53-L53)

#### `noInterop`

```pkl
noInterop: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L54-L54)

#### `importInterop`

```pkl
importInterop: ("swc"|"babel"|"node"|"none")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L55-L55)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/swc/Swc.pkl#L56-L56)

