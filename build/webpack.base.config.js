const path = require('path')
// 前端 模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 进度条
const progressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const happypack = require('happypack');
const os = require('os');
const happypackThreadPool = happypack.ThreadPool({size: os.cpus().length });

// 获取绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    // entry: './src/index.js',
    // output: {
    //     filename: 'bandle.js',
    //     // path: path.resolve(__dirname, 'dist'), // 打包在当前目录
    //     path: path.resolve("", 'dist'),
    // },
    plugins: [
        // new webpack.DllPlugin(),
        new HtmlWebpackPlugin({
            // 创建的html文件的title
            title: "copy",
            template: path.resolve(__dirname, '../index.html'),
        }),
        new webpack.ProvidePlugin({ 
            $:  "jquery", 
            jQuery: "jquery", 
           "windows.jQuery": "jquery"
        }),
        new progressBarWebpackPlugin(),
        new happypack({
            //用id来标识 happypack处理那里类文件
          id: 'happyBabel',
          //如何处理  用法和loader 的配置一样
          loaders: [{
            loader: 'babel-loader?cacheDirectory=true',
          }],
          //共享进程池
          threadPool: happypackThreadPool,
          //允许 HappyPack 输出日志
          verbose: true,    
        }),
    ],
    module: {
        rules: [{
            test: /\.less$/,
            loader: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.txt$/,
            loader: ['custom-less-loader']
        },
        {
            test: /\.js[x]$/,
            include: [ resolve('src')],
            exclude: /node_modules/,
            loader: 'babel-loader?id=happyBabel'
        },
        {
            test: /\.vue$/,
            loader: ['vue-loader']
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: ['url-loader']
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        }
        ]
        // loaders: [
        //     { test: /\.css$/, loader: "style-loader!css-loader" },
        //     { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
        //     { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
        //     { test: /\.(png|.jpg|.jpeg)$/, loader: "url-loader" },
        //     { test: /\.vue$/, loader: "vue-loader" }
        // ]
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: ['node_modules', path.join(__dirname , '..', 'loader')]
    },
    resolve: {
        // 尝试匹配无后缀的文件（使用以下后缀匹配，从左往右）
        extensions: ['.js', '.css', '.vue',],
        alias: {
            // 导入 layui
            'layui$': 'layui/dist/layui.js',
            // 匹配vue结尾的结尾的导向语句
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
            // '@': path.join(__dirname,'../src'),
            '@': resolve('src'),
        }
    },
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty"
    }
}