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
> Redirect 的 from='/xxx',to='/yyy' 表示 path 以 xxx 开头时必然重定向到 yyy。exact 表示精确定位from，如果没有 exact 且 from='/',那么 path='/unexist'时也会重定向到'yyy'
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
* <strong>可以对组件加样式！</strong>但是必须注明是加在组件的哪个节点上
```
// EditTag.tsx
import FormItem from "../components/money/FormItem";

const Edit=styled(FormItem)`
        background: white;
        margin-top: 8px;
`
<Edit value='' fieldName="标签名" placeholder="请在这里输入标签名" onUpdateValue={() => {
}}/>
```
```
// FormItem.tsx:指明将 Edit 这个 className 加在哪里
const FormItem: FunctionComponent<IProps> = (props) => {

    return (
        <Fragment>
            <Notes className={props.className}>
            ...
            </Notes>
        </Fragment>
    )
}
```
* useParams
```
// App.tsx
<Route path='/tags/edit/:tagId' component={EditTag}/>

// EditTag.tsx
const EditTag = () => {
    
    let { tagId } = useParams();
    console.log(tagId);

    ...
}
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
    * useTags
    * useUpdate:含有依赖数组的 useEffect 在第一次 render 时不被触发
 


#### 路由表
> react-record 的 App.tsx,类比于 zhq-record 的 src/router/index.ts。以 from 和 to 的键值对形式标识了 path 与 component 的对应关系

#### 组件维护的 state 应该越少越好，其余变量用作根据 state 渲染视图
* 糟糕的写法：组件需要维护 value 这个 state
> 在 value 这个 state 变化后，tag.name 随之变化
```
const EditTag = () => {

    const tagId = Number(useParams<{ tagId: string }>().tagId)
    const {updateTag} = useTags()
    const tag = findTag(tagId)
    const {value, onUpdateValue} = useValue(tag.name)

    useEffect(() => {
        updateTag(tagId, {...tag, name: value})
    }, [value])

    return (
        <Layout>
            <Edit className='edit' value={value} fieldName="标签名" placeholder="请在这里输入标签名" onUpdateValue={onUpdateValue}/>
        </Layout>
       )
    )
}
```
* 改进的写法：组件不需要维护 value
> 改变 value 时，直接更新 tag.name。value 始终只用于 tag.name 的渲染
```

const EditTag = () => {

    const tagId = Number(useParams<{ tagId: string }>().tagId)
    const {updateTag} = useTags()
    const tag = findTag(tagId)

    return (
            <Layout>
                <Edit className='edit' value={tag.name} fieldName="标签名" placeholder="请在这里输入标签名" onUpdateValue={
                    (value) => {
                        updateTag(tagId, {...tag, name: value})
                    }
                }/>
            </Layout>
        )
    )
}
```

#### 组件内的公共逻辑不能有多余（比如，无论 tag 有没有，公共逻辑都是必要的），有多余的应该封装到别的地方


#### "还原为整体"法
custom-hook 只是逻辑层面的封装，<strong>只是做了代码拆分，把原先写在组件里的代码封装到函数或对象里而已</strong>

也就是说，custom-hook 里的 useState,useRef 和直接写在组件里的 useState,useRef 没有任何区别，说到底还是服务于某个组件的。
