const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const open = require("open");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: 'index.html'
});

const env = process.env.NODE_ENV;

const config = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.styl$/,
            exclude: /node_modules/,
            loader: 'style!css!stylus'
        }]
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
}

if (env === "dev")
    open("http://localhost:4000/)

else if (env === "production") {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            },
            output: {
                comments: false,
            }
        })
    );
}

module.exports = config;
