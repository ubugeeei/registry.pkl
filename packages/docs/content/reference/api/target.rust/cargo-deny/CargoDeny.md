---
title: target.rust.cargo-deny.CargoDeny
description: A typed authoring surface for `deny.toml`.
---

# `target.rust.cargo-deny.CargoDeny`

A typed authoring surface for `deny.toml`.

cargo-deny groups its rules into five sections: `graph`, `advisories`,
`licenses`, `bans`, and `sources`. Each section configures a separate
check; this module models them all and forwards extra fields via `extra`.

Reference: https://embarkstudios.github.io/cargo-deny/checks/cfg.html

## Type aliases

### `Severity`

```pkl
typealias Severity = "deny"|"warn"|"allow"
```

## Fields

#### `graph`

```pkl
graph: Graph? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L76-L76)

#### `advisories`

```pkl
advisories: Advisories? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L77-L77)

#### `licenses`

```pkl
licenses: Licenses? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L78-L78)

#### `bans`

```pkl
bans: Bans? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L79-L79)

#### `sources`

```pkl
sources: Sources? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L80-L80)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L81-L81)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L253-L253)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L254-L254)

## Classes

### `Graph`

#### `targets`

```pkl
targets: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L16-L16)

#### `excludeDev`

```pkl
excludeDev: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L17-L17)

#### `excludeWorkspaceMembers`

```pkl
excludeWorkspaceMembers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L18-L18)

#### `all_features`

```pkl
all_features: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L19-L19)

#### `no_default_features`

```pkl
no_default_features: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L20-L20)

#### `features`

```pkl
features: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L22-L22)

### `Advisories`

#### `db_path`

```pkl
db_path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L26-L26)

#### `db_urls`

```pkl
db_urls: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L27-L27)

#### `vulnerability`

```pkl
vulnerability: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L28-L28)

#### `unmaintained`

```pkl
unmaintained: ("workspace"|"transitive"|"all"|"none")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L29-L29)

#### `unsound`

```pkl
unsound: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L30-L30)

#### `yanked`

```pkl
yanked: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L31-L31)

#### `notice`

```pkl
notice: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L32-L32)

#### `ignore`

```pkl
ignore: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L33-L33)

#### `severity_threshold`

```pkl
severity_threshold: ("none"|"low"|"medium"|"high"|"critical")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L35-L35)

### `Licenses`

#### `allow`

```pkl
allow: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L39-L39)

#### `deny`

```pkl
deny: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L40-L40)

#### `exceptions`

```pkl
exceptions: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L41-L41)

#### `confidence_threshold`

```pkl
confidence_threshold: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L42-L42)

#### `copyleft`

```pkl
copyleft: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L43-L43)

#### `allow_osi_fsf_free`

```pkl
allow_osi_fsf_free: ("both"|"either"|"neither")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L44-L44)

#### `unlicensed`

```pkl
unlicensed: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L45-L45)

#### `default`

```pkl
default: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L46-L46)

#### `private`

```pkl
private: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L47-L47)

#### `clarify`

```pkl
clarify: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L48-L48)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L49-L49)

### `Bans`

#### `multiple_versions`

```pkl
multiple_versions: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L53-L53)

#### `wildcards`

```pkl
wildcards: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L54-L54)

#### `highlight`

```pkl
highlight: ("all"|"lowest-version"|"simplest-path")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L55-L55)

#### `workspace_default_features`

```pkl
workspace_default_features: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L56-L56)

#### `external_default_features`

```pkl
external_default_features: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L57-L57)

#### `allow`

```pkl
allow: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L58-L58)

#### `deny`

```pkl
deny: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L59-L59)

#### `skip`

```pkl
skip: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L60-L60)

#### `skip_tree`

```pkl
skip_tree: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L61-L61)

#### `features`

```pkl
features: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L62-L62)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L63-L63)

### `Sources`

#### `unknown_registry`

```pkl
unknown_registry: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L67-L67)

#### `unknown_git`

```pkl
unknown_git: Severity? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L68-L68)

#### `allow_registry`

```pkl
allow_registry: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L69-L69)

#### `allow_git`

```pkl
allow_git: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L70-L70)

#### `allow_org`

```pkl
allow_org: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L71-L71)

#### `private`

```pkl
private: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L72-L72)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-deny/CargoDeny.pkl#L73-L73)

