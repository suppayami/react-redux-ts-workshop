import { ThunkAction } from 'redux-thunk'

import { Providers } from '../providers'
import { StateType } from '../store'
import { Actions, ReduxAction } from './'

export type ThunkResult<R> = ThunkAction<R, StateType, Providers, ReduxAction>

export const asyncIncreaseCounter = (amount = 1): ThunkResult<Promise<void>> =>
    async (dispatch, getState, { counterProviders }) => {
        console.log(`prev state: ${getState().counter}`)
        await counterProviders.sleep(1000)
        dispatch(Actions.increaseCounter(amount))
    }