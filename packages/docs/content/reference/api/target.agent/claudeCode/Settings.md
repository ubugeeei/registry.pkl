---
title: target.agent.claudeCode.Settings
description: A typed authoring surface for `~/.claude/settings.json` (Claude Code).
---

# `target.agent.claudeCode.Settings`

A typed authoring surface for `~/.claude/settings.json` (Claude Code).

Mirrors the user-, project-, and managed-settings JSON documented at
https://docs.claude.com/en/docs/claude-code/settings. The schema is
designed for `amends`: every field is optional, nested classes carry
`extra` escape hatches, but the public surface is wide enough that
`amends "@target.agent/claudeCode/Settings.pkl"` alone covers a real
configuration without dropping to raw maps.

## Type aliases

### `PermissionMode`

```pkl
typealias PermissionMode = "default"|"acceptEdits"|"plan"|"bypassPermissions"
```

## Fields

#### `apiKeyHelper`

```pkl
apiKeyHelper: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L66-L66)

#### `cleanupPeriodDays`

```pkl
cleanupPeriodDays: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L67-L67)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L68-L68)

#### `includeCoAuthoredBy`

```pkl
includeCoAuthoredBy: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L69-L69)

#### `permissions`

```pkl
permissions: Permissions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L70-L70)

#### `hooks`

Hook events keyed by lifecycle name: PreToolUse, PostToolUse, Notification,
UserPromptSubmit, Stop, SubagentStop, SessionStart, PreCompact, SessionEnd.

```pkl
hooks: Mapping<String, Listing<HookMatcher>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L74-L74)

#### `disableAllHooks`

```pkl
disableAllHooks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L76-L76)

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L77-L77)

#### `modelRouting`

```pkl
modelRouting: ModelRouting? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L78-L78)

#### `statusLine`

```pkl
statusLine: StatusLine? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L79-L79)

#### `forceLoginMethod`

```pkl
forceLoginMethod: "claudeai"|"console"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L80-L80)

#### `forceLoginOrgUUID`

```pkl
forceLoginOrgUUID: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L81-L81)

#### `enableAllProjectMcpServers`

```pkl
enableAllProjectMcpServers: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L82-L82)

#### `enabledMcpjsonServers`

```pkl
enabledMcpjsonServers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L83-L83)

#### `disabledMcpjsonServers`

```pkl
disabledMcpjsonServers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L84-L84)

#### `awsAuthRefresh`

```pkl
awsAuthRefresh: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L85-L85)

#### `awsCredentialExport`

```pkl
awsCredentialExport: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L86-L86)

#### `outputStyle`

```pkl
outputStyle: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L87-L87)

#### `outputStyles`

```pkl
outputStyles: Mapping<String, OutputStyle> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L88-L88)

#### `spinnerTipsConfig`

```pkl
spinnerTipsConfig: SpinnerTips? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L89-L89)

#### `autoConnectIde`

```pkl
autoConnectIde: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L90-L90)

#### `mcpServers`

Project- and team-level MCP server registrations rendered into the
`mcpServers` map. Reuses the shared MCP server union from
`target.agent/mcp/Core.pkl`.

```pkl
mcpServers: Mapping<String, Mcp.Server> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L95-L95)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L97-L97)

#### `defaultStdioType`

```pkl
defaultStdioType = "stdio"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L101-L101)

#### `includeDefaultStdioType`

```pkl
includeDefaultStdioType = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L102-L102)

#### `includeEmptyEnv`

```pkl
includeEmptyEnv = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L103-L103)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L264-L264)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L265-L265)

## Classes

### `Permissions`

#### `allow`

```pkl
allow: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L17-L17)

#### `ask`

```pkl
ask: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L18-L18)

#### `deny`

```pkl
deny: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L19-L19)

#### `additionalDirectories`

```pkl
additionalDirectories: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L20-L20)

#### `defaultMode`

```pkl
defaultMode: PermissionMode? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L21-L21)

#### `disableBypassPermissionsMode`

```pkl
disableBypassPermissionsMode: ("disable")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L23-L23)

### `Hook`

#### `type`

```pkl
type: "command" = "command"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L27-L27)

#### `command`

```pkl
command: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L28-L28)

#### `timeout`

```pkl
timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L30-L30)

### `HookMatcher`

#### `matcher`

```pkl
matcher: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L34-L34)

#### `hooks`

```pkl
hooks: Listing<Hook> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L35-L35)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L36-L36)

### `StatusLine`

#### `type`

```pkl
type: "command"|"static_text" = "command"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L40-L40)

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L41-L41)

#### `text`

```pkl
text: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L42-L42)

#### `padding`

```pkl
padding: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L43-L43)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L44-L44)

### `OutputStyle`

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L48-L48)

#### `prompt`

```pkl
prompt: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L50-L50)

### `ModelRouting`

#### `default`

```pkl
default: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L54-L54)

#### `background`

```pkl
background: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L55-L55)

#### `thinking`

```pkl
thinking: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L56-L56)

#### `vision`

```pkl
vision: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L57-L57)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L58-L58)

### `SpinnerTips`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L62-L62)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/claudeCode/Settings.pkl#L63-L63)

