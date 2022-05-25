import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'
import { componentName } from '../utils/component-name'

export const ALIGN_NAME = componentName('Align')

export type AlignProps = CommonProps & {
  row?: boolean
  stack?: boolean
  pattern?: string | false
  vert?: 'stretch' | 'top' | 'center' | 'bottom' | 'baseline' | false
  hor?: 'stretch' | 'left' | 'center' | 'right' | false
  gapVert?: string | false | number
  gapHor?: string | false | number
  reverse?: boolean
  dense?: boolean
}

export type AlignComponent = TaglessComponent<AlignProps> & {
  Span: AlignSpanComponent
  Spacer: any
}

export type AlignSpanProps = AlignProps & {
  col?: number,
}

export type AlignSpanComponent = TaglessComponent<AlignSpanProps>