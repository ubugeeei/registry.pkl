---
title: target.go.Golangci
description: A typed authoring surface for `.golangci.yml`.
---

# `target.go.Golangci`

A typed authoring surface for `.golangci.yml`.

## Fields

#### `run`

```pkl
run: Run? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L65-L65)

#### `linters`

```pkl
linters: Linters? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L66-L66)

#### `linterSettings`

```pkl
linterSettings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L67-L67)

#### `issues`

```pkl
issues: IssuesSection? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L68-L68)

#### `reportOutput`

```pkl
reportOutput: Output? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L69-L69)

#### `severity`

```pkl
severity: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L70-L70)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L71-L71)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L227-L227)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L228-L228)

## Classes

### `Run`

#### `timeout`

```pkl
timeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L7-L7)

#### `modulesDownloadMode`

```pkl
modulesDownloadMode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L8-L8)

#### `issuesExitCode`

```pkl
issuesExitCode: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L9-L9)

#### `tests`

```pkl
tests: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L10-L10)

#### `buildTags`

```pkl
buildTags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L11-L11)

#### `skipDirs`

```pkl
skipDirs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L12-L12)

#### `skipFiles`

```pkl
skipFiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L13-L13)

#### `go`

```pkl
go: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L14-L14)

#### `concurrency`

```pkl
concurrency: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L16-L16)

### `Linters`

#### `enable`

```pkl
enable: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L20-L20)

#### `disable`

```pkl
disable: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L21-L21)

#### `enableAll`

```pkl
enableAll: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L22-L22)

#### `disableAll`

```pkl
disableAll: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L23-L23)

#### `presets`

```pkl
presets: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L24-L24)

#### `fast`

```pkl
fast: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L25-L25)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L26-L26)

### `IssueRule`

#### `text`

```pkl
text: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L30-L30)

#### `source`

```pkl
source: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L31-L31)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L32-L32)

#### `pathExcept`

```pkl
pathExcept: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L33-L33)

#### `linters`

```pkl
linters: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L34-L34)

#### `severity`

```pkl
severity: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L35-L35)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L36-L36)

### `IssuesSection`

#### `excludeUseDefault`

```pkl
excludeUseDefault: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L40-L40)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L41-L41)

#### `excludeRules`

```pkl
excludeRules: Listing<IssueRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L42-L42)

#### `excludeDirs`

```pkl
excludeDirs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L43-L43)

#### `excludeFiles`

```pkl
excludeFiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L44-L44)

#### `maxIssuesPerLinter`

```pkl
maxIssuesPerLinter: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L45-L45)

#### `maxSameIssues`

```pkl
maxSameIssues: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L46-L46)

#### `newFromRev`

```pkl
newFromRev: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L47-L47)

#### `newFromPatch`

```pkl
newFromPatch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L48-L48)

#### ``new``

```pkl
`new`: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L49-L49)

#### `whole`

```pkl
whole: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L50-L50)

#### `fix`

```pkl
fix: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L51-L51)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L52-L52)

### `Output`

#### `formats`

```pkl
formats: (String|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L56-L56)

#### `sortResults`

```pkl
sortResults: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L57-L57)

#### `printIssuedLines`

```pkl
printIssuedLines: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L58-L58)

#### `printLinterName`

```pkl
printLinterName: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L59-L59)

#### `uniqByLine`

```pkl
uniqByLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L60-L60)

#### `pathPrefix`

```pkl
pathPrefix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L61-L61)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/golangci-lint/Golangci.pkl#L62-L62)

