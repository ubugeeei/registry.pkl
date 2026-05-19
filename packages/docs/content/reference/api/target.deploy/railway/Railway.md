---
title: target.deploy.railway.Railway
description: A typed authoring surface for Railway's `railway.json`.
---

# `target.deploy.railway.Railway`

A typed authoring surface for Railway's `railway.json`.

Railway reads service config from `railway.json` (or
`railway.toml`). This module emits JSON; both formats accept the
same shape — build, deploy, environments.

Reference: https://docs.railway.com/reference/config-as-code

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L48-L48)

#### `build`

```pkl
build: Build? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L49-L49)

#### `deploy`

```pkl
deploy: Deploy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L50-L50)

#### `environments`

```pkl
environments: Mapping<String, EnvironmentConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L51-L51)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L52-L52)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L156-L156)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L157-L157)

## Classes

### `Build`

#### `builder`

```pkl
builder: ("NIXPACKS"|"DOCKERFILE"|"RAILPACK")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L13-L13)

#### `buildCommand`

```pkl
buildCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L14-L14)

#### `dockerfilePath`

```pkl
dockerfilePath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L15-L15)

#### `watchPatterns`

```pkl
watchPatterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L16-L16)

#### `nixpacksPlan`

```pkl
nixpacksPlan: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L17-L17)

#### `nixpacksVersion`

```pkl
nixpacksVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L19-L19)

### `Deploy`

#### `startCommand`

```pkl
startCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L23-L23)

#### `numReplicas`

```pkl
numReplicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L24-L24)

#### `region`

```pkl
region: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L25-L25)

#### `preDeployCommand`

```pkl
preDeployCommand: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L26-L26)

#### `multiRegionConfig`

```pkl
multiRegionConfig: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L27-L27)

#### `healthcheckPath`

```pkl
healthcheckPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L28-L28)

#### `healthcheckTimeout`

```pkl
healthcheckTimeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L29-L29)

#### `healthcheckInterval`

```pkl
healthcheckInterval: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L30-L30)

#### `restartPolicyType`

```pkl
restartPolicyType: ("NEVER"|"ALWAYS"|"ON_FAILURE")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L31-L31)

#### `restartPolicyMaxRetries`

```pkl
restartPolicyMaxRetries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L32-L32)

#### `sleepApplication`

```pkl
sleepApplication: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L33-L33)

#### `drainingSeconds`

```pkl
drainingSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L34-L34)

#### `overlapSeconds`

```pkl
overlapSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L35-L35)

#### `cronSchedule`

```pkl
cronSchedule: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L36-L36)

#### `runtime`

```pkl
runtime: ("V2"|"LEGACY")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L37-L37)

#### `useLegacyStacker`

```pkl
useLegacyStacker: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L39-L39)

### `EnvironmentConfig`

#### `build`

```pkl
build: Build? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L43-L43)

#### `deploy`

```pkl
deploy: Deploy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L44-L44)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/railway/Railway.pkl#L45-L45)

