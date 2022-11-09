import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import type { CombinedState, Dispatch } from 'redux'
import type { State } from './reducers'
import type { Action } from './action'

interface StoreTypes<S> {
    getState: () => CombinedState<S>,
    dispatch: Dispatch<Action>
}

const logger = (store: StoreTypes<State>) => (next: Dispatch<Action>) => (action: Action) => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }


export const store = createStore(reducers, {}, applyMiddleware(thunk, logger))