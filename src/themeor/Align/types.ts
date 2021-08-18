import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'
import { obfuscate, hash } from '../config'

export const ALIGN_NAME = obfuscate ? hash('Align') : 'Align'

export type AlignProps = CommonProps & {
  row?: boolean,
  stack?: boolean,
  pattern?: string | false,
  vert?: 'stretch' | 'top' | 'center' | 'bottom' | false,
  hor?: 'stretch' | 'left' | 'center' | 'right' | false,
  gapVert?: string | false,
  gapHor?: string | false,
}

export type AlignComponent = TaglessComponent<AlignProps> & {
  Span: AlignSpanComponent
}

export type AlignSpanProps = AlignProps & {
  col?: number,
}

export type AlignSpanComponent = TaglessComponent<AlignSpanProps>