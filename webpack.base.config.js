const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const packageJson = require('./package.json');

const appPath = path.join(__dirname, packageJson.config.src_dir, '/js/app/index.js');
const outputPath = path.join(__dirname, packageJson.config.dist_dir);
const publicPath = path.join(packageJson.config.context_root, '/', packageJson.config.dist_dir);

console.log('App Path    :', appPath);
console.log('Output Path :', outputPath);
console.log('Public Path :', publicPath);

module.exports = {
  entry: {
    app: appPath
  },

  // `publicPath` must begin with context root to ensure font paths in CSS and
  // image paths renders correctly
  output: {
    path: outputPath,
    filename: 'js/app.js',
    publicPath
  },

  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
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
        loader: 'url?limit=10000&minetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=img/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
    // It moves every require("style.css") in entry chunks into a separate css output file.
    // So your styles are no longer inlined into the javascript, but separate in a css
    // bundle file (styles.css). If your total stylesheet volume is big, it will be faster
    // because the stylesheet bundle is loaded in parallel to the javascript bundle.
    new ExtractTextPlugin('css/app.css')
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
