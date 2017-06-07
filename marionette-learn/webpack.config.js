var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    externals: {
        'jquery': '$'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ]
};