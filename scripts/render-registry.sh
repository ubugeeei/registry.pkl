#!/usr/bin/env bash
# Render every registry-records/<family>/<version>.pkl source to
# registry/<family>/<version>.json so the validator + search index can
# consume them.
#
# Run after editing a record source or before publishing a release.

set -euo pipefail

if ! command -v pkl >/dev/null 2>&1; then
  echo "pkl CLI not found in PATH" >&2
  exit 1
fi

SOURCE_ROOT="registry-records"
OUT_ROOT="registry"

sources=()
while IFS= read -r line; do
  sources+=("${line}")
done < <(find "${SOURCE_ROOT}" -type f -name "*.pkl" | sort)

if [[ ${#sources[@]} -eq 0 ]]; then
  echo "::warning::no record sources under ${SOURCE_ROOT}/"
  exit 0
fi

for src in "${sources[@]}"; do
  rel="${src#${SOURCE_ROOT}/}"
  out="${OUT_ROOT}/${rel%.pkl}.json"
  mkdir -p "$(dirname "${out}")"
  echo "==> ${src} -> ${out}"
  pkl eval "${src}" > "${out}"
done

echo
echo "Rendered ${#sources[@]} record(s) to ${OUT_ROOT}/"
