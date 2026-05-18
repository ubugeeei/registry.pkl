#!/usr/bin/env node

import { execFile } from "node:child_process";
import { constants as fsConstants } from "node:fs";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const RECORD_ROOT = "registry";
const SEMVER_PATTERN =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;
const PACKAGE_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9._-]*$/;
const ECOSYSTEM_PATTERN = /^[a-z][a-z0-9-]*$/;
const TAG_PATTERN = /^[a-z0-9][a-z0-9._-]*$/;
const MAINTAINER_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/;
const ALLOWED_FORMATS = new Set(["json", "toml", "yaml"]);
const REQUIRED_TOP_LEVEL_KEYS = [
  "name",
  "version",
  "packageUri",
  "metadataUrl",
  "packageZipUrl",
  "docsUrl",
  "ecosystem",
  "targets",
  "formats",
  "tags",
  "maintainers",
  "source",
];
const TOP_LEVEL_KEYS = new Set(REQUIRED_TOP_LEVEL_KEYS);
const SOURCE_KEYS = new Set(["repo", "directory"]);

export const targetOwners = new Map([
  ["package.json", "target.js"],
  ["tsconfig.json", "target.js"],
  ["biome.json", "target.js"],
  [".prettierrc", "target.js"],
  [".oxlintrc.json", "target.js"],
  [".oxfmtrc.json", "target.js"],
  ["pnpm-workspace.yaml", "target.js"],
  ["renovate.json", "target.js"],
  ["turbo.json", "target.js"],
  ["mise.toml", "target.env"],
  ["deno.json", "target.env"],
  ["wrangler.toml", "target.env"],
  ["docker-compose.yml", "target.env"],
  ["lefthook.yml", "target.env"],
  ["Cargo.toml", "target.rust"],
  ["clippy.toml", "target.rust"],
  ["rustfmt.toml", "target.rust"],
  ["settings.json", "target.editor"],
  ["extensions.json", "target.editor"],
  ["devcontainer.json", "target.editor"],
  ["GitHub Actions", "target.ci"],
  ["GitLab CI", "target.ci"],
  [".github/dependabot.yml", "target.ci"],
  ["agent MCP JSON", "target.agent"],
]);

export class ValidationError extends Error {
  constructor(location, message) {
    super(`${location}: ${message}`);
    this.location = location;
    this.validationMessage = message;
  }
}

const usage = `Usage:
  node scripts/validate-registry-records.mjs [options] [record.json ...]

Options:
  --changed              Validate changed registry records from git diff.
  --base-ref <ref>       Base ref for --changed and immutable-version checks.
  --head-ref <ref>       Head ref for --changed. Defaults to HEAD.
  --diff-range <range>   Git diff range to use for --changed.
  --registry-dir <dir>   Registry record root. Defaults to registry.
  --check-urls           Also verify URL reachability with HTTP HEAD/GET.
  -h, --help             Show this help text.
`;

export const parseArgs = (argv) => {
  const options = {
    baseRef: undefined,
    changed: false,
    checkUrls: false,
    diffRange: undefined,
    files: [],
    headRef: "HEAD",
    help: false,
    registryDir: RECORD_ROOT,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--changed") {
      options.changed = true;
    } else if (arg === "--check-urls") {
      options.checkUrls = true;
    } else if (arg === "--base-ref") {
      index += 1;
      if (argv[index] === undefined) throw new Error("--base-ref requires a value");
      options.baseRef = argv[index];
    } else if (arg === "--head-ref") {
      index += 1;
      if (argv[index] === undefined) throw new Error("--head-ref requires a value");
      options.headRef = argv[index];
    } else if (arg === "--diff-range") {
      index += 1;
      if (argv[index] === undefined) throw new Error("--diff-range requires a value");
      options.diffRange = argv[index];
    } else if (arg === "--registry-dir") {
      index += 1;
      if (argv[index] === undefined) throw new Error("--registry-dir requires a value");
      options.registryDir = normalizeRelativePath(argv[index]);
    } else if (arg === "-h" || arg === "--help") {
      options.help = true;
    } else if (arg.startsWith("-")) {
      throw new Error(`unknown option: ${arg}`);
    } else {
      options.files.push(normalizeRelativePath(arg));
    }
  }

  return options;
};

export const validateRegistry = async (options = {}) => {
  const resolvedOptions = {
    baseRef: undefined,
    changed: false,
    checkUrls: false,
    diffRange: undefined,
    files: [],
    headRef: "HEAD",
    registryDir: RECORD_ROOT,
    ...options,
  };
  const failures = [];
  const changedEntries = resolvedOptions.changed
    ? await readChangedRegistryEntries(resolvedOptions)
    : [];
  const files =
    resolvedOptions.files.length > 0
      ? resolvedOptions.files
      : resolvedOptions.changed
        ? changedEntries
            .filter((entry) => entry.kind !== "deleted")
            .map((entry) => entry.path)
        : await findRegistryRecordFiles(resolvedOptions.registryDir);
  const uniqueFiles = [...new Set(files.map(normalizeRelativePath))];
  const records = [];

  for (const entry of changedEntries) {
    if (entry.kind === "deleted") {
      failures.push(
        new ValidationError(entry.path, "registry records are immutable and cannot be deleted"),
      );
    }
  }

  for (const file of uniqueFiles) {
    if (!isRegistryRecordPath(file, resolvedOptions.registryDir)) {
      failures.push(new ValidationError(file, `registry records must be JSON files under ${resolvedOptions.registryDir}/`));
      continue;
    }

    try {
      const record = await readRecordFile(file);
      records.push({ file, record });
      failures.push(...validateRecord(record, file));
    } catch (error) {
      failures.push(error instanceof ValidationError ? error : new ValidationError(file, error.message));
    }
  }

  failures.push(...validateDuplicateVersions(records));

  if (resolvedOptions.baseRef) {
    failures.push(...(await validateImmutableVersions(records, resolvedOptions)));
  }

  if (resolvedOptions.checkUrls) {
    failures.push(...(await validateReachableUrls(records)));
  }

  return {
    changedCount: changedEntries.length,
    failures,
    recordCount: records.length,
  };
};

export const validateRecord = (record, file = "<record>") => {
  const failures = [];

  if (!isPlainObject(record)) {
    return [new ValidationError(file, "record must be a JSON object")];
  }

  for (const key of REQUIRED_TOP_LEVEL_KEYS) {
    if (!Object.hasOwn(record, key)) {
      failures.push(new ValidationError(`${file}.${key}`, "field is required"));
    }
  }

  for (const key of Object.keys(record)) {
    if (!TOP_LEVEL_KEYS.has(key)) {
      failures.push(new ValidationError(`${file}.${key}`, "field is not part of the documented record shape"));
    }
  }

  validateStringField(record, "name", file, failures, (value, location) => {
    if (!PACKAGE_NAME_PATTERN.test(value)) {
      failures.push(
        new ValidationError(location, "must start with a letter and contain only letters, numbers, dot, underscore, or hyphen"),
      );
    }
  });

  validateStringField(record, "version", file, failures, (value, location) => {
    if (!SEMVER_PATTERN.test(value)) {
      failures.push(new ValidationError(location, "must be a strict SemVer 2.0.0 version"));
    }
  });

  const packageUri = validatePackageUri(record, file, failures);
  validateUrlField(record, "metadataUrl", file, failures, { exactUrl: packageUri?.metadataUrl });
  validateUrlField(record, "packageZipUrl", file, failures, {
    mustContainVersion: record.version,
    mustEndWith: ".zip",
    rejectMutableReferences: true,
  });
  validateUrlField(record, "docsUrl", file, failures, {
    mustContainVersion: record.version,
    rejectMutableReferences: true,
  });

  validateStringField(record, "ecosystem", file, failures, (value, location) => {
    if (!ECOSYSTEM_PATTERN.test(value)) {
      failures.push(new ValidationError(location, "must be lowercase kebab-case"));
    }
  });

  validateArrayField(record, "targets", file, failures, {
    item: "string",
    minItems: 1,
    validateItem: (target, location) => {
      const owner = targetOwners.get(target);

      if (owner === undefined) {
        failures.push(new ValidationError(location, "must be listed in the target ownership vocabulary"));
        return;
      }

      if (targetOwnersByPackage.has(record.name) && owner !== record.name) {
        failures.push(new ValidationError(location, `is owned by ${owner}, not ${record.name}`));
      }
    },
  });

  validateArrayField(record, "formats", file, failures, {
    item: "string",
    minItems: 1,
    validateItem: (format, location) => {
      if (!ALLOWED_FORMATS.has(format)) {
        failures.push(new ValidationError(location, "must be one of json, toml, or yaml"));
      }
    },
  });

  validateArrayField(record, "tags", file, failures, {
    item: "string",
    minItems: 1,
    validateItem: (tag, location) => {
      if (!TAG_PATTERN.test(tag)) {
        failures.push(new ValidationError(location, "must be lowercase and contain only letters, numbers, dot, underscore, or hyphen"));
      }
    },
  });

  validateArrayField(record, "maintainers", file, failures, {
    item: "string",
    minItems: 1,
    validateItem: (maintainer, location) => {
      if (!MAINTAINER_PATTERN.test(maintainer)) {
        failures.push(new ValidationError(location, "must be a GitHub username"));
      }
    },
  });

  validateSource(record, file, failures);

  if (packageUri !== undefined) {
    if (record.name !== undefined && packageUri.name !== record.name) {
      failures.push(new ValidationError(`${file}.packageUri`, `package name ${packageUri.name} must match name ${record.name}`));
    }

    if (record.version !== undefined && packageUri.version !== record.version) {
      failures.push(new ValidationError(`${file}.packageUri`, `version ${packageUri.version} must match version ${record.version}`));
    }
  }

  return failures;
};

const targetOwnersByPackage = new Set(targetOwners.values());

const validatePackageUri = (record, file, failures) => {
  if (typeof record.packageUri !== "string" || record.packageUri.trim() === "") {
    if (Object.hasOwn(record, "packageUri")) {
      failures.push(new ValidationError(`${file}.packageUri`, "must be a non-empty string"));
    }
    return undefined;
  }

  let url;
  try {
    url = new URL(record.packageUri);
  } catch {
    failures.push(new ValidationError(`${file}.packageUri`, "must be a valid package:// URI"));
    return undefined;
  }

  if (url.protocol !== "package:") {
    failures.push(new ValidationError(`${file}.packageUri`, "must use the package:// scheme"));
  }

  if (url.username !== "" || url.password !== "" || url.search !== "" || url.hash !== "") {
    failures.push(new ValidationError(`${file}.packageUri`, "must not contain credentials, query parameters, or fragments"));
  }

  if (!isDnsHost(url.hostname)) {
    failures.push(new ValidationError(`${file}.packageUri`, "must include a DNS hostname package origin"));
  }

  if (isPlaceholderHost(url.hostname)) {
    failures.push(new ValidationError(`${file}.packageUri`, "must use a package host controlled by the package author"));
  }

  let packagePath;

  try {
    packagePath = decodeURIComponent(url.pathname);
  } catch {
    failures.push(new ValidationError(`${file}.packageUri`, "path must be valid URI-encoded text"));
    return undefined;
  }
  const atIndex = packagePath.lastIndexOf("@");

  if (atIndex <= 1 || atIndex === packagePath.length - 1) {
    failures.push(new ValidationError(`${file}.packageUri`, "path must end with /<package>@<version>"));
    return undefined;
  }

  const packagePathWithoutVersion = packagePath.slice(0, atIndex);
  const version = packagePath.slice(atIndex + 1);
  const name = packagePathWithoutVersion.split("/").at(-1);

  if (!PACKAGE_NAME_PATTERN.test(name)) {
    failures.push(new ValidationError(`${file}.packageUri`, "package path must end in a valid package name"));
  }

  if (!SEMVER_PATTERN.test(version)) {
    failures.push(new ValidationError(`${file}.packageUri`, "package URI version must be strict SemVer 2.0.0"));
  }

  return {
    metadataUrl: `https://${url.host}${packagePath}`,
    name,
    version,
  };
};

const validateSource = (record, file, failures) => {
  const location = `${file}.source`;

  if (!Object.hasOwn(record, "source")) return;

  if (!isPlainObject(record.source)) {
    failures.push(new ValidationError(location, "must be an object"));
    return;
  }

  if (typeof record.source.repo !== "string" || record.source.repo.trim() === "") {
    failures.push(new ValidationError(`${location}.repo`, "must be a non-empty string"));
  } else {
    validateHttpsUrl(record.source.repo, `${location}.repo`, failures);
  }

  if (
    Object.hasOwn(record.source, "directory") &&
    (typeof record.source.directory !== "string" ||
      record.source.directory.trim() === "" ||
      path.isAbsolute(record.source.directory) ||
      record.source.directory.includes(".."))
  ) {
    failures.push(new ValidationError(`${location}.directory`, "must be a relative repository path"));
  }

  for (const key of Object.keys(record.source)) {
    if (!SOURCE_KEYS.has(key)) {
      failures.push(new ValidationError(`${location}.${key}`, "field is not part of the documented source shape"));
    }
  }
};

const validateStringField = (record, field, file, failures, validate) => {
  if (!Object.hasOwn(record, field)) return;

  const value = record[field];
  const location = `${file}.${field}`;

  if (typeof value !== "string" || value.trim() === "") {
    failures.push(new ValidationError(location, "must be a non-empty string"));
    return;
  }

  validate(value, location);
};

const validateArrayField = (record, field, file, failures, options) => {
  if (!Object.hasOwn(record, field)) return;

  const value = record[field];
  const location = `${file}.${field}`;

  if (!Array.isArray(value)) {
    failures.push(new ValidationError(location, "must be an array"));
    return;
  }

  if (value.length < options.minItems) {
    failures.push(new ValidationError(location, `must contain at least ${options.minItems} item(s)`));
  }

  const seen = new Set();

  for (const [index, item] of value.entries()) {
    const itemLocation = `${location}[${index}]`;

    if (typeof item !== options.item || item.trim?.() === "") {
      failures.push(new ValidationError(itemLocation, `must be a non-empty ${options.item}`));
      continue;
    }

    if (seen.has(item)) {
      failures.push(new ValidationError(itemLocation, "must be unique"));
      continue;
    }

    seen.add(item);
    options.validateItem(item, itemLocation);
  }
};

const validateUrlField = (record, field, file, failures, options = {}) => {
  if (!Object.hasOwn(record, field)) return;

  if (typeof record[field] !== "string" || record[field].trim() === "") {
    failures.push(new ValidationError(`${file}.${field}`, "must be a non-empty string"));
    return;
  }

  const url = validateHttpsUrl(record[field], `${file}.${field}`, failures);
  if (url === undefined) return;

  if (options.exactUrl !== undefined && record[field] !== options.exactUrl) {
    failures.push(new ValidationError(`${file}.${field}`, `must equal package URI metadata URL ${options.exactUrl}`));
  }

  if (options.mustEndWith !== undefined && !url.pathname.endsWith(options.mustEndWith)) {
    failures.push(new ValidationError(`${file}.${field}`, `must end with ${options.mustEndWith}`));
  }

  if (options.mustContainVersion !== undefined && !url.pathname.includes(options.mustContainVersion)) {
    failures.push(new ValidationError(`${file}.${field}`, `must include version ${options.mustContainVersion} in the URL path`));
  }

  if (options.rejectMutableReferences && hasMutableReference(url.pathname)) {
    failures.push(new ValidationError(`${file}.${field}`, "must not point at latest, HEAD, main, master, or branch archives"));
  }
};

const validateHttpsUrl = (value, location, failures) => {
  let url;

  try {
    url = new URL(value);
  } catch {
    failures.push(new ValidationError(location, "must be a valid HTTPS URL"));
    return undefined;
  }

  if (url.protocol !== "https:") {
    failures.push(new ValidationError(location, "must use https://"));
  }

  if (url.username !== "" || url.password !== "" || url.hash !== "") {
    failures.push(new ValidationError(location, "must not contain credentials or fragments"));
  }

  if (!isDnsHost(url.hostname)) {
    failures.push(new ValidationError(location, "must include a DNS hostname"));
  }

  if (isPlaceholderHost(url.hostname)) {
    failures.push(new ValidationError(location, "must use a host controlled by the package author"));
  }

  return url;
};

const hasMutableReference = (pathname) =>
  /(^|\/)(?:latest|HEAD|main|master)(?:\/|$)/.test(pathname) ||
  pathname.includes("/archive/refs/heads/");

const validateDuplicateVersions = (records) => {
  const failures = [];
  const seen = new Map();

  for (const { file, record } of records) {
    if (typeof record.name !== "string" || typeof record.version !== "string") continue;

    const key = `${record.name}@${record.version}`;
    const existingFile = seen.get(key);

    if (existingFile !== undefined) {
      failures.push(new ValidationError(file, `duplicates immutable registry version already declared in ${existingFile}`));
    } else {
      seen.set(key, file);
    }
  }

  return failures;
};

const validateImmutableVersions = async (records, options) => {
  const failures = [];
  const baseRecords = await readBaseRegistryRecords(options.baseRef, options.registryDir);
  const byIdentity = new Map();
  const byPath = new Map();

  for (const baseRecord of baseRecords) {
    if (typeof baseRecord.record.name === "string" && typeof baseRecord.record.version === "string") {
      byIdentity.set(`${baseRecord.record.name}@${baseRecord.record.version}`, baseRecord);
    }
    byPath.set(baseRecord.file, baseRecord);
  }

  for (const { file, record } of records) {
    const identity =
      typeof record.name === "string" && typeof record.version === "string"
        ? `${record.name}@${record.version}`
        : undefined;
    const previousByPath = byPath.get(file);
    const previousByIdentity = identity === undefined ? undefined : byIdentity.get(identity);
    const previous = previousByPath ?? previousByIdentity;

    if (previous === undefined) continue;

    if (previousByIdentity !== undefined && previousByIdentity.file !== file) {
      failures.push(
        new ValidationError(file, `version ${identity} already exists at ${previousByIdentity.file}; publish a new version instead`),
      );
      continue;
    }

    if (previous.content !== (await readFile(file, "utf8"))) {
      failures.push(new ValidationError(file, "existing registry versions are immutable; publish a new version instead"));
    }
  }

  return failures;
};

const validateReachableUrls = async (records) => {
  const failures = [];

  for (const { file, record } of records) {
    for (const field of ["metadataUrl", "packageZipUrl", "docsUrl"]) {
      if (typeof record[field] !== "string" || !record[field].startsWith("https://")) continue;

      const reachable = await isReachable(record[field]);
      if (!reachable) {
        failures.push(new ValidationError(`${file}.${field}`, "URL was not reachable with HTTP HEAD or GET"));
      }
    }
  }

  return failures;
};

const isReachable = async (url) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
    });

    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
      });
    }

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
};

const readRecordFile = async (file) => {
  const content = await readFile(file, "utf8");

  try {
    return JSON.parse(content);
  } catch (error) {
    throw new ValidationError(file, `invalid JSON: ${error.message}`);
  }
};

const findRegistryRecordFiles = async (registryDir) => {
  if (!(await exists(registryDir))) return [];

  const files = [];
  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(".json")) {
        files.push(normalizeRelativePath(fullPath));
      }
    }
  };

  await walk(registryDir);
  return files.sort();
};

const readChangedRegistryEntries = async (options) => {
  const range =
    options.diffRange ??
    (options.baseRef === undefined ? `${options.headRef}^..${options.headRef}` : `${options.baseRef}...${options.headRef}`);
  const { stdout } = await execFileAsync("git", [
    "diff",
    "--name-status",
    "--diff-filter=ACMRD",
    range,
    "--",
    options.registryDir,
  ]);
  const entries = [];

  for (const line of stdout.split("\n")) {
    if (line.trim() === "") continue;

    const [status, firstPath, secondPath] = line.split("\t");
    const kind = status.startsWith("D") ? "deleted" : "changed";
    const rawPath = status.startsWith("R") ? secondPath : firstPath;
    const recordPath = normalizeRelativePath(rawPath);

    if (isRegistryRecordPath(recordPath, options.registryDir)) {
      entries.push({ kind, path: recordPath });
    }
  }

  return entries;
};

const readBaseRegistryRecords = async (baseRef, registryDir) => {
  let stdout = "";

  try {
    ({ stdout } = await execFileAsync("git", ["ls-tree", "-r", "--name-only", baseRef, "--", registryDir]));
  } catch (error) {
    throw new Error(`could not read registry records from base ref ${baseRef}: ${error.stderr || error.message}`);
  }

  const files = stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((file) => isRegistryRecordPath(file, registryDir));
  const records = [];

  for (const file of files) {
    try {
      const { stdout: content } = await execFileAsync("git", ["show", `${baseRef}:${file}`], {
        maxBuffer: 10 * 1024 * 1024,
      });
      records.push({ content, file, record: JSON.parse(content) });
    } catch {
      records.push({ content: "", file, record: {} });
    }
  }

  return records;
};

export const isRegistryRecordPath = (file, registryDir = RECORD_ROOT) => {
  const normalizedFile = normalizeRelativePath(file);

  return normalizedFile.startsWith(`${normalizeRelativePath(registryDir)}/`) && normalizedFile.endsWith(".json");
};

const isPlainObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isDnsHost = (host) =>
  /^[A-Za-z0-9.-]+$/.test(host) &&
  host.includes(".") &&
  !host.startsWith(".") &&
  !host.endsWith(".") &&
  !host.split(".").some((part) => part === "" || part.startsWith("-") || part.endsWith("-"));

const isPlaceholderHost = (host) =>
  host === "localhost" ||
  host === "example.invalid" ||
  host.endsWith(".invalid") ||
  host.endsWith(".localhost");

const exists = async (file) => {
  try {
    await access(file, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const normalizeRelativePath = (file) => file.replaceAll(path.sep, "/").replace(/^\.\//, "");

const printResult = (result) => {
  if (result.failures.length > 0) {
    console.error("Registry record validation failed:");

    for (const failure of result.failures) {
      console.error(`- ${failure.message}`);
    }

    return 1;
  }

  if (result.recordCount === 0) {
    console.log("No registry records to validate.");
  } else {
    console.log(`Registry record validation passed for ${result.recordCount} record(s).`);
  }

  return 0;
};

const main = async () => {
  let options;

  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    console.error(usage);
    return 2;
  }

  if (options.help) {
    console.log(usage);
    return 0;
  }

  try {
    const result = await validateRegistry(options);
    return printResult(result);
  } catch (error) {
    console.error(error.message);
    return 1;
  }
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = await main();
}
