---
title: target.container.docker-compose.Compose
description: A typed authoring surface for `docker-compose.yml` (Compose Spec).
---

# `target.container.docker-compose.Compose`

A typed authoring surface for `docker-compose.yml` (Compose Spec).

Covers the most-used keys for `services`, `networks`, `volumes`,
`configs`, and `secrets`. Every nested class carries an `extra`
escape hatch but the public surface is wide enough that
`amends "@target.container/docker-compose/Compose.pkl"` covers a
real stack without dropping to raw maps.

## Type aliases

### `RestartPolicy`

```pkl
typealias RestartPolicy = "no"|"always"|"on-failure"|"unless-stopped"
```

### `EnvValue`

```pkl
typealias EnvValue = String|Int|Float|Boolean
```

## Fields

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L151-L151)

#### `services`

```pkl
services: Mapping<String, Service> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L152-L152)

#### `networks`

```pkl
networks: Mapping<String, NetworkSpec> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L153-L153)

#### `volumes`

```pkl
volumes: Mapping<String, VolumeSpec> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L154-L154)

#### `configs`

```pkl
configs: Mapping<String, ConfigSpec> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L155-L155)

#### `secrets`

```pkl
secrets: Mapping<String, SecretSpec> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L156-L156)

#### `xExtensions`

```pkl
xExtensions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L157-L157)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L158-L158)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L493-L493)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L494-L494)

## Classes

### `BuildConfig`

#### `context`

```pkl
context: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L16-L16)

#### `dockerfile`

```pkl
dockerfile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L17-L17)

#### `args`

```pkl
args: Mapping<String, EnvValue> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L18-L18)

#### `target`

```pkl
target: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L19-L19)

#### `cacheFrom`

```pkl
cacheFrom: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L20-L20)

#### `cacheTo`

```pkl
cacheTo: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L21-L21)

#### `network`

```pkl
network: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L22-L22)

#### `shmSize`

```pkl
shmSize: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L23-L23)

#### `noCache`

```pkl
noCache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L24-L24)

#### `pull`

```pkl
pull: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L25-L25)

#### `platforms`

```pkl
platforms: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L26-L26)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L28-L28)

### `Healthcheck`

#### `test`

```pkl
test: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L32-L32)

#### `interval`

```pkl
interval: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L33-L33)

#### `timeout`

```pkl
timeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L34-L34)

#### `retries`

```pkl
retries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L35-L35)

#### `startPeriod`

```pkl
startPeriod: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L36-L36)

#### `disable`

```pkl
disable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L38-L38)

### `Deploy`

#### `mode`

```pkl
mode: ("global"|"replicated")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L42-L42)

#### `replicas`

```pkl
replicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L43-L43)

#### `resources`

```pkl
resources: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L44-L44)

#### `restartPolicy`

```pkl
restartPolicy: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L45-L45)

#### `updateConfig`

```pkl
updateConfig: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L46-L46)

#### `rollbackConfig`

```pkl
rollbackConfig: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L47-L47)

#### `placement`

```pkl
placement: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L48-L48)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L50-L50)

### `Logging`

#### `driver`

```pkl
driver: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L54-L54)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L55-L55)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L56-L56)

### `NetworkSpec`

#### `driver`

```pkl
driver: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L60-L60)

#### `driverOpts`

```pkl
driverOpts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L61-L61)

#### `attachable`

```pkl
attachable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L62-L62)

#### ``external``

```pkl
`external`: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L63-L63)

#### `internal`

```pkl
internal: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L64-L64)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L65-L65)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L66-L66)

#### `ipam`

```pkl
ipam: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L68-L68)

### `VolumeSpec`

#### `driver`

```pkl
driver: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L72-L72)

#### `driverOpts`

```pkl
driverOpts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L73-L73)

#### ``external``

```pkl
`external`: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L74-L74)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L75-L75)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L76-L76)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L77-L77)

### `ConfigSpec`

#### `file`

```pkl
file: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L81-L81)

#### ``external``

```pkl
`external`: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L82-L82)

#### `content`

```pkl
content: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L83-L83)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L84-L84)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L85-L85)

### `SecretSpec`

#### `file`

```pkl
file: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L89-L89)

#### ``external``

```pkl
`external`: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L90-L90)

#### `environment`

```pkl
environment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L91-L91)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L92-L92)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L93-L93)

### `DependsOn`

#### `condition`

```pkl
condition: ("service_started"|"service_healthy"|"service_completed_successfully")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L97-L97)

#### `required`

```pkl
required: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L98-L98)

#### `restart`

```pkl
restart: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L99-L99)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L100-L100)

### `Service`

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L104-L104)

#### `build`

```pkl
build: (String|BuildConfig)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L105-L105)

#### `containerName`

```pkl
containerName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L106-L106)

#### `hostname`

```pkl
hostname: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L107-L107)

#### `command`

```pkl
command: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L108-L108)

#### `entrypoint`

```pkl
entrypoint: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L109-L109)

#### `user`

```pkl
user: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L110-L110)

#### `workingDir`

```pkl
workingDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L111-L111)

#### `ports`

```pkl
ports: Listing<String|Int|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L112-L112)

#### `expose`

```pkl
expose: Listing<String|Int> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L113-L113)

#### `volumes`

```pkl
volumes: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L114-L114)

#### `volumesFrom`

```pkl
volumesFrom: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L115-L115)

#### `environment`

```pkl
environment: (Mapping<String, EnvValue>|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L116-L116)

#### `envFile`

```pkl
envFile: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L117-L117)

#### `dependsOn`

```pkl
dependsOn: (Listing<String>|Mapping<String, DependsOn>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L118-L118)

#### `networks`

```pkl
networks: (Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L119-L119)

#### `links`

```pkl
links: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L120-L120)

#### `restart`

```pkl
restart: RestartPolicy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L121-L121)

#### `init`

```pkl
init: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L122-L122)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L123-L123)

#### `readOnly`

```pkl
readOnly: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L124-L124)

#### `tty`

```pkl
tty: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L125-L125)

#### `stdinOpen`

```pkl
stdinOpen: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L126-L126)

#### `healthcheck`

```pkl
healthcheck: Healthcheck? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L127-L127)

#### `deploy`

```pkl
deploy: Deploy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L128-L128)

#### `logging`

```pkl
logging: Logging? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L129-L129)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L130-L130)

#### `capAdd`

```pkl
capAdd: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L131-L131)

#### `capDrop`

```pkl
capDrop: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L132-L132)

#### `securityOpt`

```pkl
securityOpt: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L133-L133)

#### `sysctls`

```pkl
sysctls: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L134-L134)

#### `ulimits`

```pkl
ulimits: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L135-L135)

#### `pidMode`

```pkl
pidMode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L136-L136)

#### `shmSize`

```pkl
shmSize: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L137-L137)

#### `stopSignal`

```pkl
stopSignal: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L138-L138)

#### `stopGracePeriod`

```pkl
stopGracePeriod: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L139-L139)

#### `tmpfs`

```pkl
tmpfs: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L140-L140)

#### `extraHosts`

```pkl
extraHosts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L141-L141)

#### `dns`

```pkl
dns: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L142-L142)

#### `configs`

```pkl
configs: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L143-L143)

#### `secrets`

```pkl
secrets: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L144-L144)

#### `profiles`

```pkl
profiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L145-L145)

#### `scale`

```pkl
scale: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L146-L146)

#### `pullPolicy`

```pkl
pullPolicy: ("always"|"never"|"missing"|"build")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L147-L147)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/docker-compose/Compose.pkl#L148-L148)

