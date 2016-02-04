'use strict';

var path = require( 'path' );
var webpack = require( 'webpack' );
var packageJson = require( './package.json' );
var entryPath = path.join( __dirname, packageJson.config.src_dir + '/index.js' );
var outputDir = path.join( __dirname, packageJson.config.bundle_dir );
var vendors = Object.keys( packageJson.dependencies );

console.log( "Entry Path  : " + entryPath );
console.log( "Output Dir  : " + outputDir );
console.log( "Vendors     : " + vendors );

module.exports = {
    devtool : 'inline-source-map',

    entry : {
        app    : entryPath,
        vendor : vendors
    },

    output : {
        path     : outputDir,
        filename : 'app.js'
    },

    module : {
        loaders : [
            {
                test    : /\.js$/,
                loader  : 'babel',
                exclude : /node_modules/
            }
        ]
    },

    plugins : [
        new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.js' )
    ]
};
