import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import Layout from "components/Layout";
import Types from "../components/money/Types";
import useRecords from "../store/useRecords";
import dayjs from "dayjs";
import clone from "../lib/clone";

const StatisticsTypes = styled(Types)`
  background-color: white;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 10px 16px;
    font-size: 18px;
    background: white;
    > .note{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
    }
`

const Date = styled.h3`
padding: 10px 16px;
`

const Statistics = () => {

    const {records} = useRecords()
    const [type, setType] = useState<'+' | '-'>('+')
    const displayRecords = records.filter(record => record.type === type)
    const hash: { [K: string]: RecordItem[] } = {}

    displayRecords.map(r => {
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })

    // array 形如["2020-07-17", [{tagNames:...},{tagNames:...}],"2020-07-18", [{tagNames:...}]]
    // hash 形如["2020-07-17":[{tagNames:...},{tagNames:...}];"2020-07-18":[{tagNames:...}]]
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        else if (a[0] > b[0]) return 1
        else return -1
    })

    const onUpdateType = useCallback((newType) => {
        setType(newType)
    }, [type])

    return (
        <Layout>
            <StatisticsTypes type={type} onUpdateType={onUpdateType}></StatisticsTypes>
            {array.map(([date, records]) =>
                <div key={date}>
                    <Date>{date}</Date>
                    <div>{
                        records.map(record => {
                            return <Item key={JSON.stringify(record)}>
                                <div className="tags">
                                    {record.tagNames.join('，')}
                                </div>
                                {record.note && <div className="note">
                                    {record.note}
                                </div>}
                                <div className="amount">
                                    ￥{record.amount}
                                </div>
                            </Item>
                        })
                    }</div>
                </div>
            )}
        </Layout>

    )
}

export default Statistics