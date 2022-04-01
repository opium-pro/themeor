import { obfuscate, hash } from "../config"
import { CommonProps } from '../Common'
import { ReactNode } from 'react'
import { ReactionContext } from './context'


export const REACTION_NAME = obfuscate ? hash('Reaction') : 'Reaction'
export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionConfigProps = {
  duration?: 'none' | string | false,
  cursor?: string | false,
  timingFunction?: string | false,
  property?: string | false,
}

export type ReactionProps = CommonProps & ReactionConfigProps & {
  track?: Array<TrackType> | TrackType | false,
  smooth?: boolean,
  disabled?: boolean
  children?: ReactNode | ((props: CommonProps, context: ReactionContext) => ReactNode)
}

export type ReactionState = {
  hover: boolean
  active: boolean
  focus: boolean
  hoverOrFocus: boolean
}