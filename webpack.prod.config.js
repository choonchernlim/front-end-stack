const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  plugins: baseConfig.plugins.concat(
    // Clean dist dir between builds
    new CleanPlugin(baseConfig.output.path),

    // Minify JS without source map and suppress any warnings.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    // Prevents the inclusion of duplicate code into bundle and instead applies a copy
    // of the function at runtime, which results smaller file size
    new webpack.optimize.DedupePlugin()
  )
});
