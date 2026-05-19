---
title: target.editor.DevContainer
description: A typed authoring surface for `.devcontainer/devcontainer.json`.
---

# `target.editor.DevContainer`

A typed authoring surface for `.devcontainer/devcontainer.json`.

Models the Dev Containers schema documented at
https://containers.dev/implementors/json_reference/.

## Type aliases

### `UserEnvProbe`

```pkl
typealias UserEnvProbe = "none"|"loginShell"|"loginInteractiveShell"|"interactiveShell"
```

### `WaitFor`

```pkl
typealias WaitFor = "initializeCommand"|"onCreateCommand"|"updateContentCommand"|"postCreateCommand"|"postStartCommand"
```

### `CommandLine`

```pkl
typealias CommandLine = String|Listing<String>|Mapping<String, String|Listing<String>>
```

## Fields

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L46-L46)

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L47-L47)

#### `build`

```pkl
build: BuildSpec? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L48-L48)

#### `dockerComposeFile`

```pkl
dockerComposeFile: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L49-L49)

#### `service`

```pkl
service: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L50-L50)

#### `runServices`

```pkl
runServices: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L51-L51)

#### `workspaceFolder`

```pkl
workspaceFolder: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L52-L52)

#### `workspaceMount`

```pkl
workspaceMount: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L53-L53)

#### `remoteUser`

```pkl
remoteUser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L54-L54)

#### `containerUser`

```pkl
containerUser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L55-L55)

#### `updateRemoteUserUID`

```pkl
updateRemoteUserUID: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L56-L56)

#### `userEnvProbe`

```pkl
userEnvProbe: UserEnvProbe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L57-L57)

#### `waitFor`

```pkl
waitFor: WaitFor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L58-L58)

#### `overrideCommand`

```pkl
overrideCommand: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L59-L59)

#### `shutdownAction`

```pkl
shutdownAction: "none"|"stopContainer"|"stopCompose"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L60-L60)

#### `init`

```pkl
init: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L61-L61)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L62-L62)

#### `capAdd`

```pkl
capAdd: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L63-L63)

#### `securityOpt`

```pkl
securityOpt: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L64-L64)

#### `mounts`

```pkl
mounts: Listing<Mount> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L65-L65)

#### `runArgs`

```pkl
runArgs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L66-L66)

#### `containerEnv`

```pkl
containerEnv: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L67-L67)

#### `remoteEnv`

```pkl
remoteEnv: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L68-L68)

#### `features`

```pkl
features: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L69-L69)

#### `overrideFeatureInstallOrder`

```pkl
overrideFeatureInstallOrder: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L70-L70)

#### `forwardPorts`

```pkl
forwardPorts: Listing<Int|String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L71-L71)

#### `portsAttributes`

```pkl
portsAttributes: Mapping<String, PortAttribute> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L72-L72)

#### `otherPortsAttributes`

```pkl
otherPortsAttributes: PortAttribute? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L73-L73)

#### `hostRequirements`

```pkl
hostRequirements: HostRequirements? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L74-L74)

#### `onCreateCommand`

```pkl
onCreateCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L75-L75)

#### `updateContentCommand`

```pkl
updateContentCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L76-L76)

#### `postCreateCommand`

```pkl
postCreateCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L77-L77)

#### `postStartCommand`

```pkl
postStartCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L78-L78)

#### `postAttachCommand`

```pkl
postAttachCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L79-L79)

#### `initializeCommand`

```pkl
initializeCommand: CommandLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L80-L80)

#### `customizations`

```pkl
customizations: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L81-L81)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L82-L82)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L235-L235)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L236-L236)

## Classes

### `BuildSpec`

#### `dockerfile`

```pkl
dockerfile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L14-L14)

#### `context`

```pkl
context: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L15-L15)

#### `args`

```pkl
args: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L16-L16)

#### `target`

```pkl
target: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L17-L17)

#### `cacheFrom`

```pkl
cacheFrom: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L19-L19)

### `HostRequirements`

#### `cpus`

```pkl
cpus: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L23-L23)

#### `memory`

```pkl
memory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L24-L24)

#### `storage`

```pkl
storage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L25-L25)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L26-L26)

### `PortAttribute`

#### `label`

```pkl
label: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L30-L30)

#### `protocol`

```pkl
protocol: "http"|"https"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L31-L31)

#### `onAutoForward`

```pkl
onAutoForward: "notify"|"openBrowser"|"openPreview"|"silent"|"ignore"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L32-L32)

#### `requireLocalPort`

```pkl
requireLocalPort: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L33-L33)

#### `elevateIfNeeded`

```pkl
elevateIfNeeded: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L35-L35)

### `Mount`

#### `type`

```pkl
type: "bind"|"volume"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L39-L39)

#### `source`

```pkl
source: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L40-L40)

#### `target`

```pkl
target: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L41-L41)

#### `readonly`

```pkl
readonly: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L42-L42)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/devcontainer/DevContainer.pkl#L43-L43)

