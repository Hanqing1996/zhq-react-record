import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import Layout from "components/Layout";
import Types from "../components/money/Types";
import useRecords from "../store/useRecords";
import dayjs from "dayjs";

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
                    return <Item>
                        <div className="tags">
                            {record.tagNames.map(name => <span>{name}</span>)}
                        </div>
                        {record.note && <div className="note">
                            {record.note}
                        </div>}
                        <div className="amount">
                            ￥{record.amount}
                        </div>
                        {/*{dayjs(record.createdAt).format('YYYY年MM月DD日')}*/}
                    </Item>
                })
            }</div>
        </Layout>

    )
}

export default Statistics