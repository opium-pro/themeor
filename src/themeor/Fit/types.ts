import * as Types from '../config-types'

export type PureFitProps = {
  width?: string | false,
  height?: string | false,
  maxWidth?: string | false,
  maxHeight?: string | false,
  minWidth?: string | false,
  minHeight?: string | false,
  cover?: 'parent' | 'screen' | false,
  left?: string | false,
  top?: string | false,
  right?: string | false,
  bottom?: string | false,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | false,
  offset?: Types.Scale | false,
  zIndex?: number | false,
  isNotParent?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
}
export type TaglessFitProps = PureFitProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}
export type FitProps = TaglessFitProps & {
  TRY_TAGLESS?: boolean,
}