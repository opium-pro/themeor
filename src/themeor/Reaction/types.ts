import { obfuscate, hash } from "../config"

export const REACTION_NAME = obfuscate ? hash('Reaction') : 'Reaction'

export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionProps = React.AllHTMLAttributes<HTMLElement> & {
  cursor?: 'pointer' | 'default' | 'text' | false,
  speed?: 'none' | string | false,
  track?: Array<TrackType> | TrackType | false,
  smooth?: boolean,
}

export type ReactionState = {
  hover: boolean,
  active: boolean,
  focus: boolean,
  hoverOrFocus: boolean,
}