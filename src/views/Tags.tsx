import styled from "styled-components";
import React from "react";
import Layout from "components/Layout";
import {Link} from "react-router-dom";
import Icon from "../components/Icon";
import Button from "components/Button";


const TagWrapper=styled.div`
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

const CreateTagWrapper=styled.div`
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
`


const Tags = () => {

    const tags = [
        {id: 1, name: 'fuck'},
        {id: 2, name: 'fuck2'},
        {id: 3, name: 'fuck3'},
        {id: 4, name: 'fuck4'},
    ]

    return (
        <Layout>
            <TagWrapper>
                {tags.map(tag => <Link
                    className='tag'
                    to={`/labels/edit/${tag.id}`}
                    key={tag.id}>
                    <span>{tag.name}</span>
                    <Icon name="right"/>
                </Link>)}

            </TagWrapper>
            <CreateTagWrapper>
                <Button>
                    新建标签
                </Button>
            </CreateTagWrapper>


        </Layout>

    )
}

export default Tags