---
title: target.container.Devbox
description: A typed authoring surface for `devbox.json` (jetpack-io/devbox).
---

# `target.container.Devbox`

A typed authoring surface for `devbox.json` (jetpack-io/devbox).

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L16-L16)

#### `packages`

```pkl
packages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L17-L17)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L18-L18)

#### `shell`

```pkl
shell: ShellHooks? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L19-L19)

#### `scripts`

```pkl
scripts: Mapping<String, String|ScriptEntry> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L20-L20)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L22-L22)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L64-L64)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L65-L65)

## Classes

### `ScriptEntry`

#### `steps`

String form: a single command. List form: multiple shell lines.

```pkl
steps: String|Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L8-L8)

### `ShellHooks`

#### `initHook`

```pkl
initHook: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L12-L12)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/devbox/Devbox.pkl#L13-L13)

