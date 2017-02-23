# Change Log

## 0.8.1 - 2017-02-23

* Dependency update.

* Fixed deprecation warnings from `image-webpack-loader`. See https://github.com/tcoopman/image-webpack-loader/issues/68
* Fixed deprecation warnings from `webpack 2`. 
  * `fallbackLoader` option - Replaced with `fallback`.
  * `loader` option - Replaced with `use`.

## 0.8.0 - 2017-01-18

* Replaced unmaintained `isparta` with `nyc` and `babel-plugin-istanbul`.
  * `nyc` configuration must reside under `package.json` because `babel-plugin-istanbul` will not work properly when placed under `.nycrc`.
    * See https://github.com/istanbuljs/nyc/issues/419
    * See https://github.com/istanbuljs/nyc/issues/377
  * Instead of hardcoding `include` path under `package.json`, which prevents dynamic configuration based on user settings, `exclude` paths are used.
 
* Configured Flow type check.
  * Configured Flow type linting.
  * `npm run flow` - Run Flow.
  * `npm test` - Run Flow first before running tests.
  * ESLint rule to ensure `// @flow` exists on the top of all files.
  * For certain Flow related problems (`record.toJS()`, `PropTypes.children`, etc), suppressed with `// $FlowFixMe` until they are fixed in the future.

* Added `yarn.lock` file to accommodate developers using Yarn. 

* Simplified module structure to prevent too many "single file in a directory" problems.
* Combined `npm run ci:clean`, `npm run ci:test` and `npm run ci:coverage` into `npm run ci` to prevent Mocha from running twice (once to generate test result file and another to generate code coverage result file).

* `scripts/script.js` - `--require ./src/js/__tests__` should use user configurable path. 

* Suppressed "WARNING in asset size limit" warning on `npm run build`.
* Removed commented `DedupePlugin` config because it will be removed in Webpack 2. See https://github.com/webpack/webpack/issues/2644
* Fixed "Using NoErrorsPlugin is deprecated. Use NoEmitOnErrorsPlugin instead.".

## 0.7.1 - 2016-12-29

* Dependency updates, particularly react-redux 5.x and webpack 2.2.x.
 
## 0.7.0 - 2016-11-30

* Webpack 2.x and tree shaking. Since Webpack 2.x supports `import` natively, modules are no longer converted to CommonJS modules by Babel.
* Upgraded to `material-ui` 0.16.x.
* Added `npm run stats` to create `stats.json` that can be loaded to http://webpack.github.io/analyse/
* Enabled HTTPS on webpack-dev-server.
* Dropped `es6-promise` and `babel-plugin-transform-runtime`. Replaced with `babel-polyfill` to have more complete ES6 polyfills.
* Configured `rimraf` in `npm run reinstall` not to delete `rimraf` and `.bin` within `node_modules` to prevent Windows from throwing an error. See https://github.com/isaacs/rimraf/issues/102

## 0.6.0 - 2016-09-20

* Configured `react-addons-perf` module to work with `React Perf` extension in Chrome.

## 0.5.0 - 2016-08-24

* Added `Reselect`.
* Added `.gitattributes` to ensure end-of-line is always LF instead of CRLF to satisfy ESLint.
* Added `.editorconfig`.
* Cleaned up code.
* Combined src and test in same dir to make things easier to test.

## 0.4.0 - 2016-07-19

* Enabled Redux Dev Tools.
* `npm test ./test/abc` and `npm run test:watch ./test/abc` to run (and watch) only tests within `./test/abc`.
* Configured `webpack-dev-server` to prevent "No 'Access-Control-Allow-Origin' header is present on the requested resource".
* Added `enzyme` and `es6-promise` dependencies.
* Ref Callback instead of Ref String. See `https://facebook.github.io/react/docs/more-about-refs.html`.
* Dependency updates.
    * `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
* Tested with `Node.js v6.2.2`.
* `webpack-dev-server` not resolving Roboto font path in CSS file.
* Lint both `src` and `test` dirs on `npm test` and `npm run ci`. Lint first before running tests.

## 0.3.3 - 2016-07-01

* `npm run test:watch` - cross-platform approach to watch for changes in test files before rerunning the tests.
* webpack-dev-server's proxy doesn't work when the context root doesn't have a trailing slash.
* `npm run ci` doesn't execute ESLint after executing Mocha.
* Changed `const { describe, it } = global;` back to `import { describe, it } from 'mocha';` since `mocha --watch` works now.
* Dependency updates.
    * `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515

## 0.3.2 - 2016-06-23

* Allowed user to override context root when running the production build: `CONTEXT_ROOT=/new-context-root npm run build`.

## 0.3.1 - 2016-06-22

* Changed `import { describe, it } from 'mocha';` to `const { describe, it } = global;` to allow `mocha --watch` to work. See https://github.com/mochajs/mocha/issues/1847.
* Dependency updates.
    * `history v3.0.0` doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
* Git-ignored `dist/`.

## 0.3.0 - 2016-05-20

* `Invalid regular expression: /^\api\(.*)\/?$/: Unmatched ')'` with running `npm start` in Windows.
* Cross-platform compatible NPM script. Tested to work on Mac and Windows.
* Updated dependency versions.

## 0.2.0 - 2016-05-11

* Ported to `choonchernlim-archetype-webapp`.

## 0.1.0 - 2016-04-11

* Initial.
