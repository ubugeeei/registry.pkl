---
title: target.env.Mise
description: A typed authoring surface for `mise.toml`.
---

# `target.env.Mise`

A typed authoring surface for `mise.toml`.

## Type aliases

### `Scalar`

```pkl
typealias Scalar = String|Boolean|Int|Float
```

## Fields

#### `tools`

```pkl
tools: Mapping<String, String|Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L20-L20)

#### `env`

```pkl
env: Mapping<String, Scalar> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L21-L21)

#### `tasks`

```pkl
tasks: Mapping<String, Task> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L22-L22)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L24-L24)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L77-L77)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L78-L78)

## Classes

### `Task`

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L10-L10)

#### `run`

```pkl
run: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L11-L11)

#### `depends`

```pkl
depends: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L12-L12)

#### `dir`

```pkl
dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L13-L13)

#### `shell`

```pkl
shell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L14-L14)

#### `sources`

```pkl
sources: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L15-L15)

#### `env`

```pkl
env: Mapping<String, Scalar> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L16-L16)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/mise/Mise.pkl#L17-L17)

