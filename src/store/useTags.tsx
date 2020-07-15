import {useState} from 'react';

const useTags=()=>{
    const [tags,setTags]=useState<Tag []>([
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

    return {tags,createTag}
}

export default useTags