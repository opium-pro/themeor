import { obfuscate, hash } from "../config"
import { CommonProps } from '../Common'

export const REACTION_NAME = obfuscate ? hash('Reaction') : 'Reaction'

export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionProps = React.AllHTMLAttributes<HTMLElement> & {
  cursor?: string | false,
  duration?: 'none' | string | false,
  track?: Array<TrackType> | TrackType | false,
  smooth?: boolean,
  timingFunction?: string | false,
  property?: string | false,
  disabled?: boolean
}

export type ReactionState = {
  hover: boolean,
  active: boolean,
  focus: boolean,
  hoverOrFocus: boolean,
}

export type ReactionContextType = ReactionState & {
  passProps?: any
  className?: any
  cursor?: string | false
  disabled?: boolean
}