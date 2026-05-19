---
title: target.editor.sublime.Project
description: A typed authoring surface for `.sublime-project` files.
---

# `target.editor.sublime.Project`

A typed authoring surface for `.sublime-project` files.

Sublime Text projects are JSON documents that pair workspace folders
with per-project settings, build systems, and syntax overrides.

Reference: https://www.sublimetext.com/docs/projects.html

## Fields

#### `folders`

```pkl
folders: Listing<Folder> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L36-L36)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L37-L37)

#### `build_systems`

```pkl
build_systems: Listing<BuildSystem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L38-L38)

#### `syntax_override`

```pkl
syntax_override: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L39-L39)

#### `debugger_configurations`

```pkl
debugger_configurations: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L41-L41)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L117-L117)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L118-L118)

## Classes

### `Folder`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L12-L12)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L13-L13)

#### `follow_symlinks`

```pkl
follow_symlinks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L14-L14)

#### `folder_exclude_patterns`

```pkl
folder_exclude_patterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L15-L15)

#### `file_exclude_patterns`

```pkl
file_exclude_patterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L16-L16)

#### `binary_file_patterns`

```pkl
binary_file_patterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L17-L17)

#### `index_exclude_patterns`

```pkl
index_exclude_patterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L19-L19)

### `BuildSystem`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L23-L23)

#### `cmd`

```pkl
cmd: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L24-L24)

#### `shell_cmd`

```pkl
shell_cmd: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L25-L25)

#### `selector`

```pkl
selector: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L26-L26)

#### `file_regex`

```pkl
file_regex: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L27-L27)

#### `line_regex`

```pkl
line_regex: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L28-L28)

#### `working_dir`

```pkl
working_dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L29-L29)

#### `encoding`

```pkl
encoding: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L30-L30)

#### `variants`

```pkl
variants: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L31-L31)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L32-L32)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/sublime/Project.pkl#L33-L33)

