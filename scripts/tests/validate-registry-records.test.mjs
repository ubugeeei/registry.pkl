import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import test from "node:test";

import { validateRecord, validateRegistry } from "../validate-registry-records.mjs";

const execFileAsync = promisify(execFile);
const scriptPath = fileURLToPath(new URL("../validate-registry-records.mjs", import.meta.url));

const validRecord = (overrides = {}) => ({
  name: "target.js",
  version: "1.2.3",
  packageUri: "package://pkg.registry.example.com/target.js@1.2.3",
  metadataUrl: "https://pkg.registry.example.com/target.js@1.2.3",
  packageZipUrl: "https://github.com/ubugeeei/registry.pkl/releases/download/target.js-v1.2.3/target.js@1.2.3.zip",
  docsUrl: "https://ubugeeei.github.io/registry.pkl/packages/target-js/1.2.3/",
  ecosystem: "javascript",
  targets: ["package.json", "tsconfig.json"],
  formats: ["json"],
  tags: ["typescript", "tooling"],
  maintainers: ["ubugeeei"],
  source: {
    repo: "https://github.com/ubugeeei/registry.pkl",
    directory: "packages/target.js",
  },
  ...overrides,
});

test("accepts a documented registry record", () => {
  assert.deepEqual(validateRecord(validRecord(), "registry/target.js/1.2.3.json"), []);
});

test("validates semver, package URI, and metadata URL coupling", () => {
  const failures = validateRecord(
    validRecord({
      version: "01.2.3",
      packageUri: "https://pkg.registry.example.com/target.js@1.2.3",
      metadataUrl: "https://pkg.registry.example.com/target.js@1.2.3.json",
    }),
    "registry/target.js/01.2.3.json",
  );
  const messages = failures.map((failure) => failure.message);

  assert(messages.some((message) => message.includes("version: must be a strict SemVer")));
  assert(messages.some((message) => message.includes("packageUri: must use the package:// scheme")));
  assert(messages.some((message) => message.includes("metadataUrl: must equal package URI metadata URL")));
});

test("rejects targets owned by a different first-party package", () => {
  const failures = validateRecord(
    validRecord({
      targets: ["Cargo.toml"],
    }),
    "registry/target.js/1.2.3.json",
  );

  assert(
    failures.some((failure) => failure.message.includes("targets[0]: is owned by target.rust, not target.js")),
  );
});

test("rejects mutable artifact and docs references", () => {
  const failures = validateRecord(
    validRecord({
      packageZipUrl: "https://github.com/ubugeeei/registry.pkl/archive/refs/heads/main.zip",
      docsUrl: "https://ubugeeei.github.io/registry.pkl/latest/",
    }),
    "registry/target.js/1.2.3.json",
  );
  const messages = failures.map((failure) => failure.message);

  assert(messages.some((message) => message.includes("packageZipUrl: must include version 1.2.3")));
  assert(messages.some((message) => message.includes("packageZipUrl: must not point at latest")));
  assert(messages.some((message) => message.includes("docsUrl: must include version 1.2.3")));
  assert(messages.some((message) => message.includes("docsUrl: must not point at latest")));
});

test("rejects placeholder HTTPS hosts in committed records", () => {
  const failures = validateRecord(
    validRecord({
      packageUri: "package://pkg.example.invalid/target.js@1.2.3",
      metadataUrl: "https://pkg.example.invalid/target.js@1.2.3",
      packageZipUrl: "https://example.invalid/target.js@1.2.3.zip",
      docsUrl: "https://example.invalid/target.js/1.2.3/",
    }),
    "registry/target.js/1.2.3.json",
  );
  const messages = failures.map((failure) => failure.message);

  assert(messages.some((message) => message.includes("packageUri: must use a package host controlled by the package author")));
  assert(messages.some((message) => message.includes("metadataUrl: must use a host controlled by the package author")));
  assert(messages.some((message) => message.includes("packageZipUrl: must use a host controlled by the package author")));
  assert(messages.some((message) => message.includes("docsUrl: must use a host controlled by the package author")));
});

test("detects duplicate immutable versions in the current registry tree", async () => {
  const workspace = await mkdtemp(path.join(tmpdir(), "registry-validator-"));
  await mkdir(path.join(workspace, "registry", "target.js"), { recursive: true });
  await mkdir(path.join(workspace, "registry", "dupe"), { recursive: true });
  await writeJson(path.join(workspace, "registry", "target.js", "1.2.3.json"), validRecord());
  await writeJson(path.join(workspace, "registry", "dupe", "target-js-1.2.3.json"), validRecord());

  const result = await inDirectory(workspace, () => validateRegistry());

  assert.equal(result.recordCount, 2);
  assert(result.failures.some((failure) => failure.message.includes("duplicates immutable registry version")));
});

test("changed mode rejects edits to existing registry versions", async () => {
  const workspace = await gitWorkspace();
  const recordPath = path.join(workspace, "registry", "target.js", "1.2.3.json");
  await mkdir(path.dirname(recordPath), { recursive: true });
  await writeJson(recordPath, validRecord());
  await git(workspace, "add", ".");
  await git(workspace, "commit", "-m", "seed registry record");
  await writeJson(
    recordPath,
    validRecord({
      packageZipUrl:
        "https://github.com/ubugeeei/registry.pkl/releases/download/target.js-v1.2.3/target.js@1.2.3-repacked.zip",
    }),
  );
  await git(workspace, "add", ".");
  await git(workspace, "commit", "-m", "mutate registry record");

  const { stdout, stderr, exitCode } = await runNode(scriptPath, ["--changed", "--base-ref", "HEAD~1"], {
    cwd: workspace,
  });

  assert.equal(exitCode, 1, stdout + stderr);
  assert(stderr.includes("existing registry versions are immutable"));
});

test("changed mode ignores non-registry changes", async () => {
  const workspace = await gitWorkspace();
  await writeFile(path.join(workspace, "README.md"), "# test\n");
  await git(workspace, "add", ".");
  await git(workspace, "commit", "-m", "seed readme");
  await writeFile(path.join(workspace, "README.md"), "# changed\n");
  await git(workspace, "add", ".");
  await git(workspace, "commit", "-m", "change readme");

  const { stdout, stderr, exitCode } = await runNode(scriptPath, ["--changed", "--base-ref", "HEAD~1"], {
    cwd: workspace,
  });

  assert.equal(exitCode, 0, stdout + stderr);
  assert(stdout.includes("No registry records"));
});

const writeJson = async (file, value) => {
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
};

const gitWorkspace = async () => {
  const workspace = await mkdtemp(path.join(tmpdir(), "registry-validator-git-"));
  await git(workspace, "init");
  await git(workspace, "config", "user.email", "registry-validator@example.com");
  await git(workspace, "config", "user.name", "Registry Validator");
  return workspace;
};

const git = (cwd, ...args) => execFileAsync("git", args, { cwd });

const runNode = async (script, args, options = {}) => {
  try {
    const result = await execFileAsync(process.execPath, [script, ...args], options);
    return { ...result, exitCode: 0 };
  } catch (error) {
    return {
      exitCode: error.code,
      stderr: error.stderr ?? "",
      stdout: error.stdout ?? "",
    };
  }
};

const inDirectory = async (directory, callback) => {
  const previous = process.cwd();
  process.chdir(directory);
  try {
    return await callback();
  } finally {
    process.chdir(previous);
  }
};
