import styled from "styled-components";
import React, {ChangeEventHandler, Fragment, useState} from "react";

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

const FormItem = () => {

    const [value, setValue] = useState<string>('')
    const fieldName = useState<string>('备注')[0]
    const placeholder = useState<string>('请输入备注')[0]

    const updateValue:ChangeEventHandler<HTMLInputElement>=(event)=>{
        setValue(event.target.value)
    }

    return (
        <Fragment>
            <Notes>
                <span className="name">{fieldName}</span>
                <input type="text" placeholder={placeholder} value={value} onChange={(event)=>{updateValue(event)}}/>
            </Notes>
        </Fragment>
    )
}

export default FormItem