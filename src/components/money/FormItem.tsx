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
    fieldName: string,
    placeholder: string,
    value: string;
    onUpdateValue: (value: string) => void
}

const FormItem: FunctionComponent<IProps> = (props) => {

    const [value, setValue] = useState<string>(props.value)
    const {fieldName, placeholder} = props

    const updateValue: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        props.onUpdateValue(value)
    }, [value])

    return (
        <Fragment>
            <Notes>
                <span className="name">{fieldName}</span>
                <input type="text" placeholder={placeholder} value={value} onChange={(event) => {
                    updateValue(event)
                }}/>
            </Notes>
        </Fragment>
    )
}

export default React.memo(FormItem)