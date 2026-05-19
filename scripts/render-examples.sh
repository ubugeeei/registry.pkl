#!/usr/bin/env bash
# Render every `examples/*.pkl` to stdout (then /dev/null) to confirm
# nothing in the typed module surface area has regressed. Used by the
# CI workflow — the build fails if any example fails to evaluate.

set -euo pipefail

if ! command -v pkl >/dev/null 2>&1; then
  echo "pkl CLI not found in PATH" >&2
  exit 1
fi

examples=()
while IFS= read -r line; do
  examples+=("${line}")
done < <(find examples -maxdepth 1 -type f -name "*.pkl" | sort)

if [[ ${#examples[@]} -eq 0 ]]; then
  echo "::warning::no examples under examples/"
  exit 0
fi

failed=0
for src in "${examples[@]}"; do
  if ! pkl eval "${src}" > /dev/null 2>&1; then
    echo "::error file=${src}::failed to render"
    pkl eval "${src}" 2>&1 | sed 's/^/  /'
    failed=1
  fi
done

if [[ ${failed} -ne 0 ]]; then
  echo "::error::one or more examples failed to render"
  exit 1
fi

echo "OK: ${#examples[@]} example(s) rendered"
