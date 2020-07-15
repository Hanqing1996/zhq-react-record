import {useState} from 'react';
import createId from "../lib/idCreator";

const useTags = () => {

    const [tags, setTags] = useState<Tag []>(()=>{
        console.log('getInitialValue execute');
        return [
            {id: createId(), name: '衣'},
            {id: createId(), name: '食'},
            {id: createId(), name: '住'},
            {id: createId(), name: '行'},
        ]
    })

    const createTag = () => {
        const name = window.prompt('请输入标签名');
        if (!name) {
            window.alert('标签名不能为空');
        } else {
            console.log('noew');
            setTags([...tags, {id: createId(), name}])
        }
    }

    return {tags, createTag}
}

export default useTags
