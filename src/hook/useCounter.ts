import React, { useCallback, useState } from 'react'

type Counter = number
type IncrementFunction = () => void

export const useCounter = (initialCounter = 0): [Counter, IncrementFunction] => {
    const [counter, setCounter] = useState(initialCounter)
    const increaseCounter = useCallback(() => {
        setCounter(prev => prev + 1)
    }, [setCounter])

    return [counter, increaseCounter]
}