---
title: AI Agent Config
description: Why recent AI agent and MCP JSON configs deserve a dedicated compat.agent package.
---

# AI Agent Config

This target category is worth doing.

It is also the fastest-moving part of the whole ecosystem, so it needs stricter
design discipline than the other packages.

## Why compat.agent Should Exist

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

`compat.agent` should likely expose:

- a shared `mcp` core
- tool-specific wrappers
- profile and policy presets
- output helpers for each target file name

