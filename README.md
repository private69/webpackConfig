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

2、

## 插件：

1、html-webpack-plugin（生成新的HTMl文件）

- 安装：npm install --save-dev html-webpack-plugin

- 使用：

  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  
  new HtmlWebpackPlugin({
  	title："copy" // 创建的html 文件的title
  })
  ```

2、clean-webpack-plugin（清空特定文件夹）

- 安装：npm install clean-webpack-plugin --save-dev

- 使用：

  ```js
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  
  new CleanWebpackPlugin(['dist']), // dist为目录名称
  ```

3、uglifyjs-webpack-plugin（代码压缩）

4、webpack-merge

5、webpack-dev-server

6、

## 问题：

1、WARNING in configuration

- 问题详情：The 'mode' option has not been set, webpack will fallback to 'production' for this value.Set 'mode' option to 'development' or 'production' to enable defaults for each environment.

- 原因：是因为使用webpack没有指定mode为 development（开发模式）或者为production（生产模式），这是webpack4必备的配置——mode

- 解决：

  - 降低webpack 的版本

  - 完善运行的脚本指令

    ```json
    "build-dev": "webpack -mode development",
    "build-prop": "webpack -mode production"
    ```

2、html-webpack-plugin：Cannot read property 'initialize' of undefined

- 原因：html-webpack-plugin版本与webpack版本不兼容
- 解决：修改html-webpack-plugin的版本

3、clean-webpack-plugin

- 问题详情一：clean-webpack-plugin only accepts an options object.
- 原因：新版本的clean-webpack-plugin不需要指定路径，默认删除未使用的资源
- 问题详情二：throw e： Cannot read property 'emit' of undefined
- 原因：clean-webpack-plugin版本与webpack版本不兼容
- 解决：调整clean-webpack-plugin的版本

4、Webpack has been initialised using a configuration object that does not match the API schema

- 问题：配置对象是无效的。webpack在初始化过程中，使用的配置对象与API模式中的不匹配。

5、 Cannot read property 'compilation' of undefined

- 原因：uglifyjs-webpack-plugin插件的版本不兼容

6、Configuration file found but no entry configured.

- 原因：找到了配置文件，但是没有配置条目

7、

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