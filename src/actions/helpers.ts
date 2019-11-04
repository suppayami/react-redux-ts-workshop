import { ActionCreatorsMapObject } from 'redux'

export interface Action<T extends string> {
    type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P
}

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload }
}

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>