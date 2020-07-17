import {useEffect, useState} from 'react';
import createId from "../lib/idCreator";
import useUpdate from "../custom-hook/useUpdate";
import clone from "../lib/clone";

const useTags = () => {
    const [tags, setTags] = useState<Tag []>([])

    useEffect(() => {
        setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
    }, [])

    // 只在 update,delete,create 时执行回调函数
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

    const createTag = () => {
        const name = window.prompt('请输入标签名');
        if (!name) {
            window.alert('标签名不能为空');
        } else {

            const copy = clone(tags)
            copy.push({id: createId(), name})
            setTags(copy)
        }
    }

    const findTag = (targetId: number) => {
        const tag = tags.filter(tag => tag.id == targetId)[0]
        return tag
    }

    const updateTag = (targetId: number, object: { name: string }) => {
        const {name} = object

        const copy = clone(tags)
        const tag = copy.filter((tag: Tag) => tag.id == targetId)[0]
        tag.name = name
        setTags(copy)
    }

    const deleteTag = (targetId: number) => {

        const copy = clone(tags)
        const idList = copy.map((tag: Tag) => tag.id)
        const targetIndex = idList.indexOf(targetId)
        copy.splice(targetIndex, 1)
        setTags(copy)
    }

    return {tags, createTag, findTag, updateTag, deleteTag}
}

export default useTags
