import * as Types from '../config-types'

export type PureLineProps = {
  fill?: string | false,
  inverse?: boolean,
  weight?: string | Types.Scale | 'none' | false,
  top?: string | Types.Scale | 'none' | false,
  right?: string | Types.Scale | 'none' | false,
  bottom?: string | Types.Scale | 'none' | false,
  left?: string | Types.Scale | 'none' | false,
}
export type TaglessLineProps = PureLineProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}
export type LineProps = TaglessLineProps & {
  TRY_TAGLESS?: boolean,
}