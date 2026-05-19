---
title: target.agent.OpenHands
description: A typed authoring surface for OpenHands (All Hands AI) `config.toml`.
---

# `target.agent.OpenHands`

A typed authoring surface for OpenHands (All Hands AI) `config.toml`.

Reference: https://docs.all-hands.dev/usage/configuration-options

## Fields

#### `core`

```pkl
core: CoreConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L106-L106)

#### `llm`

```pkl
llm: LlmConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L107-L107)

#### `agent`

```pkl
agent: AgentConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L108-L108)

#### `sandbox`

```pkl
sandbox: SandboxConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L109-L109)

#### `namedLlm`

```pkl
namedLlm: Mapping<String, LlmConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L110-L110)

#### `namedAgent`

```pkl
namedAgent: Mapping<String, AgentConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L111-L111)

#### `security`

```pkl
security: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L112-L112)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L113-L113)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L391-L391)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L392-L392)

## Classes

### `LlmConfig`

#### `model`

```pkl
model: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L10-L10)

#### `apiKey`

```pkl
apiKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L11-L11)

#### `apiBase`

```pkl
apiBase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L12-L12)

#### `apiVersion`

```pkl
apiVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L13-L13)

#### `embeddingModel`

```pkl
embeddingModel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L14-L14)

#### `embeddingBaseUrl`

```pkl
embeddingBaseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L15-L15)

#### `embeddingDeploymentName`

```pkl
embeddingDeploymentName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L16-L16)

#### `awsAccessKeyId`

```pkl
awsAccessKeyId: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L17-L17)

#### `awsSecretAccessKey`

```pkl
awsSecretAccessKey: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L18-L18)

#### `awsRegionName`

```pkl
awsRegionName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L19-L19)

#### `openrouterSiteUrl`

```pkl
openrouterSiteUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L20-L20)

#### `openrouterAppName`

```pkl
openrouterAppName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L21-L21)

#### `numRetries`

```pkl
numRetries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L22-L22)

#### `retryMultiplier`

```pkl
retryMultiplier: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L23-L23)

#### `retryMinWait`

```pkl
retryMinWait: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L24-L24)

#### `retryMaxWait`

```pkl
retryMaxWait: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L25-L25)

#### `timeout`

```pkl
timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L26-L26)

#### `maxMessageChars`

```pkl
maxMessageChars: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L27-L27)

#### `temperature`

```pkl
temperature: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L28-L28)

#### `topP`

```pkl
topP: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L29-L29)

#### `customLlmProvider`

```pkl
customLlmProvider: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L30-L30)

#### `maxInputTokens`

```pkl
maxInputTokens: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L31-L31)

#### `maxOutputTokens`

```pkl
maxOutputTokens: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L32-L32)

#### `inputCostPerToken`

```pkl
inputCostPerToken: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L33-L33)

#### `outputCostPerToken`

```pkl
outputCostPerToken: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L34-L34)

#### `ollamaBaseUrl`

```pkl
ollamaBaseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L35-L35)

#### `drop_params`

```pkl
drop_params: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L36-L36)

#### `modify_params`

```pkl
modify_params: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L37-L37)

#### `disable_vision`

```pkl
disable_vision: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L38-L38)

#### `caching_prompt`

```pkl
caching_prompt: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L39-L39)

#### `log_completions`

```pkl
log_completions: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L40-L40)

#### `log_completions_folder`

```pkl
log_completions_folder: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L42-L42)

### `AgentConfig`

#### `llm_config`

```pkl
llm_config: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L46-L46)

#### `enable_browsing`

```pkl
enable_browsing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L47-L47)

#### `enable_llm_editor`

```pkl
enable_llm_editor: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L48-L48)

#### `enable_jupyter`

```pkl
enable_jupyter: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L49-L49)

#### `enable_history_truncation`

```pkl
enable_history_truncation: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L50-L50)

#### `enable_prompt_extensions`

```pkl
enable_prompt_extensions: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L51-L51)

#### `disabled_microagents`

```pkl
disabled_microagents: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L52-L52)

#### `enable_som_visual_browsing`

```pkl
enable_som_visual_browsing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L53-L53)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L54-L54)

### `SandboxConfig`

#### `base_container_image`

```pkl
base_container_image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L58-L58)

#### `runtime_container_image`

```pkl
runtime_container_image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L59-L59)

#### `runtime_extra_deps`

```pkl
runtime_extra_deps: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L60-L60)

#### `runtime_startup_env_vars`

```pkl
runtime_startup_env_vars: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L61-L61)

#### `user_id`

```pkl
user_id: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L62-L62)

#### `timeout`

```pkl
timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L63-L63)

#### `enable_auto_lint`

```pkl
enable_auto_lint: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L64-L64)

#### `use_host_network`

```pkl
use_host_network: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L65-L65)

#### `initialize_plugins`

```pkl
initialize_plugins: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L66-L66)

#### `force_rebuild_runtime`

```pkl
force_rebuild_runtime: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L67-L67)

#### `keep_runtime_alive`

```pkl
keep_runtime_alive: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L68-L68)

#### `pause_closed_runtimes`

```pkl
pause_closed_runtimes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L69-L69)

#### `api_key`

```pkl
api_key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L70-L70)

#### `remote_runtime_api_url`

```pkl
remote_runtime_api_url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L71-L71)

#### `local_runtime_url`

```pkl
local_runtime_url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L72-L72)

#### `remote_runtime_init_timeout`

```pkl
remote_runtime_init_timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L73-L73)

#### `remote_runtime_resource_factor`

```pkl
remote_runtime_resource_factor: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L74-L74)

#### `enable_gpu`

```pkl
enable_gpu: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L75-L75)

#### `volumes`

```pkl
volumes: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L76-L76)

#### `selected_repo`

```pkl
selected_repo: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L77-L77)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L78-L78)

### `CoreConfig`

#### `workspace_base`

```pkl
workspace_base: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L82-L82)

#### `workspace_mount_path`

```pkl
workspace_mount_path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L83-L83)

#### `workspace_mount_path_in_sandbox`

```pkl
workspace_mount_path_in_sandbox: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L84-L84)

#### `workspace_mount_rewrite`

```pkl
workspace_mount_rewrite: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L85-L85)

#### `cache_dir`

```pkl
cache_dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L86-L86)

#### `debug`

```pkl
debug: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L87-L87)

#### `disable_color`

```pkl
disable_color: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L88-L88)

#### `save_trajectory_path`

```pkl
save_trajectory_path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L89-L89)

#### `replay_trajectory_path`

```pkl
replay_trajectory_path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L90-L90)

#### `file_store`

```pkl
file_store: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L91-L91)

#### `file_store_path`

```pkl
file_store_path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L92-L92)

#### `file_uploads_allowed_extensions`

```pkl
file_uploads_allowed_extensions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L93-L93)

#### `file_uploads_max_file_size_mb`

```pkl
file_uploads_max_file_size_mb: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L94-L94)

#### `file_uploads_restrict_file_types`

```pkl
file_uploads_restrict_file_types: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L95-L95)

#### `max_iterations`

```pkl
max_iterations: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L96-L96)

#### `max_budget_per_task`

```pkl
max_budget_per_task: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L97-L97)

#### `default_agent`

```pkl
default_agent: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L98-L98)

#### `jwt_secret`

```pkl
jwt_secret: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L99-L99)

#### `runtime`

```pkl
runtime: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L100-L100)

#### `conversation_max_age_seconds`

```pkl
conversation_max_age_seconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L101-L101)

#### `enable_default_condenser`

```pkl
enable_default_condenser: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L102-L102)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.agent/openhands/OpenHands.pkl#L103-L103)

