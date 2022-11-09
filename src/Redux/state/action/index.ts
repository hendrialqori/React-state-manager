import { ActionType } from '../action-types'

type Action =
     { type: ActionType , payload: number } | 
     { type: "getUsers", payload: Array<{ name: string }> }

export type { Action }

