# front-end-stack

Starter kit for building single-page app using modern front-end stack.

## Getting Started

- Install the following tools:-

  - [Node.js](https://github.com/creationix/nvm).
  - [Yarn](https://yarnpkg.com/en/docs/install) because it is still much faster than NPM v5.

- In Chrome, install the following dev tool extensions:-

  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

- If you are using JetBrains products (ex: IntelliJ IDEA, WebStorm):-

  - Install and configure [File Watcher](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher) to format code on save using Prettier.
  - Enable "ESLint" in your IDE, which will pick up `.eslintrc` from the project and enforce it.

- Clone or download/unzip this project template.

- Run `yarn` to install dependencies.

- To start app development, run `yarn start`.

  - This command will:-
    - Start Webpack Dev Server.
    - Open default browser.
    - Open `https://localhost:8080`.
  - When you modify the source code, the configured Hot Module Replacement will automatically refresh the browser content.
  - Since HTTPS is used, Chrome will prompt warning regarding untrusted security certificate. To disable this check:-
    - In Chrome, go to `chrome://flags/#allow-insecure-localhost`.
    - Click "Enable".
    - Click "Relaunch Now".

- To package for production, run `yarn build`.

  - This script will clean the distribution directory and create minified bundle files.

- To package for production with a different context root than the one defined in `package.json`, run `CONTEXT_ROOT=/new-context-root yarn build`.

- To configure as Jenkins job, run `yarn ci`.
  - This script will create test result and code coverage files.

## Commands

These commands are cross-platform compatible.

| Command                    | Description                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn test`                | Format code, static type check, lint src/test files and run entire tests                                                              |
| `yarn test <./path>`       | Format code, static type check, lint src/test files and run only tests within `<./path>`                                              |
| `yarn test:watch`          | Watch for changes in all test files and rerun `yarn test`                                                                             |
| `yarn test:watch <./path>` | Watch for changes in selected test files and rerun `yarn test <./path>`                                                               |
| `yarn build`               | Build production bundle (compressed cache busting asset files)                                                                        |
| `yarn ci`                  | Remove report dir, format code, static type check, lint src/test files, run tests, run code coverage and generate result files for CI |
| `yarn reinstall`           | Remove `node_module` and install modules listed in `package.json`                                                                     |
| `yarn start`               | Start Node.js Express server with Hot Module Replacement                                                                              |
| `yarn stats`               | Create `stats.json` that be loaded to http://webpack.github.io/analyse/ to visualize build                                            |
| `yarn flow`                | Run Flow static type check                                                                                                            |
| `yarn flow:restart`        | Restart Flow server before running static type check                                                                                  |
| `yarn prettier`            | Format code                                                                                                                           |

## Dependencies

| Dependency             | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| @material-ui/core      | UI - Google's material design UI components built with React |
| @material-ui/icons     | UI - Google Material icons                                   |
| @material-ui/styles    | UI - Style hooks                                             |
| classnames             | UI - Conditionally joining classNames together               |
| connected-react-router | React - Router with Redux integration                        |
| date-fns               | Parse, validate, manipulate and display dates                |
| history                | Managing browser history                                     |
| immer                  | Handling immutable objects                                   |
| prop-types             | React - Runtime type checking for React props                |
| react                  | React - Core                                                 |
| react-dom              | React - DOM                                                  |
| react-redux            | React - Redux integration                                    |
| react-router-dom       | React - Router                                               |
| recompose              | React - Useful utility function components and HOCs.         |
| redux                  | Redux - Core                                                 |
| redux-observable       | Redux - Side Effects middleware using RxJS' Observables      |
| reselect               | Memoized selector for React components                       |
| rxjs                   | Handling async actions                                       |
| typeface-roboto        | UI - Roboto font, adhering to Google Material Design spec    |

## Dev Dependencies

| Dependency                                 | Description                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @babel/cli                                 | Babel - CLI commands                                                                                                                                                                       |
| @babel/core                                | Babel - Core compiler                                                                                                                                                                      |
| @babel/plugin-proposal-class-properties    | Babel - https://babeljs.io/docs/en/babel-plugin-proposal-class-properties                                                                                                                  |
| @babel/plugin-proposal-export-default-from | Babel - https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from                                                                                                               |
| @babel/polyfill                            | Babel - Emulate a full ES2015+ environment                                                                                                                                                 |
| @babel/preset-env                          | Babel - To use latest JavaScript                                                                                                                                                           |
| @babel/preset-flow                         | Babel - Flow preset                                                                                                                                                                        |
| @babel/preset-react                        | Babel - React preset                                                                                                                                                                       |
| @babel/register                            | Babel - Provide `require` hook                                                                                                                                                             |
| autoprefixer                               | Webpack - Add vendor prefixes in CSS                                                                                                                                                       |
| babel-eslint                               | Babel - For linting ES7 syntax... ex: `static` properties                                                                                                                                  |
| babel-loader                               | Babel - Loader for transpiling                                                                                                                                                             |
| babel-plugin-istanbul                      | Babel - Istanbul instrumentation to ES6 code. Used in conjunction with `nyc`.                                                                                                              |
| chai                                       | Test - Expect lib                                                                                                                                                                          |
| chai-as-promised                           | Test - Fluent approach to test promises                                                                                                                                                    |
| clean-webpack-plugin                       | Webpack - Clean output dir between builds                                                                                                                                                  |
| compression-webpack-plugin                 | Webpack - Generate GZip asset files                                                                                                                                                        |
| css-loader                                 | Webpack - CSS loader                                                                                                                                                                       |
| enzyme                                     | Test - Testing utilities for React                                                                                                                                                         |
| enzyme-adapter-react-16                    | Test - Enzyme adapter that targets React 16                                                                                                                                                |
| eslint                                     | ESLint - For enforcing coding style                                                                                                                                                        |
| eslint-config-airbnb                       | ESLint - Using Airbnb's coding style                                                                                                                                                       |
| eslint-config-prettier                     | Prettier - Turns off unnecessary ESLint rules or might conflict with Prettier                                                                                                              |
| eslint-loader                              | Webpack - ESLint loader                                                                                                                                                                    |
| eslint-plugin-flowtype                     | ESLint - Flow type linting                                                                                                                                                                 |
| eslint-plugin-import                       | ESLint - Linting of ES2015+ (ES6+) import/export syntax                                                                                                                                    |
| eslint-plugin-jsx-a11y                     | ESLint - Static AST checker for accessibility rules on JSX elements                                                                                                                        |
| eslint-plugin-prettier                     | ESLint - Runs Prettier as an ESLint rule                                                                                                                                                   |
| eslint-plugin-react                        | ESLint - React specific linting rules                                                                                                                                                      |
| file-loader                                | Webpack - File loader                                                                                                                                                                      |
| flow-bin                                   | Flow - Static type checker for JavaScript                                                                                                                                                  |
| html-webpack-plugin                        | Webpack - Generates `index.html` using hash filenames for cache busting                                                                                                                    |
| husky                                      | Git - Provides Git hooks to run Prettier                                                                                                                                                   |
| image-webpack-loader                       | Webpack - Image loader and handling compression                                                                                                                                            |
| jsdom                                      | Test - A JavaScript implementation of the WHATWG DOM and HTML standards                                                                                                                    |
| lint-staged                                | Git - Run Prettier on staged files                                                                                                                                                         |
| mini-css-extract-plugin                    | Webpack - Extract CSS into separate files                                                                                                                                                  |
| mocha                                      | Test - JS test framework                                                                                                                                                                   |
| mocha-junit-reporter                       | Test - Creating JUnit result file for Jenkins                                                                                                                                              |
| nock                                       | Test - HTTP mocking and expectations library                                                                                                                                               |
| nodemon                                    | Test - Monitor test files and rerun tests. Needed due to cross-platform test runner because `mocha --watch` doesn't produce run results when executed from `require('child_process').exec` |
| nyc                                        | Test - Istanbul CLI for code coverage                                                                                                                                                      |
| postcss-loader                             | Webpack - Post CSS loader to run autoprefixer                                                                                                                                              |
| prettier                                   | Prettier - Opinionated code formatter                                                                                                                                                      |
| react-test-renderer                        | Test - Works in conjunction with Enzyme                                                                                                                                                    |
| rimraf                                     | Util - `rm -rf` for both Unix and Windows world                                                                                                                                            |
| sinon                                      | Test - Standalone test spies, stubs and mocks                                                                                                                                              |
| url-loader                                 | Webpack - URL loader                                                                                                                                                                       |
| webpack                                    | Webpack - Core                                                                                                                                                                             |
| webpack-cli                                | Webpack - CLI                                                                                                                                                                              |
| webpack-dev-server                         | Webpack - Node.js Express server                                                                                                                                                           |

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
├── .eslintignore               -> ESLint ignore list
├── .eslintrc                   -> ESLint configuration
├── .flowconfig                 -> Flow configuration
├── .gitattributes              -> Custom Git configuration
├── .gitignore                  -> Git ignore list
├── .huskyrc                    -> Husky configuration
├── .lintstagedrc               -> Lint staged configuration
├── .nycrc                      -> Istanbul CLI configuration
├── .prettierignore             -> Prettier ignore list
├── .prettierrc                 -> Prettier configuration
├── CHANGELOG.md                -> Change logs
├── LICENSE.md                  -> License, if needed
├── package.json                -> NPM scripts and dependencies
├── postcss.config.js           -> To fix "No PostCSS Config found" error
├── README.md                   -> Readme file for the app
├── stats.json                  -> Generated file when running `yarn stats`
├── webpack.base.config.js      -> Common Webpack config
├── webpack.config.js           -> Production Webpack config
├── webpack.dev.config.js       -> Development Webpack config
└── yarn.lock                   -> Dependency versions lock file used by Yarn
```

## Troubleshooting

### Error: dyld: Library not loaded

When running `yarn start`, you get this error...

```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
  Referenced from: /path/to/front-end-stack/node_modules/mozjpeg/vendor/cjpeg
  Reason: image not found
```

To fix it, run `brew install libpng` ... [see here for more info](https://github.com/tcoopman/image-webpack-loader/issues/51)
