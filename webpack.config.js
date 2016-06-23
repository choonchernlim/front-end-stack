const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');
const process = require('process');

const distPath = path.join(__dirname, packageJson.config.dist_dir_path);

// Use override value if exists, otherwise use the one defined in `package.json`
const contextRoot = process.env.CONTEXT_ROOT || packageJson.config.context_root;

// Make sure there is a trailing slash
const distUri = path.join(contextRoot, packageJson.config.dist_uri, '/');

module.exports = Object.assign({}, baseConfig.webpackOptions, {

  output: {
    path: distPath,

    publicPath: distUri,

    // Using `chunkhash` instead of `hash` to ensure `vendor` and `app` have different
    // computed hash. This allows `vendor` file to have longer term cache on user's browser
    // until the vendor dependencies get updated
    filename: 'js/[name].[chunkhash].js'
  },

  plugins: baseConfig.webpackOptions.plugins.concat(
    // Instead of cleaning whole dist dir between builds, clean only dirs that may contain
    // hashed filenames
    new CleanPlugin(['css', 'font', 'img', 'js'], {
      root: distPath,
      verbose: false
    }),

    // Minify JS without source map and suppress any warnings.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    // To prevent the following warnings in browser console:-
    // "It looks like you're using a minified copy of the development build of React.
    // When deploying React apps to production, make sure to use the production build
    // which skips development warnings and is faster."
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // Prevents the inclusion of duplicate code into bundle and instead applies a copy
    // of the function at runtime, which results smaller file size
    new webpack.optimize.DedupePlugin(),

    // Generates `index.html` at the location specified by the user
    new HtmlWebpackPlugin(Object.assign({}, baseConfig.htmlWebpackPluginOptions, {
      filename: path.join(__dirname, packageJson.config.entry_file_path)
    }))
  )
});
