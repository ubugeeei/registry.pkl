---
title: target.ci.StaleWorkflow
description: A typed GitHub Actions preset for closing stale issues and PRs.
---

# `target.ci.StaleWorkflow`

A typed GitHub Actions preset for closing stale issues and PRs.

## Fields

#### `name`

```pkl
name: String = "Stale"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L6-L6)

#### `schedule`

```pkl
schedule: String = "0 1 * * *"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L7-L7)

#### `runsOn`

```pkl
runsOn: String = "ubuntu-latest"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L8-L8)

#### `daysBeforeStale`

```pkl
daysBeforeStale: Int = 60
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L9-L9)

#### `daysBeforeClose`

```pkl
daysBeforeClose: Int = 14
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L10-L10)

#### `staleIssueLabel`

```pkl
staleIssueLabel: String = "stale"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L11-L11)

#### `stalePrLabel`

```pkl
stalePrLabel: String = "stale"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L12-L12)

#### `staleIssueMessage`

```pkl
staleIssueMessage: String = "This issue has been automatically marked as stale due to inactivity. Comment to keep it open, otherwise it will be closed in 14 days."
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L13-L13)

#### `stalePrMessage`

```pkl
stalePrMessage: String = "This pull request has been automatically marked as stale due to inactivity. Push or comment to keep it open."
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L14-L14)

#### `exemptIssueLabels`

```pkl
exemptIssueLabels: String = "pinned,security,roadmap"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L15-L15)

#### `exemptPrLabels`

```pkl
exemptPrLabels: String = "pinned,security"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L16-L16)

#### `operationsPerRun`

```pkl
operationsPerRun: Int = 60
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L18-L18)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L60-L60)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/StaleWorkflow.pkl#L61-L61)

