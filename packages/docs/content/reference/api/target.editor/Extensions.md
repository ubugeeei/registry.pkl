---
title: target.editor.Extensions
description: A typed authoring surface for `.vscode/extensions.json`.
---

# `target.editor.Extensions`

A typed authoring surface for `.vscode/extensions.json`.

## Fields

#### `recommendations`

```pkl
recommendations: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Extensions.pkl#L6-L6)

#### `unwantedRecommendations`

```pkl
unwantedRecommendations: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Extensions.pkl#L7-L7)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Extensions.pkl#L8-L8)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Extensions.pkl#L24-L24)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.editor/vscode/Extensions.pkl#L25-L25)

