/**
 * `npm test`
 *
 * Cross-platform script to execute Mocha tests and lint the test files.
 */
const process = require('process');
const script = require('./script');
const testDirPath = process.env.npm_package_config_test_dir_path;
const mochaOpts = script.mochaOpts;

script.run(`mocha ${testDirPath} ${mochaOpts} --colors && eslint ${testDirPath} --color`);
