import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { componentName } from '../utils/component-name'

export const GAP_NAME = componentName('Gap')

export type GapConfigProps = {
  size?: string | 'none' | false,
}

export type GapProps = CommonProps & GapConfigProps & {
  vert?: string | 'none' | false,
  hor?: string | 'none' | false,
  top?: string | 'none' | false,
  right?: string | 'none' | false,
  bottom?: string | 'none' | false,
  left?: string | 'none' | false,
  inline?: boolean,
}

export type GapComponent = TaglessComponent<GapProps>