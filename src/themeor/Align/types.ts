import * as Types from '../config-types'

export type PureAlignProps = {
  row?: boolean,
  stack?: boolean,
  pattern?: string | false,
  vert?: 'stretch' | 'top' | 'center' | 'bottom' | false,
  hor?: 'stretch' | 'left' | 'center' | 'right' | false,
  gapVert?: Types.Scale | false,
  gapHor?: Types.Scale | false,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
}

export type TaglessAlignProps = PureAlignProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type AlignProps = TaglessAlignProps & {
  TRY_TAGLESS?: boolean,
}

export type AlignSpanProps = AlignProps & {
  col?: number,
}