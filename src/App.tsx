import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from 'components/Nav';

const Wrapper = styled.div`
    height:100vh;
    display: flex;   
    flex-direction: column;
`
const Main = styled.div`
    flex-grow: 1;
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
                <Nav/>
            </Wrapper>
        </Router>
    );
}


export default App;
