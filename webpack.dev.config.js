// @flow

const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

const distPath = path.join(__dirname, packageJson.config.dist_dir_path);

// Use override value if exists, otherwise use the one defined in `package.json`
const contextRoot = process.env.CONTEXT_ROOT || packageJson.config.context_root;

const trailingSlashContextRoot = path.posix.join(contextRoot, '/');

module.exports = Object.assign({}, baseConfig.webpackOptions, {
  devtool: 'eval',

  output: {
    path: distPath,

    // configure base URI to match server side context root
    publicPath: trailingSlashContextRoot,

    // When using `chunkhash` on filenames, webpack-dev-server throws an error:-
    // "Cannot use [chunkhash] for chunk in 'js/[name].[chunkhash].js' (use [hash] instead)"
    // So, instead of using `hash`, removed hash from filenames to speed up performance
    // https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.kbk0zei4k
    filename: 'js/[name].js',

    // Include comments with information about the modules to complement devtool="eval"
    // https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    pathinfo: true,
  },

  devServer: {
    contentBase: distPath,

    // to ensure bookmarkable link works instead of getting a blank screen
    historyApiFallback: {
      index: trailingSlashContextRoot,
    },

    // use HTTPS to ensure client side can read server side generated cookie containing CSRF token
    https: true,

    hot: true,

    // automatically open the browser link
    open: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    proxy: {
      // Redirects `https://localhost:8080/api/*` to `https://localhost:8443/<context_root>/api/*`
      [path.posix.join(contextRoot, '/api/*')]: {
        target: 'https://localhost:8443',
        secure: false,
      },
      // Redirects `https://localhost:8080/saml/*` to `https://localhost:8443/<context_root>/saml/*`
      [path.posix.join(contextRoot, '/saml/*')]: {
        target: 'https://localhost:8443',
        secure: false,
      },
    },
  },

  plugins: baseConfig.webpackOptions.plugins.concat([
    // Enable Hot Module Replacement (HMR) to exchange, add, or remove modules while
    // an application is running without a page reload.
    new webpack.HotModuleReplacementPlugin(),

    // When there are errors while compiling this plugin skips the emitting phase
    // (and recording phase), so there are no assets emitted that include errors.
    new webpack.NoEmitOnErrorsPlugin(),

    // Generates `index.html` at the default location, which is dist dir, so that webpack-dev-server
    // can find it
    new HtmlWebpackPlugin(baseConfig.htmlWebpackPluginOptions),

    // Defining variables accessible by client code
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CONTEXT_ROOT: JSON.stringify(contextRoot),
        APP_NAME: JSON.stringify(packageJson.name),
        VERSION: JSON.stringify(packageJson.version),
      },
    }),
  ]),
});
