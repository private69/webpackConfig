const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './src/index.js',
    // output: {
    //     filename: 'bandle.js',
    //     // path: path.resolve(__dirname, 'dist'), // 打包在当前目录
    //     path: path.resolve("", 'dist'),
    // },
    plugins: [
        new HtmlWebpackPlugin({
            // 创建的html文件的title
            title: "copy",
            template: path.resolve(__dirname, '../index.html'),
        }),
    ],
    module: {
        rules: [{
                    test: /\.less$/,
                    loader: ['style-loader', 'css-loader', 'less-loader']
                },
                {
                    test: /\.js$/,
                    loader: ['babel-loader']
                },
                {
                    test: /\.vue$/,
                    loader: ['vue-loader']
                },
                {
                    test: /\.(png|jpg|jpeg)$/,
                    loader: ['url-loader']
                },

            ]
            // loaders: [
            //     { test: /\.css$/, loader: "style-loader!css-loader" },
            //     { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            //     { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            //     { test: /\.(png|.jpg|.jpeg)$/, loader: "url-loader" },
            //     { test: /\.vue$/, loader: "vue-loader" }
            // ]
    },
    resolve: {
        // 尝试匹配无后缀的文件（使用以下后缀匹配，从左往右）
        extensions: ['.js', '.css', '.vue', ],
        alias: {
            // 匹配vue结尾的结尾的导向语句
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
            // '@': path.resolve(__dirname,'../src'),
            '@': '../src',
        }
    },
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
    }
}