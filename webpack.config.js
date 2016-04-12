const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'eval',

  // Include comments with information about the modules to complement devtool="eval"
  // https://github.com/webpack/docs/wiki/build-performance#sourcemaps
  output: Object.assign({}, baseConfig.output, { pathinfo: true }),

  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },

  plugins: baseConfig.plugins.concat(new webpack.HotModuleReplacementPlugin())
});
