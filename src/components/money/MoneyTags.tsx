import styled from "styled-components";
import React, {FunctionComponent, useEffect, useState} from "react";
import {darken} from "polished";

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

const bg = '#d9d9d9';
const CurrentTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 12vh;
    overflow: auto;
    > li {
        background: ${bg};
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
        &.selected {
            background: ${darken(0.5, bg)};      
            color: white;
        }
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

interface IProps {
    selectedTags: string[],
    onUpdateSelectedTags: (selectedTags: string[]) => void
}

const MoneyTags: FunctionComponent<IProps> = (props) => {

    const [tags,setTags] = useState<Tag[]>([
        {id: 1, name: 'fuck'},
        {id: 2, name: 'fuck2'},
        {id: 3, name: 'fuck3'},
        {id: 4, name: 'fuck4'},
    ])

    const createTag = () => {
        const name = window.prompt('请输入标签名');
        if (!name) {
            window.alert('标签名不能为空');
        } else {
            setTags([...tags, {id: 5, name}])
        }
    }

    const toggle = (tagName: string) => {
        const index = props.selectedTags.indexOf(tagName)
        if (index >= 0) {
            const copy = JSON.parse(JSON.stringify(props.selectedTags))
            copy.splice(index, 1)
            props.onUpdateSelectedTags(copy)
        } else {
            props.onUpdateSelectedTags([...props.selectedTags, tagName])
        }
    }

    const isSelected = (tagName: string): string => {
        return props.selectedTags.indexOf(tagName) >= 0 ? 'selected' : ''
    }

    return (
        <TagsWrapper>
            <CurrentTags>
                {tags.map(tag => <li
                    onClick={() => toggle(tag.name)}
                    className={isSelected(tag.name)}
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

export default React.memo(MoneyTags)