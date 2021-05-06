const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    plugins: [
        // 压缩打包代码
        new uglifyJsWebpackPlugin(),
        // 清空特定文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 创建的html文件的title
            title: "copy",
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/assets'),
            to: path.resolve(__dirname, '../dist/assets')
            // from: '../src/assets',
            // to: '../dist'
        }])
    ]
})