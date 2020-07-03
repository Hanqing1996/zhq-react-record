import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Tags from "./views/Tags";
import Statistics from "./views/Statistics";
import Money from "./views/Money";

const Wrapper = styled.div`
    height:100vh;
    display: flex;   
    flex-direction: column;
`


function App() {
    return (
        <div>
            <Router>
                <Wrapper>
                    <Switch>
                        <Route path='/money'>
                            <Money/>
                        </Route>
                        <Route path='/tags'>
                            <Tags/>
                        </Route>
                        <Route path='/statistics'>
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path='*'>
                            所找页面不存在！
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </div>
    );
}


export default App;
