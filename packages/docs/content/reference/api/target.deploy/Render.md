---
title: target.deploy.Render
description: A typed authoring surface for `render.yaml` (Render Blueprint).
---

# `target.deploy.Render`

A typed authoring surface for `render.yaml` (Render Blueprint).

## Type aliases

### `ServiceType`

```pkl
typealias ServiceType = "web"|"worker"|"cron"|"pserv"|"redis"|"static"
```

## Fields

#### `previewsEnabled`

```pkl
previewsEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L77-L77)

#### `previewsExpireAfterDays`

```pkl
previewsExpireAfterDays: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L78-L78)

#### `services`

```pkl
services: Listing<Service> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L79-L79)

#### `databases`

```pkl
databases: Listing<Database> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L80-L80)

#### `envVarGroups`

```pkl
envVarGroups: Listing<EnvGroup> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L81-L81)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L82-L82)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L247-L247)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L248-L248)

## Classes

### `EnvVar`

#### `key`

```pkl
key: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L9-L9)

#### `value`

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L10-L10)

#### `fromService`

```pkl
fromService: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L11-L11)

#### `fromGroup`

```pkl
fromGroup: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L12-L12)

#### `generateValue`

```pkl
generateValue: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L13-L13)

#### `sync`

```pkl
sync: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L15-L15)

### `Disk`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L19-L19)

#### `mountPath`

```pkl
mountPath: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L20-L20)

#### `sizeGB`

```pkl
sizeGB: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L22-L22)

### `AutoDeploy`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L26-L26)

#### `buildFilter`

```pkl
buildFilter: Mapping<String, Listing<String>>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L28-L28)

### `Service`

#### `type`

```pkl
type: ServiceType
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L32-L32)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L33-L33)

#### `runtime`

```pkl
runtime: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L34-L34)

#### `region`

```pkl
region: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L35-L35)

#### `plan`

```pkl
plan: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L36-L36)

#### `branch`

```pkl
branch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L37-L37)

#### `buildCommand`

```pkl
buildCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L38-L38)

#### `startCommand`

```pkl
startCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L39-L39)

#### `dockerCommand`

```pkl
dockerCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L40-L40)

#### `dockerContext`

```pkl
dockerContext: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L41-L41)

#### `dockerfilePath`

```pkl
dockerfilePath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L42-L42)

#### `numInstances`

```pkl
numInstances: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L43-L43)

#### `healthCheckPath`

```pkl
healthCheckPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L44-L44)

#### `envVars`

```pkl
envVars: Listing<EnvVar> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L45-L45)

#### `disk`

```pkl
disk: Disk? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L46-L46)

#### `scaling`

```pkl
scaling: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L47-L47)

#### `preDeployCommand`

```pkl
preDeployCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L48-L48)

#### `autoDeploy`

```pkl
autoDeploy: (Boolean|AutoDeploy)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L49-L49)

#### `pullRequestPreviewsEnabled`

```pkl
pullRequestPreviewsEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L50-L50)

#### `schedule`

```pkl
schedule: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L51-L51)

#### `rootDir`

```pkl
rootDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L52-L52)

#### `staticPublishPath`

```pkl
staticPublishPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L53-L53)

#### `routes`

```pkl
routes: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L54-L54)

#### `headers`

```pkl
headers: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L55-L55)

#### `redirects`

```pkl
redirects: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L56-L56)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L57-L57)

### `Database`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L61-L61)

#### `plan`

```pkl
plan: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L62-L62)

#### `databaseName`

```pkl
databaseName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L63-L63)

#### `user`

```pkl
user: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L64-L64)

#### `ipAllowList`

```pkl
ipAllowList: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L65-L65)

#### `postgresMajorVersion`

```pkl
postgresMajorVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L66-L66)

#### `region`

```pkl
region: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L68-L68)

### `EnvGroup`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L72-L72)

#### `envVars`

```pkl
envVars: Listing<EnvVar> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L73-L73)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/render/Render.pkl#L74-L74)

