---
layout: entry
title: target.agent
description: Shared MCP types and thin wrappers for fast-moving AI agent clients.
hero:
  name: target.agent
  text: MCP wrappers for recent agent clients
  tagline: Shared MCP server definitions with thin client wrappers for VS Code, Cursor, Claude, and Windsurf.
  actions:
    - theme: brand
      text: Browse Packages
      link: /packages/index.html
    - theme: alt
      text: Agent Notes
      link: /targets/agents/index.html
    - theme: alt
      text: Tool Matrix
      link: /reference/tool-matrix/index.html
features:
  - icon: "mdi:graph-outline"
    title: mcp/Core.pkl
    details: Shared server types, input types, OAuth metadata, sandbox fields, and renderer options.
  - icon: "mdi:microsoft-visual-studio-code"
    title: vscode/Mcp.pkl
    details: VS Code `mcp.json` wrapper with transport defaults, inputs, sandbox, and development metadata.
  - icon: "mdi:cursor-default-click-outline"
    title: cursor/Mcp.pkl
    details: Cursor `mcpServers` wrapper with stdio defaults and remote passthrough.
  - icon: "mdi:desktop-classic"
    title: claudeDesktop/Mcp.pkl
    details: Claude Desktop local stdio server shape.
  - icon: "mdi:console"
    title: claudeCode/Mcp.pkl
    details: Claude Code or project `.mcp.json` wrapper with remote OAuth metadata.
  - icon: "mdi:windsock"
    title: windsurf/McpConfig.pkl
    details: Windsurf wrapper that maps remote servers to `serverUrl`.
---

## Install

```pkl
amends "package://pkg.registry.pkl/target.agent@0.1.0#/vscode/Mcp.pkl"
```

## What This Package Emits

- `mcp.json` for VS Code
- `mcp.json` for Cursor
- `.mcp.json` for Claude Code or project-level MCP config
- Claude Desktop MCP server JSON
- Windsurf MCP config JSON

## Why This Package Exists

`target.agent` models the stable overlap first: stdio and remote MCP servers,
environment variables, OAuth metadata, sandbox hints, and client-specific thin
wrappers. That keeps fast-moving vendor drift local to each renderer.

## Related Docs

- [Package catalog](/packages/index.html)
- [AI agent target notes](../targets/agents.md)
- [Tool matrix](../reference/tool-matrix.md)
