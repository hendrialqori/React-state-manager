import { applyMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'
import usersSlice from '../features/usersSlice'
import type { CombinedState, Dispatch } from 'redux'

type StoreTypes<S> = {
    getState: () => CombinedState<S>
}

const reducer = combineReducers({
    product: productSlice,
    users: usersSlice
})

const logging = (store: any) => (next: any) => (action: any) => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

export const store = configureStore({ 
    reducer  
 })

export type RootStateTypes = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch