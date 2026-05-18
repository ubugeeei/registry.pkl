import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const docsDir = process.env.DOCS_OUTPUT_DIR ?? path.join("dist", "docs");

const normalizeBase = (value) => {
  const trimmed = value.trim();

  if (trimmed === "" || trimmed === "/") return "/";

  return `/${trimmed.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
};

const docsBase = normalizeBase(process.env.DOCS_BASE ?? "/");
const failures = [];

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
};

const relativeOutputPath = (filePath) => path.relative(docsDir, filePath);

const htmlFiles = (await walk(docsDir)).filter((file) => file.endsWith(".html"));
let hasGeneratedSearchModal = false;
let hasGeneratedMobileMenuAffordance = false;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const displayPath = relativeOutputPath(file);

  hasGeneratedSearchModal ||= html.includes('class="search-modal"');
  hasGeneratedMobileMenuAffordance ||= html.includes("data-mobile-menu");

  if (html.includes("language-mermaid")) {
    failures.push(`${displayPath}: contains an unrendered Mermaid code block`);
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const ref = match[1];

    if (ref.endsWith(".md")) {
      failures.push(`${displayPath}: links to markdown source ${ref}`);
    }

    if (ref.startsWith("/") && docsBase !== "/" && !ref.startsWith(docsBase)) {
      failures.push(`${displayPath}: root-relative ref ${ref} does not start with ${docsBase}`);
    }
  }
}

const readOutputFile = async (relativePath) => {
  const filePath = path.join(docsDir, relativePath);

  return existsSync(filePath) ? await readFile(filePath, "utf8") : null;
};

const registryUiJs = await readOutputFile("registry-ui.js");
const registryUiCss = await readOutputFile("registry-ui.css");

if (hasGeneratedSearchModal) {
  if (!registryUiJs) {
    failures.push("registry-ui.js: missing search accessibility runtime patch");
  } else {
    const searchNameMatches = registryUiJs.match(
      /setAttribute\(\s*["']aria-label["']\s*,\s*["']Search documentation["']\s*\)/g,
    );
    const searchA11yChecks = [
      {
        label: "assigns role=dialog to the generated search modal",
        passes: /setAttribute\(\s*["']role["']\s*,\s*["']dialog["']\s*\)/.test(registryUiJs),
      },
      {
        label: "assigns aria-modal=true to the generated search modal",
        passes: /setAttribute\(\s*["']aria-modal["']\s*,\s*["']true["']\s*\)/.test(registryUiJs),
      },
      {
        label: "adds accessible names to the generated search dialog and input",
        passes: (searchNameMatches?.length ?? 0) >= 2,
      },
      {
        label: "restores focus when the generated search modal closes",
        passes:
          /restoreSearchFocus/.test(registryUiJs) &&
          /MutationObserver/.test(registryUiJs) &&
          /preventScroll:\s*true/.test(registryUiJs),
      },
    ];

    for (const { label, passes } of searchA11yChecks) {
      if (!passes) {
        failures.push(`registry-ui.js: ${label}`);
      }
    }
  }
}

if (hasGeneratedMobileMenuAffordance) {
  const hidesMobileMenu =
    registryUiCss &&
    /\.mobile-footer-btn\[data-mobile-menu\]\s*\{[^}]*display:\s*none\s*!important\s*;?[^}]*\}/s.test(
      registryUiCss,
    );
  const removesMobileMenu =
    registryUiJs &&
    /removeMobileMenuAffordance/.test(registryUiJs) &&
    /querySelector\(\s*["']\[data-mobile-menu\]["']\s*\)\?\.remove\(\)/.test(registryUiJs);

  if (!hidesMobileMenu && !removesMobileMenu) {
    failures.push("registry-ui: generated mobile menu affordance is not hidden or removed");
  }
}

const searchIndexPath = path.join(docsDir, "search-index.json");
if (existsSync(searchIndexPath)) {
  const searchIndex = JSON.parse(await readFile(searchIndexPath, "utf8"));

  for (const document of searchIndex.documents ?? []) {
    if (typeof document.url !== "string") continue;

    const url = document.url.split(/[?#]/, 1)[0];

    if (docsBase !== "/" && !url.startsWith(docsBase)) {
      failures.push(`search-index.json: ${url} does not start with ${docsBase}`);
      continue;
    }

    if (!url.endsWith("/") && !url.endsWith(".html")) {
      failures.push(`search-index.json: ${url} must end with / or .html`);
      continue;
    }

    const withoutBase = docsBase === "/" ? url.replace(/^\/+/, "") : url.slice(docsBase.length);
    const outputPath = url.endsWith("/")
      ? path.join(docsDir, withoutBase, "index.html")
      : path.join(docsDir, withoutBase);

    if (!existsSync(outputPath)) {
      failures.push(`search-index.json: ${url} does not resolve to ${relativeOutputPath(outputPath)}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Docs output validation failed:");

  for (const failure of failures) {
    console.error(`- ${failure}`);
  }

  process.exit(1);
}
