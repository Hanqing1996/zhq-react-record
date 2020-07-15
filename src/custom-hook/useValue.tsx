import {useCallback, useState} from 'react';

const useValue = () => {
    const [value, setValue] = useState<string>('')

    // 避免子组件多余 render
    const onUpdateValue = useCallback((newValue) => {
        setValue(newValue)
    }, [value])

    return {value, onUpdateValue}
}

export default useValue