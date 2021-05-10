const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const package = require('../package.json')

module.exports = merge(common, {
    entry: {
        bundle: './src/index.js',
        // 获取 dependencies 依赖的库，并抽离成单独的文件 vendor.js
        vendor: Object.keys(package.dependencies),
    },
    output: {
        filename: '[name].js',
        // path: path.resolve(__dirname, 'dist'), // 打包在当前目录
        path: path.resolve("", 'dist'),
    },
    plugins: [
        // 压缩打包代码
        new uglifyJsWebpackPlugin(),
        // 清空特定文件夹
        new CleanWebpackPlugin(),
        // 拷贝静态资源
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/assets'),
            to: path.resolve(__dirname, '../dist/assets'),
            // from: '../src/assets',
            // to: '../dist'
        }]),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "[name].js",
            chunks: "bandle"
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                // 提取css文件
                fallback: "style-loader",
                // 编译css文件
                use: "css-loader",
            })
        }, ]
    }
})