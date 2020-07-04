#### CSS normalize
> 让不同浏览器下的页面/元素样式趋于一致

#### CSS normalize 和 CSS RESET 的区别
> CSS normalize 的作用是让页面在不同浏览器下默认样式相近。CSS RESET 的作用是重置默认样式。

#### react-router
* Link
> 就是 a 标签
* [Route](https://reacttraining.com/react-router/core/api/Route)
> 根据路由渲染内容，有多少个匹配成功，就显示多少个内容
```
// 'path='/hhh',显示内容'is hhh is ooo is iii'

<Route path='/hhh'>
    is hhh
</Route>
<Route path='/:ooo'>
    is ooo
</Route>
<Route path='/:iii'>
    is iii
</Route>
```
* [Switch](https://reacttraining.com/react-router/core/api/Switch)
> 包裹多个 Route,每次根据路由显示第一个匹配的 Route 内容
```
// 'path='/hhh',只显示内容'is hhh',因为<Route path='/hhh'>第一个匹配到路由

<Switch>
    <Route path='/hhh'>
        is hhh
    </Route>
    <Route path='/:ooo'>
        is ooo
    </Route>
    <Route path='/:iii'>
        is iii
    </Route>
</Switch>
```
* [设置首页](https://stackoverflow.com/questions/29552601/how-to-set-the-defaultroute-to-another-route-in-react-router)
> Redirect 的 from='/xxx',to='/yyy' 表示 path 为 xxx 时必然重定向到 yyy。exact 表示精确定位from，如果没有 exact 且 from='/',那么 path='/unexist'时也会重定向到'yyy'
```
// 比如设置 money 页为首页

<Switch>
    <Route path='/tags'>
        is hhh
    </Route>
    <Route path='/money'>
        is ooo
    </Route>
    <Route path='/statistics'>
        is iii
    </Route>
    <Redirect exact from="/" to="/money" />
</Switch>
```
* 404
```
<Switch>
    <Route path='/tags'>
        is hhh
    </Route>
    <Route path='/money'>
        is ooo
    </Route>
    <Route path='/statistics'>
        is iii
    </Route>
    <Route path='*'>
        所找页面不存在！
    </Route>
</Switch>
```
* [activeClass](https://reactrouter.com/web/api/NavLink/activeclassname-string)
类比 vue-router 的 active-class 用法

#### Styled-Component
> 用 js 写 css 的库
* 变量不能像 scss 一样直接内部定义并使用，必须使用外部的 js 变量
```
const bg='#f2f2f2'

const NumberPadWrapper = styled.div`
    backgound:${bg}
`
```
* extend
> 与 scss 的 extend 相比，Styled-Component 必须指定 tag
```
// style-var.js

export const ClearFix=styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
` 
```
```
// NumberPad.tsx
 
// Buttons 继承了 ClearFix 的样式
const Buttons = styled(ClearFix)`
`
```

#### polished
> 为了弥补 Styled-Component 对 scss 兼容性不足（比如 darken）而使用的 css in js 库
* [文档](https://polished.js.org/docs/)
```
import {darken} from "polished";

const CurrentTags = styled.ul`
    > li {
        &.selected {
            background: ${darken(0.5, bg)}; // polish 的 darken     
        }
    }
`
```