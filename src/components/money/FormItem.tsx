import styled from "styled-components";
import React, {FunctionComponent, HTMLAttributes} from "react";

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

interface IProps extends HTMLAttributes<HTMLDivElement> {
    fieldName: string,
    placeholder: string,
    value: string;
    onUpdateValue: (value: string) => void
}

const FormItem: FunctionComponent<IProps> = (props) => {

    return (
        <Notes className={props.className}>
            <span className="name">{props.fieldName}</span>
            <input type="text" placeholder={props.placeholder} value={props.value} onChange={(event) => {
                props.onUpdateValue(event.target.value)
            }}/>
        </Notes>
    )
}

export default React.memo(FormItem)