#!/usr/bin/env bash

set -eu

ROOT_DIR=$(cd $(dirname ${BASH_SOURCE}) && pwd)

cd "${ROOT_DIR}"
ng build --prod
cp docs/index.html docs/404.html
