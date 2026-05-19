---
title: target.js.PnpmWorkspace
description: A typed authoring surface for `pnpm-workspace.yaml`.
---

# `target.js.PnpmWorkspace`

A typed authoring surface for `pnpm-workspace.yaml`.

## Fields

#### `packages`

```pkl
packages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L6-L6)

#### `catalog`

```pkl
catalog: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L7-L7)

#### `catalogs`

```pkl
catalogs: Mapping<String, Mapping<String, String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L8-L8)

#### `onlyBuiltDependencies`

```pkl
onlyBuiltDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L9-L9)

#### `ignoredBuiltDependencies`

```pkl
ignoredBuiltDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L10-L10)

#### `neverBuiltDependencies`

```pkl
neverBuiltDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L11-L11)

#### `overrides`

```pkl
overrides: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L12-L12)

#### `packageExtensions`

```pkl
packageExtensions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L14-L14)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L43-L43)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/pnpm-workspace/PnpmWorkspace.pkl#L44-L44)

