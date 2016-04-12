# front-end-stack

_"Failure is an option here. If things are not failing, you are not innovating enough." -- Elon Musk_

_"Progress is impossible without change, and those who cannot change their minds cannot change anything." -- George Bernard Shaw_
  
_"To improve is to change; to be perfect is to change often." -- Winston Churchill_

_"Sometimes if you want to see a change for the better, you have to take things into your own hands." -- Clint Eastwood_

## Introduction

Project template for building epic single-page app using modern front-end stack.

|Library                  |What and Why                                                                        |
|-------------------------|------------------------------------------------------------------------------------|
|ES6+                     |ES5 is a thing of the past                                                          |
|React                    |Handling view layer                                                                 |
|Redux                    |One-way data flow, inspired by Flux pattern                                         |
|Saga                     |Side Effects middleware using ES6 Generator                                         |
|Immutable                |Data as immutable objects                                                           |
|Material UI              |UI components, adhering to Google Material Design spec                              |
|Radium and Radium Grid   |Inline CSS and grid layout                                                          |
|Webpack                  |Module bundler                                                                      |
|Babel                    |Transpiling ES6+ to ES5 to maximize cross browser compatibility                     |
|ESLint                   |Validate JavaScript, adhering to Airbnb's JavaScript Style Guide                    |

If you are using IntelliJ product (ex: IDEA, WebStorm, etc), please use [intellij-config](https://github.com/choonchernlim/intellij-config) to configure JavaScript code formatter.

## NPM Scripts

|Name                                     |Description                                                                         |
|-----------------------------------------|------------------------------------------------------------------------------------|
|test                                     |Run tests and run `posttest`                                                        |
|test:watch                               |Run and watch tests                                                                 |
|posttest                                 |Run ESLint on test files                                                            |
|build                                    |Build development bundle (uncompressed JS and CSS)                                  |
|build:watch                              |Build and watch development bundle                                                  |
|build:production                         |Build production bundle (compressed JS and CSS)                                     |
|ci:clean                                 |Remove report dir                                                                   |
|ci:coverage                              |Run code coverage                                                                   |
|ci:test                                  |Run test and generate result file                                                   |
|ci                                       |Run `ci:clean`, `ci:test` and `ci:coverage`                                         |
|reinstall                                |Clear npm cache, remove `node_module` and install from `package.json`               |
|start                                    |Start Node.js Express server                                                        |
                                                                                                                               
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
|eslint                                   |ESLint - For enforcing coding style                                                 |    
|eslint-config-airbnb                     |ESLint - Using Airbnb's coding style                                                |                  
|eslint-loader                            |Webpack - ESLint loader                                                             |           
|eslint-plugin-jsx-a11y                   |ESLint - Static AST checker for accessibility rules on JSX elements                 |
|eslint-plugin-react                      |ESLint - React specific linting rules                                               |
|extract-text-webpack-plugin              |Webpack - Separate out inlined CSS from JS files                                    |
|file-loader                              |Webpack - File loader                                                               |
|image-webpack-loader                     |Webpack - Image loader and handling compression                                     |
|isparta                                  |Code coverage for ES6 and for creating result file for Jenkins                      |
|jsdom                                    |Test - A JavaScript implementation of the WHATWG DOM and HTML standards             |
|mocha                                    |Test - JS test framework                                                            |
|mocha-junit-reporter                     |Test - Creating JUnit result file for Jenkins                                       |
|nock                                     |Test - HTTP mocking and expectations library                                        |
|node-sass                                |Webpack - Required by SASS loader                                                   |
|postcss-loader                           |Webpack - Post CSS loader to run autoprefixer                                       |
|react-addons-test-utils                  |Test - Utils for testing React components                                           |
|rimraf                                   |Util - rm -rf for both Unix and Windows world                                       |
|sass-loader                              |Webpack - SASS loader                                                               |
|style-loader                             |Webpack - Style loader                                                              |
|url-loader                               |Webpack - URL loader                                                                |
|webpack                                  |Webpack - Core                                                                      |
|webpack-dev-server                       |Webpack - Node.js Express server                                                    |

Notes:-
* `babel-runtime` cannot be included because it will cause `Cannot find module 'babel-runtime/helpers/interop-require'` when dealing with `radium-grid`. See https://github.com/FormidableLabs/radium-grid/issues/31                                                                                

## Dependencies

|Dependency                               |Description                                                                         |
|-----------------------------------------|------------------------------------------------------------------------------------|
|immutable                                |Creating Immutable objects                                                          |
|isomorphic-fetch                         |Isomorphic WHATWG Fetch API                                                         |
|material-ui                              |UI - Google's material design UI components built with React                        |
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
|roboto-fontface                          |Roboto font, adhering to Google Material Design spec                                |

## Project Structure

```
.
├── dist                        -> Distribution dir
│   ├── css                     
│   ├── fonts                   
│   ├── img                     
│   └── js                      
├── node_modules                -> Installed modules dir
│   └── ...                     
├── reports                     -> Reports dir - Generated reports for Jenkins
│   └── ...                     
├── src                         -> Source dir
│   ├── img                     
│   ├── js                      
│   └── scss                    
├── test                        -> Test dir
│   └── ...                     
├── .babelrc                    -> Babel configuration
├── .eslintrc                   -> ESLint configuration
├── .gitignore                  -> Git ignore list
├── CHANGELOG.md                -> Change logs
├── index.html                  -> Main entry page
├── LICENSE.md                  -> License, if needed
├── package.json                -> NPM scripts and dependencies
├── README.md                   -> Readme file for the app
├── webpack.base.config.js      -> Common webpack config
├── webpack.config.js           -> Development webpack config
└── webpack.prod.config.js      -> Production webpack config
```

## Acknowledgement

_"You want to be extra rigorous about making the best possible thing you can. Find everything that’s wrong with it and fix it. Seek negative feedback, particularly from friends." -- Elon Musk_

Special thanks to the following individuals for improving my sloppy work:-

* Cory Cray
* Jason Thiesse
