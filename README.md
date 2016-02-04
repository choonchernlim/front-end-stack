# front-end-stack


# package.json

```
{
  "name": "test-redux",
  "private": true,
  "config": {
    "src_dir": "src/",
    "test_dir": "test/",
    "bundle_dir": "dist/",
    "report_dir": "reports/",
    "mocha_opts": "--recursive --compilers js:babel-core/register"
  },
  "scripts": {
    "test": "mocha $npm_package_config_test_dir $npm_package_config_mocha_opts",
    "test:watch": "npm test -- --watch",
    "build": "webpack --progress --colors",
    "build:watch": "clear && webpack --progress --colors --watch",
    "ci:clean": "clear && rimraf $npm_package_config_report_dir",
    "ci:coverage": "isparta cover --root $npm_package_config_src_dir --include-all-sources --report text --report cobertura --dir $npm_package_config_report_dir _mocha -- $npm_package_config_test_dir $npm_package_config_mocha_opts",
    "ci:test": "npm test -- --reporter mocha-junit-reporter --reporter-options mochaFile=$npm_package_config_report_dir/test-results.xml",
    "ci": "npm run ci:clean && npm run ci:test && npm run ci:coverage",
    "reinstall": "npm cache clear && rimraf node_modules && npm install"
  },
  "devDependencies": {
    "babel-cli": "^6.3.17",                     // Babel - cli commands
    "babel-core": "^6.1.4",                     // Babel - core
    "babel-loader": "^6.1.0",                   // Babel - loader for transpiling
    "babel-plugin-transform-runtime": "^6.4.3", // To activate Babel runtime
    "babel-preset-es2015": "^6.1.4",            // Babel runtime
    "babel-preset-es2015": "^6.1.4",            // Babel - ES6 preset
    "babel-preset-react": "^6.3.13",            // Babel - React preset
    "babel-preset-stage-0": "^6.1.2",           // Babel - ES7+ preset
    "babel-runtime": "^6.3.19",                 // Babel - runtime polyfill
    "chai": "^3.5.0",                           // expect()
    "isparta": "^4.0.0",                        // Code coverage for ES6 and for creating result file for Jenkins
    "mocha": "^2.4.5",                          // Test framework
    "mocha-junit-reporter": "^1.9.1",           // Creating JUnit result file for Jenkins
    "react-addons-test-utils": "^0.14.5",       // Testing React components
    "redux-devtools": "^3.0.2",                 // Redux dev tools
    "rimraf": "^2.5.1",                         // rm -rf for both Unix and Windows world
    "webpack": "^1.9.10"                        // Webpack
  },
  "dependencies": {
    "immutable": "^3.7.6",                      // Immutable objects
    "react": "^0.14.0",                         // React - core
    "react-dom": "^0.14.0",                     // React - DOM
    "react-immutable-proptypes": "^1.5.1",      // React - protypes that works with Immutable.js
    "react-redux": "^4.0.0",                    // React - Redux integration
    "redux": "^3.0.2"                           // Redux
  }
}
```