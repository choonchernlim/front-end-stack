/**
 * `npm run ci:clean`
 *
 * Cross-platform script to remove report directory for CI.
 */
const process = require('process');
const script = require('./script');

const reportDirPath = process.env.npm_package_config_report_dir_path;

script.run(`rimraf ${reportDirPath}`);
