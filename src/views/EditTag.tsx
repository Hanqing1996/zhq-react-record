import React, {useCallback, useState} from "react";
import Layout from "../components/Layout";
import FormItem from "../components/money/FormItem";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";



const NavBar = styled.div`
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .title{
        margin: 0 auto;
        }
        
        svg{
            width: 24px;
            height: 24px;
        }
`
const DeleteWrapper = styled.div`
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
`
const Edit=styled(FormItem)`
        background: white;
        margin-top: 8px;
`


const EditTag = () => {

    const [value, setValue] = useState<string>('')

    return (
        <Layout>
            <NavBar>
                <Link to="/tags">
                    <Icon name="left"/>
                </Link>
                <span className="title">编辑标签</span>
            </NavBar>

            <Edit className='edit' value='' fieldName="标签名" placeholder="请在这里输入标签名" onUpdateValue={() => {
            }}/>

            <DeleteWrapper>
                <Button onClick={() => {
                }}>删除标签</Button>
            </DeleteWrapper>
        </Layout>

    )
}

export default EditTag