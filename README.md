# front-end-stack

_"Failure is an option here. If things are not failing, you are not innovating enough." -- Elon Musk_

_"Progress is impossible without change, and those who cannot change their minds cannot change anything." -- George Bernard Shaw_

_"To improve is to change; to be perfect is to change often." -- Winston Churchill_

_"Sometimes if you want to see a change for the better, you have to take things into your own hands." -- Clint Eastwood_

## Introduction

Project template for building epic single-page app using modern front-end stack.

|Library                                                                        |What and Why                                                             |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|
|[NPM](https://www.npmjs.com/)                                                  |JavaScript package manager                                               |
|[Node.js](https://nodejs.org)                                                  |Event-driven I/O server-side JavaScript environment (for app dev)        |
|[Webpack](https://webpack.github.io/) 	                                        |Module bundler                                                           |
|[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)            |Live reloading server (for app dev)                                      |
|[ES6](http://www.ecma-international.org/ecma-262/6.0/) and ES7                 |Latest and greatest JavaScript language                                  |
|[Babel](https://babeljs.io/) 	                                                |Transpiles ES6+ to ES5 to maximize cross browser compatibility           |
|[React](https://facebook.github.io/react/)                                     |Handles view layer                                                       |
|[Redux](https://github.com/reactjs/redux)                                      |One-way data flow, inspired by Flux pattern                              |
|[Reselect](https://github.com/reactjs/reselect)                                |Selector library for Redux                                               |
|[Saga](https://github.com/yelouafi/redux-saga) 	                            |Side Effects middleware using ES6 Generator                              |
|[Immutable](https://facebook.github.io/immutable-js/) 	                        |Creates immutable objects                                                |
|[Material UI](http://www.material-ui.com/) 	                                |UI components, adhering to [Google Material Design](https://www.google.com/design/spec/material-design/introduction.htm)|
|[Radium](https://github.com/FormidableLabs/radium) and [Radium Grid](https://github.com/FormidableLabs/radium-grid)|Inline CSS and grid layout           |
|[ESLint](https://github.com/eslint/eslint) 	                                |Validates JavaScript, adhering to [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) |
|[Mocha](https://mochajs.org/) 	                                                |JavaScript test framework                                                |


## Getting Started

* In Chrome, install the following dev tool extensions:-
  * [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  * [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [React Perf](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm)

* If you are using IntelliJ product (ex: IDEA, WebStorm, etc)...
    * Use [intellij-config](https://github.com/choonchernlim/intellij-config) to configure JavaScript code formatter.
    * Enable "ESLint" in your IDE, which will pick up `.eslintrc` from the project and enforce it.

* Clone or download/unzip this project template.

* Run `npm install` to install dependencies.

* To start app development, run `npm start`.
    * This script will start webpack-dev-server.
    * Open a browser and visit `http://localhost:8080`.
    * When you modify the source code, the configured Hot Module Replacement will automatically refresh the browser content.

* To package for production, run `npm run build`.
    * This script will clean the distribution directory and create minified bundle files.

* To package for production with a different context root than the one defined in `package.json`, run `CONTEXT_ROOT=/new-context-root npm run build`.

* To configure as Jenkins job, run `npm run ci`.
    * This script will create test result and code coverage files.

## Commands

These commands are cross-platform compatible.

|Command                                  |Description                                                                                           |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|
|`npm test`                               |Lint src/test files and run entire tests.                                                             |
|`npm test [./path/to/test/module]`       |Lint src/test files and run only tests within `[./path/to/test/module]`                               |
|`npm test:watch`                         |Watch for changes in test files and rerun `npm test`                                                  |
|`npm test:watch [./path/to/test/module]` |Watch for changes in test files and rerun `npm test [./path/to/test/module]`                          |
|`npm run build`                          |Build production bundle (compressed cache busting asset files)                                        |
|`npm run ci`                             |Remove report dir, run code coverage, lint src/test files, run tests and generate result files for CI |
|`npm run reinstall`                      |Clear npm cache, remove `node_module` and install modules listed in `package.json`                    |
|`npm start`                              |Start Node.js Express server with Hot Module Replacement                                              |
|`npm run stats`                          |Create `stats.json` that be loaded to http://webpack.github.io/analyse/ to visualize build.           |

## Dependencies

|Dependency                               |Description                                                                         |
|-----------------------------------------|------------------------------------------------------------------------------------|
|es6-promise                              |A polyfill for ES6-style Promises for weak browsers, like IE11                      |
|history                                  |Managing browser history                                                            |
|immutable                                |Creating Immutable objects                                                          |
|isomorphic-fetch                         |Isomorphic WHATWG Fetch API                                                         |
|material-ui                              |UI - Google's material design UI components built with React                        |
|moment                                   |Parse, validate, manipulate and display dates.                                      |
|radium                                   |UI - Managing inline styles on React elements                                       |
|radium-grid                              |UI - Grid layout                                                                    |
|react                                    |React - Core                                                                        |
|react-dom                                |React - DOM                                                                         |
|react-redux                              |React - Redux integration                                                           |
|react-router                             |React - Router                                                                      |
|react-router-redux                       |React - Router with Redux integration                                               |
|react-tap-event-plugin                   |UI - Required by material-ui to listen for touch events                             |
|redux                                    |Redux - Core                                                                        |
|redux-saga                               |Redux - Side Effects middleware                                                     |
|reselect                                 |Memoized selector for React components                                              |

## Dev Dependencies

|Dependency                               |Description                                                                         |
|-----------------------------------------|------------------------------------------------------------------------------------|
|autoprefixer                             |Webpack - Add vendor prefixes in CSS                                                |
|babel-cli                                |Babel - CLI commands                                                                |
|babel-core                               |Babel - Core compiler                                                               |
|babel-eslint                             |Babel - For linting ES7 syntax... ex: `static` properties                           |
|babel-loader                             |Babel - Loader for transpiling                                                      |
|babel-plugin-transform-decorators-legacy |Babel - To fix "Decorators are not supported yet in 6.x pending proposal update."   |
|babel-plugin-transform-runtime           |Babel - Polyfilling code without polluting globals (replacing `babel-polyfill` to fix "ReferenceError: regeneratorRuntime is not defined"  |
|babel-preset-es2015                      |Babel - ES6 preset                                                                  |
|babel-preset-react                       |Babel - React preset                                                                |
|babel-preset-stage-0                     |Babel - ES7+ preset                                                                 |
|chai                                     |Test - Expect lib                                                                   |
|chai-as-promised                         |Test - Fluent approach to test promises                                             |
|clean-webpack-plugin                     |Webpack - Clean output dir between builds                                           |
|css-loader                               |Webpack - CSS loader                                                                |
|enzyme                                   |Test - Testing utilities for React                                                  |
|eslint                                   |ESLint - For enforcing coding style                                                 |
|eslint-config-airbnb                     |ESLint - Using Airbnb's coding style                                                |
|eslint-loader                            |Webpack - ESLint loader                                                             |
|eslint-plugin-import                     |ESLint - Linting of ES2015+ (ES6+) import/export syntax                             |
|eslint-plugin-jsx-a11y                   |ESLint - Static AST checker for accessibility rules on JSX elements                 |
|eslint-plugin-react                      |ESLint - React specific linting rules                                               |
|extract-text-webpack-plugin              |Webpack - Separate out inlined CSS from JS files                                    |
|file-loader                              |Webpack - File loader                                                               |
|html-webpack-plugin                      |Webpack - Generates `index.html` using hash filenames for cache busting             |
|image-webpack-loader                     |Webpack - Image loader and handling compression                                     |
|isparta                                  |Code coverage for ES6 and for creating result file for Jenkins                      |
|jsdom                                    |Test - A JavaScript implementation of the WHATWG DOM and HTML standards             |
|json-loader                              |Webpack - JSON loader                                                               |
|mocha                                    |Test - JS test framework                                                            |
|mocha-junit-reporter                     |Test - Creating JUnit result file for Jenkins                                       |
|nock                                     |Test - HTTP mocking and expectations library                                        |
|node-sass                                |Webpack - Required by SASS loader                                                   |
|nodemon                                  |Test - Monitor test files and rerun tests. Needed due to cross-platform test runner because `mocha --watch` doesn't produce run results when executed from `require('child_process').exec` |
|postcss-loader                           |Webpack - Post CSS loader to run autoprefixer                                       |
|react-addons-perf                        |Util - Performance profiling tool.                                                  |
|react-addons-test-utils                  |Test - Utils for testing React components                                           |
|rimraf                                   |Util - `rm -rf` for both Unix and Windows world                                     |
|roboto-fontface                          |Roboto font, adhering to Google Material Design spec                                |
|sass-loader                              |Webpack - SASS loader                                                               |
|sinon                                    |Test - Standalone test spies, stubs and mocks.                                      |
|style-loader                             |Webpack - Style loader                                                              |
|url-loader                               |Webpack - URL loader                                                                |
|webpack                                  |Webpack - Core                                                                      |
|webpack-dev-server                       |Webpack - Node.js Express server                                                    |

Notes:-
* `babel-runtime` cannot be included because it will cause `Cannot find module 'babel-runtime/helpers/interop-require'` when dealing with `radium-grid`. See https://github.com/FormidableLabs/radium-grid/issues/31

## Project Structure

```
.
├── dist                        -> Distribution dir - Production bundle, including index.html
│   └── ...
├── node_modules                -> Installed modules dir
│   └── ...
├── reports                     -> Reports dir - Generated reports for Jenkins
│   └── ...
├── scripts                     -> Scripts dir - Cross-platform NPM scripts
│   └── ...
├── src                         -> Dir for actual source files and test files
│   └── ...
├── .babelrc                    -> Babel configuration
├── .editorconfig               -> Coding style for different editors
├── .eslintrc                   -> ESLint configuration
├── .gitattributes              -> Custom Git config
├── .gitignore                  -> Git ignore list
├── CHANGELOG.md                -> Change logs
├── LICENSE.md                  -> License, if needed
├── package.json                -> NPM scripts and dependencies
├── README.md                   -> Readme file for the app
├── stats.json                  -> Generated file when running `npm run stats`
├── webpack.base.config.js      -> Common webpack config
├── webpack.config.js           -> Production webpack config
└── webpack.dev.config.js       -> Development webpack config
```

## Acknowledgement

_"You want to be extra rigorous about making the best possible thing you can. Find everything that’s wrong with it and fix it. Seek negative feedback, particularly from friends." -- Elon Musk_

Special thanks to the following individuals for improving my sloppy work:-

* Cory Cray
* Jason Thiesse
