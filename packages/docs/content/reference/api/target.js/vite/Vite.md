---
title: target.js.vite.Vite
description: A typed authoring surface for `vite.config.json`.
---

# `target.js.vite.Vite`

A typed authoring surface for `vite.config.json`.

Vite reads its config from a JS file by default, but it also accepts
a JSON form when invoked with `--config vite.config.json`. This
module covers the JSON-friendly subset most teams override.

Reference: https://vite.dev/config/

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L72-L72)

#### `root`

```pkl
root: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L73-L73)

#### `base`

```pkl
base: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L74-L74)

#### `mode`

```pkl
mode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L75-L75)

#### `publicDir`

```pkl
publicDir: (String|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L76-L76)

#### `cacheDir`

```pkl
cacheDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L77-L77)

#### `envPrefix`

```pkl
envPrefix: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L78-L78)

#### `envDir`

```pkl
envDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L79-L79)

#### `appType`

```pkl
appType: ("spa"|"mpa"|"custom")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L80-L80)

#### `logLevel`

```pkl
logLevel: ("info"|"warn"|"error"|"silent")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L81-L81)

#### `clearScreen`

```pkl
clearScreen: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L82-L82)

#### `define`

```pkl
define: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L83-L83)

#### `plugins`

```pkl
plugins: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L84-L84)

#### `server`

```pkl
server: ServerOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L85-L85)

#### `preview`

```pkl
preview: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L86-L86)

#### `build`

```pkl
build: BuildOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L87-L87)

#### `resolve`

```pkl
resolve: Resolve? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L88-L88)

#### `css`

```pkl
css: Css? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L89-L89)

#### `json`

```pkl
json: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L90-L90)

#### `esbuild`

```pkl
esbuild: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L91-L91)

#### `optimizeDeps`

```pkl
optimizeDeps: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L92-L92)

#### `ssr`

```pkl
ssr: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L93-L93)

#### `worker`

```pkl
worker: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L94-L94)

#### `experimental`

```pkl
experimental: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L95-L95)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L96-L96)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L272-L272)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L273-L273)

## Classes

### `ServerOptions`

#### `host`

```pkl
host: (String|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L13-L13)

#### `port`

```pkl
port: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L14-L14)

#### `strictPort`

```pkl
strictPort: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L15-L15)

#### `https`

```pkl
https: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L16-L16)

#### ``open``

```pkl
`open`: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L17-L17)

#### `proxy`

```pkl
proxy: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L18-L18)

#### `cors`

```pkl
cors: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L19-L19)

#### `headers`

```pkl
headers: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L20-L20)

#### `hmr`

```pkl
hmr: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L21-L21)

#### `watch`

```pkl
watch: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L22-L22)

#### `middlewareMode`

```pkl
middlewareMode: (Boolean|"html"|"ssr")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L23-L23)

#### `fs`

```pkl
fs: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L24-L24)

#### `origin`

```pkl
origin: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L25-L25)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L26-L26)

### `BuildOptions`

#### `target`

```pkl
target: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L30-L30)

#### `outDir`

```pkl
outDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L31-L31)

#### `assetsDir`

```pkl
assetsDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L32-L32)

#### `assetsInlineLimit`

```pkl
assetsInlineLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L33-L33)

#### `cssCodeSplit`

```pkl
cssCodeSplit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L34-L34)

#### `sourcemap`

```pkl
sourcemap: (Boolean|"inline"|"hidden")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L35-L35)

#### `minify`

```pkl
minify: (Boolean|"esbuild"|"terser")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L36-L36)

#### `rollupOptions`

```pkl
rollupOptions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L37-L37)

#### `lib`

```pkl
lib: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L38-L38)

#### `emptyOutDir`

```pkl
emptyOutDir: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L39-L39)

#### `manifest`

```pkl
manifest: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L40-L40)

#### `ssrManifest`

```pkl
ssrManifest: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L41-L41)

#### `ssr`

```pkl
ssr: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L42-L42)

#### `reportCompressedSize`

```pkl
reportCompressedSize: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L43-L43)

#### `chunkSizeWarningLimit`

```pkl
chunkSizeWarningLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L44-L44)

#### `watch`

```pkl
watch: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L45-L45)

#### `modulePreload`

```pkl
modulePreload: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L46-L46)

#### `cssTarget`

```pkl
cssTarget: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L47-L47)

#### `cssMinify`

```pkl
cssMinify: (Boolean|"esbuild"|"lightningcss")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L48-L48)

#### `copyPublicDir`

```pkl
copyPublicDir: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L50-L50)

### `Resolve`

#### `alias`

```pkl
alias: (Mapping<String, String>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L54-L54)

#### `dedupe`

```pkl
dedupe: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L55-L55)

#### `conditions`

```pkl
conditions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L56-L56)

#### `mainFields`

```pkl
mainFields: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L57-L57)

#### `extensions`

```pkl
extensions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L58-L58)

#### `preserveSymlinks`

```pkl
preserveSymlinks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L59-L59)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L60-L60)

### `Css`

#### `modules`

```pkl
modules: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L64-L64)

#### `postcss`

```pkl
postcss: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L65-L65)

#### `preprocessorOptions`

```pkl
preprocessorOptions: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L66-L66)

#### `devSourcemap`

```pkl
devSourcemap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L67-L67)

#### `transformer`

```pkl
transformer: ("postcss"|"lightningcss")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L68-L68)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/vite/Vite.pkl#L69-L69)

