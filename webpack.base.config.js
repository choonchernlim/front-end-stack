const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const packageJson = require('./package.json');

const vendors = Object.keys(packageJson.dependencies);
const srcPath = path.join(__dirname, packageJson.config.src_dir_path);

const appPath = path.join(srcPath, '/js/app/index.js');

console.log('------------------------------');
console.log('Vendors   :', vendors.join());
console.log('App Path  :', appPath);
console.log('------------------------------');

// Base options for HtmlWebpackPlugin for generating `index.html`
// This allows production bundle to have possibly different entry file path than webpack-dev-server
const htmlWebpackPluginOptions = {
  title: packageJson.name,
  template: path.join(srcPath, '/html/index.html'),
  favicon: path.join(srcPath, '/img/favicon.png')
};

// Base options for WebPack
const webpackOptions = {
  entry: {
    app: appPath,
    vendor: vendors
  },

  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream&name=font/[name].[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=img/[name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
    // Split vendors from app
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

    // It moves every require("style.css") in entry chunks into a separate css output file.
    // So your styles are no longer inlined into the javascript, but separate in a css
    // bundle file (styles.css). If your total stylesheet volume is big, it will be faster
    // because the stylesheet bundle is loaded in parallel to the javascript bundle.
    new ExtractTextPlugin('css/app.[chunkhash].css')
  ],

  // create vendor prefixes to maximize compatibility. Recommended by Google:
  // https://developers.google.com/web/tools/setup/setup-buildtools#dont-trip-up-with-vendor-prefixes
  postcss() {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ];
  }
};

module.exports = {
  htmlWebpackPluginOptions,
  webpackOptions
};
