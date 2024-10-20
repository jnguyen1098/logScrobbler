#/usr/bin/env bash

set -eux

die() {
    printf '%s\n' "$*" >&2
    exit 1
}

# pre checks

which python2 || die "could not find python2"
which yarn || die "could not find yarn (npm install --global yarn)"

NODE_VER="18"

if node -v | grep -i "v${NODE_VER}\..*"; then
    true
else
    die "need to be node ${NODE_VER}. I recommend installing nvm and then using 'nvm install ${NODE_VER}' and then 'nvm use ${NODE_VER}'"
fi

rm -rf node_modules
yarn cache clean
yarn install

echo 'Now run `yarn serve` and then open up `localhost:8080`. It wont look like the live site, because I stripped the css'

