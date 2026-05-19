---
title: target.lint.markdownlint.Markdownlint
description: A typed authoring surface for `.markdownlint.json` / `.markdownlint.jsonc`.
---

# `target.lint.markdownlint.Markdownlint`

A typed authoring surface for `.markdownlint.json` / `.markdownlint.jsonc`.

Rules are addressed by their canonical identifier (`MD001`..`MD059`).
Value `true` enables a rule with its defaults, `false` disables it, and
an object passes options through. The `extra` map remains available
for rules that have not been promoted to first-class fields yet.

## Type aliases

### `RuleValue`

```pkl
typealias RuleValue = Boolean|Mapping<String, Any>
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L13-L13)

#### `default`

```pkl
default: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L14-L14)

#### ``extends``

```pkl
`extends`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L15-L15)

#### `rules`

Rule overrides, keyed by `MD001` etc. or by rule alias.

```pkl
rules: Mapping<String, RuleValue> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L18-L18)

#### `lineLength`

Convenience knobs for the most-tuned rules. Setting these populates
the corresponding rule entries in `rules` automatically.

```pkl
lineLength: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L22-L22)

#### `headingStyle`

```pkl
headingStyle: "consistent"|"atx"|"atx_closed"|"setext"|"setext_with_atx"|"setext_with_atx_closed"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L23-L23)

#### `ulStyle`

```pkl
ulStyle: "consistent"|"asterisk"|"plus"|"dash"|"sublist"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L24-L24)

#### `emphasisStyle`

```pkl
emphasisStyle: "consistent"|"asterisk"|"underscore"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L25-L25)

#### `strongStyle`

```pkl
strongStyle: "consistent"|"asterisk"|"underscore"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L26-L26)

#### `codeBlockStyle`

```pkl
codeBlockStyle: "consistent"|"fenced"|"indented"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L27-L27)

#### `codeFenceStyle`

```pkl
codeFenceStyle: "consistent"|"backtick"|"tilde"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L28-L28)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L31-L31)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L69-L69)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.lint/markdownlint/Markdownlint.pkl#L70-L70)

