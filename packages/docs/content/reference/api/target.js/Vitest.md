---
title: target.js.Vitest
description: A typed authoring surface for Vitest configuration emitted as JSON.
---

# `target.js.Vitest`

A typed authoring surface for Vitest configuration emitted as JSON.

The canonical Vitest config lives in `vite.config.ts` (a TypeScript
module). This schema models the `test` block as a JSON document
suitable for the `vitest` key inside `package.json` or for tooling
that consumes a generated JSON sidecar. It is also the right place
to declare a fully-typed authoring surface that a `vite.config.ts`
hand-written wrapper can import via JSON.

## Type aliases

### `Environment`

```pkl
typealias Environment = "node"|"jsdom"|"happy-dom"|"edge-runtime"
```

### `Pool`

```pkl
typealias Pool = "threads"|"forks"|"vmThreads"|"vmForks"
```

## Fields

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L53-L53)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L54-L54)

#### `includeSource`

```pkl
includeSource: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L55-L55)

#### `globals`

```pkl
globals: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L56-L56)

#### `environment`

```pkl
environment: Environment? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L57-L57)

#### `pool`

```pkl
pool: Pool? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L58-L58)

#### `poolOptions`

```pkl
poolOptions: PoolOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L59-L59)

#### `setupFiles`

```pkl
setupFiles: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L60-L60)

#### `globalSetup`

```pkl
globalSetup: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L61-L61)

#### `watch`

```pkl
watch: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L62-L62)

#### `update`

```pkl
update: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L63-L63)

#### `silent`

```pkl
silent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L64-L64)

#### `hideSkippedTests`

```pkl
hideSkippedTests: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L65-L65)

#### `reporters`

```pkl
reporters: (String|Listing<String|Reporter>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L66-L66)

#### `outputFile`

```pkl
outputFile: (String|Mapping<String, String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L67-L67)

#### `coverage`

```pkl
coverage: Coverage? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L68-L68)

#### `testTimeout`

```pkl
testTimeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L69-L69)

#### `hookTimeout`

```pkl
hookTimeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L70-L70)

#### `teardownTimeout`

```pkl
teardownTimeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L71-L71)

#### `retry`

```pkl
retry: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L72-L72)

#### `bail`

```pkl
bail: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L73-L73)

#### `isolate`

```pkl
isolate: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L74-L74)

#### `sequence`

```pkl
sequence: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L75-L75)

#### `typecheck`

```pkl
typecheck: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L76-L76)

#### `benchmark`

```pkl
benchmark: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L77-L77)

#### `server`

```pkl
server: Server? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L78-L78)

#### `deps`

```pkl
deps: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L79-L79)

#### `maxConcurrency`

```pkl
maxConcurrency: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L80-L80)

#### `slowTestThreshold`

```pkl
slowTestThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L81-L81)

#### `allowOnly`

```pkl
allowOnly: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L82-L82)

#### `dangerouslyIgnoreUnhandledErrors`

```pkl
dangerouslyIgnoreUnhandledErrors: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L83-L83)

#### `diff`

```pkl
diff: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L84-L84)

#### `cache`

```pkl
cache: (Boolean|Mapping<String, String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L85-L85)

#### `mockReset`

```pkl
mockReset: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L86-L86)

#### `clearMocks`

```pkl
clearMocks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L87-L87)

#### `restoreMocks`

```pkl
restoreMocks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L88-L88)

#### `unstubGlobals`

```pkl
unstubGlobals: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L89-L89)

#### `unstubEnvs`

```pkl
unstubEnvs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L90-L90)

#### `testNamePattern`

```pkl
testNamePattern: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L91-L91)

#### `chaiConfig`

```pkl
chaiConfig: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L92-L92)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L93-L93)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L249-L249)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L250-L250)

## Classes

### `Coverage`

#### `provider`

```pkl
provider: "v8"|"istanbul"|"custom"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L17-L17)

#### `reporter`

```pkl
reporter: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L18-L18)

#### `reportsDirectory`

```pkl
reportsDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L19-L19)

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L20-L20)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L21-L21)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L22-L22)

#### `all`

```pkl
all: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L23-L23)

#### `clean`

```pkl
clean: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L24-L24)

#### `cleanOnRerun`

```pkl
cleanOnRerun: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L25-L25)

#### `thresholds`

```pkl
thresholds: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L26-L26)

#### `skipFull`

```pkl
skipFull: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L27-L27)

#### `reportOnFailure`

```pkl
reportOnFailure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L28-L28)

#### `watermarks`

```pkl
watermarks: Mapping<String, Listing<Int>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L30-L30)

### `PoolOptions`

#### `threads`

```pkl
threads: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L34-L34)

#### `forks`

```pkl
forks: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L35-L35)

#### `vmThreads`

```pkl
vmThreads: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L36-L36)

#### `vmForks`

```pkl
vmForks: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L38-L38)

### `Server`

#### `sourcemap`

```pkl
sourcemap: ("inline"|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L42-L42)

#### `debug`

```pkl
debug: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L43-L43)

#### `deps`

```pkl
deps: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L44-L44)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L45-L45)

### `Reporter`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L49-L49)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vitest/Vitest.pkl#L50-L50)

