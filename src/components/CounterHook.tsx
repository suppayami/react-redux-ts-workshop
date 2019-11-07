import React, { useCallback, useState } from 'react'

import { useCounter } from '../hook/useCounter'

interface CounterHookProps {
    text: string
}

export const CounterHook: React.FunctionComponent<CounterHookProps> = ({ text }) => {
    const [counter, incrementFunction] = useCounter(0)

    return <div>
        <p>{text}: {counter}</p>
        <button onClick={incrementFunction}>Increase Counter</button>
    </div>
}