import React from 'react'
import { connect } from 'react-redux'

import { Actions } from '../actions'
import { asyncIncreaseCounter } from '../actions/effects'
import { ReduxDispatch, StateType } from '../store'

interface CounterReduxConnectedProps {
    counter: number
}

interface CounterReduxDispatchProps {
    increaseCounter: (amount: number) => void
    asyncIncreaseCounter: (amount: number) => void
    resetCounter: () => void
}

interface CounterReduxOwnedProps {
    text: string
}

type CounterReduxProps = CounterReduxConnectedProps & CounterReduxDispatchProps & CounterReduxOwnedProps

export const CounterReduxPresentation: React.FunctionComponent<CounterReduxProps> = ({
    text, counter, increaseCounter, resetCounter, asyncIncreaseCounter
}) => {
    return <div>
        <p>{text}: {counter}</p>
        <button onClick={() => increaseCounter(10)}>Increase Counter</button>
        <button onClick={() => asyncIncreaseCounter(10)}>Async Increase Counter</button>
        <button onClick={resetCounter}>Reset Counter</button>
    </div>
}

const mapStateToProps = (state: StateType): CounterReduxConnectedProps => ({
    counter: state.counter,
})

const mapDispatchToProps = (dispatch: ReduxDispatch): CounterReduxDispatchProps => ({
    increaseCounter: (amount) => dispatch(Actions.increaseCounter(amount)),
    asyncIncreaseCounter: (amount) => dispatch(asyncIncreaseCounter(amount)),
    resetCounter: () => dispatch(Actions.resetCounter()),
})

export const CounterRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterReduxPresentation)