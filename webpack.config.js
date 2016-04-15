const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  plugins: baseConfig.plugins.concat(
    // Instead of cleaning the whole dist dir, clean only assets/ dir between builds for 2 reasons:-
    // 1. Only assets/ dir will contain hashed filenames
    // 2. When used in typical JEE app, dist dir will also contain WEB-INF/ and we don't want this
    //    plugin to wipe that dir off
    new CleanPlugin(path.join(baseConfig.output.path, '/assets')),

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
