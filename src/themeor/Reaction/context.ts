import { Context, useContext, createContext } from 'react'
import { ReactionState } from './types.js'


export type ReactionContext = ReactionState & {
  passProps?: any
  classNames?: {
    ignoreEvents?: string,
    cursor?: string,
  }
  cursor?: string | false
  disabled?: boolean
}

export const ReactionContext = createContext({} as ReactionContext)
export const useReaction = () => useContext(ReactionContext)