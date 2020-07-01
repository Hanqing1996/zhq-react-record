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
