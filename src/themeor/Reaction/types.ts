import * as Types from '../config-types'

export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionProps = React.AllHTMLAttributes<HTMLElement> & {
  cursor?: 'pointer' | 'default' | 'text',
  speed?: 'none' | Types.Scale,
  track?: Array<TrackType> | TrackType,
  smooth?: boolean,
}

export type ReactionState = {
  hover: boolean,
  active: boolean,
  focus: boolean,
  hoverOrFocus: boolean,
}