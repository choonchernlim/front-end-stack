/**
 * `npm run ci:coverage`
 *
 * Cross-platform script to execute code coverage and generate result file for CI.
 */
const process = require('process');
const script = require('./script');

const mochaOpts = script.mochaOpts;
const srcDirPath = process.env.npm_package_config_src_dir_path;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const testDirPath = process.env.npm_package_config_test_dir_path;

// have to use `babel-node` and specify node module paths for `isparta` and `_mocha`
// to get it working in Windows... this change has no impact on Mac.
// See: https://github.com/douglasduteil/isparta/pull/77/files
script.run(`babel-node node_modules/isparta/bin/isparta cover --root ${srcDirPath} --include-all-sources --report text --report cobertura --dir ${reportDirPath} node_modules/mocha/bin/_mocha -- ${testDirPath} ${mochaOpts}`);
