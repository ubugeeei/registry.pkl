#!/usr/bin/env bash

set -euo pipefail

publish_dir="${PUBLISH_DIR:-dist/publish}"
package_bucket="${PACKAGE_BUCKET:-}"
package_s3_endpoint="${PACKAGE_S3_ENDPOINT:-}"
package_aws_region="${PACKAGE_AWS_REGION:-auto}"

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

aws s3 sync \
  "${publish_dir}/" \
  "s3://${package_bucket}" \
  --delete \
  --endpoint-url "${package_s3_endpoint}" \
  --region "${package_aws_region}"
