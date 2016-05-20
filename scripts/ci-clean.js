/**
 * `npm run ci:clean`
 *
 * Cross-platform script to remove report directory for CI.
 */
const process = require('process');
const exec = require('./exec');
const reportDirPath = process.env.npm_package_config_report_dir_path;

exec(`rimraf ${reportDirPath}`);
