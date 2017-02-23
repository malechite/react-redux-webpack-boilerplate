var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        './src/app/main.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        ['import', [{ libraryName: 'antd', style: 'css' }]]
                    ],
                    presets: ['react', 'react-hmre', 'es2015']
                }
            },
            { test: /\.scss$/, loader: 'style!css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!sass' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=assets/[name]-[hash].[ext]' },
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    devtool: 'eval',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};