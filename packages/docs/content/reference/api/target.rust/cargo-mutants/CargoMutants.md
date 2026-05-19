---
title: target.rust.cargo-mutants.CargoMutants
description: A typed authoring surface for `.cargo/mutants.toml`.
---

# `target.rust.cargo-mutants.CargoMutants`

A typed authoring surface for `.cargo/mutants.toml`.

cargo-mutants (https://mutants.rs) generates and runs source-code
mutations to surface gaps in your test suite. The TOML config tunes
the timeout, test tool, examine/exclude globs, and the regex /
path filters that limit which mutants get spawned.

Reference: https://mutants.rs/configuration.html

## Fields

#### `additional_cargo_args`

```pkl
additional_cargo_args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L14-L14)

#### `additional_cargo_test_args`

```pkl
additional_cargo_test_args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L15-L15)

#### `baseline`

```pkl
baseline: ("run"|"skip")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L16-L16)

#### `cap_lints`

```pkl
cap_lints: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L17-L17)

#### `copy_target`

```pkl
copy_target: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L18-L18)

#### `copy_vcs`

```pkl
copy_vcs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L19-L19)

#### `error_values`

```pkl
error_values: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L20-L20)

#### `exclude_globs`

```pkl
exclude_globs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L21-L21)

#### `exclude_re`

```pkl
exclude_re: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L22-L22)

#### `examine_globs`

```pkl
examine_globs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L23-L23)

#### `examine_re`

```pkl
examine_re: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L24-L24)

#### `hpp_examine_caller_functions`

```pkl
hpp_examine_caller_functions: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L25-L25)

#### `in_place`

```pkl
in_place: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L26-L26)

#### `iterate`

```pkl
iterate: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L27-L27)

#### `minimum_test_timeout`

```pkl
minimum_test_timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L28-L28)

#### `outputDir`

```pkl
outputDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L29-L29)

#### `profile`

```pkl
profile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L30-L30)

#### `skip_calls`

```pkl
skip_calls: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L31-L31)

#### `skip_calls_defaults`

```pkl
skip_calls_defaults: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L32-L32)

#### `test_package`

```pkl
test_package: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L33-L33)

#### `test_tool`

```pkl
test_tool: ("cargo"|"nextest")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L34-L34)

#### `test_workspace`

```pkl
test_workspace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L35-L35)

#### `timeout_multiplier`

```pkl
timeout_multiplier: Float? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L36-L36)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L37-L37)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L98-L98)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo-mutants/CargoMutants.pkl#L99-L99)

