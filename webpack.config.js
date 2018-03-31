var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/app',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            publicPath: '/dist/',
        })
    ],
    resolve: {},
    devServer: {
        index: 'index.html',
        contentBase: [path.resolve(__dirname, './dist'), ],
        watchContentBase: true
    },
    performance: {
        hints: false
    },
};