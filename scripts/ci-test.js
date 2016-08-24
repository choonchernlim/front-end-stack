/**
 * `npm run ci:test`
 *
 * Cross-platform script to lint src/test files, execute Mocha tests and generate result file
 * for CI.
 */
const process = require('process');
const path = require('path');
const script = require('./script');

const mochaOpts = script.mochaOpts;
const srcDirPath = process.env.npm_package_config_src_dir_path;
const testDirPath = process.env.npm_package_config_test_dir_path;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const mochaFilePath = path.join(reportDirPath, 'test-results.xml');

const eslint = `eslint ${srcDirPath} ${testDirPath} --color`;
const mocha = `mocha ${testDirPath} ${mochaOpts} --reporter mocha-junit-reporter --reporter-options mochaFile=${mochaFilePath}`;

script.run(`${eslint} && ${mocha}`);
