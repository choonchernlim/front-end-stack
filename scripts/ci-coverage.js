/**
 * `npm run ci:coverage`
 *
 * Cross-platform script to execute code coverage and generate result file for CI.
 */
const process = require('process');
const path = require('path');
const script = require('./script');

const mochaOpts = script.mochaOpts;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const testDirPath = process.env.npm_package_config_test_dir_path;
const distDirPath = process.env.npm_package_config_dist_dir_path;

process.env.NODE_ENV = 'test';

// In addition to the `exclude` patterns defined in package.json, add user defined paths.
// Most importantly, `distDirPath` has to be excluded because it contains large bundled JS files
// and it causes "JavaScript heap out of memory" error.
const nycExtraExcludes = [distDirPath, reportDirPath]
  .map(pattern => `--exclude=${pattern}`)
  .join(' ');

const nyc = `nyc ${nycExtraExcludes} --report-dir=${reportDirPath}`;
const mocha = `node_modules/mocha/bin/_mocha ${testDirPath} ${mochaOpts} --colors`;

script.run(`${nyc} ${mocha}`);
