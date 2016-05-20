/**
 * `npm test`
 *
 * Cross-platform script to execute Mocha tests and lint the test files.
 */
const process = require('process');
const exec = require('./exec');
const testDirPath = process.env.npm_package_config_test_dir_path;
const mochaOpts = process.env.npm_package_config_mocha_opts;

exec(`mocha ${testDirPath} ${mochaOpts} && eslint ${testDirPath} --color`);
