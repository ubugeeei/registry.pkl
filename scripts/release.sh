#!/usr/bin/env bash
# Build a release zip for a single target.* package and verify checksums.
#
# Usage:
#   scripts/release.sh <package> <version>          # build + verify, no push
#   scripts/release.sh --dry-run <package> <ver>    # same; just a louder name
#
# Example:
#   scripts/release.sh target.core 0.1.0
#
# This script does NOT push a tag or create a GitHub Release. That is the
# release-package.yml workflow's job. Use this locally to rehearse the
# packaging steps and to inspect the produced artifacts.

set -euo pipefail

if [[ "${1:-}" == "--dry-run" ]]; then
  shift
fi

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 [--dry-run] <package> <version>" >&2
  exit 2
fi

PACKAGE="$1"
VERSION="$2"
TAG="${PACKAGE}@${VERSION}"
OUT_ROOT=".out"
ARTIFACT_DIR="${OUT_ROOT}/${TAG}"

if [[ ! "$PACKAGE" =~ ^target\.(core|js|env|rust|editor|agent|ci)$ ]]; then
  echo "Unknown package: $PACKAGE" >&2
  exit 1
fi

if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[A-Za-z0-9.-]+)?(\+[A-Za-z0-9.-]+)?$ ]]; then
  echo "Not a SemVer version: $VERSION" >&2
  exit 1
fi

if ! command -v pkl >/dev/null 2>&1; then
  echo "pkl CLI not found in PATH" >&2
  exit 1
fi

DECLARED=$(pkl eval "packages/${PACKAGE}/PklProject" -x "package.version")
if [[ "$DECLARED" != "$VERSION" ]]; then
  echo "packages/${PACKAGE}/PklProject declares version=${DECLARED} but you asked to release ${VERSION}." >&2
  echo "Update the PklProject first." >&2
  exit 1
fi

echo "==> Resolving dependencies for ${PACKAGE}"
pkl project resolve "packages/${PACKAGE}"

echo "==> Packaging ${TAG} into ${ARTIFACT_DIR}"
rm -rf "${ARTIFACT_DIR}"
mkdir -p "${OUT_ROOT}"
# --skip-publish-check is required because the placeholder baseUri host
# (pkg.registry.invalid) is intentionally unresolvable. Publication
# immutability is enforced by the release workflow refusing to overwrite
# an existing GitHub Release tag, not by Pkl's HTTP-level check.
pkl project package "packages/${PACKAGE}" \
  --skip-publish-check \
  --output-path "${OUT_ROOT}/%{name}@%{version}"

echo "==> Verifying checksums"
# Pkl writes checksum files as a single raw hex digest (no filename), so
# the standard `sha256sum -c` format does not apply. Compare digests
# manually instead.
verify_digest() {
  local subject="$1"
  local digest_file="${subject}.sha256"
  local expected actual
  expected=$(tr -d '[:space:]' < "${digest_file}")
  if command -v sha256sum >/dev/null 2>&1; then
    actual=$(sha256sum "${subject}" | awk '{print $1}')
  else
    actual=$(shasum -a 256 "${subject}" | awk '{print $1}')
  fi
  if [[ "${expected}" != "${actual}" ]]; then
    echo "Checksum mismatch for ${subject}" >&2
    echo "  expected: ${expected}" >&2
    echo "  actual:   ${actual}" >&2
    return 1
  fi
  echo "${subject}: OK"
}

(cd "${ARTIFACT_DIR}" && \
  verify_digest "${TAG}.zip" && \
  verify_digest "${TAG}")

echo
echo "Release artifacts ready in ${ARTIFACT_DIR}:"
ls -la "${ARTIFACT_DIR}"
echo
echo "Next step (CI does this for real releases):"
echo "  gh workflow run release-package.yml -f package=${PACKAGE} -f version=${VERSION}"
