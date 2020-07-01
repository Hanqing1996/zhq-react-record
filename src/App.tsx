import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom'

const Wrapper = styled.div`
    height:100vh;
    display: flex;   
    flex-direction: column;
`
const Main = styled.div`
    flex-grow: 1;
`
const Nav = styled.nav`
flex-direction: row;
>ul{
display: flex;
flex-direction: row;
>li{
width: 33.3%;
text-align: center;
}
}

`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path='/tags'>
                            is tags
                        </Route>
                        <Route path='/money'>
                            is money
                        </Route>
                        <Route path='/statistics'>
                            is statistics
                        </Route>
                        <Redirect exact from="/" to="/tags"/>
                        <Route path='*'>
                            所找页面不存在！
                        </Route>
                    </Switch>
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to='/tags'>标签</Link>
                        </li>
                        <li>
                            <Link to='/money'>记账</Link>
                        </li>
                        <li>
                            <Link to='/statistics'>统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}


export default App;
