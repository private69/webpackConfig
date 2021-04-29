const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.base.config')

module.exports = merge(common ,{
    plugins: [
        new uglifyJsWebpackPlugin()
    ]
})