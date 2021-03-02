import * as Types from '../config-types'

export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionProps = React.AllHTMLAttributes<HTMLElement> & {
  cursor?: 'pointer' | 'default' | 'text' | false,
  speed?: 'none' | Types.Scale | false,
  track?: Array<TrackType> | TrackType | false,
  smooth?: boolean,
}

export type ReactionState = {
  hover: boolean,
  active: boolean,
  focus: boolean,
  hoverOrFocus: boolean,
}