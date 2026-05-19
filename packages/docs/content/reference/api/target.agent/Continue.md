---
title: target.agent.Continue
description: A typed authoring surface for Continue's `~/.continue/config.json`.
---

# `target.agent.Continue`

A typed authoring surface for Continue's `~/.continue/config.json`.

Reference: https://docs.continue.dev/reference/config

## Fields

#### `models`

```pkl
models: Listing<Model> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L71-L71)

#### `tabAutocompleteModel`

```pkl
tabAutocompleteModel: Model? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L72-L72)

#### `embeddingsProvider`

```pkl
embeddingsProvider: Embeddings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L73-L73)

#### `slashCommands`

```pkl
slashCommands: Listing<SlashCommand> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L74-L74)

#### `contextProviders`

```pkl
contextProviders: Listing<ContextProvider> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L75-L75)

#### `customCommands`

```pkl
customCommands: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L76-L76)

#### `allowAnonymousTelemetry`

```pkl
allowAnonymousTelemetry: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L77-L77)

#### `disableIndexing`

```pkl
disableIndexing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L78-L78)

#### `disableSessionTitles`

```pkl
disableSessionTitles: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L79-L79)

#### `tabAutocompleteOptions`

```pkl
tabAutocompleteOptions: TabAutocomplete? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L80-L80)

#### `systemMessage`

```pkl
systemMessage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L81-L81)

#### `ui`

```pkl
ui: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L82-L82)

#### `experimental`

```pkl
experimental: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L83-L83)

#### `docs`

```pkl
docs: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L84-L84)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L85-L85)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L248-L248)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L249-L249)

## Classes

### `CompletionOptions`

#### `temperature`

```pkl
temperature: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L9-L9)

#### `topP`

```pkl
topP: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L10-L10)

#### `topK`

```pkl
topK: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L11-L11)

#### `presencePenalty`

```pkl
presencePenalty: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L12-L12)

#### `frequencyPenalty`

```pkl
frequencyPenalty: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L13-L13)

#### `maxTokens`

```pkl
maxTokens: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L14-L14)

#### `stop`

```pkl
stop: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L16-L16)

### `Model`

#### `title`

```pkl
title: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L20-L20)

#### `provider`

```pkl
provider: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L21-L21)

#### `model`

```pkl
model: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L22-L22)

#### `apiKey`

```pkl
apiKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L23-L23)

#### `apiBase`

```pkl
apiBase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L24-L24)

#### `apiType`

```pkl
apiType: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L25-L25)

#### `region`

```pkl
region: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L26-L26)

#### `contextLength`

```pkl
contextLength: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L27-L27)

#### `template`

```pkl
template: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L28-L28)

#### `systemMessage`

```pkl
systemMessage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L29-L29)

#### `completionOptions`

```pkl
completionOptions: CompletionOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L30-L30)

#### `capabilities`

```pkl
capabilities: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L31-L31)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L32-L32)

### `SlashCommand`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L36-L36)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L37-L37)

#### `step`

```pkl
step: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L38-L38)

#### `params`

```pkl
params: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L39-L39)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L40-L40)

### `ContextProvider`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L44-L44)

#### `params`

```pkl
params: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L46-L46)

### `Embeddings`

#### `provider`

```pkl
provider: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L50-L50)

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L51-L51)

#### `apiKey`

```pkl
apiKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L52-L52)

#### `apiBase`

```pkl
apiBase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L53-L53)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L54-L54)

### `TabAutocomplete`

#### `disable`

```pkl
disable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L58-L58)

#### `useCache`

```pkl
useCache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L59-L59)

#### `useFileSuffix`

```pkl
useFileSuffix: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L60-L60)

#### `maxPromptTokens`

```pkl
maxPromptTokens: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L61-L61)

#### `debounceDelay`

```pkl
debounceDelay: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L62-L62)

#### `maxSuffixPercentage`

```pkl
maxSuffixPercentage: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L63-L63)

#### `prefixPercentage`

```pkl
prefixPercentage: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L64-L64)

#### `template`

```pkl
template: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L65-L65)

#### `multilineCompletions`

```pkl
multilineCompletions: ("auto"|"always"|"never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L66-L66)

#### `useOtherFiles`

```pkl
useOtherFiles: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/continue/Continue.pkl#L68-L68)

