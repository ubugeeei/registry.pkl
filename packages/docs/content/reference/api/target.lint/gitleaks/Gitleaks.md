---
title: target.lint.gitleaks.Gitleaks
description: A typed authoring surface for `.gitleaks.toml`.
---

# `target.lint.gitleaks.Gitleaks`

A typed authoring surface for `.gitleaks.toml`.

## Fields

#### `title`

```pkl
title: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L30-L30)

#### ``extends``

```pkl
`extends`: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L31-L31)

#### `rules`

```pkl
rules: Listing<Rule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L32-L32)

#### `allowlist`

```pkl
allowlist: Allowlist? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L33-L33)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L34-L34)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L99-L99)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L100-L100)

## Classes

### `Allowlist`

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L8-L8)

#### `paths`

```pkl
paths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L9-L9)

#### `regexes`

```pkl
regexes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L10-L10)

#### `commits`

```pkl
commits: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L11-L11)

#### `stopwords`

```pkl
stopwords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L12-L12)

#### `regexTarget`

```pkl
regexTarget: ("match"|"line"|"secret")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L14-L14)

### `Rule`

#### `id`

```pkl
id: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L18-L18)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L19-L19)

#### `regex`

```pkl
regex: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L20-L20)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L21-L21)

#### `secretGroup`

```pkl
secretGroup: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L22-L22)

#### `entropy`

```pkl
entropy: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L23-L23)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L24-L24)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L25-L25)

#### `allowlist`

```pkl
allowlist: Allowlist? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L26-L26)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/gitleaks/Gitleaks.pkl#L27-L27)

