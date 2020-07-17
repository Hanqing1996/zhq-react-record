import {useEffect, useState} from 'react';
import useUpdate from "../custom-hook/useUpdate";

const useRecords = () => {
    const [records, setRecords] = useState<RecordItem []>([])

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])

    const addRecord = (record: RecordItem) => {
        setRecords([...records, record])
        window.alert('添加记录成功！');
    }

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])

    return {records,addRecord}
}

export default useRecords
