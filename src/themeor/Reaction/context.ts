import { Context, useContext, createContext } from 'react'
import { ReactionContextType } from './types'

export const ReactionContext: Context<ReactionContextType> = createContext({} as ReactionContextType)

export const useReaction = () => useContext(ReactionContext)