---
title: target.js.turbo.Turbo
description: A typed authoring surface for `turbo.json`.
---

# `target.js.turbo.Turbo`

A typed authoring surface for `turbo.json`.

Models the Turborepo configuration schema documented at
https://turborepo.com/docs/reference/configuration.

## Type aliases

### `OutputLogs`

```pkl
typealias OutputLogs = "full"|"hash-only"|"new-only"|"errors-only"|"none"
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L36-L36)

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L37-L37)

#### `tasks`

```pkl
tasks: Mapping<String, TaskDefinition> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L38-L38)

#### `globalDependencies`

```pkl
globalDependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L39-L39)

#### `globalEnv`

```pkl
globalEnv: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L40-L40)

#### `globalPassThroughEnv`

```pkl
globalPassThroughEnv: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L41-L41)

#### `remoteCache`

```pkl
remoteCache: RemoteCache? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L42-L42)

#### `ui`

```pkl
ui: "tui"|"stream"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L43-L43)

#### `daemon`

```pkl
daemon: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L44-L44)

#### `envMode`

```pkl
envMode: "loose"|"strict"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L45-L45)

#### `dangerouslyDisablePackageManagerCheck`

```pkl
dangerouslyDisablePackageManagerCheck: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L47-L47)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L124-L124)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L125-L125)

## Classes

### `TaskDefinition`

#### `dependsOn`

```pkl
dependsOn: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L12-L12)

#### `inputs`

```pkl
inputs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L13-L13)

#### `outputs`

```pkl
outputs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L14-L14)

#### `cache`

```pkl
cache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L15-L15)

#### `persistent`

```pkl
persistent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L16-L16)

#### `interactive`

```pkl
interactive: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L17-L17)

#### `env`

```pkl
env: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L18-L18)

#### `passThroughEnv`

```pkl
passThroughEnv: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L19-L19)

#### `outputLogs`

```pkl
outputLogs: OutputLogs? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L21-L21)

### `RemoteCache`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L25-L25)

#### `apiUrl`

```pkl
apiUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L26-L26)

#### `loginUrl`

```pkl
loginUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L27-L27)

#### `preflight`

```pkl
preflight: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L28-L28)

#### `signature`

```pkl
signature: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L29-L29)

#### `teamId`

```pkl
teamId: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L30-L30)

#### `teamSlug`

```pkl
teamSlug: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L31-L31)

#### `timeout`

```pkl
timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L32-L32)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/turbo/Turbo.pkl#L33-L33)

