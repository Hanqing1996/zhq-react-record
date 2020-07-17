import styled from "styled-components";
import React, {useCallback, useState} from "react";
import Layout from "components/Layout";
import Types from "../components/money/Types";
import useRecords from "../store/useRecords";

const StatisticsTypes = styled(Types)`
  background-color: white;
`

const Statistics = () => {

    const [type, setType] = useState<'+' | '-'>('+')
    const {records} = useRecords()

    const onUpdateType = useCallback((newType) => {
        setType(newType)
    }, [type])

    return (
        <Layout>
            <StatisticsTypes type={type} onUpdateType={onUpdateType}></StatisticsTypes>
            <div>{
                records.map(record => {
                    return <div> {record.tagNames.map(name=><span>{name}</span>)} {record.amount}</div>
                })
            }</div>
        </Layout>

    )
}

export default Statistics