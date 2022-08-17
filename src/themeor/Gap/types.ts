import { CommonProps } from '../common/index.js'
import { TaglessComponent } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'

export const GAP_NAME = componentName('Gap')

export type GapConfigProps = {
  size?: string | 'none' | false | number,
}

export type GapProps = CommonProps & GapConfigProps & {
  vert?: string | 'none' | false | number,
  hor?: string | 'none' | false | number,
  top?: string | 'none' | false | number,
  right?: string | 'none' | false | number,
  bottom?: string | 'none' | false | number,
  left?: string | 'none' | false | number,
  inline?: boolean,
}

export type GapComponent = TaglessComponent<GapProps>