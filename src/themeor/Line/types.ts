import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { componentName } from '../utils/component-name'

export const LINE_NAME = componentName('Line')

export type LineConfigProps = {
  fill?: string | false
  weight?: string | 'none' | false
}

export type LineProps = CommonProps & LineConfigProps & {
  inverse?: boolean
  fancy?: boolean
  top?: string | 'none' | false
  right?: string | 'none' | false
  bottom?: string | 'none' | false
  left?: string | 'none' | false
  vert?: boolean
}

export type LineComponent = TaglessComponent<LineProps>