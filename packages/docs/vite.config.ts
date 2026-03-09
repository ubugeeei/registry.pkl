import { defineConfig } from "vite";
import { defineTheme, defaultTheme, oxContent } from "@ox-content/vite-plugin";
import pkl from "@shikijs/langs/pkl";

const normalizeBase = (value: string) => {
  if (value === "/") return "/";
  return `/${value.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
};

const docsBase = normalizeBase(
  process.env.DOCS_BASE ?? (process.env.GITHUB_ACTIONS === "true" ? "/registry.pkl/" : "/"),
);
const docsSiteUrl = process.env.DOCS_SITE_URL ?? "https://ubugeeei.github.io/registry.pkl/";

export default defineConfig({
  base: docsBase,
  plugins: [
    oxContent({
      srcDir: "content",
      outDir: "../../dist/docs",
      base: docsBase,
      highlight: true,
      highlightTheme: "github-dark",
      highlightLangs: pkl,
      mermaid: true,
      toc: true,
      tocMaxDepth: 3,
      ssg: {
        siteName: "registry.pkl",
        siteUrl: docsSiteUrl,
        theme: defineTheme({
          extends: defaultTheme,
          colors: {
            primary: "#8a6e45",
            primaryHover: "#6f5837",
            background: "#faf7f0",
            backgroundAlt: "#f2ece1",
            text: "#171411",
            textMuted: "#6d655d",
            border: "#d8d0c4",
            codeBackground: "#10151c",
            codeText: "#f6f1e8",
          },
          darkColors: {
            primary: "#d8bb8c",
            primaryHover: "#ead2ae",
            background: "#0b1016",
            backgroundAlt: "#10161f",
            text: "#f5efe6",
            textMuted: "#b1a697",
            border: "#27313f",
            codeBackground: "#070b11",
            codeText: "#f5efe6",
          },
          fonts: {
            sans: '"IBM Plex Sans JP", sans-serif',
            mono: '"IBM Plex Mono", monospace',
          },
          header: {
            logo: `${docsBase}registry-mark.svg`,
            logoWidth: 28,
            logoHeight: 28,
          },
          footer: {
            message: 'Built with <a href="https://github.com/ubugeeei/ox-content">ox-content</a>.',
            copyright: "Third-party design notes for registry.pkl and first-party target.* packages.",
          },
          socialLinks: {
            github: "https://github.com/ubugeeei/registry.pkl",
          },
          embed: {
            head: `
              <script>
                try {
                  const theme = localStorage.getItem("theme") || "dark";
                  if (!localStorage.getItem("theme")) {
                    localStorage.setItem("theme", theme);
                  }
                  document.documentElement.setAttribute("data-theme", theme);
                } catch {
                  document.documentElement.setAttribute("data-theme", "dark");
                }
              </script>
              <link rel="icon" type="image/svg+xml" href="${docsBase}registry-mark.svg">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="${docsBase}registry-ui.css">
              <script defer src="${docsBase}registry-ui.js"></script>
            `,
            headerAfter: `
              <div class="registry-tabs-shell">
                <nav class="registry-tabs" aria-label="Primary">
                  <a href="${docsBase}index.html" data-registry-nav="${docsBase}">Home</a>
                  <a href="${docsBase}start/index.html" data-registry-nav="${docsBase}start/">Start Here</a>
                  <a href="${docsBase}packages/index.html" data-registry-nav="${docsBase}packages/">Packages</a>
                  <a href="${docsBase}targets/index.html" data-registry-nav="${docsBase}targets/">Targets</a>
                  <a href="${docsBase}guide/index.html" data-registry-nav="${docsBase}guide/">Guides</a>
                  <a href="${docsBase}reference/index.html" data-registry-nav="${docsBase}reference/">Reference</a>
                  <a href="${docsBase}architecture/index.html" data-registry-nav="${docsBase}architecture/">Architecture</a>
                </nav>
              </div>
            `,
          },
        }),
      },
    }),
  ],
  server: {
    port: 4173,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "../../dist/docs",
  },
});
