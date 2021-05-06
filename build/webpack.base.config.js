
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bandle.js',
        // path: path.resolve(__dirname, 'dist'), // 打包在当前目录
        path: path.resolve("", 'dist'),
    },
    plugins: [],
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         loader: ['style-loader' , 'css-loader']
        //     }
        // ]
        loaders: [
            { test: /\.css$/ , loader: "style-loader!css-loader"},
            { test: /\.js$/ , loader: "babel-loader" , exclude: /node_modules/},
            { test: /\.css$/ , loader: "style-loader!css-loader!less-loader"},
            { test: /\.(png|.jpg|.jpeg)$/ , loader: "url-loader"},
            { test: /\.vue$/ , loader: "vue-loader"}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
            // '@': path.resolve(__dirname,'../src'),
            '@': '../src',
        }
    },
    
}