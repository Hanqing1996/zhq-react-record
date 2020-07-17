import React, {useCallback, useState} from "react";
import Layout from "components/Layout";
import MoneyTags from "../components/money/MoneyTags";
import FormItem from "../components/money/FormItem";
import Types from "../components/money/Types";
import NumberPad from "../components/money/NumberPad";

const Money = () => {

    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [type, setType] = useState<string>('+')
    const [amount, setAmount] = useState<number>(0)
    const [value, setValue] = useState<string>('')

    // 避免子组件多余 render
    const onUpdateValue = useCallback((newValue) => {
        setValue(newValue)
    }, [value])

    // 当 Money 因为 value 的更新而重新 render 时，传递给 MoneyTags 的函数引用不变，从而保证 MoneyTags 不做多余的 render
    const onUpdateSelectedTags = useCallback((newSelectedTags) => {
        setSelectedTags(newSelectedTags)
    }, [selectedTags])

    // 同上理
    const onUpdateType = useCallback((newType) => {
        setType(newType)
    }, [type])

    const onUpdateAmount = useCallback((newAmount) => {
        setAmount(newAmount)
    }, [amount])

    return (
        <Layout>
            <MoneyTags selectedTags={selectedTags} onUpdateSelectedTags={onUpdateSelectedTags}/>
            <FormItem fieldName='备注' placeholder='请在这里输入备注' value={value} onUpdateValue={onUpdateValue}/>
            <Types type={type} onUpdateType={onUpdateType}/>
            <NumberPad amount={amount} onUpdateAmount={onUpdateAmount}/>
        </Layout>

    )
}

export default Money