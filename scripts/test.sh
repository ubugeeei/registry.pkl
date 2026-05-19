#!/usr/bin/env bash
# Run `pkl test` for every target.* family. Each family is its own Pkl
# project, so imports of pantry deps like `@pkl.toml/toml.pkl` only resolve
# when pkl runs with the family directory as the working directory.

set -euo pipefail

FAMILIES=(
  target.core
  target.js
  target.env
  target.rust
  target.editor
  target.agent
  target.ci
  target.python
  target.lint
  target.container
  target.go
  target.deploy
)

failed=0

for family in "${FAMILIES[@]}"; do
  test_dir="packages/${family}/tests"
  if [[ ! -d "${test_dir}" ]]; then
    echo "::warning::no tests directory for ${family}, skipping"
    continue
  fi

  shopt -s nullglob
  tests=("${test_dir}"/*.pkl)
  shopt -u nullglob

  if [[ ${#tests[@]} -eq 0 ]]; then
    echo "::warning::${test_dir} is empty, skipping"
    continue
  fi

  echo "==> pkl test ${family}"
  pushd "packages/${family}" >/dev/null
  relative=("${tests[@]#packages/${family}/}")
  if ! pkl test "${relative[@]}"; then
    failed=1
  fi
  popd >/dev/null
done

if [[ ${failed} -ne 0 ]]; then
  echo "::error::pkl test failed for at least one family"
  exit 1
fi
