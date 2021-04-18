# 脚手架

命令行快速生成模板页面
npm tpl 'page-name'

自动从iconfont更新
npm icon 'iconfont下载链接后缀'

node >= 12.0.0

Taro >= v3.2.1

# 技术栈

React + Taro +TaroUi + Dva + Scss + typeScript

使用eslint+prettier格式化

默认git提交前校验（如不需要可在package.json里删掉pre-commit配置）

## 项目运行

```

cd taro-dva-ts

# 安装项目依赖
yarn

# 微信小程序
yarn dev:weapp

# 支付宝小程序
yarn dev:alipay

# 百度小程序
yarn dev:swan

# 字节跳动小程序
yarn dev:tt

# QQ小程序
yarn dev:qq

# H5
yarn dev:h5

# React Native
yarn dev:rn

# pages模版快速生成
npm run tpl `文件名`

```

# 业务介绍

目录结构

    ├── dist                   // 小程序编译结果目录
    │   ├── weapp                 // 微信小程序
    │   ├── alipay                // 支付宝小程序
    │   ├── qq                    // QQ小程序
    │   └── xxxx                  // 根据编译名称动态生成相应端名称
    ├── config                 // Taro配置目录
    │   ├── dev.ts                 // 开发时配置
    │   ├── index.ts               // 默认配置
    │   └── prod.ts                // 打包时配置
    ├── src                    // 源码目录
    │   ├── @types                 // 类型声名目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── models                 // redux models
    │   ├── pages                  // 页面文件目录
    │   │   └── index
    │   │       ├── index.tsx          // 页面逻辑
    │   │       ├── index.scss         // 页面样式
    │   │       ├── index.config.ts    // 页面配置
    │   ├── service            // 页面api等服务
    │   ├── static             // 字体、图片
    │   ├── utils              // 常用工具类
    │   ├── app.ts             // 入口文件
    │   ├── app.config.ts      // 入口配置文件
    │   └── index.html
    ├── package.json
    ├── template.js            // pages模版快速生成脚本,执行命令 npm run tpl `文件名`
    └── get-iconfont.js        // iconfont快速更新,执行命令 npm run iconfont


# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

### dva开发文档地址

> https://dvajs.com/

### 小程序开发文档

> https://developers.weixin.qq.com/miniprogram/dev/framework/

# License

[MIT](LICENSE)
