import React from 'react';
// import styled from 'styled-components'
import {BrowserRouter as Router, Switch,Link, Route, Redirect} from 'react-router-dom'

//
// const Button = styled.button`
//     color:red;
// `

function App() {
    return (
        <Router>
            <div>
                <nav>
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
                </nav>
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
                    <Redirect exact from="/" to="/tags" />
                    <Route path='*'>
                        所找页面不存在！
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}



export default App;
