---
title: target.env.Direnv
description: A typed authoring surface for `.envrc`.
---

# `target.env.Direnv`

A typed authoring surface for `.envrc`.

direnv `.envrc` is a Bash script. This module exposes the common
patterns — env vars, layout shorthands, path manipulations, watch
declarations — as structured fields so the generated script remains
readable and reviewable, while leaving an `extra` body escape hatch
for arbitrary Bash.

## Fields

#### `shebang`

Optional shebang. direnv runs `.envrc` under Bash regardless, so this
is purely cosmetic — useful for editors that key off the shebang for
syntax highlighting.

```pkl
shebang: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L13-L13)

#### `layouts`

`layout <name>` directives applied in order.

Examples: "python3", "node", "go", "rust", "ruby".

```pkl
layouts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L18-L18)

#### `env`

Environment variables (rendered as `export KEY=value` lines).

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L21-L21)

#### `pathAdd`

PATH prepends. Each entry becomes `PATH_add <dir>`.

```pkl
pathAdd: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L24-L24)

#### `watch`

File / directory paths to watch — `watch_file <path>` per entry.

```pkl
watch: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L27-L27)

#### `sourceEnv`

`source_env <path>` directives (load another .envrc).

```pkl
sourceEnv: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L30-L30)

#### `sourceUp`

`source_up [filename]` — load an .envrc from a parent directory.

```pkl
sourceUp: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L33-L33)

#### `useFlake`

`use flake` shorthand for nix flake integration.

```pkl
useFlake: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L36-L36)

#### `dotenv`

`dotenv [path]` — load a .env file (path is optional).

```pkl
dotenv: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L39-L39)

#### `body`

Trailing raw lines appended after the structured directives.

```pkl
body: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L42-L42)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/direnv/Direnv.pkl#L66-L66)

