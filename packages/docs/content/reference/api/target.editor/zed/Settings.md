---
title: target.editor.zed.Settings
description: A typed authoring surface for `~/.config/zed/settings.json`.
---

# `target.editor.zed.Settings`

A typed authoring surface for `~/.config/zed/settings.json`.

Models the commonly tuned Zed settings: theme, font, tab/format,
language overrides, project search excludes, LSP toggles, AI/assistant
config. Forwards the rest via `extra`.

Reference: https://zed.dev/docs/configuring-zed

## Type aliases

### `Theme`

```pkl
typealias Theme = String|Mapping<String, String>
```

## Fields

#### `theme`

```pkl
theme: Theme? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L53-L53)

#### `buffer_font_family`

```pkl
buffer_font_family: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L54-L54)

#### `buffer_font_features`

```pkl
buffer_font_features: FontFeatures? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L55-L55)

#### `buffer_font_size`

```pkl
buffer_font_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L56-L56)

#### `ui_font_family`

```pkl
ui_font_family: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L57-L57)

#### `ui_font_size`

```pkl
ui_font_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L58-L58)

#### `vim_mode`

```pkl
vim_mode: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L59-L59)

#### `relative_line_numbers`

```pkl
relative_line_numbers: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L60-L60)

#### `show_whitespaces`

```pkl
show_whitespaces: ("all"|"none"|"selection"|"boundary")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L61-L61)

#### `tab_size`

```pkl
tab_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L62-L62)

#### `hard_tabs`

```pkl
hard_tabs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L63-L63)

#### `soft_wrap`

```pkl
soft_wrap: ("none"|"preferred_line_length"|"editor_width"|"bounded")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L64-L64)

#### `preferred_line_length`

```pkl
preferred_line_length: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L65-L65)

#### `format_on_save`

```pkl
format_on_save: ("on"|"off"|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L66-L66)

#### `ensure_final_newline_on_save`

```pkl
ensure_final_newline_on_save: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L67-L67)

#### `remove_trailing_whitespace_on_save`

```pkl
remove_trailing_whitespace_on_save: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L68-L68)

#### `project_panel`

```pkl
project_panel: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L69-L69)

#### `terminal`

```pkl
terminal: TerminalSettings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L70-L70)

#### `languages`

```pkl
languages: Mapping<String, LanguageSettings> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L71-L71)

#### `lsp`

```pkl
lsp: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L72-L72)

#### `file_types`

```pkl
file_types: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L73-L73)

#### `file_scan_exclusions`

```pkl
file_scan_exclusions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L74-L74)

#### `assistant`

```pkl
assistant: Assistant? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L75-L75)

#### `inlay_hints`

```pkl
inlay_hints: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L76-L76)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L77-L77)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L232-L232)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L233-L233)

## Classes

### `FontFeatures`

#### `calt`

```pkl
calt: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L15-L15)

#### `liga`

```pkl
liga: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L16-L16)

#### `ss01`

```pkl
ss01: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L18-L18)

### `TerminalSettings`

#### `shell`

```pkl
shell: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L22-L22)

#### `font_family`

```pkl
font_family: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L23-L23)

#### `font_size`

```pkl
font_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L24-L24)

#### `working_directory`

```pkl
working_directory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L25-L25)

#### `blinking`

```pkl
blinking: ("off"|"on"|"terminal_controlled")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L26-L26)

#### `copy_on_select`

```pkl
copy_on_select: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L27-L27)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L29-L29)

### `LanguageSettings`

#### `tab_size`

```pkl
tab_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L33-L33)

#### `hard_tabs`

```pkl
hard_tabs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L34-L34)

#### `soft_wrap`

```pkl
soft_wrap: ("none"|"preferred_line_length"|"editor_width"|"bounded")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L35-L35)

#### `preferred_line_length`

```pkl
preferred_line_length: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L36-L36)

#### `format_on_save`

```pkl
format_on_save: ("on"|"off"|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L37-L37)

#### `formatter`

```pkl
formatter: (String|Mapping<String, Any>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L38-L38)

#### `enable_language_server`

```pkl
enable_language_server: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L39-L39)

#### `language_servers`

```pkl
language_servers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L41-L41)

### `Assistant`

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L45-L45)

#### `default_model`

```pkl
default_model: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L46-L46)

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L47-L47)

#### `button`

```pkl
button: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L48-L48)

#### `default_open_ai_model`

```pkl
default_open_ai_model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/zed/Settings.pkl#L50-L50)

