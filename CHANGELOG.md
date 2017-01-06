# Change Log

## X.X.X

* http://www.robinwieruch.de/the-soundcloud-client-in-react-redux-flow/
* TODO: Consider calling `npm run flow` before `npm test`, `npm run build` and `npm run ci`.

* FEATURE - Enabled Flow type check.
* FEATURE - Configured Flow type linting.

* MAINTENANCE - Suppressed "WARNING in asset size limit" warning on `npm run build`.
* MAINTENANCE - Removed commented DedupePlugin config because it will be removed in Webpack 2. See https://github.com/webpack/webpack/issues/2644

## 0.7.1 - 2016-12-29

* MAINTENANCE - Dependency updates, particularly react-redux 5.x and webpack 2.2.x.
 
## 0.7.0 - 2016-11-30

* FEATURE - Webpack 2.x and tree shaking. Since Webpack 2.x supports `import` natively, modules are no longer converted to CommonJS modules by Babel.
* FEATURE - `material-ui` 0.16.x.
* FEATURE - Added `npm run stats` to create `stats.json` that can be loaded to http://webpack.github.io/analyse/
* FEATURE - Enabled HTTPS on webpack-dev-server.
* REFACTOR - Dropped `es6-promise` and `babel-plugin-transform-runtime`. Replaced with `babel-polyfill` to have more complete ES6 polyfills.
* BUG - Configured `rimraf` in `npm run reinstall` not to delete `rimraf` and `.bin` within `node_modules` to prevent Windows from throwing an error. See https://github.com/isaacs/rimraf/issues/102

## 0.6.0 - 2016-09-20

* FEATURE - Configured `react-addons-perf` module to work with `React Perf` extension in Chrome.

## 0.5.0 - 2016-08-24

* FEATURE - Added `Reselect`.
* FEATURE - Added `.gitattributes` to ensure end-of-line is always LF instead of CRLF to satisfy ESLint.
* FEATURE - Added `.editorconfig`.
* REFACTOR - Cleaned up code.
* REFACTOR - Combined src and test in same dir to make things easier to test.

## 0.4.0 - 2016-07-19

* FEATURE - Enabled Redux Dev Tools.
* FEATURE - `npm test ./test/abc` and `npm run test:watch ./test/abc` to run (and watch) only tests within `./test/abc`.
* FEATURE - Configured `webpack-dev-server` to prevent "No 'Access-Control-Allow-Origin' header is present on the requested resource".
* FEATURE - Added `enzyme` and `es6-promise` dependencies.
* REFACTOR - Ref Callback instead of Ref String. See `https://facebook.github.io/react/docs/more-about-refs.html`.
* MAINTENANCE - Dependency updates.
    * `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
* MAINTENANCE - Tested with `Node.js v6.2.2`.
* BUG - `webpack-dev-server` not resolving Roboto font path in CSS file.
* BUG - Lint both `src` and `test` dirs on `npm test` and `npm run ci`. Lint first before running tests.

## 0.3.3 - 2016-07-01

* FEATURE - `npm run test:watch` - cross-platform approach to watch for changes in test files before rerunning the tests.
* BUG - webpack-dev-server's proxy doesn't work when the context root doesn't have a trailing slash.
* BUG - `npm run ci` doesn't execute ESLint after executing Mocha.
* REFACTOR - Changed `const { describe, it } = global;` back to `import { describe, it } from 'mocha';` since `mocha --watch` works now.
* MAINTENANCE - Dependency updates.
    * `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515

## 0.3.2 - 2016-06-23

* FEATURE - Allowed user to override context root when running the production build: `CONTEXT_ROOT=/new-context-root npm run build`.

## 0.3.1 - 2016-06-22

* BUG - Changed `import { describe, it } from 'mocha';` to `const { describe, it } = global;` to allow `mocha --watch` to work. See https://github.com/mochajs/mocha/issues/1847.
* MAINTENANCE - Dependency updates.
    * `history v3.0.0` doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
* FEATURE - Git-ignored `dist/`.

## 0.3.0 - 2016-05-20

* BUG - `Invalid regular expression: /^\api\(.*)\/?$/: Unmatched ')'` with running `npm start` in Windows.
* FEATURE - Cross-platform compatible NPM script. Tested to work on Mac and Windows.
* MAINTENANCE - Updated dependency versions.

## 0.2.0 - 2016-05-11

* MAINTENANCE - Ported to `choonchernlim-archetype-webapp`.

## 0.1.0 - 2016-04-11

* Initial.
