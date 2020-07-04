import styled from "styled-components";
import React, {ReactNode} from "react";
import Nav from "./Nav";

const LayoutWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`
const Content = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <LayoutWrapper>
            <Content>
                {props.children}
            </Content>
            <Nav/>
        </LayoutWrapper>
    )
}

export default Layout