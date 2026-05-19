---
title: target.editor.editorconfig.EditorConfig
description: A typed authoring surface for `.editorconfig`.
---

# `target.editor.editorconfig.EditorConfig`

A typed authoring surface for `.editorconfig`.

`.editorconfig` is an INI-like text file with one or more section
headers (`[glob]`) followed by `key = value` lines. The Pkl standard
library does not ship an INI renderer, but the format is simple enough
to emit directly as text from a typed surface.

## Type aliases

### `IndentStyle`

```pkl
typealias IndentStyle = "tab"|"space"
```

### `EndOfLine`

```pkl
typealias EndOfLine = "lf"|"crlf"|"cr"
```

### `Charset`

```pkl
typealias Charset = "latin1"|"utf-8"|"utf-8-bom"|"utf-16be"|"utf-16le"
```

## Fields

#### `root`

Mark this `.editorconfig` as the project root. Defaults to `true` because
nearly every authored `.editorconfig` lives at a project root.

```pkl
root: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L29-L29)

#### `sections`

Section globs in the order they should appear in the rendered output.
The default `*` section is the common starting point.

```pkl
sections: Mapping<String, Section> = new Mapping {
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L33-L33)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L85-L85)

## Classes

### `Section`

#### `indentStyle`

```pkl
indentStyle: IndentStyle? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L16-L16)

#### `indentSize`

```pkl
indentSize: (Int|"tab")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L17-L17)

#### `tabWidth`

```pkl
tabWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L18-L18)

#### `endOfLine`

```pkl
endOfLine: EndOfLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L19-L19)

#### `charset`

```pkl
charset: Charset? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L20-L20)

#### `trimTrailingWhitespace`

```pkl
trimTrailingWhitespace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L21-L21)

#### `insertFinalNewline`

```pkl
insertFinalNewline: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L22-L22)

#### `maxLineLength`

```pkl
maxLineLength: (Int|"off")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, String|Int|Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/editorconfig/EditorConfig.pkl#L24-L24)

