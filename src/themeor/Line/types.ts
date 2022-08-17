import { CommonProps } from '../Common/index.js'
import { TaglessComponent } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'

export const LINE_NAME = componentName('Line')

export type LineConfigProps = {
  fill?: string | false
  weight?: string | 'none' | false | number
}

export type LineProps = CommonProps & LineConfigProps & {
  inverse?: boolean
  fancy?: boolean
  top?: string | 'none' | false | number
  right?: string | 'none' | false | number
  bottom?: string | 'none' | false | number
  left?: string | 'none' | false | number
  vert?: boolean
}

export type LineComponent = TaglessComponent<LineProps>