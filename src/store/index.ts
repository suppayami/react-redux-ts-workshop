import { applyMiddleware, createStore, DeepPartial, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import { ReduxAction } from '../actions'
import { defaultProviders, Providers } from '../providers'
import { reducers } from '../reducers'

export type StateType = ReturnType<typeof reducers>

const createEnhancers = (providers: Providers) => composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(providers) as ThunkMiddleware<StateType, ReduxAction, typeof providers>)
)

export const createReduxStore = (initState: DeepPartial<StateType> = {}, providers = defaultProviders) => createStore(
    reducers as Reducer<StateType, ReduxAction>,
    initState,
    createEnhancers(providers),
)

export type ReduxStore = ReturnType<typeof createReduxStore>
export type ReduxDispatch = ReduxStore['dispatch']

export const store = createReduxStore()