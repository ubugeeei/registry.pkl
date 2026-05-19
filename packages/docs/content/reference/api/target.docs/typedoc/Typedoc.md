---
title: target.docs.typedoc.Typedoc
description: A typed authoring surface for `typedoc.json`.
---

# `target.docs.typedoc.Typedoc`

A typed authoring surface for `typedoc.json`.

## Type aliases

### `EntryPointStrategy`

```pkl
typealias EntryPointStrategy = "resolve"|"expand"|"packages"|"merge"|"legacy-packages"
```

### `Theme`

```pkl
typealias Theme = "default"|String
```

### `Visibility`

```pkl
typealias Visibility = "always"|"limited"|"never"|"hidden"
```

### `SortMode`

```pkl
typealias SortMode = "source-order"|"alphabetical"|"alphabetical-ignoring-documents"|"enum-value-ascending"|"enum-value-descending"|"enum-member-source-order"|"static-first"|"instance-first"|"visibility"|"required-first"|"kind"|"external-last"|"documents-first"|"documents-last"
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L11-L11)

#### `entryPoints`

```pkl
entryPoints: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L12-L12)

#### `entryPointStrategy`

```pkl
entryPointStrategy: EntryPointStrategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L13-L13)

#### ``out``

```pkl
`out`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L14-L14)

#### `json`

```pkl
json: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L15-L15)

#### `pretty`

```pkl
pretty: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L16-L16)

#### `hideGenerator`

```pkl
hideGenerator: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L17-L17)

#### `disableSources`

```pkl
disableSources: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L18-L18)

#### `gitRevision`

```pkl
gitRevision: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L19-L19)

#### `gitRemote`

```pkl
gitRemote: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L20-L20)

#### `readme`

```pkl
readme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L21-L21)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L22-L22)

#### `externalPattern`

```pkl
externalPattern: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L23-L23)

#### `excludeExternals`

```pkl
excludeExternals: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L24-L24)

#### `excludeNotDocumented`

```pkl
excludeNotDocumented: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L25-L25)

#### `excludePrivate`

```pkl
excludePrivate: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L26-L26)

#### `excludeProtected`

```pkl
excludeProtected: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L27-L27)

#### `excludeReferences`

```pkl
excludeReferences: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L28-L28)

#### `excludeInternal`

```pkl
excludeInternal: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L29-L29)

#### `excludeCategories`

```pkl
excludeCategories: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L30-L30)

#### `plugin`

```pkl
plugin: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L31-L31)

#### `theme`

```pkl
theme: Theme? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L32-L32)

#### `lightHighlightTheme`

```pkl
lightHighlightTheme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L33-L33)

#### `darkHighlightTheme`

```pkl
darkHighlightTheme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L34-L34)

#### `highlightLanguages`

```pkl
highlightLanguages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L35-L35)

#### `customCss`

```pkl
customCss: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L36-L36)

#### `markedOptions`

```pkl
markedOptions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L37-L37)

#### `basePath`

```pkl
basePath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L38-L38)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L39-L39)

#### `includeVersion`

```pkl
includeVersion: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L40-L40)

#### `disableGit`

```pkl
disableGit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L41-L41)

#### `sourceLinkTemplate`

```pkl
sourceLinkTemplate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L42-L42)

#### `gitHubPages`

```pkl
gitHubPages: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L43-L43)

#### `htmlLang`

```pkl
htmlLang: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L44-L44)

#### `useTsLinkResolution`

```pkl
useTsLinkResolution: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L45-L45)

#### `preserveLinkText`

```pkl
preserveLinkText: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L46-L46)

#### `jsDocCompatibility`

```pkl
jsDocCompatibility: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L47-L47)

#### `suppressCommentWarningsInDeclarationFiles`

```pkl
suppressCommentWarningsInDeclarationFiles: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L48-L48)

#### `commentStyle`

```pkl
commentStyle: ("jsdoc"|"block"|"line"|"all")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L49-L49)

#### `useSpecificComment`

```pkl
useSpecificComment: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L50-L50)

#### `favicon`

```pkl
favicon: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L51-L51)

#### `sort`

```pkl
sort: Listing<SortMode> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L52-L52)

#### `groupOrder`

```pkl
groupOrder: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L53-L53)

#### `categoryOrder`

```pkl
categoryOrder: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L54-L54)

#### `defaultCategory`

```pkl
defaultCategory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L55-L55)

#### `categorizeByGroup`

```pkl
categorizeByGroup: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L56-L56)

#### `visibilityFilters`

```pkl
visibilityFilters: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L57-L57)

#### `searchInComments`

```pkl
searchInComments: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L58-L58)

#### `searchInDocuments`

```pkl
searchInDocuments: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L59-L59)

#### `cleanOutputDir`

```pkl
cleanOutputDir: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L60-L60)

#### `titleLink`

```pkl
titleLink: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L61-L61)

#### `navigationLinks`

```pkl
navigationLinks: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L62-L62)

#### `sidebarLinks`

```pkl
sidebarLinks: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L63-L63)

#### `treatWarningsAsErrors`

```pkl
treatWarningsAsErrors: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L64-L64)

#### `treatValidationWarningsAsErrors`

```pkl
treatValidationWarningsAsErrors: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L65-L65)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L66-L66)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L213-L213)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/typedoc/Typedoc.pkl#L214-L214)

