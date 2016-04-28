const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');

module.exports = Object.assign({}, baseConfig.webpackOptions, {
  plugins: baseConfig.webpackOptions.plugins.concat(
    // Instead of cleaning whole dist dir between builds, clean only dirs that may contain hashed
    // filenames
    new CleanPlugin(['css', 'font', 'img', 'js'], {
      root: baseConfig.webpackOptions.output.path
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
