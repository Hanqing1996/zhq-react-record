import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Tags from "./views/Tags";
import Statistics from "./views/Statistics";
import Money from "./views/Money";
import EditTag from "./views/EditTag";

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
                        <Route path='/money' component={Money}/>
                        <Route exact path='/tags' component={Tags}/>
                        <Route path='/tags/edit/:tagId' component={EditTag}/>
                        <Route path='/statistics' component={Statistics}/>
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
