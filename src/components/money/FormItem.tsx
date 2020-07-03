import styled from "styled-components";
import React, {Fragment} from "react";

const Notes=styled.label`
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

    const fieldName='备注'
    const placeholder='请输入备注'

    return (
        <Fragment>
            <Notes>
                <span className="name">{fieldName}</span>
                <input type="text" placeholder={placeholder}/>
            </Notes>
        </Fragment>
    )
}

export default FormItem