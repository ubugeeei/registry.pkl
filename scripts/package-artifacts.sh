#!/usr/bin/env bash

set -euo pipefail

package_output_dir="${PACKAGE_OUTPUT_DIR:-dist/package-artifacts}"
package_host="${PACKAGE_HOST:-pkg.example.invalid}"
package_base_path="${PACKAGE_BASE_PATH:-}"
package_base_url="${PACKAGE_BASE_URL:-https://${package_host}${package_base_path}}"
skip_publish_check="${SKIP_PUBLISH_CHECK:-1}"

projects=("$@")
if [ "${#projects[@]}" -eq 0 ]; then
  projects=(packages/target.*)
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
