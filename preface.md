# 狗哥讲编程

> 现代 JS 编程与工具——序言

## JavaScript能做什么？

* 网站前端开发
* 移动应用开发
* 桌面开发
* 后端开发
* 机器学习: https://js.tensorflow.org/

### 优势

* 拥有世界上最大的开源社区
* 跨平台的 UI 基础 - HTML
* 正确的 UI 开发方式 - Reactive UI 框架 + 状态管理
* 脚本语言运行时 - Node.js
* 强大的工具链
* 新语法 - 解决痛点

### 劣势

* 传统观念 - [诡异的语法](http://javascript-puzzlers.herokuapp.com/)，混乱的对象模型，搞不清 this，回调函数地狱...
* 新语法 - 不了解，不会用
* 开发工具链对初学者并不友好
* 技术更新快 - 中文社区文档

## 预备知识

* HTML
* CSS
* JS

> 能够完成基本的网页，对全栈编程有一定了解

#### 基本概念

* 什么是 JavaScript (JS), ECMAScript (ES), TypeScript (TS)？ES6 又是什么意思？
* Node、JS、V8 之间是什么关系？
* 为什么开发前端应用需要使用 Node？你所谓的现代 JS 前端开发跟传统的开发方式有什么差别？


## 课程内容

* 前端开发: Vue + Vuex + vue-router, React + redux + redux-saga + react-router, apollo-client(?)
* 移动开发: React Native
* 桌面开发: Electron
* 后端开发: Koa(?), FaaS(?), GraphQL(?)
* 工具链: Node, Parcel, Babel, Webpack, ESLint, Jest
* 新语法的应用

---

## 工具

1. [Node.js](https://nodejs.org/)
1. 包管理: NPM / [Yarn](https://yarnpkg.com/)
1. 代码检查: [ESLint](https://eslint.org/) 工具
1. 测试工具: Mocha, [Jest](https://facebook.github.io/jest/)
1. WebAssembly

### 网页前端开发

1. 编译工具: [Babel.js](https://babeljs.io/)
1. 打包工具: [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/)
1. UI框架: [React](https://reactjs.org/), [Vue](https://vuejs.org/), Angular
1. 状态管理: [Redux](https://redux.js.org/) + [redux-saga](https://github.com/redux-saga/redux-saga)/[redux-thunk](https://github.com/reduxjs/redux-thunk), [Vuex](https://vuex.vuejs.org/)
1. 客户端路由: [react-router](https://github.com/ReactTraining/react-router), [vue-router](https://router.vuejs.org/)
1. HTML 模板: [Pug](https://pugjs.org/)
1. CSS 预处理: [SASS/SCSS](https://sass-lang.com/), LESS, [Stylus](http://stylus-lang.com/)
1. API: REST, [GraphQL](https://graphql.org/), [apollo-client](https://www.apollographql.com/client/)

> SPA = Single Page Application

  * Reactive UI framework (React, Vue)
  * State Management (Redux, Vuex)
  * Router (react-router, vue-router)
  * API
  * _SSR: Server-Side Rendering_

### 移动开发

1. React: [React Native](https://facebook.github.io/react-native/)
1. Vue: Weex, NativeScript-Vue, Vue Native
1. HTML5 + Cordova
1. PWA

### 桌面开发

1. [Electron](https://electronjs.org/)
1. NW.js

### 后端开发

1. Express.js
1. [Koa.js](https://koajs.com/)
1. MongoDB
1. FaaS - Function as a Service: AWS Lambda, Google Firebase Cloud Functions
1. _GraphQL_
1. SSR: Next.js (React), Nuxt.js (Vue)

> MEAN stack: MongoDB, Express.js, Angular, Node.js

> JAM stack = JavaScript + APIs + Markup

## 其它

1. ES 201x 新语法 https://babeljs.io/docs/en/learn
1. [LoDash](https://lodash.com/docs/)
1. [Axios](https://github.com/axios/axios)
1. FP: [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)

---

## 搭建开发环境

* 开发平台
  * Windows
  * MacOS
    > 安装 [Homebrew](https://brew.sh/)，一路 `brew install`，非常方便
  * [Linux](https://www.distrowatch.com/dwres.php?resource=popularity)
    > Debian/Ubuntu
    * Mint
    * Elementary
    * Ubuntu
    * Debian

    > ArchLinux
    * Manjaro

    > 其他
    * Fedora
    * openSUSE
    * CentOS

* [Chrome](https://www.google.com/chrome/)
  * Ubuntu
    ```bash
    sudo apt install ...
    ```
  > Extensions
  1. [Vue.js DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools)
  1. [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* [Git](https://git-scm.com/)
  * MacOS
    ```
    brew install git
    ```
  * Ubuntu
    ```
    sudo apt install git
    ```
* [Visual Studio Code](https://code.visualstudio.com/)
  > Extensions
  ```
  christian-kohler.path-intellisense
  CoenraadS.bracket-pair-colorizer
  formulahendry.auto-close-tag
  formulahendry.auto-rename-tag
  naumovs.color-highlight
  octref.vetur
  robertohuertasm.vscode-icons
  streetsidesoftware.code-spell-checker
  ```
  > `code --install-extension` _extension_
* [nvm](https://github.com/creationix/nvm)
  > 通过 `nvm` 安装 LTS 版 `node.js`
  * MacOS
    ```bash
    brew install nvm
    source ~/.bash_profile
    nvm install --lts
    ```
  * Ubuntu
    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    # 可能不一定是 .bashrc
    source ~/.bashrc
    nvm install --lts
    ```
* [Yarn](https://yarnpkg.com/)
  * MacOS
    ```bash
    brew install yarn --without-node
    ```
  * Ubuntu
    ```bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn

    # 可能需要手动将 yarn 的全局 bin 路径加入到 $PATH 中，如下行：
    echo 'export PATH="$PATH:$(yarn global bin)"' >> ~/.bashrc
    ```
* [Postman](https://www.getpostman.com/)
  * Ubuntu
    ```bash
    wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
    sudo tar -xzf postman.tar.gz -C /opt
    rm postman.tar.gz
    sudo ln -s /opt/Postman/Postman /usr/bin/postman

    # 用 vs code 打开并编辑
    code ~/.local/share/applications/postman.desktop
    ```

    > 用 vs code 编辑 `postman.desktop` 后保存
    ```
    [Desktop Entry]
    Encoding=UTF-8
    Name=Postman
    Exec=postman
    Icon=/opt/Postman/app/resources/app/assets/icon.png
    Terminal=false
    Type=Application
    Categories=Development;
    ```

    > 注销当前用户并再次登入（不明白的话就重启），应该可以从开始菜单里找到
