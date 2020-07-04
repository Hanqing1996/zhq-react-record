import styled from "styled-components";
import React, {MouseEventHandler, useState} from "react";
import {darken} from "polished";

import {ClearFix,InnerShadow} from 'assets/style/style-var'

const bg = '#f2f2f2'
const NumberPadWrapper = styled(InnerShadow)`
        > .output {
            font-size: 36px;
            font-family: Consolas;
            padding: 9px 0;
            text-align: right;
            min-height: 72px;
        }
`

const Buttons = styled(ClearFix)`
        > button {
            width: 25%;
            height: 64px;
            float: left;
            border: none;
            background: transparent;
            &.ok {
                height: 128px;
                float: right;
            }
            &.zero {
                width: 50%;
            }
            &:nth-child(1) {
                background: ${bg};
            }
            &:nth-child(2), &:nth-child(5) {
                background:${darken(4 * 0.01, bg)};      
            }
            &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                background: ${darken(4 * 0.02, bg)};     
            }
            &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                background: ${darken(4 * 0.03, bg)};     
            }
            &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                background: ${darken(4 * 0.04, bg)};     
            }
            &:nth-child(14) {
                background: ${darken(4 * 0.05, bg)};     
            }
            &:nth-child(12) {
                background: ${darken(4 * 0.06, bg)};     
            }
        }
`

const NumberPad = () => {

    const [value,setValue]=useState<number>(0)

    const [output,setOutput]=useState<string>(value!.toString())

    const inputContent:MouseEventHandler<HTMLButtonElement>=(event)=>{
        const button = (event.target as HTMLButtonElement);
        const input = button.textContent!;
        if (output.length === 16) { return; }
        if (output === '0') {
            if ('0123456789'.indexOf(input) >= 0) {
                setOutput(input)
            } else {
                setOutput(output+input)
            }
            return;
        }
        if (output.indexOf('.') >= 0 && input === '.') {return;}
        setOutput(output+input)
    }

    return (
        <NumberPadWrapper>
            <div className="output">{output}</div>
            <Buttons>
                <button onClick={inputContent}>1</button>
                <button onClick={inputContent}>2</button>
                <button onClick={inputContent}>3</button>
                <button>删除</button>
                <button onClick={inputContent}>4</button>
                <button onClick={inputContent}>5</button>
                <button onClick={inputContent}>6</button>
                <button>清空</button>
                <button onClick={inputContent}>7</button>
                <button onClick={inputContent}>8</button>
                <button onClick={inputContent}>9</button>
                <button className='ok'>OK</button>
                <button onClick={inputContent} className='zero' >0</button>
                <button onClick={inputContent}>.</button>
            </Buttons>
        </NumberPadWrapper>
    )
}

export default NumberPad