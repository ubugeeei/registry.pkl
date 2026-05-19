---
title: target.js.tsconfig.TsConfig
description: A typed authoring surface for `tsconfig.json`.
---

# `target.js.tsconfig.TsConfig`

A typed authoring surface for `tsconfig.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L46-L46)

#### ``extends``

```pkl
`extends`: String|Listing<String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L47-L47)

#### `compilerOptions`

```pkl
compilerOptions: CompilerOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L48-L48)

#### `references`

```pkl
references: Listing<ProjectReference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L49-L49)

#### `files`

```pkl
files: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L50-L50)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L51-L51)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L52-L52)

#### `watchOptions`

```pkl
watchOptions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L53-L53)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L54-L54)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L196-L196)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L197-L197)

## Classes

### `ProjectReference`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L7-L7)

#### `prepend`

```pkl
prepend: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L8-L8)

### `CompilerOptions`

#### `target`

```pkl
target: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L12-L12)

#### ``module``

```pkl
`module`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L13-L13)

#### `moduleResolution`

```pkl
moduleResolution: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L14-L14)

#### `lib`

```pkl
lib: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L15-L15)

#### `jsx`

```pkl
jsx: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L16-L16)

#### `jsxImportSource`

```pkl
jsxImportSource: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L17-L17)

#### `allowJs`

```pkl
allowJs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L18-L18)

#### `checkJs`

```pkl
checkJs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L19-L19)

#### `declaration`

```pkl
declaration: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L20-L20)

#### `declarationMap`

```pkl
declarationMap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L21-L21)

#### `emitDeclarationOnly`

```pkl
emitDeclarationOnly: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L22-L22)

#### `sourceMap`

```pkl
sourceMap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L23-L23)

#### `inlineSourceMap`

```pkl
inlineSourceMap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L24-L24)

#### `outDir`

```pkl
outDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L25-L25)

#### `rootDir`

```pkl
rootDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L26-L26)

#### `baseUrl`

```pkl
baseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L27-L27)

#### `paths`

```pkl
paths: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L28-L28)

#### `types`

```pkl
types: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L29-L29)

#### `typeRoots`

```pkl
typeRoots: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L30-L30)

#### `resolveJsonModule`

```pkl
resolveJsonModule: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L31-L31)

#### `esModuleInterop`

```pkl
esModuleInterop: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L32-L32)

#### `isolatedModules`

```pkl
isolatedModules: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L33-L33)

#### `moduleDetection`

```pkl
moduleDetection: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L34-L34)

#### `noEmit`

```pkl
noEmit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L35-L35)

#### `noUnusedLocals`

```pkl
noUnusedLocals: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L36-L36)

#### `noUnusedParameters`

```pkl
noUnusedParameters: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L37-L37)

#### `strict`

```pkl
strict: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L38-L38)

#### `skipLibCheck`

```pkl
skipLibCheck: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L39-L39)

#### `verbatimModuleSyntax`

```pkl
verbatimModuleSyntax: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L40-L40)

#### `allowSyntheticDefaultImports`

```pkl
allowSyntheticDefaultImports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L41-L41)

#### `forceConsistentCasingInFileNames`

```pkl
forceConsistentCasingInFileNames: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L42-L42)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tsconfig/TsConfig.pkl#L43-L43)

