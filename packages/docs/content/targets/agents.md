---
title: AI Agent Config
description: Why recent AI agent and MCP JSON configs deserve a dedicated target.agent package.
---

# AI Agent Config

This target category is worth doing.

It is also the fastest-moving part of the whole ecosystem, so it needs stricter
design discipline than the other packages.

## Why target.agent Should Exist

Recent agent tooling keeps creating JSON-heavy configuration surfaces for:

- MCP servers
- model routing
- sandbox and approval policies
- tool allowlists
- workspace instructions and profiles

These are exactly the kinds of config that benefit from typing, composition, and
escape hatches.

## First Wave Should Focus On Stable Shapes

The best starting point is not "every AI tool".

The best starting point is the overlap between them:

- MCP server declarations
- stdio or HTTP transport settings
- environment variables
- profile inheritance
- permission policy

## Good First Targets

- VS Code `mcp.json`
- Cursor `mcp.json`
- Claude Desktop MCP config JSON
- Gemini CLI `settings.json`
- Windsurf MCP JSON config

## What Not To Do

Do not try to freeze every provider-specific option into rigid types on day one.

This package needs an escape hatch by default because the surrounding products
change quickly.

## Package Direction

`target.agent` should likely expose:

- a shared `mcp` core
- tool-specific wrappers
- profile and policy presets
- output helpers for each target file name

## Initial Modules In This Repo

The current repository implementation starts with the shared MCP overlap and a
few thin client wrappers:

- `@target.agent/mcp/Core.pkl`
- `@target.agent/vscode/Mcp.pkl`
- `@target.agent/cursor/Mcp.pkl`
- `@target.agent/claudeDesktop/Mcp.pkl`
- `@target.agent/claudeCode/Mcp.pkl`
- `@target.agent/windsurf/McpConfig.pkl`

This keeps the primary API close to the actual clients:

- VS Code uses `"servers"` plus optional `"inputs"`.
- Cursor, Claude Desktop, and Claude Code use `"mcpServers"`.
- Windsurf also uses `"mcpServers"`, but remote servers usually use
  `"serverUrl"`.

The shared core currently models the stable overlap:

- stdio servers with `command`, `args`, `env`, and `envFile`
- remote servers with `url` plus optional `headers` and `oauth`
- VS Code-only sandbox and development mode fields
- input variables for VS Code `mcp.json`

## Default Behavior

The wrappers intentionally encode a few client-specific defaults from the
official docs:

- VS Code emits `type = "stdio"` for local servers and `type = "http"` for
  remote servers unless you override it.
- Cursor emits `type = "stdio"` for local servers, but leaves remote transport
  implicit unless you set `type = "sse"`.
- Claude Desktop is limited to stdio servers in direct desktop config and keeps
  the local shape close to the official `command` / `args` / `env` examples.
- Claude Code uses the standardized `.mcp.json` shape, emits
  `type = "stdio"` for local servers, and supports remote `oauth` metadata.
- Windsurf keeps local stdio servers minimal and maps remote URLs to
  `"serverUrl"`.

Example:

```pkl
amends "@target.agent/vscode/Mcp.pkl"

import "@target.agent/mcp/Core.pkl" as Mcp

inputs {
  new Mcp.Input {
    id = "github-token"
    description = "GitHub Personal Access Token"
    password = true
  }
}

servers {
  ["github"] =
    new Mcp.StdioServer {
      command = "docker"
      args {
        "run"
        "-i"
        "--rm"
        "-e"
        "GITHUB_PERSONAL_ACCESS_TOKEN"
        "ghcr.io/github/github-mcp-server"
      }
      env {
        ["GITHUB_PERSONAL_ACCESS_TOKEN"] = "${input:github-token}"
      }
    }
}
```
