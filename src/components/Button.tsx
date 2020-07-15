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
    onClick:()=>void;
    children:ReactNode
}

const Button = ({onClick,children}:ButtonProps) => {
    return (
        <ButtonWrapper onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}

export default React.memo(Button)