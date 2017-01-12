/**
 * `npm run ci:coverage`
 *
 * Cross-platform script to execute code coverage and generate result file for CI.
 */
const process = require('process');
const script = require('./script');

const mochaOpts = script.mochaOpts;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const testDirPath = process.env.npm_package_config_test_dir_path;

process.env.NODE_ENV = 'test';

const nyc = `nyc --report-dir=${reportDirPath}`;
const mocha = `node_modules/mocha/bin/_mocha ${testDirPath} ${mochaOpts} --colors`;

script.run(`${nyc} ${mocha}`);
