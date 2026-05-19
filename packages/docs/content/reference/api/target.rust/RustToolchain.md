---
title: target.rust.RustToolchain
description: A typed authoring surface for `rust-toolchain.toml`.
---

# `target.rust.RustToolchain`

A typed authoring surface for `rust-toolchain.toml`.

The legacy single-line `rust-toolchain` file is also supported by rustup,
but only `rust-toolchain.toml` is fully expressive (components, targets,
profile, path override). This module models the TOML form documented
at https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file.

## Type aliases

### `Profile`

```pkl
typealias Profile = "minimal"|"default"|"complete"
```

## Fields

#### `toolchain`

```pkl
toolchain: Toolchain = new Toolchain {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L29-L29)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L56-L56)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L57-L57)

## Classes

### `Toolchain`

#### `channel`

"stable" / "1.78.0" / "nightly-2024-05-01" / "1.78.0-x86_64-unknown-linux-gnu".

```pkl
channel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L16-L16)

#### `profile`

rustup toolchain profile.

```pkl
profile: Profile? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L18-L18)

#### `components`

rustup components to install (e.g. "rustfmt", "clippy", "rust-analyzer").

```pkl
components: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L20-L20)

#### `targets`

Cross-compile targets to install.

```pkl
targets: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L22-L22)

#### `path`

Override file path (rare — points at an alternative toolchain dir).

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L24-L24)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rust-toolchain/RustToolchain.pkl#L25-L25)

