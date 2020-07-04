import styled from "styled-components";

const colorShadow=`rgba(0, 0, 0, 0.25)`

export const ClearFix=styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`

export const InnerShadow=styled.div`
  box-shadow: inset 0 -3px 3px -3px ${colorShadow},
  inset 0 3px 3px -3px ${colorShadow};
`
