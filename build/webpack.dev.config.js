const merge = require('webpack-merge');
const common = require('./webpack.base.config')

module.exports = merge(common , {
    plugins: [],
    // derServer: {
    //     contentBase: false,
    //     host: 'localhost',
    //     port: 8080,
    //     open: true,
    //     inline: true,
    //     hot: true,
    // }
})