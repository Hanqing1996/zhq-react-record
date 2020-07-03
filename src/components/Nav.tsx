import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
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
    
    >.selected{
        color: red;
        > svg{
            fill: red;
        }
    }
    
`

const Nav = () => {
    return (
        <NavWrapper>
            <NavItem>
                <NavLink to="/money" activeClassName="selected">
                    <Icon name="money"/>
                    <div>
                        记账
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/tags" activeClassName="selected">
                    <Icon name="labels"/>
                    <div>
                        标签
                    </div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/statistics" activeClassName="selected">
                    <Icon name="statistics"/>
                    <div>
                        统计
                    </div>
                </NavLink>
            </NavItem>
        </NavWrapper>
    )
}

export default Nav