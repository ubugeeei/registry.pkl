#!/usr/bin/env bash

set -euo pipefail

publish_dir="${PUBLISH_DIR:-dist/publish}"
package_bucket="${PACKAGE_BUCKET:-}"
package_s3_endpoint="${PACKAGE_S3_ENDPOINT:-}"
package_aws_region="${PACKAGE_AWS_REGION:-auto}"
package_base_path="${PACKAGE_BASE_PATH:-}"

package_key_prefix="${package_base_path#/}"
package_key_prefix="${package_key_prefix%/}"

if [ ! -d "${publish_dir}" ]; then
  echo "publish layout directory not found: ${publish_dir}" >&2
  echo "run scripts/build-publish-layout.sh first" >&2
  exit 1
fi

: "${package_bucket:?Set PACKAGE_BUCKET}"
: "${package_s3_endpoint:?Set PACKAGE_S3_ENDPOINT}"

if ! command -v aws >/dev/null 2>&1; then
  echo "aws CLI is required to sync publish layout" >&2
  exit 1
fi

if command -v sha256sum >/dev/null 2>&1; then
  checksum_cmd=(sha256sum)
else
  checksum_cmd=(shasum -a 256)
fi

checksum_file() {
  "${checksum_cmd[@]}" "$1" | awk '{print $1}'
}

checksum_stdin() {
  "${checksum_cmd[@]}" | awk '{print $1}'
}

object_exists() {
  aws s3api head-object \
    --bucket "${package_bucket}" \
    --key "$1" \
    --endpoint-url "${package_s3_endpoint}" \
    --region "${package_aws_region}" \
    >/dev/null 2>&1
}

uploaded_count=0
skipped_count=0

while IFS= read -r relative_path; do
  relative_path="${relative_path#./}"
  [ -n "${relative_path}" ] || continue

  object_key="${relative_path}"
  if [ -n "${package_key_prefix}" ]; then
    object_key="${package_key_prefix}/${relative_path}"
  fi

  local_path="${publish_dir}/${relative_path}"
  remote_uri="s3://${package_bucket}/${object_key}"
  local_sha="$(checksum_file "${local_path}")"

  if object_exists "${object_key}"; then
    remote_sha="$(
      aws s3 cp \
        "${remote_uri}" \
        - \
        --no-progress \
        --endpoint-url "${package_s3_endpoint}" \
        --region "${package_aws_region}" |
        checksum_stdin
    )"

    if [ "${local_sha}" = "${remote_sha}" ]; then
      skipped_count=$((skipped_count + 1))
      continue
    fi

    echo "refusing to overwrite immutable object: ${remote_uri}" >&2
    exit 1
  fi

  aws s3 cp \
    "${local_path}" \
    "${remote_uri}" \
    --no-progress \
    --endpoint-url "${package_s3_endpoint}" \
    --region "${package_aws_region}"

  uploaded_count=$((uploaded_count + 1))
done < <(
  cd "${publish_dir}"
  find . -type f | sort
)

target_uri="s3://${package_bucket}"
if [ -n "${package_key_prefix}" ]; then
  target_uri="${target_uri}/${package_key_prefix}"
fi

echo "uploaded ${uploaded_count} file(s); skipped ${skipped_count} identical existing file(s) to ${target_uri}"
