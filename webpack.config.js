const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'eval',

  output: {
    path: baseConfig.output.path,
    publicPath: baseConfig.output.publicPath,

    // When using `chunkhash` on filenames, webpack-dev-server throws an error:-
    // "Cannot use [chunkhash] for chunk in 'js/[name].[chunkhash].js' (use [hash] instead)"
    // So, instead of using `hash`, removed hash from filenames to speed up performance
    // https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.kbk0zei4k
    filename: 'js/[name].js',

    // Include comments with information about the modules to complement devtool="eval"
    // https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    pathinfo: true
  },

  devServer: {
    contentBase: packageJson.config.dist_dir_path,

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
