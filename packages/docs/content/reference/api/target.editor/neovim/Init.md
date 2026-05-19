---
title: target.editor.neovim.Init
description: A typed authoring surface for a basic `init.lua`.
---

# `target.editor.neovim.Init`

A typed authoring surface for a basic `init.lua`.

This module models the small slice of Neovim config that maps cleanly
to data: scalar options under `vim.opt` / `vim.g`, autocommands,
keymaps. Anything more expressive should fall through to the `body`
escape hatch which is rendered verbatim.

Reference: https://neovim.io/doc/user/lua-guide.html

## Type aliases

### `Scalar`

```pkl
typealias Scalar = String|Boolean|Int|Float
```

## Fields

#### `opt`

Options assigned via `vim.opt.<name> = <value>`.

```pkl
opt: Mapping<String, Scalar|Listing<Scalar>|Mapping<String, Scalar>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L45-L45)

#### `globals`

Globals assigned via `vim.g.<name> = <value>`.

```pkl
globals: Mapping<String, Scalar|Listing<Scalar>|Mapping<String, Scalar>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L48-L48)

#### `keymaps`

Keymaps installed via `vim.keymap.set`.

```pkl
keymaps: Listing<Keymap> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L51-L51)

#### `autocmds`

Autocommands installed via `vim.api.nvim_create_autocmd`.

```pkl
autocmds: Listing<Autocmd> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L54-L54)

#### `requires`

Lua require() statements emitted near the top of the file.

```pkl
requires: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L57-L57)

#### `body`

Trailing Lua body — emitted verbatim after the structured blocks.

```pkl
body: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L60-L60)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L149-L149)

## Classes

### `Keymap`

#### `mode`

Modes ("n", "i", "v", "x", "o", "s", "c", "t", or combinations like "nv").

```pkl
mode: String|Listing<String> = "n"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L15-L15)

#### `lhs`

```pkl
lhs: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L16-L16)

#### `rhs`

```pkl
rhs: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L17-L17)

#### `desc`

```pkl
desc: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L18-L18)

#### `silent`

```pkl
silent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L19-L19)

#### `noremap`

```pkl
noremap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L20-L20)

#### `expr`

```pkl
expr: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L21-L21)

#### `buffer`

```pkl
buffer: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L22-L22)

### `Autocmd`

#### `event`

```pkl
event: String|Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L26-L26)

#### `pattern`

```pkl
pattern: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L27-L27)

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L28-L28)

#### `callback`

```pkl
callback: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L29-L29)

#### `group`

```pkl
group: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L30-L30)

#### `desc`

```pkl
desc: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L31-L31)

#### `once`

```pkl
once: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L32-L32)

#### `nested`

```pkl
nested: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L33-L33)

### `Plugin`

#### `spec`

Plugin spec line. The exact spec depends on which manager you use
(lazy.nvim, packer, plug, etc.); this module just emits the spec
inside a `body` block your manager wraps. Leave plugin management
to the caller.

```pkl
spec: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/neovim/Init.pkl#L41-L41)

