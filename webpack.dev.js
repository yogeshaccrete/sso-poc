const path = require ('path');
//const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dev-build'),
        publicPath: '/',
        filename: '[name].js',
        clean: true
    },
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    //devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
}