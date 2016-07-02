/**
 * `npm run ci:test`
 *
 * Cross-platform script to execute Mocha tests and generate result file for CI.
 */
const process = require('process');
const path = require('path');
const script = require('./script');
const mochaOpts = script.mochaOpts;
const testDirPath = process.env.npm_package_config_test_dir_path;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const mochaFilePath = path.join(reportDirPath, 'test-results.xml');

script.run(`mocha ${testDirPath} ${mochaOpts} --reporter mocha-junit-reporter --reporter-options mochaFile=${mochaFilePath} && eslint ${testDirPath} --color`);
