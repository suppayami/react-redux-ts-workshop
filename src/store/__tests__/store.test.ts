import { store } from '../'
import { Actions } from '../../actions'

describe('Redux store', () => {
    it('should increase counter on increase action', () => {
        store.dispatch(Actions.increaseCounter(10))
        expect(store.getState().counter).toEqual(10)
    })
})