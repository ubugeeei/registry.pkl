---
title: target.js.knip.Knip
description: A typed authoring surface for `knip.json` / `.knip.json`.
---

# `target.js.knip.Knip`

A typed authoring surface for `knip.json` / `.knip.json`.

Knip's config is a workspace-rooted object that lets you declare
entry points, project files, ignore patterns, dependency rules, and
per-tool/plugin overrides. This module covers the top-level surface
and a `WorkspaceConfig` for `workspaces[<glob>]` entries.

## Type aliases

### `StringOrList`

```pkl
typealias StringOrList = String|Listing<String>
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L24-L24)

#### `entry`

```pkl
entry: StringOrList? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L25-L25)

#### `project`

```pkl
project: StringOrList? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L26-L26)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L27-L27)

#### `ignoreBinaries`

```pkl
ignoreBinaries: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L28-L28)

#### `ignoreDependencies`

```pkl
ignoreDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L29-L29)

#### `ignoreExportsUsedInFile`

```pkl
ignoreExportsUsedInFile: (Boolean|Mapping<String, Boolean>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L30-L30)

#### `includeEntryExports`

```pkl
includeEntryExports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L31-L31)

#### `paths`

```pkl
paths: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L32-L32)

#### `rules`

```pkl
rules: Mapping<String, "off"|"warn"|"error"> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L33-L33)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L34-L34)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L35-L35)

#### `workspaces`

```pkl
workspaces: Mapping<String, WorkspaceConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L36-L36)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L37-L37)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L108-L108)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L109-L109)

## Classes

### `WorkspaceConfig`

#### `entry`

```pkl
entry: StringOrList? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L14-L14)

#### `project`

```pkl
project: StringOrList? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L15-L15)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L16-L16)

#### `ignoreBinaries`

```pkl
ignoreBinaries: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L17-L17)

#### `ignoreDependencies`

```pkl
ignoreDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L18-L18)

#### `paths`

```pkl
paths: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L19-L19)

#### `rules`

```pkl
rules: Mapping<String, "off"|"warn"|"error"> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/knip/Knip.pkl#L21-L21)

