# Change Log

## 0.17.1 - 2020-09-07

- Dependency updates.

## 0.17.0 - 2019-10-03

- Webpack - Removed `optimization` block because it is redundant.
- Webpack - Configured `MiniCssExtractPlugin` to create CSS files under `css/` for consistency.
- Used React Hooks.

## 0.16.0 - 2019-04-03

- Externalized husky config from `package.json` into `.huskyrc` and `.lintstagedrc`.
- Dependency update.

## 0.15.0 - 2018-12-28

- Replaced `react-router-redux` with `connected-react-router` because the earlier won't work with Redux v6.
- Run Prettier on Git pre commit.
- Removed `uglifyjs-webpack-plugin` to use Webpack's built-in `terser-webpack-plugin`.

## 0.14.0 - 2018-10-04

- Babel - Upgrade to v7.
- Material-UI - Upgrade to v3.
- `yarn reinstall` - Added `--network-timeout 1000000` to fix "There appears to be trouble with your network connection. Retrying..." error.
- Replaced `immutableJs` with `immer` because...
  - Works great with Flow out of the box. Flow type for `Record` in `immutableJs` is still broken.
  - Straight up JS when mutating properties.
  - No loss of performance.
  - ImmutableJS is somewhat defunct.
- Introduced Prettier to format the code.
  - Configured to play well with ESLint and Airbnb rules so that less time spent on fixing linter errors.
- `yarn reinstall` - Don't clear global cache... just the app's `node_modules` before re-installing it.
- Note: `react-router-redux` is deprecated now, but it's left in here until there is a better way to programmatically change routes from middleware instead of pushing `history` object into actions as recommended by https://reacttraining.com/react-router/web/guides/redux-integration

## 0.13.0 - 2018-08-02

- `Package.json` - `"sideEffects": false` for tree-shaking purpose. See https://webpack.js.org/guides/tree-shaking/
- Webpack - When bundling JS files, move comments into separate files to further reduce file size.
- Dependency update.

## 0.12.0 - 2018-05-23

- ESLint - Configured to automatically fix "soft" errors when running any Webpack commands and `yarn test`.
- Webpack - Configured CompressionPlugin to generate GZIP compression on asset files.
- Replaced `moment` with `date-fns` because the latter has smaller bundle and it creates immutable objects.
- Added `recompose` that contains useful React utility function components and HOCs.
- Upgraded `material-ui` to v1.0 (Release).
- Upgraded `rxjs` to v6.x.
- Added `flow:restart` package.json script that will stop Flow server before re-running it.

## 0.11.0 - 2018-03-18

- Webpack 4

  - Replaced `extract-text-webpack-plugin` with `mini-css-extract-plugin`.
  - Removed `Happypack`.
  - Removed `style-loader`.
  - Applied tree-shaking to `vendor.js` to significantly reduce file size from 1.73MB to 768KB.

- Restructured file organization.

- When running `yarn ci`, don't run Flow because it has higher chances of breaking when attempting to run Flow server on CI servers such as Jenkins and TFS Build.

- ESLint - Configured rules to allow quotes around number... for example: `const a = { '1919': 'value' };`

- Mocha - Replaced deprecated `--compilers` with `--require`. See https://github.com/mochajs/mocha/wiki/compilers-deprecation

- Flow - Flow-typed files.

- Dependency update.

## 0.10.0 - 2017-11-29

- Upgraded `material-ui` to v1.0.
  - Replaced `roboto-fontface` with `typeface-roboto`. Worked better with `material-ui`.
  - Added `classnames` to make it easier to work with CSS class names since `material-ui` has switched to `jss`.
  - Added `material-ui-icons`.
  - Removed `radium`.
  - Removed `sass-loader`.
  - Removed `node-sass`.
  - Removed `react-tap-event-plugin`. No longer needed with `material-ui`.
- Replaced `redux-saga` with `redux-observable`.

  - Added `redux-observable`.
  - Added `rxjs`.
  - Removed `redux-saga`.
  - Removed `isomorphic-fetch`. RxJS provides `Observable.ajax()` out of the box to perform API call.
  - Removed `redux-saga-test-plan`.

- Upgraded `react` to v16.

  - Added `enzyme-adapter-react-16`.
  - Removed `react-addons-perf`. No longer supported.

- Upgraded `react-router-redux` to v5.

  - Added `react-router-dom`.
  - Upgraded `history` to v4.x.
  - Removed `react-router`.

- Replaced `webpack-parallel-uglify-plugin` with `uglifyjs-webpack-plugin` because the latter now supports parallel threads and it is tad faster.

- Added `find-cache-dir` for consistent cache location under `node_modules/` for easier cleanup.

- Dependency update.

## 0.9.2 - 2017-09-08

- `nyc` failed to exclude directories properly.
- Added `.eslintignore` file.
- Configured `yarn reinstall` to remove `node_modules` dir before reinstalling it.
- Cleaned up code.
- Dependency updates.

## 0.9.1 - 2017-09-06

- `image-webpack-loader` produced corrupted JPEG files.
- Dependency updates.

## 0.9.0 - 2017-09-01

- Significantly sped up Webpack build time.
- Replaced `npm` with `yarn`.
- `yarn start` will automatically open the browser and bring user to the landing page.
- Added `postcss.config.js` to fix "No PostCSS Config found" error. See https://github.com/postcss/postcss-loader/issues/204
- Added `prop-types` to handle "Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead." warning.
- Externalized nyc config from `package.json` to `.nycrc`.
- ESLint configuration - Allowed trailing comma in multi-line object literal or array (works with IntelliJ IDEA 2017).
- Added `cache-loader` to fix HappyPack's "Option 'tempDir' has been deprecated. Configuring it will cause an error to be thrown in future versions." warning.
- Removed deprecated `react-addons-test-utils` and added `react-test-renderer` to get `enzyme` working again with new React version.
- Dependency update.

## 0.8.1 - 2017-02-23

- Dependency update.

- Fixed deprecation warnings from `image-webpack-loader`. See https://github.com/tcoopman/image-webpack-loader/issues/68
- Fixed deprecation warnings from `webpack 2`.
  - `fallbackLoader` option - Replaced with `fallback`.
  - `loader` option - Replaced with `use`.

## 0.8.0 - 2017-01-18

- Replaced unmaintained `isparta` with `nyc` and `babel-plugin-istanbul`.

  - `nyc` configuration must reside under `package.json` because `babel-plugin-istanbul` will not work properly when placed under `.nycrc`.
    - See https://github.com/istanbuljs/nyc/issues/419
    - See https://github.com/istanbuljs/nyc/issues/377
  - Instead of hardcoding `include` path under `package.json`, which prevents dynamic configuration based on user settings, `exclude` paths are used.

- Configured Flow type check.

  - Configured Flow type linting.
  - `npm run flow` - Run Flow.
  - `npm test` - Run Flow first before running tests.
  - ESLint rule to ensure `// @flow` exists on the top of all files.
  - For certain Flow related problems (`record.toJS()`, `PropTypes.children`, etc), suppressed with `// $FlowFixMe` until they are fixed in the future.

- Added `yarn.lock` file to accommodate developers using Yarn.

- Simplified module structure to prevent too many "single file in a directory" problems.
- Combined `npm run ci:clean`, `npm run ci:test` and `npm run ci:coverage` into `npm run ci` to prevent Mocha from running twice (once to generate test result file and another to generate code coverage result file).

- `scripts/script.js` - `--require ./src/js/__tests__` should use user configurable path.

- Suppressed "WARNING in asset size limit" warning on `npm run build`.
- Removed commented `DedupePlugin` config because it will be removed in Webpack 2. See https://github.com/webpack/webpack/issues/2644
- Fixed "Using NoErrorsPlugin is deprecated. Use NoEmitOnErrorsPlugin instead.".

## 0.7.1 - 2016-12-29

- Dependency updates, particularly react-redux 5.x and webpack 2.2.x.

## 0.7.0 - 2016-11-30

- Webpack 2.x and tree shaking. Since Webpack 2.x supports `import` natively, modules are no longer converted to CommonJS modules by Babel.
- Upgraded to `material-ui` 0.16.x.
- Added `npm run stats` to create `stats.json` that can be loaded to http://webpack.github.io/analyse/
- Enabled HTTPS on webpack-dev-server.
- Dropped `es6-promise` and `babel-plugin-transform-runtime`. Replaced with `babel-polyfill` to have more complete ES6 polyfills.
- Configured `rimraf` in `npm run reinstall` not to delete `rimraf` and `.bin` within `node_modules` to prevent Windows from throwing an error. See https://github.com/isaacs/rimraf/issues/102

## 0.6.0 - 2016-09-20

- Configured `react-addons-perf` module to work with `React Perf` extension in Chrome.

## 0.5.0 - 2016-08-24

- Added `Reselect`.
- Added `.gitattributes` to ensure end-of-line is always LF instead of CRLF to satisfy ESLint.
- Added `.editorconfig`.
- Cleaned up code.
- Combined src and test in same dir to make things easier to test.

## 0.4.0 - 2016-07-19

- Enabled Redux Dev Tools.
- `npm test ./test/abc` and `npm run test:watch ./test/abc` to run (and watch) only tests within `./test/abc`.
- Configured `webpack-dev-server` to prevent "No 'Access-Control-Allow-Origin' header is present on the requested resource".
- Added `enzyme` and `es6-promise` dependencies.
- Ref Callback instead of Ref String. See `https://facebook.github.io/react/docs/more-about-refs.html`.
- Dependency updates.
  - `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
- Tested with `Node.js v6.2.2`.
- `webpack-dev-server` not resolving Roboto font path in CSS file.
- Lint both `src` and `test` dirs on `npm test` and `npm run ci`. Lint first before running tests.

## 0.3.3 - 2016-07-01

- `npm run test:watch` - cross-platform approach to watch for changes in test files before rerunning the tests.
- webpack-dev-server's proxy doesn't work when the context root doesn't have a trailing slash.
- `npm run ci` doesn't execute ESLint after executing Mocha.
- Changed `const { describe, it } = global;` back to `import { describe, it } from 'mocha';` since `mocha --watch` works now.
- Dependency updates.
  - `history v3.0.0` still doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515

## 0.3.2 - 2016-06-23

- Allowed user to override context root when running the production build: `CONTEXT_ROOT=/new-context-root npm run build`.

## 0.3.1 - 2016-06-22

- Changed `import { describe, it } from 'mocha';` to `const { describe, it } = global;` to allow `mocha --watch` to work. See https://github.com/mochajs/mocha/issues/1847.
- Dependency updates.
  - `history v3.0.0` doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
- Git-ignored `dist/`.

## 0.3.0 - 2016-05-20

- `Invalid regular expression: /^\api\(.*)\/?$/: Unmatched ')'` with running `npm start` in Windows.
- Cross-platform compatible NPM script. Tested to work on Mac and Windows.
- Updated dependency versions.

## 0.2.0 - 2016-05-11

- Ported to `choonchernlim-archetype-webapp`.

## 0.1.0 - 2016-04-11

- Initial.
