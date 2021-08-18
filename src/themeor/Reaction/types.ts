export type TrackType = 'active' | 'focus' | 'hover'

export const REACTION_NAME = 'Reaction'

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