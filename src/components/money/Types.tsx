import styled from "styled-components";
import React from "react";

const TypeWrapper = styled.ul`
        display: flex;
        flex-direction: row;
        background-color: #c4c4c4;
        font-size: 24px;
        > li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-align: center;
            &.selected::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
`


const Types = () => {
    return (
        <TypeWrapper>
            <li className='selected'>收入</li>
            <li>支出</li>
        </TypeWrapper>
    )
}

export default Types