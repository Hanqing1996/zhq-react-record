import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from 'components/Icon';

const NavWrapper = styled.ul`
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
`

const NavItem = styled.li`
    padding: 4px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Nav = () => {
    return (
        <NavWrapper>
            <NavItem>
                <Icon name="money"/>
                <Link to='/money'>记账</Link>
            </NavItem>
            <NavItem>
                <Icon name='labels'/>
                <Link to='/tags'>标签</Link>
            </NavItem>
            <NavItem>
                <Icon name="statistics"/>
                <Link to='/statistics'>统计</Link>
            </NavItem>
        </NavWrapper>
    )
}

export default Nav