import styled from "styled-components";
import React, {ChangeEventHandler, Fragment, FunctionComponent, useEffect, useState} from "react";

const Notes = styled.label`
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
`

interface IProps {
    value: string;
    onUpdateValue: (value: string) => void
}

const FormItem: FunctionComponent<IProps> = (props) => {

    return (
        <Fragment>
            <Notes>
                <span className="name">备注</span>
                <input type="text" placeholder="请在这里输入备注" value={props.value} onChange={(event) => {
                    props.onUpdateValue(event.target.value)
                }}/>
            </Notes>
        </Fragment>
    )
}

export default React.memo(FormItem)