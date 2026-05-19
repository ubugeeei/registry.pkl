---
title: target.agent.Mcp
description: A typed authoring surface for VS Code `.vscode/mcp.json`.
---

# `target.agent.Mcp`

A typed authoring surface for VS Code `.vscode/mcp.json`.

## Fields

#### `servers`

```pkl
servers: Mapping<String, Mcp.Server> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L7-L7)

#### `inputs`

```pkl
inputs: Listing<Mcp.Input> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L8-L8)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L9-L9)

#### `defaultStdioType`

```pkl
defaultStdioType = "stdio"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L13-L13)

#### `defaultRemoteType`

```pkl
defaultRemoteType = "http"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L14-L14)

#### `includeDefaultStdioType`

```pkl
includeDefaultStdioType = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L15-L15)

#### `includeDefaultRemoteType`

```pkl
includeDefaultRemoteType = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L16-L16)

#### `includeSandbox`

```pkl
includeSandbox = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L17-L17)

#### `includeDev`

```pkl
includeDev = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L18-L18)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L38-L38)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/vscode/Mcp.pkl#L39-L39)

