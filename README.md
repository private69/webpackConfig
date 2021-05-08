# webpackConfig
## 1、基本使用
- 安装

  > npm init -y // 初始化webpack项目，创建package.json
  >
  > // 安装基本的依赖包
  >
  > npm install webpack@3.6.0 webpack-cli --save-dev

- 配置webpack.config.js（需要手动创建）

  ```js
  const path = require('path')
  module.exports = {
      entry: './src/index.js', // 入口文件
      output: {
          filename: 'bandle.js', // 输出的文件名
          path: path.resolve(__dirname, 'dist'), // 输出的目录
      }
  }
  ```

- 打包

  项目打包前需要配置相关指令。

  在`package.json`文件内部配置`script`属性："build": "webpack"

  > npm run build // 运行指令

## 2、外部引用

插件：[**https://www.webpackjs.com/plugins/**](https://www.webpackjs.com/plugins/)

### 1、html-webpack-plugin ^2.30.1

- 安装：npm install --save-dev html-webpack-plugin

- 作用：生成新的HTMl文件

- 使用：

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  plugins: [
  	new HtmlWebpackPlugin({
  		title："copy", // 创建的html 文件的title
          filename: "index.html", // 生成的文件名
          template: "index.html", // 对应的模板
          inject: true, // 打包文件插入的位置，false-不插入，true-插入尾部，head-插入头部，body-插入到body里
  	})
  ]
  ```

### 2、clean-webpack-plugin ^3.0.0

- 安装：npm install clean-webpack-plugin --save-dev

- 作用：清空特定文件夹

- 使用：

  ```js
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  
  plugins: [
  	new CleanWebpackPlugin(['dist']), // dist为目录名称
  ]
  ```

### 3、uglifyjs-webpack-plugin ^1.2.0

- 安装：npm install uglifyjs-webpack-plugin --save-dev

- 作用：代码压缩（该插件会拖慢构建的速度，所以建议在生产环境下开启）

- 使用：

  ```js
  const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
  
  plugins: [ new uglifyJsWebpackPlugin() ]
  ```

### 4、webpack-merge ^4.1.0

- 安装：npm install webpack-merge --save-dev

- 作用：用于区分开发环境与生产环境

  一般不同的环境会独立文件配置

  ```js
  build
  |—— webpack.common.config.js // 基本的配置，所有环境都相同 
  |—— webpack.dev.config.js // 开发环境的配置
  |—— webpack.prop.config.js // 生产环境的配置
  ```

- 使用：

  ```js
  const merge = require('webpack-merge');
  // 引入基本配置文件
  const common = require('./webpack.common.config')
  
  // 合并基本配置与单独的配置
  module.exports = merge(common, { （这里写额外的配置） })
  ```

### 5、webpack-dev-server ^2.8.2

- 配置script：

  > dev: "webpack-dev-server --open --config webpack.dev.js"
  >
  > // webpack.dev.js 为相应的配置文件

- 基本配置：

  ```js
  devServer: {
      contentBase —— 指定服务器资源的根目录，默认是当前项目的目录
      port —— 服务的端口号
      host —— 服务器的主机号
      historyApiFallback —— 用于应对返回404页面时定向到特定页面用的
      overlay —— 在编译出错的时候，在浏览器页面上显示错误，默认是false
      stats —— 控制控制台的输出内容，errors-only 表示只打印错误
      quiet —— 当为true，控制台只输出第一次编译的信息
      compress —— 被设置为true的时候对所有的服务器资源采用gzip压缩
      hot —— 模块热替换机制，只加载被更新的那一部分模块然后注入
      inline —— 自动刷新 
  }
  ```

### 6、copy-webpack-plugin ^3.0.0

- 安装：npm install copy-webpack-plugin --save-dev

- 作用：拷贝文件和文件夹，用于将静态资源拷贝至最终打包的文件目录下

- 使用：

  ```js
  const CopyWebpackPlugin = require('copy-webpack-plugin')
  
  plugin: [
      new CopyWebpackPlugin([
          {
  			from: "", // 源目录
              to: "", // 目标目录
              ignore: [], //
  		}
  	])
  ]
  
  ```

### 7、extract-text-plugin ^2.1.2

- 安装：npm install extract-text-plugin --save-dev

- 作用：主要是为了抽离 css 样式,防止将样式打包在 js 中引起页面样式加载错乱的现象（由于在某些场景下css的内容会被打包到js文件，那么当修改了css或者js的内容时，css模块以及js模块都会被重新打包）

- 使用：

  ```js
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
  
  module: {
    rules: [
  	{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 编译后用什么loader来提取css文件
          fallback: "style-loader", 
          // 指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
          use: "css-loader" 
        })
      }
    ]
  },
  plugins: [
    // 单个参数时，表示生成文件的文件名
    // filename： 生成的文件名
    // allChunks：false-只提取初始化的时候引入的css，true-会把异步引入css也提取出来
    new ExtractTextPlugin("styles.css"),
  ]
  ```


### 8、常用加载器

加载器：[**https://babeljs.io/setup#webpack**](https://babeljs.io/setup#webpack)

| 加载器名称        | 描述                                                         | 版本    |
| ----------------- | ------------------------------------------------------------ | ------- |
| html-loader       | 将 HTML 文件导出编译为字符串，可供 js 识别的其中一个模块     | ^2.1.2  |
| css-loader        | 解析 css 文件中代码                                          | ^5.2.4  |
| style-loader      | 将 css 模块作为样式导出到 DOM 中                             | ^2.0.0  |
| less-loader       | 加载和转义 less 文件                                         | ^4.0.0  |
| sass-loader       | 加载和转义 sass/scss 文件                                    |         |
| url-loader        | 多数用于加载图片资源,超过文件大小显示则返回 data URL。内置了 `file-loader` | ^4.1.1  |
| vue-loader        | 加载和转义 vue 组件                                          | ^11.0.0 |
| typescript-loader | 加载 Typescript 脚本文件                                     |         |
| babel-loader      | 加载 ES6+ 代码后使用 Babel 转义为 ES5 后浏览器才能解析       | ^7.1.5  |
| postcss-loader    | 使用 postcss 加载和转义 css/sss 文件                         |         |

### 9、加载css文件

- 安装：npm install style-loader css-loader --save-dev

- 所需引用：style-loader （2.0.0） , css-loader （5.2.4）

- 配置：

  ```js
  loaders: [
      { test: /\.css$/ , loader: "style-loader!css-loader"},
  ]
  ```

### 10、加载url文件

- 安装：npm install url-loader --save-dev

- 所需引用：file-loader（目前已集成在url-loader中），url-loader （4.1.1）

- 配置：

  ```js
  loaders: [
      { test: /\.(png|.jpg|.jpeg)$/ , loader: "url-loader"},
  ]
  ```

### 11、加载js文件

- 安装：npm install babel-core babel-loader babel-preset-es2015 --save-dev

- 所需引用：babel-core （6.26.3），babel-loader （7.1.5），bale-preset-es2015 （6.24.1）

- 配置：

  ```js
  loaders: [
      { test: /\.js$/ , loader: "babel-loader" , exclude: /node_modules/},
  ]
  ```

- .babelrc配置：

  ```js
  {
      "presets": [
          "es2015"
      ]
  }
  ```

### 12、加载vue文件

- 安装：

  npm install vue --save

  npm install vue-loader vue-template-compiler --save-dev

- 所需引用：vue-loader （11.0.0），vue-template-compiler （2.6.12）

- 配置：

  ```js
  module: {
      loaders: [
          { test: /\.vue$/ , loader: "vue-loader"}
      ]
  },
  resolve: {
      alias: {
          'vue$':	 'vue/dist/vue.esm.js', 
          // 'vue/dist/vue.common.js' for webpack 1
      }
  }
  ```

## 3、独立配置文件

### 1、区分开发环境与生产环境

- 注释webpack.config.js全部文件

- 创建基本配置文件：webpack.base.config.js

  该文件主要配置项目的基本信息（开发环境与生产环境公共的配置——出入口、基本的加载器等等）

- 创建开发环境的配置文件：webpack.dev.config.js 

  该文件用于单独编写开发所需要的的配置——webpack-dev-server

  ```webpack.dev.config.js
  const base = require('./webpack.base.config.js')
  const merge = require('webpack-merge')
  
  module.exports = merge(base , {....})
  ```

- 创建生产环境的配置文件：webpack.prop.config.js

  该文件用于单独编写生产环境所需要的配置——压缩插件等等

  ```webpack.prop.config.js
  const base = require('./webpack.base.config.js')
  const merge = require('webpack-merge')
  
  module.exports = merge(base , {....})
  ```

- 配置启动指令：（绑定相应的配置文件）

  ```package.json
  "scripts": {
    "dev": "webpack-dev-server --open --inline --config webpack.dev.config.js"
    "build": "webpack --config webpack.prop.config.js"
  }
  ```

### 2、.babelrc文件

- 作用：对预设(presets) 和 插件(plugins) 进行配置。

  是Babel的配置文件，放在项目根目录下，使用Babel的第一步就是配置这个文件。

- 格式：

  presets：presets属性告诉Babel要转换的源码使用了哪些新的语法特性，presets是一组Plugins的集合

  plugins：告诉babel要使用那些插件，这些插件可以控制如何转换代码。

  ```js
  {
      "presets": [],
      "plugins": []
  }
  ```

- 规则：

  ```cmd
  # ES2015转码规则
  npm install babel-preset-es2015 --save-dev
  
  # ES2016转码规则
  npm install babel-preset-es2016 --save-dev
  
  # ES2017转码规则
  npm install babel-preset-es2017 --save-dev
  
  # 支持现有所有ECMAScript版本的新特性
  npm install babel-preset-latest --save-dev
  
  # react转码规则
  npm install --save-dev babel-preset-react
  ```

- 配置：

  ```.babelrc
  {
      "presets": ["es2015" , "react"],
      "plugins": []
  }
  ```




## 问题：

### 1、WARNING in 

- 问题详情：The 'mode' option has not been set, webpack will fallback to 'production' for this value.Set 'mode' option to 'development' or 'production' to enable defaults for each environment.

- 原因：是因为使用webpack没有指定mode为 development（开发模式）或者为production（生产模式），这是webpack4必备的配置——mode

- 解决：

  - 降低webpack 的版本

  - 完善运行的脚本指令

    ```json
    "build-dev": "webpack -mode development",
    "build-prop": "webpack -mode production"
    ```

### 2、html-webpack-plugin：Cannot read property 'initialize' of undefined

- 原因：html-webpack-plugin版本与webpack版本不兼容
- 解决：修改html-webpack-plugin的版本

### 3、clean-webpack-plugin

- 问题详情一：clean-webpack-plugin only accepts an options object.
- 原因：新版本的clean-webpack-plugin不需要指定路径，默认删除未使用的资源
- 问题详情二：throw e： Cannot read property 'emit' of undefined
- 原因：clean-webpack-plugin版本与webpack版本不兼容
- 解决：调整clean-webpack-plugin的版本

### 4、 Cannot read property 'compilation' of undefined

- 原因：uglifyjs-webpack-plugin插件的版本不兼容

### 5、 Webpack has been initialised using a configuration object that does not match the API schema.configuration has an unknown property 'derServer'

- 详情：配置对象是无效的。webpack在初始化过程中，使用的配置对象与API模式中的不匹配。配置有一个未知属性‘ derServer’
- 原因：配置中的对象 ‘derServer’ 不合法

### 6、Copy Plugin has been initialized using an options object that does not match the API schema.

- 详情：使用一个不匹配 api 模式的选项对象初始化了 copy plugin。

- 原因：copy-webpack-plugin插件的配置异常

- 解决：

  ```js
  new CopyWebpackPlugin({
      patterns: [
          from: "",
          to: ""
      ],
      options: {}
  })
  ```

### 7、Cannot find module '@babel/core'

- 问题：babel-loader的版本发生冲突
- 解决：降低babel版本（7.1.5）

### 8、require is not defined

- 问题：浏览器端不能识别require关键字，require是node.js环境下的，在node_modules文件夹里面的模块下面常见require

### 9、Cannot use import statement outside a module

- 详情：不能在模块外使用 import 语句
- 问题：import导入文件模块是ES6模块化语法，而浏览器并不支持ES6语法
- 解决方法：将index.html的原来引入的js文件改为dist目录下生成的js文件

### 10、Hot Module Replacement is disabled

- 详情：热模块替换不可用

- 问题：webpack项目缺少了相关插件

- 解决：

  ```js
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  ],
  ```

### 11、this.getOptions is not a function

- 问题：less-loader或css-loader或sass-loader版本过高
- 解决：调整less-loader或css-loader或sass-loader的版本

### 12、样式中的scoped的问题

- 详情：scoped 属性是一个布尔属性。使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。
- 问题：当不使用scoped时，页面样式会继续作用于该页面内部的组件，使用时，组件的样式不会被该页面所波及。

#### PS.1、

插件与加载器的报错信息中大部分是由于版本的冲突导致的。

#### PS.2、

开发环境中也需要使用 html-webpack-plugin插件，并且需要将模板替换为根目录的 index.html 文件

#### PS.3、

启动webpack-dev-server后，在目标文件夹中是看不到编译后的文件的，实时编译后的文件都保存到了内存当中

#### PS.4、

查看webpack打包后的js报错位置：在配置文件中增加devtool

```js
module.exports = {
    devtool: 'inline-source-map'
}
```



## 文章：

官网：[**https://www.webpackjs.com/guides/getting-started/**](https://www.webpackjs.com/guides/getting-started/)

1、[**webpack之前端性能优化**](https://www.cnblogs.com/ssh-007/p/7944491.html)

2、[**webpack.optimize.CommonsChunkPlugin 详解**](https://www.jianshu.com/p/4da4aca188ef)

3、[**前端打包利器**](https://www.cnblogs.com/goloving/p/8511861.html)

4、[**chalk插件的用法**](https://blog.csdn.net/Amanda_wmy/article/details/80611879)

5、**[深入webpack，编写loader](https://segmentfault.com/a/1190000012718374)**

6、[**显微镜下的webpack4的新特性：mode详解**](https://www.cnblogs.com/cherryvenus/p/9808320.html)

7、[**手把手教你撸一个 Webpack Loader**](https://www.jianshu.com/p/7fa359ffcf8d)

8、[**如何开发webpack-loader**](https://www.cnblogs.com/pqjwyn/p/7684010.html)

9、[**如何开发webpack-plugin**](https://www.cnblogs.com/pqjwyn/p/7691878.html)

10、[**webpack-dev-server配置**](https://blog.csdn.net/dage212/article/details/81231117)

11、**[全面理解和运用loader和plugins](https://www.cnblogs.com/wdlhao/p/5807157.html#_labe1)**

12、[**.babelrc之配置文件**](https://www.cnblogs.com/tugenhua0707/p/9452471.html)

13、[**webpack-dev-server使用方法**](https://segmentfault.com/a/1190000006670084)

14、[**webpack开发自定义loader**](https://blog.csdn.net/weixin_38080573/article/details/105254076)