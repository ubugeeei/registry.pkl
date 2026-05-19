---
title: target.agent.codex.Settings
description: A typed authoring surface for the OpenAI Codex CLI config file
---

# `target.agent.codex.Settings`

A typed authoring surface for the OpenAI Codex CLI config file
(`~/.codex/config.toml` on macOS/Linux).

Modeled after https://github.com/openai/codex/blob/main/docs/config.md.
The schema favors the fields most teams override: model selection,
approval policy, sandbox tuning, and MCP server registrations.

## Type aliases

### `ApprovalPolicy`

```pkl
typealias ApprovalPolicy = "untrusted"|"on-request"|"on-failure"|"never"
```

### `SandboxMode`

```pkl
typealias SandboxMode = "read-only"|"workspace-write"|"danger-full-access"
```

### `FileOpener`

```pkl
typealias FileOpener = "vscode"|"vscode-insiders"|"windsurf"|"cursor"|"none"
```

### `Reasoning`

```pkl
typealias Reasoning = "minimal"|"low"|"medium"|"high"
```

## Fields

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L73-L73)

#### `modelProvider`

```pkl
modelProvider: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L74-L74)

#### `modelReasoningEffort`

```pkl
modelReasoningEffort: Reasoning? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L75-L75)

#### `modelReasoningSummary`

```pkl
modelReasoningSummary: "auto"|"concise"|"detailed"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L76-L76)

#### `modelVerbosity`

```pkl
modelVerbosity: "low"|"medium"|"high"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L77-L77)

#### `approvalPolicy`

```pkl
approvalPolicy: ApprovalPolicy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L78-L78)

#### `sandboxMode`

```pkl
sandboxMode: SandboxMode? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L79-L79)

#### `sandboxWorkspaceWrite`

```pkl
sandboxWorkspaceWrite: SandboxWorkspaceWrite? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L80-L80)

#### `fileOpener`

```pkl
fileOpener: FileOpener? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L81-L81)

#### `hideAgentReasoning`

```pkl
hideAgentReasoning: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L82-L82)

#### `showRawAgentReasoning`

```pkl
showRawAgentReasoning: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L83-L83)

#### `modelSupportsReasoningSummaries`

```pkl
modelSupportsReasoningSummaries: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L84-L84)

#### `projectDoc`

```pkl
projectDoc: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L85-L85)

#### `projectDocMaxBytes`

```pkl
projectDocMaxBytes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L86-L86)

#### `disableResponseStorage`

```pkl
disableResponseStorage: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L87-L87)

#### `tools`

```pkl
tools: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L88-L88)

#### `shellEnvironmentPolicy`

```pkl
shellEnvironmentPolicy: ShellEnvironmentPolicy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L89-L89)

#### `mcpServers`

```pkl
mcpServers: Mapping<String, McpServer> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L90-L90)

#### `modelProviders`

```pkl
modelProviders: Mapping<String, ModelProvider> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L91-L91)

#### `profiles`

```pkl
profiles: Mapping<String, Profile> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L92-L92)

#### `profile`

```pkl
profile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L93-L93)

#### `history`

```pkl
history: HistoryConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L94-L94)

#### `tui`

```pkl
tui: TuiConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L95-L95)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L96-L96)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L285-L285)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L286-L286)

## Classes

### `SandboxWorkspaceWrite`

#### `writableRoots`

```pkl
writableRoots: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L17-L17)

#### `networkAccess`

```pkl
networkAccess: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L18-L18)

#### `excludeTmpdirEnvVar`

```pkl
excludeTmpdirEnvVar: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L19-L19)

#### `excludeSlashTmp`

```pkl
excludeSlashTmp: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L21-L21)

### `ShellEnvironmentPolicy`

#### `inherit`

```pkl
inherit: "core"|"all"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L25-L25)

#### `ignoreDefaultExcludes`

```pkl
ignoreDefaultExcludes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L26-L26)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L27-L27)

#### `set`

```pkl
set: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L28-L28)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L30-L30)

### `HistoryConfig`

#### `persistence`

```pkl
persistence: "save-all"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L35-L35)

### `TuiConfig`

#### `notifications`

```pkl
notifications: Boolean|Listing<String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L39-L39)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L40-L40)

### `McpServer`

#### `command`

```pkl
command: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L44-L44)

#### `args`

```pkl
args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L45-L45)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L47-L47)

### `ModelProvider`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L51-L51)

#### `baseUrl`

```pkl
baseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L52-L52)

#### `envKey`

```pkl
envKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L53-L53)

#### `wireApi`

```pkl
wireApi: "chat"|"responses"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L54-L54)

#### `requestMaxRetries`

```pkl
requestMaxRetries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L55-L55)

#### `streamMaxRetries`

```pkl
streamMaxRetries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L56-L56)

#### `streamIdleTimeoutMs`

```pkl
streamIdleTimeoutMs: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L57-L57)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L58-L58)

### `Profile`

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L62-L62)

#### `modelProvider`

```pkl
modelProvider: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L63-L63)

#### `modelReasoningEffort`

```pkl
modelReasoningEffort: Reasoning? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L64-L64)

#### `modelReasoningSummary`

```pkl
modelReasoningSummary: "auto"|"concise"|"detailed"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L65-L65)

#### `modelVerbosity`

```pkl
modelVerbosity: "low"|"medium"|"high"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L66-L66)

#### `approvalPolicy`

```pkl
approvalPolicy: ApprovalPolicy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L67-L67)

#### `sandboxMode`

```pkl
sandboxMode: SandboxMode? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L68-L68)

#### `fileOpener`

```pkl
fileOpener: FileOpener? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L69-L69)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codex/Settings.pkl#L70-L70)

