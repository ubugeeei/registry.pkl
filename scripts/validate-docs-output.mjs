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

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const displayPath = relativeOutputPath(file);

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
