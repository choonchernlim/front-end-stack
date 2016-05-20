/**
 * `npm run ci:coverage`
 *
 * Cross-platform script to execute code coverage and generate result file for CI.
 */
const process = require('process');
const exec = require('./exec');
const srcDirPath = process.env.npm_package_config_src_dir_path;
const reportDirPath = process.env.npm_package_config_report_dir_path;
const testDirPath = process.env.npm_package_config_test_dir_path;
const mochaOpts = process.env.npm_package_config_mocha_opts;

exec(`isparta cover --root ${srcDirPath} --include-all-sources --report text --report cobertura --dir ${reportDirPath} _mocha -- ${testDirPath} ${mochaOpts}`);
