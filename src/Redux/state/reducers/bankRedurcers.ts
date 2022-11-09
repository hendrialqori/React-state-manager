import type { Action } from '../action'
import { ActionType } from '../action-types'

export interface BankTypes {
    balance: number;
    users: Array<{
        name: string    
    }>
}   

const initialState = {
    balance: 0,
    users : []
}


const reducers = (state: BankTypes = initialState, action: Action): BankTypes => {
    switch(action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case 'getUsers':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }

}

export default reducers