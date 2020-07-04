import styled from "styled-components";
import React, {Fragment, useEffect, useState} from "react";

const TagsWrapper = styled.div`
    background-color: white;
    font-size: 14px;
    padding: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
`

const CurrentTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 12vh;
    overflow: auto;
    > li {
        background: #d9d9d9;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
    }
`
const NewTag = styled.div`
    padding-top: 16px;
    button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
    }
`

type Tag = {
    id: number,
    name: string
}

const MoneyTags = () => {

    const [tags, setTags] = useState<Tag[]>([])

    // mounted
    useEffect(() => {
        const tags = [
            {id: 1, name: 'fuck'},
            {id: 2, name: 'fuck2'},
            {id: 3, name: 'fuck3'},
            {id: 4, name: 'fuck4'},
        ]
        setTags(tags)
    }, [])

    const createTag = () => {
        console.log('add');
        const name = window.prompt('请输入标签名');
        if (!name) {
            window.alert('标签名不能为空');
        } else {
            setTags([...tags,{id:5,name}])

        }
    }

    return (
        <TagsWrapper>
            <CurrentTags>
                {tags.map(tag => <li
                    key={tag.id}>
                    {tag.name}
                </li>)}
            </CurrentTags>
            <NewTag>
                <button onClick={() => {
                    createTag()
                }}>新增标签
                </button>
            </NewTag>
        </TagsWrapper>

    )
}

export default MoneyTags




