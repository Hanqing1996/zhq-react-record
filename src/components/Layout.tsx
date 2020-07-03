import styled from "styled-components";
import React, {Fragment, ReactNode} from "react";
import Nav from "./Nav";

const LayoutWrapper = styled.ul`
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`
const Content = styled.div`
    overflow: auto;
    flex-grow: 1;
`

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <Fragment>
            <LayoutWrapper>
                <Content>
                    {props.children}
                </Content>
                <Nav/>
            </LayoutWrapper>
        </Fragment>
    )
}

export default Layout