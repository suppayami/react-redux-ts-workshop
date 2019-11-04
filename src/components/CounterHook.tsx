import React, { useCallback, useState } from 'react'

interface CounterHookProps {
    text: string
}

export const CounterHook: React.FunctionComponent<CounterHookProps> = ({ text }) => {
    const [counter, setCounter] = useState(0)
    const increaseCounter = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
        setCounter(prev => prev + 1)
    }, [setCounter])

    return <div>
        <p>{text}: {counter}</p>
        <button onClick={increaseCounter}>Increase Counter</button>
    </div>
}