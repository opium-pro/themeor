import { Context, useContext, createContext } from 'react'

interface IReaction {
  reaction?: {
    hover?: boolean
    active?: boolean
    focus?: boolean
    hoverOrFocus?: boolean
  }
  passProps?: any
}

export const ReactionContext: Context<IReaction> = createContext({
  reaction: {
    hover: false,
    active: false,
    focus: false,
    hoverOrFocus: false,
  },
  passProps: {},
} as IReaction)

export const useReaction = () => useContext(ReactionContext)