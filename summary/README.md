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
* 

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

#### bean knowledge
* react 的 onChange 和 input 的原生 onChange 触发是不一样的
> react 的 onChange 是只要用户输入，就会触发的
```
// updateValue 在用户输入过程中不断被触发
const updateValue:ChangeEventHandler<HTMLInputElement>=(event)=>{
    setValue(event.target.value)
    console.log('zes');
}

return (
    <Fragment>
         <input type="text" onChange={(event)=>{updateValue(event)}}/>
    </Fragment>
)
```
> input 的原生 onChange 是当用户输入，并将鼠标移开 input 后才会触发的，且早于 onBlur 被触发


#### React.StrictMode
会导致组件render两次
```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### 什么该放入 useState
> 需要组件自身维护的变量，就该放入 useState
* MoneyTags
    * tags 作为 state（放入 useState,初始值来自 localStorage)，因为 MoneyTags 自身维护 tags,父组件不干涉
    * selectedTags 作为 props（不放入 useState），因为 MoneyTags 自身不维护 selectedTags,由父组件维护
* NumberPad
    * amount 作为 props（不放入 useState）
    * output 作为 state（放入 useState,初始值来自 props.amount）
    
#### custom hook:封装组件的 state 相关逻辑
1. 单个子组件-父组件的 props 到子组件UI的映射逻辑（类似于HOC将业务逻辑封装到父组件内部）。也不一定需要父组件 props，只要是足够独立的，由子组件自身维护的 state，就可以封装成 custom hook。
    * useOutput:setOutput 不暴露，只暴露业务方法
2. 多个组件-逻辑复用（比如两个组件内的都用到 tag，就应该抽离出公共逻辑）。这也是基于 1 的。毕竟封装的一大目的就是复用。
    * useTags:注意没有用到父组件的 props
    

#### 关于 useState 的初始值
* 不好的写法：在 useEffect 中赋值
```
const [tags, setTags] = useState<Tag[]>([])

// mounted
useEffect(() => {
    console.log('mounted');
    const tags = [
        {id: 1, name: 'fuck'},
        {id: 2, name: 'fuck2'},
        {id: 3, name: 'fuck3'},
        {id: 4, name: 'fuck4'},
    ]
    setTags(tags)
}, [])
```
* 好的写法：直接传入 useState（代码行数少）
```
const [tags, setTags] = useState<Tag[]>([
    {id: 1, name: 'fuck'},
    {id: 2, name: 'fuck2'},
    {id: 3, name: 'fuck3'},
    {id: 4, name: 'fuck4'},
])
```