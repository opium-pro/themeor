import * as Types from '../config-types'

export type PureFitProps = {
  width?: string,
  height?: string,
  maxWidth?: string,
  maxHeight?: string,
  minWidth?: string,
  minHeight?: string,
  cover?: 'parent' | 'screen',
  left?: string,
  top?: string,
  right?: string,
  bottom?: string,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left',
  offset?: Types.Scale,
  zIndex?: number,
  isNotParent?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
}
export type TaglessFitProps = PureFitProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export type FitProps = TaglessFitProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}