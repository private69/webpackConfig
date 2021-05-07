const merge = require('webpack-merge');
const common = require('./webpack.base.config')
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common , {
    // mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        // 服务器资源根目录
        // contentBase: path.join(__dirname , 'dist'),
        // contentBase: './dist',
        host: 'localhost',
        port: 8080,
        // open: true,
        // 自动刷新
        inline: true,
        // 热模块替换
        hot: true,
        // 控制控制台输出的内容
        stats: "errors-only",
        // 控制台只输出首次编译的信息
        // quiet: true,
        // 编译出错的信息显示在浏览器页面上
        overlay: true,
    }
})