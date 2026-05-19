---
title: target.agent.windsurf.McpConfig
description: A typed authoring surface for Windsurf `mcp_config.json`.
---

# `target.agent.windsurf.McpConfig`

A typed authoring surface for Windsurf `mcp_config.json`.

## Fields

#### `mcpServers`

```pkl
mcpServers: Mapping<String, Mcp.Server> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/windsurf/McpConfig.pkl#L7-L7)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/windsurf/McpConfig.pkl#L8-L8)

#### `remoteUrlKey`

```pkl
remoteUrlKey = "serverUrl"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/windsurf/McpConfig.pkl#L12-L12)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/windsurf/McpConfig.pkl#L29-L29)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/windsurf/McpConfig.pkl#L30-L30)

