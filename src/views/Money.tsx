import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Layout from "components/Layout";
import MoneyTags from "../components/money/MoneyTags";
import FormItem from "../components/money/FormItem";
import Types from "../components/money/Types";
import NumberPad from "../components/money/NumberPad";

type Tag = {
    id: number,
    name: string
}

const Money = () => {

    const [tags, setTags] = useState<Tag[]>([
        {id: 1, name: 'fuck'},
        {id: 2, name: 'fuck2'},
        {id: 3, name: 'fuck3'},
        {id: 4, name: 'fuck4'},
    ])

    const [selectedTags,setSelectedTags]=useState<string[]>([])

    const onUpdateTags=(tags:Tag [])=>{
        console.log('onUpdateTags');
        setTags(tags)
    }

    const onUpdateSelectedTags=(tags:string[])=>{
        console.log('onUpdateSelectedTags');
        setSelectedTags(tags)
    }

    return (
        <Layout>
            <MoneyTags tags={tags} selectedTags={selectedTags} onUpdateTags={onUpdateTags} onUpdateSelectedTags={onUpdateSelectedTags}/>
            <FormItem fieldName="备注" placeholder="请在这里输入备注" value=''/>
            <Types/>
            <NumberPad/>
        </Layout>

    )
}

export default Money