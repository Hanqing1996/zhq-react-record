import styled from "styled-components";
import React from "react";
import '../helpers/importAllIcons'

interface iconProps extends React.SVGAttributes<SVGElement> {
    name:string
}

const IconWrapper=styled.svg`
width: 3em;
height: 3em;
`


const Icon:React.FunctionComponent<iconProps> = ({name}) => {

    return (
        <IconWrapper>
            <use xlinkHref={`#${name}`}></use>
        </IconWrapper>
    )
}

export default Icon