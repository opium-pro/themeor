import { componentName } from '../utils/component-name.js'
import { CommonProps } from '../common/index.js'
import { ReactNode } from 'react'
import { ReactionContext } from './context.js'


export const REACTION_NAME = componentName('Reaction')
export type TrackType = 'active' | 'focus' | 'hover'

export type ReactionConfigProps = {
  duration?: 'none' | string | false,
  cursor?: string | false,
  timingFunction?: string | false,
  property?: string | false,
}

export type ReactionProps = Omit<CommonProps, 'children'> & ReactionConfigProps & {
  track?: Array<TrackType> | TrackType | false,
  smooth?: boolean
  disabled?: boolean
  button?: boolean
  children?: ReactNode | ((props?: CommonProps, context?: ReactionContext) => ReactNode)
}

export type ReactionState = {
  hover: boolean
  active: boolean
  focus: boolean
  hoverOrFocus: boolean
  restProps: any
}