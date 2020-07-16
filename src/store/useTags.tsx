import {useState} from 'react';
import createId from "../lib/idCreator";

console.log('useTags render');



const initialValue = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
]

const useTags = () => {
    const [tags, setTags] = useState<Tag []>(initialValue)

    const createTag = () => {
        const name = window.prompt('请输入标签名');
        if (!name) {
            window.alert('标签名不能为空');
        } else {
            console.log('noew');
            setTags([...tags, {id: createId(), name}])
        }
    }

    const findTag = (targetId: number) => {
        console.log('tags');
        console.log(tags);
        console.log('targetId');
        console.log(targetId);

        const tag=tags.filter(tag => tag.id == targetId)[0]

        console.log('get');
        console.log(tag);
        return tag
    }


    return {tags, createTag,findTag}
}

export default useTags
