---
title: target.editor.Workspace
description: A typed authoring surface for JetBrains workspace XML files
---

# `target.editor.Workspace`

A typed authoring surface for JetBrains workspace XML files
(`.idea/workspace.xml`).

JetBrains stores workspace state as XML, but the shape is a stable
tree of `<component>` elements containing nested `<option>` /
`<list>` / `<map>` nodes. This module emits a JSON intermediate
that downstream tooling (or a tiny Rust wrapper) can convert to
XML — Pkl does not ship an XML renderer, so we keep the shape
declarative and reviewable.

Reference: https://www.jetbrains.com/help/idea/configuring-the-project-environment.html

## Fields

#### `version`

Root <project version="N">.

```pkl
version: Int = 4
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L35-L35)

#### `components`

Components keyed by their `name=` attribute. The Workspace renders
`<project><component name=...>` for each.

```pkl
components: Mapping<String, Component> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L39-L39)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L41-L41)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L82-L82)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L83-L83)

## Classes

### `OptionValue`

#### `value`

`<option name="X" value="Y" />`.

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L18-L18)

#### `children`

`<option name="X"><value>...</value></option>` body, when value is structured.

```pkl
children: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L21-L21)

### `Component`

#### `name`

Component name, e.g. "RunManager", "PropertiesComponent".

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L26-L26)

#### `options`

Map of `<option>` children keyed by their `name=` attribute.

```pkl
options: Mapping<String, OptionValue> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L28-L28)

#### `children`

Arbitrary child element JSON for things that don't fit `options`.

```pkl
children: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/jetbrains/Workspace.pkl#L31-L31)

