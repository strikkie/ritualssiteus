var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: {
        app: ['./src/scripts/main.jsx']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: './'
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true
    },
    module: {
        loaders: [
            // required to write "require('../styles/<style-sheet>.css')"
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            // fonts and svg
            {
                test: /\.woff$/,
                loader: 'url-loader?prefix=font/&limit=5000' +
                    '&mimetype=application/font-woff'
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader?prefix=font/'
            },
            {
                test: /\.otf$/,
                loader: 'file-loader?prefix=font/'
            },
            {
                test: /\.eot$/,
                loader: 'file-loader?prefix=font/'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader?prefix=font/'
            },

            // image loaders
            {
                test: /\.png/,
                loader: 'url?limit=100000&mimetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'file'
            },
            {
                test: /\.gif/,
                loader: 'file'
            },

            // required for react jsx
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM'
            }
        ],
    },
    resolveLoader:{
        modulesDirectories: ['node_modules']
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'src/scripts/components',
            'src/scripts/routes',
            'src/scripts/store',
            'src/scripts/actions',
            'src/scripts/',
            'src/styles',
            'src/images',
            'src/fonts'
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: "./build",
    }
};

