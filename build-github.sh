#!/usr/bin/env bash

set -eu

ROOT_DIR=$(cd $(dirname ${BASH_SOURCE}) && pwd)

cd "${ROOT_DIR}"
(
  set -x
  ng build --prod --output-path docs --base-href /garbage-piano/
  cp docs/index.html docs/404.html
  touch docs/.nojekyll
)
