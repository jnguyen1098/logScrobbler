# log-scrobbler

## Docker Installation
- `cd` into this repo
- `docker build -t logscrobbler .`
- `docker run -p 8080:8080 logscrobbler`
- Visit `localhost:8080`

## Manual Installation
- Run `install_24.sh` which should check for `yarn`, `python2`, and `node` 18
- Run `yarn install`
- Run `yarn serve`
- Visit `localhost:8080`

OLD README BELOW

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
