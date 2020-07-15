import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import Layout from "components/Layout";
import MoneyTags from "../components/money/MoneyTags";
import FormItem from "../components/money/FormItem";
import Types from "../components/money/Types";
import NumberPad from "../components/money/NumberPad";

const Money = () => {

    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [value, setValue] = useState<string>('')
    const [type, setType] = useState<string>('+')

    // 当 Money 因为 value 的更新而重新 render 时，传递给 MoneyTags 的函数引用不变，从而保证 MoneyTags 不做多余的 render
    const onUpdateSelectedTags = useCallback((newSelectedTags) => {
        setSelectedTags(newSelectedTags)
    }, [selectedTags])

    // 当 Money 因为 tags/selectedTags 的更新而重新 render 时，传递给 FormItem 的函数引用不变，从而保证 FormItem 不做多余的 render
    const onUpdateValue = useCallback((newValue) => {
        setValue(newValue)
    }, [value])

    const onUpdateType = useCallback((newType) => {
        setType(newType)
    }, [type])

    return (
        <Layout>
            <MoneyTags selectedTags={selectedTags} onUpdateSelectedTags={onUpdateSelectedTags}/>
            <FormItem value={value} onUpdateValue={onUpdateValue}/>
            <Types type={type} onUpdateType={onUpdateType}/>
            <NumberPad/>
        </Layout>

    )
}

export default Money