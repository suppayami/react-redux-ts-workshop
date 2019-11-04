import { ActionUnion, createAction } from './helpers'

export enum ActionType {
    INCREASE_COUNTER = 'INCREASE_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER'
}

export const Actions = {
    increaseCounter: (amount = 1) => createAction(ActionType.INCREASE_COUNTER, { amount }),
    resetCounter: () => createAction(ActionType.RESET_COUNTER),
}

export interface IncreaseCounterAction {
    type: 'INCREASE_COUNTER',
    payload: {
        amount: number
    }
}

export interface ResetCounterAction {
    type: 'RESET_COUNTER'
}

// first way
export type ReduxUnionAction = IncreaseCounterAction | ResetCounterAction

// second way
export type ReduxAction = ActionUnion<typeof Actions>