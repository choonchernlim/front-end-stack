# front-end-stack

> "Sometimes if you want to see a change for the better, you have to take things into your own hands." -- Clint Eastwood

Project template for building single-page app using modern front-end stack. Here are the highlights:-

|Library                                                                        |Description                                                              |
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
|[Saga](https://github.com/yelouafi/redux-saga) 	                              |Side Effects middleware using ES6 Generator                              |
|[Immutable](https://facebook.github.io/immutable-js/) 	                        |Creates immutable objects                                                |
|[Material UI](http://www.material-ui.com/) 	                                  |UI components, adhering to [Google Material Design](https://www.google.com/design/spec/material-design/introduction.htm)|
|[Radium](https://github.com/FormidableLabs/radium) and [Radium Grid](https://github.com/FormidableLabs/radium-grid)|Inline CSS and grid layout           |
|[Flow](https://flowtype.org/) 	                                                |Static type checker for JavaScript                                       |
|[ESLint](https://github.com/eslint/eslint) 	                                  |Validates JavaScript, adhering to [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) |
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
    * Open a browser and visit `https://localhost:8080`.
    * When you modify the source code, the configured Hot Module Replacement will automatically refresh the browser content.
    * Since HTTPS is used, Chrome will prompt warning regarding untrusted security certificate. To disable this check... 
      * In Chrome, go to `chrome://flags/#allow-insecure-localhost`
      * Click "Enable"
      * Click "Relaunch Now"

* To package for production, run `npm run build`.
    * This script will clean the distribution directory and create minified bundle files.

* To package for production with a different context root than the one defined in `package.json`, run `CONTEXT_ROOT=/new-context-root npm run build`.

* To configure as Jenkins job, run `npm run ci`.
    * This script will create test result and code coverage files.

## Commands

These commands are cross-platform compatible.

|Command                                  |Description                                                                                           |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|
|`npm test`                               |Static type check, lint src/test files and run entire tests.                                          |
|`npm test [./path/to/test/module]`       |Static type check, lint src/test files and run only tests within `[./path/to/test/module]`            |
|`npm test:watch`                         |Watch for changes in all test files and rerun `npm test`                                              |
|`npm test:watch [./path/to/test/module]` |Watch for changes in selected test files and rerun `npm test [./path/to/test/module]`                 |
|`npm run build`                          |Build production bundle (compressed cache busting asset files)                                        |
|`npm run ci`                             |Remove report dir, static type check, lint src/test files, run tests, run code coverage and generate result files for CI |
|`npm run reinstall`                      |Clear npm cache, remove `node_module` and install modules listed in `package.json`                    |
|`npm start`                              |Start Node.js Express server with Hot Module Replacement                                              |
|`npm run stats`                          |Create `stats.json` that be loaded to http://webpack.github.io/analyse/ to visualize build.           |
|`npm run flow`                           |Static type check.                                                                                    |

## Dependencies

|Dependency                               |Description                                                                          |
|-----------------------------------------|-------------------------------------------------------------------------------------|
|history                                  |Managing browser history                                                             |
|immutable                                |Creating Immutable objects                                                           |
|isomorphic-fetch                         |Isomorphic WHATWG Fetch API                                                          |
|material-ui                              |UI - Google's material design UI components built with React                         |
|moment                                   |Parse, validate, manipulate and display dates.                                       |
|radium                                   |UI - Managing inline styles on React elements                                        |
|radium-grid                              |UI - Grid layout                                                                     |
|react                                    |React - Core                                                                         |
|react-dom                                |React - DOM                                                                          |
|react-redux                              |React - Redux integration                                                            |
|react-router                             |React - Router                                                                       |
|react-router-redux                       |React - Router with Redux integration                                                |
|react-tap-event-plugin                   |UI - Required by material-ui to listen for touch events                              |
|redux                                    |Redux - Core                                                                         |
|redux-saga                               |Redux - Side Effects middleware                                                      |
|reselect                                 |Memoized selector for React components                                               |

## Dev Dependencies

|Dependency                               |Description                                                                          |
|-----------------------------------------|-------------------------------------------------------------------------------------|
|autoprefixer                             |Webpack - Add vendor prefixes in CSS                                                 |
|babel-cli                                |Babel - CLI commands                                                                 |
|babel-core                               |Babel - Core compiler                                                                |
|babel-eslint                             |Babel - For linting ES7 syntax... ex: `static` properties                            |
|babel-loader                             |Babel - Loader for transpiling                                                       |
|babel-plugin-istanbul                    |Babel - Istanbul instrumentation to ES6 code. Used in conjunction with `nyc`.        |
|babel-plugin-transform-decorators-legacy |Babel - To fix "Decorators are not supported yet in 6.x pending proposal update."    |
|babel-polyfill                           |Babel - Emulate a full ES2015 environment.                                           |
|babel-preset-es2015                      |Babel - ES6 preset                                                                   |
|babel-preset-react                       |Babel - React preset                                                                 |
|babel-preset-stage-0                     |Babel - ES7+ preset                                                                  |
|chai                                     |Test - Expect lib                                                                    |
|chai-as-promised                         |Test - Fluent approach to test promises                                              |
|clean-webpack-plugin                     |Webpack - Clean output dir between builds                                            |
|css-loader                               |Webpack - CSS loader                                                                 |
|enzyme                                   |Test - Testing utilities for React                                                   |
|eslint                                   |ESLint - For enforcing coding style                                                  |
|eslint-config-airbnb                     |ESLint - Using Airbnb's coding style                                                 |
|eslint-loader                            |Webpack - ESLint loader                                                              |
|eslint-plugin-flowtype                   |ESLint - Flow type linting                                                           |
|eslint-plugin-import                     |ESLint - Linting of ES2015+ (ES6+) import/export syntax                              |
|eslint-plugin-jsx-a11y                   |ESLint - Static AST checker for accessibility rules on JSX elements                  |
|eslint-plugin-react                      |ESLint - React specific linting rules                                                |
|extract-text-webpack-plugin              |Webpack - Separate out inlined CSS from JS files                                     |
|file-loader                              |Webpack - File loader                                                                |
|flow-bin                                 |Flow - Static type checker for JavaScript                                            | 
|html-webpack-plugin                      |Webpack - Generates `index.html` using hash filenames for cache busting              |
|image-webpack-loader                     |Webpack - Image loader and handling compression                                      |
|jsdom                                    |Test - A JavaScript implementation of the WHATWG DOM and HTML standards              |
|mocha                                    |Test - JS test framework                                                             |
|mocha-junit-reporter                     |Test - Creating JUnit result file for Jenkins                                        |
|nock                                     |Test - HTTP mocking and expectations library                                         |
|node-sass                                |Webpack - Required by SASS loader                                                    |
|nodemon                                  |Test - Monitor test files and rerun tests. Needed due to cross-platform test runner because `mocha --watch` doesn't produce run results when executed from `require('child_process').exec` |
|nyc                                      |Test - Istanbul CLI for code coverage                                                |
|postcss-loader                           |Webpack - Post CSS loader to run autoprefixer                                        |
|react-addons-perf                        |Util - Performance profiling tool                                                    |
|react-addons-test-utils                  |Test - Utils for testing React components                                            |
|rimraf                                   |Util - `rm -rf` for both Unix and Windows world                                      |
|roboto-fontface                          |Roboto font, adhering to Google Material Design spec                                 |
|sass-loader                              |Webpack - SASS loader                                                                |
|sinon                                    |Test - Standalone test spies, stubs and mocks.                                       |
|style-loader                             |Webpack - Style loader                                                               |
|url-loader                               |Webpack - URL loader                                                                 |
|webpack                                  |Webpack - Core                                                                       |
|webpack-dev-server                       |Webpack - Node.js Express server                                                     |

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
├── .flowconfig                 -> Flow configuration
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
## Troubleshooting

### Error: dyld: Library not loaded

When running `npm start`, you get this error...

```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
  Referenced from: /path/to/front-end-stack/node_modules/mozjpeg/vendor/cjpeg
  Reason: image not found
```

To fix it, run `brew install libpng` ... [see here for more info](https://github.com/tcoopman/image-webpack-loader/issues/51)
   
## Acknowledgement

> "You want to be extra rigorous about making the best possible thing you can. Find everything that’s wrong with it and fix it. Seek negative feedback, particularly from friends." -- Elon Musk

Special thanks to the following individuals for improving my sloppy work:-

* Cory Cray
* Jason Thiesse
