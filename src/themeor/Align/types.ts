import { CommonProps, CommonComponent } from '../Common'

export type AlignProps = CommonProps & {
  row?: boolean,
  stack?: boolean,
  pattern?: string | false,
  vert?: 'stretch' | 'top' | 'center' | 'bottom' | false,
  hor?: 'stretch' | 'left' | 'center' | 'right' | false,
  gapVert?: string | false,
  gapHor?: string | false,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
  forwardRef?: any,
}


export type AlignSpanProps = AlignProps & {
  col?: number,
}

export type AlignComponent = CommonComponent<AlignProps>

export type AlignSpanComponent = CommonComponent<AlignSpanProps>