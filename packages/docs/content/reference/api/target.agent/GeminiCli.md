---
title: target.agent.GeminiCli
description: A typed authoring surface for the Gemini CLI's `~/.config/gemini/config.json`.
---

# `target.agent.GeminiCli`

A typed authoring surface for the Gemini CLI's `~/.config/gemini/config.json`.

Reference: https://github.com/google-gemini/gemini-cli

## Fields

#### `theme`

```pkl
theme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L23-L23)

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L24-L24)

#### `selectedAuthType`

```pkl
selectedAuthType: ("login-with-google"|"use-gemini"|"use-vertex-ai"|"cloud-shell")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L25-L25)

#### `sandbox`

```pkl
sandbox: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L26-L26)

#### `checkpointing`

```pkl
checkpointing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L27-L27)

#### `showMemoryUsage`

```pkl
showMemoryUsage: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L28-L28)

#### `autoAccept`

```pkl
autoAccept: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L29-L29)

#### `preferredEditor`

```pkl
preferredEditor: ("vscode"|"nano"|"vim"|"neovim"|"emacs"|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L30-L30)

#### `fileFiltering`

```pkl
fileFiltering: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L31-L31)

#### `contextFileName`

```pkl
contextFileName: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L32-L32)

#### `hideTips`

```pkl
hideTips: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L33-L33)

#### `hideBanner`

```pkl
hideBanner: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L34-L34)

#### `mcpServers`

```pkl
mcpServers: Mapping<String, mcp.Server> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L35-L35)

#### `excludeTools`

```pkl
excludeTools: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L36-L36)

#### `toolDiscovery`

```pkl
toolDiscovery: ToolRegistry? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L37-L37)

#### `telemetry`

```pkl
telemetry: Telemetry? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L38-L38)

#### `usageStatisticsEnabled`

```pkl
usageStatisticsEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L39-L39)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L40-L40)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L144-L144)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L145-L145)

## Classes

### `ToolRegistry`

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L10-L10)

#### `trustedFolders`

```pkl
trustedFolders: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L11-L11)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L12-L12)

### `Telemetry`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L16-L16)

#### `target`

```pkl
target: ("local"|"gcp")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L17-L17)

#### `otlpEndpoint`

```pkl
otlpEndpoint: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L18-L18)

#### `logPrompts`

```pkl
logPrompts: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L19-L19)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/geminiCli/GeminiCli.pkl#L20-L20)

