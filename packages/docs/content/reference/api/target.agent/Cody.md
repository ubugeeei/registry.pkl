---
title: target.agent.Cody
description: A typed authoring surface for Sourcegraph Cody's `.vscode/cody.json`
---

# `target.agent.Cody`

A typed authoring surface for Sourcegraph Cody's `.vscode/cody.json`
or per-workspace settings overrides.

Reference: https://sourcegraph.com/docs/cody

## Fields

#### `serverEndpoint`

`cody.serverEndpoint` — Sourcegraph instance URL.

```pkl
serverEndpoint: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L18-L18)

#### `accessToken`

`cody.accessToken` — token for the Sourcegraph instance.

```pkl
accessToken: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L21-L21)

#### `autocompleteEnabled`

`cody.autocomplete.enabled`.

```pkl
autocompleteEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L24-L24)

#### `autocompleteProvider`

`cody.autocomplete.provider`.

```pkl
autocompleteProvider: ("anthropic"|"fireworks"|"experimental-ollama"|"unstable-openai")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L27-L27)

#### `autocompleteModel`

`cody.autocomplete.advanced.model`.

```pkl
autocompleteModel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L30-L30)

#### `chatPreInstruction`

`cody.chat.preInstruction`.

```pkl
chatPreInstruction: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L33-L33)

#### `codebase`

`cody.codebase` — repo identifier for context resolution.

```pkl
codebase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L36-L36)

#### `codeActionsEnabled`

`cody.codeActions.enabled`.

```pkl
codeActionsEnabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L39-L39)

#### `experimental`

`cody.experimental.foldingRanges` and other experimental flags.

```pkl
experimental: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L42-L42)

#### `commandCodeLenses`

`cody.commandCodeLenses`.

```pkl
commandCodeLenses: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L45-L45)

#### `commands`

Custom commands (rendered under `cody.commands`).

```pkl
commands: Mapping<String, Command> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L48-L48)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L50-L50)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L107-L107)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L108-L108)

## Classes

### `Command`

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L10-L10)

#### `prompt`

```pkl
prompt: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L11-L11)

#### `context`

```pkl
context: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L12-L12)

#### `mode`

```pkl
mode: ("ask"|"insert"|"edit")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/cody/Cody.pkl#L14-L14)

