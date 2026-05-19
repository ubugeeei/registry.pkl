---
title: target.editor.Settings
description: A typed authoring surface for `.vscode/settings.json`.
---

# `target.editor.Settings`

A typed authoring surface for `.vscode/settings.json`.

## Fields

#### `editor`

```pkl
editor: EditorSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L48-L48)

#### `files`

```pkl
files: FilesSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L49-L49)

#### `search`

```pkl
search: SearchSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L50-L50)

#### `typescript`

```pkl
typescript: TypeScriptSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L51-L51)

#### `javascript`

```pkl
javascript: JavaScriptSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L52-L52)

#### `git`

```pkl
git: GitSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L53-L53)

#### `window`

```pkl
window: WindowSettings = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L54-L54)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L55-L55)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L131-L131)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L132-L132)

## Classes

### `EditorSettings`

#### `formatOnSave`

```pkl
formatOnSave: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L7-L7)

#### `defaultFormatter`

```pkl
defaultFormatter: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L8-L8)

#### `tabSize`

```pkl
tabSize: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L9-L9)

#### `insertSpaces`

```pkl
insertSpaces: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L10-L10)

#### `rulers`

```pkl
rulers: Listing<Int> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L11-L11)

#### `codeActionsOnSave`

```pkl
codeActionsOnSave: Mapping<String, String|Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L12-L12)

### `FilesSettings`

#### `insertFinalNewline`

```pkl
insertFinalNewline: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L16-L16)

#### `trimTrailingWhitespace`

```pkl
trimTrailingWhitespace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L17-L17)

#### `exclude`

```pkl
exclude: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L18-L18)

#### `watcherExclude`

```pkl
watcherExclude: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L19-L19)

#### `associations`

```pkl
associations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L20-L20)

### `SearchSettings`

#### `exclude`

```pkl
exclude: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L24-L24)

#### `useIgnoreFiles`

```pkl
useIgnoreFiles: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L25-L25)

### `TypeScriptSettings`

#### `tsdk`

```pkl
tsdk: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L29-L29)

#### `enablePromptUseWorkspaceTsdk`

```pkl
enablePromptUseWorkspaceTsdk: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L30-L30)

#### `preferGoToSourceDefinition`

```pkl
preferGoToSourceDefinition: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L31-L31)

### `JavaScriptSettings`

#### `suggestCompleteFunctionCalls`

```pkl
suggestCompleteFunctionCalls: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L35-L35)

#### `quoteStyle`

```pkl
quoteStyle: "auto"|"single"|"double"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L36-L36)

### `GitSettings`

#### `autofetch`

```pkl
autofetch: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L40-L40)

#### `enableSmartCommit`

```pkl
enableSmartCommit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L41-L41)

### `WindowSettings`

#### `zoomLevel`

```pkl
zoomLevel: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Settings.pkl#L45-L45)

