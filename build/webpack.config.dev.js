const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({template: 'index.html', filename: 'index.html', inject: true})

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }, {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), htmlWebpackPlugin
    ],
    resolve: {
        alias: {
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),
            api: path.resolve(__dirname, '../src/api')
        }
    }
}