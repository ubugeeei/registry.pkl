#!/usr/bin/env bash

set -euo pipefail

package_output_dir="${PACKAGE_OUTPUT_DIR:-dist/package-artifacts}"
publish_dir="${PUBLISH_DIR:-dist/publish}"
release_dir="${PACKAGE_RELEASE_DIR:-releases}"

if [ ! -d "${package_output_dir}" ]; then
  echo "package artifacts directory not found: ${package_output_dir}" >&2
  echo "run scripts/package-artifacts.sh first" >&2
  exit 1
fi

mkdir -p "${publish_dir}/${release_dir}"

found_package=0
for package_dir in "${package_output_dir}"/*@*; do
  if [ ! -d "${package_dir}" ]; then
    continue
  fi

  found_package=1
  package_version="$(basename "${package_dir}")"
  release_target_dir="${publish_dir}/${release_dir}/${package_version}"

  mkdir -p "${release_target_dir}"

  cp "${package_dir}/${package_version}" "${publish_dir}/${package_version}"
  cp "${package_dir}/${package_version}.sha256" "${publish_dir}/${package_version}.sha256"
  cp "${package_dir}/${package_version}.zip" "${release_target_dir}/${package_version}.zip"
  cp "${package_dir}/${package_version}.zip.sha256" "${release_target_dir}/${package_version}.zip.sha256"
done

if [ "${found_package}" = "0" ]; then
  echo "no package artifacts found under ${package_output_dir}" >&2
  exit 1
fi
