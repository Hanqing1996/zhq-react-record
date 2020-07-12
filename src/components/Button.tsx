import styled from "styled-components";
import React, {ReactNode} from "react";

const ButtonWrapper=styled.button`
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
`

interface ButtonProps {
    children:ReactNode
}

const Button = (props:ButtonProps) => {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    )
}

export default React.memo(Button)