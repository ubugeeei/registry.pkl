#!/usr/bin/env bash

set -euo pipefail

default_package_output_dir="dist/package-artifacts"
package_output_dir="${PACKAGE_OUTPUT_DIR:-${default_package_output_dir}}"
package_host="${PACKAGE_HOST:-pkg.example.invalid}"
package_base_path="${PACKAGE_BASE_PATH:-}"
package_base_url="${PACKAGE_BASE_URL:-https://${package_host}${package_base_path}}"
skip_publish_check="${SKIP_PUBLISH_CHECK:-}"

if [ -z "${skip_publish_check}" ]; then
  if [ "${package_host}" = "pkg.example.invalid" ]; then
    skip_publish_check="1"
  else
    skip_publish_check="0"
  fi
fi

if [ "${skip_publish_check}" = "1" ] &&
  [ "${package_host}" != "pkg.example.invalid" ] &&
  [ "${ALLOW_SKIP_PUBLISH_CHECK:-0}" != "1" ]; then
  echo "refusing to skip Pkl publish checks for PACKAGE_HOST=${package_host}" >&2
  echo "set ALLOW_SKIP_PUBLISH_CHECK=1 only for an explicit dry run" >&2
  exit 1
fi

projects=("$@")
if [ "${#projects[@]}" -eq 0 ]; then
  projects=(packages/target.*)
fi

if [ "${package_output_dir}" = "${default_package_output_dir}" ] &&
  [ "${KEEP_PACKAGE_OUTPUT:-0}" != "1" ]; then
  rm -rf -- "${package_output_dir}"
fi

mkdir -p "${package_output_dir}"

cmd=(
  pkl
  project
  package
  --output-path
  "${package_output_dir}/%{name}@%{version}"
)

if [ "${skip_publish_check}" = "1" ]; then
  cmd+=(--skip-publish-check)
fi

cmd+=("${projects[@]}")

export PACKAGE_HOST="${package_host}"
export PACKAGE_BASE_PATH="${package_base_path}"
export PACKAGE_BASE_URL="${package_base_url}"

"${cmd[@]}"
