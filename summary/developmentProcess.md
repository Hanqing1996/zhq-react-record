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

#### svg 怎么用
1. 当图片用（不推荐）
```
import moneyPath from 'icons/money.svg'

console.log(moneyPath) // /static/media/money.fcd4abb3.svg

<image src={moneyPath}/>
```
2. 使用 svg symbol（由 svg-sprite-loader 创建）
```
import money from './icons/money.svg' // 通过 import 我们引入了一个 symbol 对象

console.log(moneyIcon);// BrowserSpriteSymbol {id: "money", viewBox: "0 0 1024 1024", content: "<symbol class="money" viewBox="0 0 1024 1024" xmln…1.454545 512 81.454545z" p-id="2816" />↵</symbol>", node: symbol#money}

// 注意下面xlinkHref的内容需要与svg的id一致。

<svg>
    <use xlinkHref="#moneyIcon"></use>
</svg>
```


#### 添加 svg-sprite-loader
1. 暴露 webpack 配置文件
```
yarn eject
```
2. [配置 webpack.config.js](https://github.com/JetBrains/svg-sprite-loader)
```
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: { } }
  ]
}
```