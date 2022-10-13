import type { Dispatch } from 'redux'
import type { Action } from "../action"
import { ActionType } from "../action-types"


export const depositMoney = (amout: number) => 
    (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amout
        })
}

export const getUsers = () => 
    (dispatch: Dispatch<Action>) => {
        const API = "https://jsonplaceholder.typicode.com/users"
        fetch(API)
            .then((data) => data.json())
            .then((res) => {
                dispatch({
                    type: "getUsers",
                    payload: res
                })
            })
            .catch((e) => {
                throw new Error(e?.message)
            })
        
    }