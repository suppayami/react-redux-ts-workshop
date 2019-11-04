import { ActionType, ReduxAction } from '../actions'

type CounterState = number

export const counterReducer = (state = 0, action: ReduxAction): CounterState => {
    if (action.type === ActionType.INCREASE_COUNTER) {
        return state + action.payload.amount
    }

    if (action.type === ActionType.RESET_COUNTER) {
        return 0
    }

    return state
}