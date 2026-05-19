---
title: target.env.Wrangler
description: A typed authoring surface for `wrangler.toml`.
---

# `target.env.Wrangler`

A typed authoring surface for `wrangler.toml`.

Cloudflare Wrangler reads its worker config from `wrangler.toml`. This
module models the top-level worker shape plus the most commonly used
binding tables (KV, R2, D1, queues, durable objects, vars, secrets).

## Fields

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L91-L91)

#### `main`

```pkl
main: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L92-L92)

#### `compatibility_date`

```pkl
compatibility_date: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L93-L93)

#### `compatibility_flags`

```pkl
compatibility_flags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L94-L94)

#### `workers_dev`

```pkl
workers_dev: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L95-L95)

#### `preview_urls`

```pkl
preview_urls: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L96-L96)

#### `account_id`

```pkl
account_id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L97-L97)

#### `routes`

```pkl
routes: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L98-L98)

#### `route`

```pkl
route: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L99-L99)

#### `node_compat`

```pkl
node_compat: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L100-L100)

#### `no_bundle`

```pkl
no_bundle: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L101-L101)

#### `minify`

```pkl
minify: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L102-L102)

#### `keep_vars`

```pkl
keep_vars: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L103-L103)

#### `logpush`

```pkl
logpush: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L104-L104)

#### `placement`

```pkl
placement: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L105-L105)

#### `limits`

```pkl
limits: Limits? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L106-L106)

#### `build`

```pkl
build: Build? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L107-L107)

#### `triggers`

```pkl
triggers: Triggers? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L108-L108)

#### `vars`

```pkl
vars: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L109-L109)

#### `kv_namespaces`

```pkl
kv_namespaces: Listing<KvNamespace> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L110-L110)

#### `r2_buckets`

```pkl
r2_buckets: Listing<R2Bucket> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L111-L111)

#### `d1_databases`

```pkl
d1_databases: Listing<D1Database> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L112-L112)

#### `queues`

```pkl
queues: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L113-L113)

#### `queueProducers`

```pkl
queueProducers: Listing<QueueProducer> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L114-L114)

#### `queueConsumers`

```pkl
queueConsumers: Listing<QueueConsumer> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L115-L115)

#### `durable_objects`

```pkl
durable_objects: Listing<DurableObjectBinding> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L116-L116)

#### `migrations`

```pkl
migrations: Listing<Migration> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L117-L117)

#### `env`

```pkl
env: Mapping<String, Env> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L118-L118)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L119-L119)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L330-L330)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L331-L331)

## Classes

### `KvNamespace`

#### `binding`

```pkl
binding: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L12-L12)

#### `id`

```pkl
id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L13-L13)

#### `preview_id`

```pkl
preview_id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L15-L15)

### `R2Bucket`

#### `binding`

```pkl
binding: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L19-L19)

#### `bucket_name`

```pkl
bucket_name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L20-L20)

#### `preview_bucket_name`

```pkl
preview_bucket_name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L21-L21)

#### `jurisdiction`

```pkl
jurisdiction: ("eu"|"fedramp")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L23-L23)

### `D1Database`

#### `binding`

```pkl
binding: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L27-L27)

#### `database_name`

```pkl
database_name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L28-L28)

#### `database_id`

```pkl
database_id: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L29-L29)

#### `preview_database_id`

```pkl
preview_database_id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L30-L30)

#### `migrations_dir`

```pkl
migrations_dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L31-L31)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L32-L32)

### `QueueProducer`

#### `binding`

```pkl
binding: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L36-L36)

#### `queue`

```pkl
queue: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L38-L38)

### `QueueConsumer`

#### `queue`

```pkl
queue: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L42-L42)

#### `max_batch_size`

```pkl
max_batch_size: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L43-L43)

#### `max_batch_timeout`

```pkl
max_batch_timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L44-L44)

#### `max_retries`

```pkl
max_retries: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L45-L45)

#### `dead_letter_queue`

```pkl
dead_letter_queue: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L47-L47)

### `DurableObjectBinding`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L51-L51)

#### `class_name`

```pkl
class_name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L52-L52)

#### `script_name`

```pkl
script_name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L53-L53)

#### `environment`

```pkl
environment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L54-L54)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L55-L55)

### `Migration`

#### `tag`

```pkl
tag: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L59-L59)

#### `new_classes`

```pkl
new_classes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L60-L60)

#### `renamed_classes`

```pkl
renamed_classes: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L61-L61)

#### `deleted_classes`

```pkl
deleted_classes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L62-L62)

#### `transferred_classes`

```pkl
transferred_classes: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L63-L63)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L64-L64)

### `Triggers`

#### `crons`

```pkl
crons: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L68-L68)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L69-L69)

### `Build`

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L73-L73)

#### `cwd`

```pkl
cwd: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L74-L74)

#### `watch_dir`

```pkl
watch_dir: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L75-L75)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L76-L76)

### `Limits`

#### `cpu_ms`

```pkl
cpu_ms: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L80-L80)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L81-L81)

### `Env`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L85-L85)

#### `routes`

```pkl
routes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L86-L86)

#### `vars`

```pkl
vars: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L87-L87)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/wrangler/Wrangler.pkl#L88-L88)

