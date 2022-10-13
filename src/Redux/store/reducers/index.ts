import { CombinedState, combineReducers } from 'redux'
import bankReducer from './bankRedurcers'
import type { BankTypes } from './bankRedurcers'
import { Reducer } from 'react'

interface ReducersTypes {
    bank: BankTypes
}

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers
export type State = ReturnType<typeof reducers>