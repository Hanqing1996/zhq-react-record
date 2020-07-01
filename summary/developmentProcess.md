#### 创建支持 typescript 的 项目
```
create-react-app react-record --template typescript
```


#### [yarn start 时阻止打开浏览器](https://coderrocketfuel.com/article/stop-create-react-app-from-opening-a-browser-window-on-start)

#### dart-sass 比 node-sass 好用得多（后者下载要翻墙，且编译慢）
* create react app 安装 dart-sass
```
yarn add node-sass@npm:dart-sass -D
```

#### [支持 scss 文件引用（然而这个项目不用）](https://create-react-app.dev/docs/adding-a-sass-stylesheet)

#### [支持 ts 模块引用](https://create-react-app.dev/docs/importing-a-component#absolute-imports)

#### [styled-components](https://github.com/styled-components/styled-components)
* 增加 ts 提示
```
 yarn add @types/styled-components@5.0.1 -D
```

#### 添加 react-router
```
yarn add -D react-router-dom
yarn add -D @types/react-router-dom
```