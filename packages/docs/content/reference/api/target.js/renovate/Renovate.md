---
title: target.js.renovate.Renovate
description: A typed authoring surface for `renovate.json`.
---

# `target.js.renovate.Renovate`

A typed authoring surface for `renovate.json`.

Models the Renovate Bot configuration schema documented at
https://docs.renovatebot.com/configuration-options/.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L38-L38)

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L39-L39)

#### `schedule`

```pkl
schedule: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L40-L40)

#### `timezone`

```pkl
timezone: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L41-L41)

#### `labels`

```pkl
labels: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L42-L42)

#### `assignees`

```pkl
assignees: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L43-L43)

#### `reviewers`

```pkl
reviewers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L44-L44)

#### `baseBranches`

```pkl
baseBranches: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L45-L45)

#### `ignorePaths`

```pkl
ignorePaths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L46-L46)

#### `enabledManagers`

```pkl
enabledManagers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L47-L47)

#### `prHourlyLimit`

```pkl
prHourlyLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L48-L48)

#### `prConcurrentLimit`

```pkl
prConcurrentLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L49-L49)

#### `rangeStrategy`

```pkl
rangeStrategy: "auto"|"pin"|"bump"|"replace"|"widen"|"update-lockfile"|"in-range-only"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L50-L50)

#### `rebaseWhen`

```pkl
rebaseWhen: "auto"|"never"|"conflicted"|"behind-base-branch"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L51-L51)

#### `semanticCommits`

```pkl
semanticCommits: "auto"|"enabled"|"disabled"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L52-L52)

#### `dependencyDashboard`

```pkl
dependencyDashboard: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L53-L53)

#### `dependencyDashboardTitle`

```pkl
dependencyDashboardTitle: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L54-L54)

#### `configMigration`

```pkl
configMigration: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L55-L55)

#### `packageRules`

```pkl
packageRules: Listing<PackageRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L56-L56)

#### `vulnerabilityAlerts`

```pkl
vulnerabilityAlerts: VulnerabilityAlerts? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L57-L57)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L58-L58)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L177-L177)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L178-L178)

## Classes

### `PackageRule`

#### `matchPackagePatterns`

```pkl
matchPackagePatterns: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L10-L10)

#### `matchPackageNames`

```pkl
matchPackageNames: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L11-L11)

#### `matchDepTypes`

```pkl
matchDepTypes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L12-L12)

#### `matchManagers`

```pkl
matchManagers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L13-L13)

#### `matchUpdateTypes`

```pkl
matchUpdateTypes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L14-L14)

#### `matchPaths`

```pkl
matchPaths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L15-L15)

#### `matchCurrentVersion`

```pkl
matchCurrentVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L16-L16)

#### `groupName`

```pkl
groupName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L17-L17)

#### `groupSlug`

```pkl
groupSlug: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L18-L18)

#### `schedule`

```pkl
schedule: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L19-L19)

#### `automerge`

```pkl
automerge: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L20-L20)

#### `automergeType`

```pkl
automergeType: "branch"|"pr"|"pr-comment"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L21-L21)

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L22-L22)

#### `labels`

```pkl
labels: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L23-L23)

#### `assignees`

```pkl
assignees: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L24-L24)

#### `reviewers`

```pkl
reviewers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L25-L25)

#### `prPriority`

```pkl
prPriority: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L26-L26)

#### `rangeStrategy`

```pkl
rangeStrategy: "auto"|"pin"|"bump"|"replace"|"widen"|"update-lockfile"|"in-range-only"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L28-L28)

### `VulnerabilityAlerts`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L32-L32)

#### `labels`

```pkl
labels: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L33-L33)

#### `assignees`

```pkl
assignees: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/renovate/Renovate.pkl#L35-L35)

