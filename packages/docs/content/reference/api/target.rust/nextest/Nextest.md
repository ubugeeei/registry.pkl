---
title: target.rust.nextest.Nextest
description: A typed authoring surface for `.config/nextest.toml`.
---

# `target.rust.nextest.Nextest`

A typed authoring surface for `.config/nextest.toml`.

cargo-nextest reads its config from `.config/nextest.toml` by
default. This module models the most-frequently-tuned options —
retries, thread budget, per-profile filter expressions, reporter
formatting, and per-test overrides.

Reference: https://nexte.st/book/configuration.html

## Fields

#### `store`

```pkl
store: StoreConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L76-L76)

#### `profiles`

```pkl
profiles: Mapping<String, Profile> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L77-L77)

#### `overrides`

```pkl
overrides: Listing<Override> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L78-L78)

#### `testGroups`

```pkl
testGroups: Mapping<String, TestGroup> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L79-L79)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L80-L80)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L217-L217)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L218-L218)

## Classes

### `StoreConfig`

#### `dir`

```pkl
dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L15-L15)

### `RetryConfig`

#### `backoff`

```pkl
backoff: ("fixed"|"exponential")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L19-L19)

#### `count`

```pkl
count: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L20-L20)

#### `delay`

```pkl
delay: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L21-L21)

#### `jitter`

```pkl
jitter: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L22-L22)

#### `maxDelay`

```pkl
maxDelay: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L23-L23)

### `StatusLevel`

#### `value`

"none" / "fail" / "retry" / "slow" / "leak" / "pass" / "skip" / "all"

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L28-L28)

### `FailureOutput`

#### `value`

"immediate" / "immediate-final" / "final" / "never"

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L33-L33)

### `Junit`

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L37-L37)

#### `reportName`

```pkl
reportName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L38-L38)

#### `storeSuccessOutput`

```pkl
storeSuccessOutput: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L39-L39)

#### `storeFailureOutput`

```pkl
storeFailureOutput: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L40-L40)

### `Profile`

#### `retries`

```pkl
retries: (Int|RetryConfig)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L44-L44)

#### `testThreads`

```pkl
testThreads: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L45-L45)

#### `threadsRequired`

```pkl
threadsRequired: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L46-L46)

#### `runExtraArgs`

```pkl
runExtraArgs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L47-L47)

#### `slowTimeout`

```pkl
slowTimeout: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L48-L48)

#### `leakTimeout`

```pkl
leakTimeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L49-L49)

#### `failureOutput`

```pkl
failureOutput: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L50-L50)

#### `successOutput`

```pkl
successOutput: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L51-L51)

#### `statusLevel`

```pkl
statusLevel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L52-L52)

#### `finalStatusLevel`

```pkl
finalStatusLevel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L53-L53)

#### `failFast`

```pkl
failFast: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L54-L54)

#### `filter`

```pkl
filter: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L55-L55)

#### `defaultFilter`

```pkl
defaultFilter: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L56-L56)

#### `archiveIncludes`

```pkl
archiveIncludes: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L57-L57)

#### `junit`

```pkl
junit: Junit? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L58-L58)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L59-L59)

### `Override`

#### `filter`

```pkl
filter: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L63-L63)

#### `retries`

```pkl
retries: (Int|RetryConfig)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L64-L64)

#### `threadsRequired`

```pkl
threadsRequired: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L65-L65)

#### `slowTimeout`

```pkl
slowTimeout: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L66-L66)

#### `leakTimeout`

```pkl
leakTimeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L67-L67)

#### `testGroup`

```pkl
testGroup: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L68-L68)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L69-L69)

### `TestGroup`

#### `maxThreads`

```pkl
maxThreads: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/nextest/Nextest.pkl#L73-L73)

