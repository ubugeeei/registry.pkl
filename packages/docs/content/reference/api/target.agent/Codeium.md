---
title: target.agent.Codeium
description: A typed authoring surface for Codeium's `~/.codeium/config.json`.
---

# `target.agent.Codeium`

A typed authoring surface for Codeium's `~/.codeium/config.json`.

Codeium reads its CLI / VSCode settings either from environment
variables or from a JSON config file. This module models the
commonly tuned subset.

Reference: https://codeium.com/extensions

## Fields

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L26-L26)

#### `apiKey`

```pkl
apiKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L27-L27)

#### `apiServerUrl`

```pkl
apiServerUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L28-L28)

#### `manager`

```pkl
manager: ("internal"|"system")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L29-L29)

#### `maxFileSize`

```pkl
maxFileSize: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L30-L30)

#### `disableSuggestionsInCommentsAndStrings`

```pkl
disableSuggestionsInCommentsAndStrings: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L31-L31)

#### `disableInTerminal`

```pkl
disableInTerminal: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L32-L32)

#### `modelName`

```pkl
modelName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L33-L33)

#### `contextWindow`

```pkl
contextWindow: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L34-L34)

#### `telemetry`

```pkl
telemetry: Telemetry? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L35-L35)

#### `enterprise`

```pkl
enterprise: Enterprise? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L36-L36)

#### `allowedRepositories`

```pkl
allowedRepositories: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L37-L37)

#### `disabledLanguages`

```pkl
disabledLanguages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L38-L38)

#### `keymap`

```pkl
keymap: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L39-L39)

#### `chat`

```pkl
chat: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L41-L41)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L103-L103)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L104-L104)

## Classes

### `Telemetry`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L13-L13)

#### `shareCode`

```pkl
shareCode: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L14-L14)

#### `shareIde`

```pkl
shareIde: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L16-L16)

### `Enterprise`

#### `portalUrl`

```pkl
portalUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L20-L20)

#### `apiUrl`

```pkl
apiUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L21-L21)

#### `apiToken`

```pkl
apiToken: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/codeium/Codeium.pkl#L23-L23)

