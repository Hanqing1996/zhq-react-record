import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
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
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [value, setValue] = useState<string>('')

    // 当 Money 因为 value 的更新而重新 render 时，传递给 MoneyTags 的函数引用不变，从而保证 MoneyTags 不做多余的 render
    const onUpdateTags=useCallback((newTags)=>{
        setTags(newTags)
    },[tags])

    const onUpdateSelectedTags=useCallback((newSelectedTags)=>{
        setSelectedTags(newSelectedTags)
    },[selectedTags])

    // 当 Money 因为 tags/selectedTags 的更新而重新 render 时，传递给 FormItem 的函数引用不变，从而保证 FormItem 不做多余的 render
    const onUpdateValue=useCallback((newValue)=>{
        setValue(newValue)
    },[value])

    return (
        <Layout>

            <MoneyTags tags={tags} selectedTags={selectedTags} onUpdateTags={onUpdateTags}
                       onUpdateSelectedTags={onUpdateSelectedTags}/>
            <FormItem fieldName="备注" placeholder="请在这里输入备注" value={value} onUpdateValue={onUpdateValue}/>
            <Types/>
            <NumberPad/>
        </Layout>

    )
}

export default Money