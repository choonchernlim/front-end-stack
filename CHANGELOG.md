# Change Log

## TBD

* FEATURE - Added `Reselect`.
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
