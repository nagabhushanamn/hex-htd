var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "cheap-eval-source-map",
    externals: {
        'jquery': '$'
    },
    entry: [
        './src/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            _: 'underscore'
        }),
        // new CopyWebpackPlugin([
        //     { from: 'bower_components' }
        // ])
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
}