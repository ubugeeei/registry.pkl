import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const docsDir = process.env.DOCS_OUTPUT_DIR ?? path.join("dist", "docs");
const indexPath = path.join(docsDir, "search-index.json");

const index = JSON.parse(await readFile(indexPath, "utf8"));

for (const document of index.documents ?? []) {
  if (typeof document.url !== "string") continue;
  if (document.url.endsWith("/") || document.url.endsWith(".html")) continue;

  document.url = `${document.url.replace(/\/index$/, "")}/`;
}

await writeFile(indexPath, `${JSON.stringify(index)}\n`);
