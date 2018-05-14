# wx-mpvue-demo

> 一个利用mpvue框架编写小程序的模板
#### 项目目录

```
.
|-- build                            // webpack配置
|-- config                           // webpack配置
|-- dist                             // 打包目录
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- index.js                 // 公用组件入口
|   |-- store                        // 状态管理
|   |-- styles                       // 样式目录
|   |-- utils                        // 公用文件目录
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 外部静态文件
|-- package.json                     // 配置项目相关信息
|-- README.md                        // 项目说明
.
```


#### 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

因为mpvue不能利用小程序原生编辑器打开，所以调试和开发是分开的，利用自己喜爱的编辑器来打开源码，小程序编辑器导入项目dist。

#### 关于组件的引用
mpvue并不支持动态组件的引用，当前我们组件只能在每个.vue文件里引用，而且组件的<slot>分发也不是很好的支持。

#### 关于钩子触发，生命周期的触发
使用vue原生created钩子来触发时，是全局的触发，还是要用小程序自带的onLoad来触发获取数据好一点
