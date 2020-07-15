import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Layout from "components/Layout";
import {Link} from "react-router-dom";
import Icon from "../components/Icon";
import Button from "components/Button";
import useTags from "../store/useTags";


const TagWrapper = styled.div`
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        > svg {
            width: 18px;
            height: 18px;
            color: #666;
            margin-right: 16px;
        }
    }
`

const CreateTagWrapper = styled.div`
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
`

const Tags = () => {

    const {tags,createTag}=useTags()

    return (
        <Layout>
            <TagWrapper>
                {tags && tags.map((tag: Tag) => <Link
                    className='tag'
                    to={`/tags/edit/${tag.id}`}
                    key={tag.id}>
                    <span>{tag.name}</span>
                    <Icon name="right"/>
                </Link>)}
            </TagWrapper>
            <CreateTagWrapper>
                <Button onClick={() => {
                    createTag()
                }}>
                    新建标签
                </Button>
            </CreateTagWrapper>
        </Layout>

    )
}

export default Tags