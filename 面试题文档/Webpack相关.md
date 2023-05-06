# Webpack 相关

## webpack 了解多少

webpack是一个前端模块化打包构建工具，vue脚手架本身就用的webpack来构建的，webpack本身需要的入口文件通过entry来指定，出口通过output来指定，默认只支持js文件，其他文件类型需要通过对应的loader来转换，例如：less需要less,less-loader,sass需要sass-loader,css需要style-loader,css-loader来实现。当然本身还有一些内置的插件来对文件进行压缩合并等操作



## 兼容高版本浏览器，怎么新增api语法

在项目中，常遇到 有些新增api 不能正常转化js语法，

babel 转换新的 Javascript 句法，而不转换新的 Api ，比如es6中 Generator、Set、Symbol、Promise 等全局对象，为了解决这个问题，我们使用一种叫做 Polyfill（代码填充，也可译作兼容性补丁） 的技术



webpack 与 grunt、gulp 的不同

与 webpack 类似的工具还有哪些，谈谈你为什么最终选择（或放弃）使用webpack

有哪些常见的 loader，他们是解决什么问题的

有哪些常见的 plugin，他们是解决什么问题的

loader 和 plugin 的不同

webpack 的构建流程是什么，从读取配置到输出文件这个过程尽量说全

是否写过 loader 和 plugin，描述一下编写 loader 或 plugin 的思路

webpack 的 热更新是如何做到的，说明其原理

如何利用 webpack 来优化前端性能（提高性能和体验）

如何提高 webpack 的构建速度

怎么配置单页应用，怎么配置多页应用

npm 打包时需要注意哪些，如何利用 webpack 来更好地构建

如何在 vue 项目中按需加载

webpack 是解决什么问题而生的

如何配置多入口文件

webpack 中的模块解析规则

webpack 中的模块解析规则具体实现

什么是模块热替换