---
title: target.editor.Config
description: A typed authoring surface for Helix's `config.toml`.
---

# `target.editor.Config`

A typed authoring surface for Helix's `config.toml`.

Reference: https://docs.helix-editor.com/configuration.html

## Fields

#### `theme`

```pkl
theme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L91-L91)

#### `editor`

```pkl
editor: EditorSettings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L92-L92)

#### `keys`

```pkl
keys: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L93-L93)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L94-L94)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L294-L294)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L295-L295)

## Classes

### `IndentGuides`

#### `render`

```pkl
render: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L10-L10)

#### `character`

```pkl
character: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L11-L11)

#### `skip_levels`

```pkl
skip_levels: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L12-L12)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L13-L13)

### `Cursor`

#### `normal`

```pkl
normal: ("block"|"bar"|"underline"|"hidden")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L17-L17)

#### `insert`

```pkl
insert: ("block"|"bar"|"underline"|"hidden")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L18-L18)

#### `select`

```pkl
select: ("block"|"bar"|"underline"|"hidden")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L19-L19)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L20-L20)

### `StatusLine`

#### `left`

```pkl
left: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L24-L24)

#### `center`

```pkl
center: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L25-L25)

#### `right`

```pkl
right: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L26-L26)

#### `separator`

```pkl
separator: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L27-L27)

#### `mode`

```pkl
mode: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L29-L29)

### `LspSettings`

#### `enable`

```pkl
enable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L33-L33)

#### `display_messages`

```pkl
display_messages: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L34-L34)

#### `auto_signature_help`

```pkl
auto_signature_help: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L35-L35)

#### `display_inlay_hints`

```pkl
display_inlay_hints: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L36-L36)

#### `display_signature_help_docs`

```pkl
display_signature_help_docs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L37-L37)

#### `snippets`

```pkl
snippets: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L38-L38)

#### `goto_reference_include_declaration`

```pkl
goto_reference_include_declaration: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L39-L39)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L40-L40)

### `FilePicker`

#### ``hidden``

```pkl
`hidden`: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L44-L44)

#### `follow_symlinks`

```pkl
follow_symlinks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L45-L45)

#### `parents`

```pkl
parents: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L46-L46)

#### `ignore`

```pkl
ignore: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L47-L47)

#### `git_ignore`

```pkl
git_ignore: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L48-L48)

#### `git_global`

```pkl
git_global: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L49-L49)

#### `git_exclude`

```pkl
git_exclude: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L50-L50)

#### `max_depth`

```pkl
max_depth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L51-L51)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L52-L52)

### `EditorSettings`

#### `scrolloff`

```pkl
scrolloff: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L56-L56)

#### `mouse`

```pkl
mouse: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L57-L57)

#### `middle_click_paste`

```pkl
middle_click_paste: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L58-L58)

#### `scroll_lines`

```pkl
scroll_lines: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L59-L59)

#### `shell`

```pkl
shell: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L60-L60)

#### `line_number`

```pkl
line_number: ("absolute"|"relative")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L61-L61)

#### `cursorline`

```pkl
cursorline: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L62-L62)

#### `cursorcolumn`

```pkl
cursorcolumn: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L63-L63)

#### `gutters`

```pkl
gutters: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L64-L64)

#### `auto_completion`

```pkl
auto_completion: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L65-L65)

#### `auto_format`

```pkl
auto_format: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L66-L66)

#### `auto_save`

```pkl
auto_save: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L67-L67)

#### `completion_trigger_len`

```pkl
completion_trigger_len: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L68-L68)

#### `completion_replace`

```pkl
completion_replace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L69-L69)

#### `idle_timeout`

```pkl
idle_timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L70-L70)

#### `preview_completion_insert`

```pkl
preview_completion_insert: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L71-L71)

#### `true_color`

```pkl
true_color: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L72-L72)

#### `rulers`

```pkl
rulers: Listing<Int> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L73-L73)

#### `bufferline`

```pkl
bufferline: ("always"|"never"|"multiple")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L74-L74)

#### `color_modes`

```pkl
color_modes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L75-L75)

#### `text_width`

```pkl
text_width: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L76-L76)

#### `workspace_lsp_roots`

```pkl
workspace_lsp_roots: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L77-L77)

#### `default_line_ending`

```pkl
default_line_ending: ("native"|"lf"|"crlf")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L78-L78)

#### `insert_final_newline`

```pkl
insert_final_newline: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L79-L79)

#### `smart_tab`

```pkl
smart_tab: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L80-L80)

#### `indent_guides`

```pkl
indent_guides: IndentGuides? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L81-L81)

#### `cursor_shape`

```pkl
cursor_shape: Cursor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L82-L82)

#### `statusline`

```pkl
statusline: StatusLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L83-L83)

#### `lsp`

```pkl
lsp: LspSettings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L84-L84)

#### ``file-picker``

```pkl
`file-picker`: FilePicker? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L85-L85)

#### `whitespace`

```pkl
whitespace: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L86-L86)

#### `soft_wrap`

```pkl
soft_wrap: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L87-L87)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/helix/Config.pkl#L88-L88)

