---
title: target.agent.claudeCode.Mcp
description: A typed authoring surface for Claude Code / project `.mcp.json`.
---

# `target.agent.claudeCode.Mcp`

A typed authoring surface for Claude Code / project `.mcp.json`.

## Fields

#### `mcpServers`

```pkl
mcpServers: Mapping<String, Mcp.Server> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L7-L7)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L8-L8)

#### `defaultStdioType`

```pkl
defaultStdioType = "stdio"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L12-L12)

#### `includeDefaultStdioType`

```pkl
includeDefaultStdioType = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L13-L13)

#### `includeEmptyEnv`

```pkl
includeEmptyEnv = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L14-L14)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L31-L31)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Mcp.pkl#L32-L32)

