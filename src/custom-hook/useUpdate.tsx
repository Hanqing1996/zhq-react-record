import {useEffect, useRef, useState} from 'react';

// 保证含有依赖参数的 useEffect 在第一次 render 时不触发
const useUpdate = (callback: () => void, dependencies: Array<any>) => {

    const renderCount = useRef<number>(0)

    useEffect(() => {
        renderCount.current += 1
    })

    useEffect(() => {
        renderCount.current >= 2 && callback()
    }, dependencies)
}

export default useUpdate
