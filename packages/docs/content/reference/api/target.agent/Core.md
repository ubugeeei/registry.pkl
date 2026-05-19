---
title: target.agent.Core
description: Shared MCP server types for AI agent clients.
---

# `target.agent.Core`

Shared MCP server types for AI agent clients.

## Type aliases

### `Server`

```pkl
typealias Server = StdioServer|RemoteServer
```

## Classes

### `SandboxFilesystem`

#### `allowWrite`

```pkl
allowWrite: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L9-L9)

#### `denyRead`

```pkl
denyRead: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L10-L10)

#### `denyWrite`

```pkl
denyWrite: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L11-L11)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L12-L12)

### `SandboxNetwork`

#### `allowedDomains`

```pkl
allowedDomains: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L16-L16)

#### `deniedDomains`

```pkl
deniedDomains: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L18-L18)

### `Sandbox`

#### `filesystem`

```pkl
filesystem: SandboxFilesystem? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L22-L22)

#### `network`

```pkl
network: SandboxNetwork? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L24-L24)

### `Dev`

#### `watch`

```pkl
watch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L28-L28)

#### `debug`

```pkl
debug: Boolean|Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L30-L30)

### `StdioServer`

#### `type`

```pkl
type: "stdio"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L34-L34)

#### `command`

```pkl
command: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L35-L35)

#### `args`

```pkl
args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L36-L36)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L37-L37)

#### `envFile`

```pkl
envFile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L38-L38)

#### `sandboxEnabled`

```pkl
sandboxEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L39-L39)

#### `sandbox`

```pkl
sandbox: Sandbox? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L40-L40)

#### `dev`

```pkl
dev: Dev? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L42-L42)

### `RemoteServer`

#### `type`

```pkl
type: "http"|"sse"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L46-L46)

#### `url`

```pkl
url: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L47-L47)

#### `headers`

```pkl
headers: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L48-L48)

#### `oauth`

```pkl
oauth: OAuth? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L50-L50)

### `OAuth`

#### `authServerMetadataUrl`

```pkl
authServerMetadataUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L54-L54)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L55-L55)

### `Input`

#### `type`

```pkl
type: String = "promptString"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L59-L59)

#### `id`

```pkl
id: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L60-L60)

#### `description`

```pkl
description: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L61-L61)

#### `password`

```pkl
password: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L62-L62)

#### `default`

```pkl
default: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L63-L63)

#### `options`

```pkl
options: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L64-L64)

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L65-L65)

#### `args`

```pkl
args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L66-L66)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L67-L67)

### `RenderOptions`

#### `remoteUrlKey`

```pkl
remoteUrlKey: "url"|"serverUrl" = "url"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L71-L71)

#### `defaultStdioType`

```pkl
defaultStdioType: "stdio"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L72-L72)

#### `defaultRemoteType`

```pkl
defaultRemoteType: "http"|"sse"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L73-L73)

#### `includeDefaultStdioType`

```pkl
includeDefaultStdioType: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L74-L74)

#### `includeDefaultRemoteType`

```pkl
includeDefaultRemoteType: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L75-L75)

#### `includeSandbox`

```pkl
includeSandbox: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L76-L76)

#### `includeDev`

```pkl
includeDev: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L77-L77)

#### `includeEmptyArgs`

```pkl
includeEmptyArgs: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L78-L78)

#### `includeEmptyEnv`

```pkl
includeEmptyEnv: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/mcp/Core.pkl#L79-L79)

