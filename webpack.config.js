// @flow

const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');
const process = require('process');

const distPath = path.join(__dirname, packageJson.config.dist_dir_path);

// Use override value if exists, otherwise use the one defined in `package.json`
const contextRoot = process.env.CONTEXT_ROOT || packageJson.config.context_root;

// Make sure there is a trailing slash
const distUri = path.posix.join(contextRoot, packageJson.config.dist_uri, '/');

// when running `npm run build`, display extra config info
if (JSON.parse(process.env.npm_config_argv).original.join() === 'run,build') {
  console.log('------------------------------');
  console.log('App Path      :', baseConfig.webpackOptions.entry.app);
  console.log('Total Vendors :', baseConfig.webpackOptions.entry.vendor.length);
  console.log('Vendors       :', baseConfig.webpackOptions.entry.vendor.join());
  console.log('------------------------------');
}

module.exports = Object.assign({}, baseConfig.webpackOptions, {
  output: {
    path: distPath,

    publicPath: distUri,

    // Using `chunkhash` instead of `hash` to ensure `vendor` and `app` have different
    // computed hash. This allows `vendor` file to have longer term cache on user's browser
    // until the vendor dependencies get updated
    filename: 'js/[name].[chunkhash].js',
  },

  plugins: baseConfig.webpackOptions.plugins.concat([
    // Instead of cleaning whole dist dir between builds, clean only dirs that may contain
    // hashed filenames
    new CleanPlugin(['css', 'font', 'img', 'js'], {
      root: distPath,
      verbose: false,
    }),

    // Speed up JS minification by replacing `webpack.optimize.UglifyJsPlugin` with a plugin
    // that handles multi-workers.
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
      uglifyOptions: {
        compress: {
          warnings: false,
        },
      },
    }),

    // To prevent the following warnings in browser console:-
    // "It looks like you're using a minified copy of the development build of React.
    // When deploying React apps to production, make sure to use the production build
    // which skips development warnings and is faster."
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CONTEXT_ROOT: JSON.stringify(contextRoot),
        APP_NAME: JSON.stringify(packageJson.name),
        VERSION: JSON.stringify(packageJson.version),
      },
    }),

    // Generates `index.html` at the location specified by the user
    new HtmlWebpackPlugin(Object.assign({}, baseConfig.htmlWebpackPluginOptions, {
      filename: path.join(__dirname, packageJson.config.entry_file_path),
    })),
  ]),
});
