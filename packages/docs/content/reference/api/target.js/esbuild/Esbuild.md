---
title: target.js.esbuild.Esbuild
description: A typed authoring surface for an `esbuild.config.json`.
---

# `target.js.esbuild.Esbuild`

A typed authoring surface for an `esbuild.config.json`.

esbuild doesn't ship a built-in config-file mode — it ingests options
as CLI flags or JS API arguments. This module models the JSON-shaped
argument the JS API accepts, so authors can render an esbuild build
options object and pass it via a tiny wrapper script.

Reference: https://esbuild.github.io/api/

## Type aliases

### `Platform`

```pkl
typealias Platform = "browser"|"node"|"neutral"
```

### `Format`

```pkl
typealias Format = "iife"|"cjs"|"esm"
```

### `Target`

```pkl
typealias Target = String|Listing<String>
```

### `Loader`

```pkl
typealias Loader = 
```

## Fields

#### `entryPoints`

```pkl
entryPoints: (Listing<String>|Mapping<String, String>) = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L28-L28)

#### `bundle`

```pkl
bundle: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L29-L29)

#### `write`

```pkl
write: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L30-L30)

#### `splitting`

```pkl
splitting: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L31-L31)

#### `outfile`

```pkl
outfile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L32-L32)

#### `outdir`

```pkl
outdir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L33-L33)

#### `outbase`

```pkl
outbase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L34-L34)

#### `outExtension`

```pkl
outExtension: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L35-L35)

#### `platform`

```pkl
platform: Platform? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L36-L36)

#### `format`

```pkl
format: Format? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L37-L37)

#### `target`

```pkl
target: Target? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L38-L38)

#### ``external``

```pkl
`external`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L39-L39)

#### `loader`

```pkl
loader: Mapping<String, Loader> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L40-L40)

#### `sourcemap`

```pkl
sourcemap: (Boolean|"external"|"inline"|"both"|"linked")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L41-L41)

#### `sourcesContent`

```pkl
sourcesContent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L42-L42)

#### `sourceRoot`

```pkl
sourceRoot: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L43-L43)

#### `sourcefile`

```pkl
sourcefile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L44-L44)

#### `minify`

```pkl
minify: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L45-L45)

#### `minifyWhitespace`

```pkl
minifyWhitespace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L46-L46)

#### `minifyIdentifiers`

```pkl
minifyIdentifiers: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L47-L47)

#### `minifySyntax`

```pkl
minifySyntax: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L48-L48)

#### `lineLimit`

```pkl
lineLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L49-L49)

#### `treeShaking`

```pkl
treeShaking: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L50-L50)

#### `ignoreAnnotations`

```pkl
ignoreAnnotations: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L51-L51)

#### `legalComments`

```pkl
legalComments: ("none"|"inline"|"eof"|"linked"|"external")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L52-L52)

#### `banner`

```pkl
banner: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L53-L53)

#### `footer`

```pkl
footer: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L54-L54)

#### `charset`

```pkl
charset: ("ascii"|"utf8")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L55-L55)

#### `keepNames`

```pkl
keepNames: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L56-L56)

#### `mangleProps`

```pkl
mangleProps: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L57-L57)

#### `reserveProps`

```pkl
reserveProps: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L58-L58)

#### `mangleQuoted`

```pkl
mangleQuoted: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L59-L59)

#### `mangleCache`

```pkl
mangleCache: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L60-L60)

#### `drop`

```pkl
drop: Listing<"console"|"debugger"> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L61-L61)

#### `dropLabels`

```pkl
dropLabels: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L62-L62)

#### `pure`

```pkl
pure: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L63-L63)

#### `globalName`

```pkl
globalName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L64-L64)

#### `inject`

```pkl
inject: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L65-L65)

#### `alias`

```pkl
alias: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L66-L66)

#### `define`

```pkl
define: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L67-L67)

#### `resolveExtensions`

```pkl
resolveExtensions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L68-L68)

#### `mainFields`

```pkl
mainFields: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L69-L69)

#### `conditions`

```pkl
conditions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L70-L70)

#### `publicPath`

```pkl
publicPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L71-L71)

#### `chunkNames`

```pkl
chunkNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L72-L72)

#### `entryNames`

```pkl
entryNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L73-L73)

#### `assetNames`

```pkl
assetNames: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L74-L74)

#### `tsconfig`

```pkl
tsconfig: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L75-L75)

#### `tsconfigRaw`

```pkl
tsconfigRaw: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L76-L76)

#### `nodePaths`

```pkl
nodePaths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L77-L77)

#### `absWorkingDir`

```pkl
absWorkingDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L78-L78)

#### `preserveSymlinks`

```pkl
preserveSymlinks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L79-L79)

#### `logLevel`

```pkl
logLevel: ("silent"|"error"|"warning"|"info"|"debug"|"verbose")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L80-L80)

#### `logLimit`

```pkl
logLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L81-L81)

#### `logOverride`

```pkl
logOverride: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L82-L82)

#### `color`

```pkl
color: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L83-L83)

#### `metafile`

```pkl
metafile: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L84-L84)

#### `allowOverwrite`

```pkl
allowOverwrite: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L85-L85)

#### `plugins`

```pkl
plugins: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L86-L86)

#### `supported`

```pkl
supported: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L87-L87)

#### `jsx`

```pkl
jsx: ("transform"|"preserve"|"automatic")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L88-L88)

#### `jsxOptions`

```pkl
jsxOptions: JsxOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L89-L89)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L90-L90)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L227-L227)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L228-L228)

## Classes

### `JsxOptions`

#### `factory`

```pkl
factory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L21-L21)

#### `fragment`

```pkl
fragment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L22-L22)

#### `importSource`

```pkl
importSource: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L23-L23)

#### `development`

```pkl
development: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L24-L24)

#### `sideEffects`

```pkl
sideEffects: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/esbuild/Esbuild.pkl#L25-L25)

