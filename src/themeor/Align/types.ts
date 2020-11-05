import * as Types from '../config-types'

export type PureAlignProps = {
  row?: boolean,
  stack?: boolean,
  pattern?: string,
  vert?: 'stretch' | 'top' | 'center' | 'bottom',
  hor?: 'stretch' | 'left' | 'center' | 'right',
  gapVert?: Types.Scale,
  gapHor?: Types.Scale,
}

export type TaglessAlignProps = PureAlignProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type AlignProps = TaglessAlignProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}

export type AlignSpanProps = AlignProps & {
  col?: number,
}