/**
 * `npm run ci:test`
 *
 * Cross-platform script to execute Mocha tests and generate result file for CI.
 */
const process = require('process');
const path = require('path');
const exec = require('./exec');
const testDirPath = process.env.npm_package_config_test_dir_path;
const mochaOpts = process.env.npm_package_config_mocha_opts;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const mochaFilePath = path.join(reportDirPath, 'test-results.xml');

exec(`mocha ${testDirPath} ${mochaOpts} --reporter mocha-junit-reporter --reporter-options mochaFile=${mochaFilePath}`);
