import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router";
import Layout from "../components/Layout";
import FormItem from "../components/money/FormItem";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";
import useTags from "../store/useTags";


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
const Edit = styled(FormItem)`
        background: white;
        margin-top: 8px;
`

const EditTag = () => {

    const tagId = Number(useParams<{ tagId: string }>().tagId)
    const {findTag, updateTag, deleteTag} = useTags()
    const tag = findTag(tagId)

    const TagContent = (tag: Tag) => {
        return (
            <>
                <Edit value={tag.name} fieldName="标签名" placeholder="请在这里输入标签名" onUpdateValue={
                    (value) => {
                        updateTag(tagId, {...tag, name: value})
                    }
                }/>
                <DeleteWrapper>
                    <Button onClick={() => {
                        deleteTag(tagId)
                    }}>删除标签</Button>
                </DeleteWrapper>
            </>)
    }

    return (


        <Layout>
            <NavBar>
                <Link to="/tags">
                    <Icon name="left"/>
                </Link>
                <span className="title">编辑标签</span>
            </NavBar>

            {tag ? TagContent(tag) : <div>不存在</div>}
        </Layout>

    )
}

export default EditTag