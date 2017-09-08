// noinspection NpmUsedModulesInstalled
/**
 * Script runner.
 */
const process = require('process');
const console = require('console');
const path = require('path');
const exec = require('child_process').exec;

const run = (command, comments) => {
  if (comments) {
    console.log('Performing the following action(s):-');
    comments.forEach(comment => console.log(`- ${comment}`));
    console.log();
  }

  console.log(`Executing: ${command}`);

  exec(command, (err, stdout, stderr) => {
    // display `stdout` first, if exist. Some plugins pipe the error messages here.
    if (stdout) {
      console.log(stdout);
    }

    // throw `stderr` instead of `err`, if exist, to reduce log clutters
    if (err) {
      throw stderr;
    }

    console.log('OK');
  });
};

const srcDirPath = process.env.npm_package_config_src_dir_path;
const testBootstrap = path.join(srcDirPath, 'js', '__tests__', 'index.js');

module.exports = {
  run,
  mochaOpts: `--recursive --compilers js:babel-register --require ${testBootstrap}`,
};
