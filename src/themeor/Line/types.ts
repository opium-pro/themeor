import * as Types from '../config-types'

export type PureLineProps = {
  fill?: string,
  inverse?: boolean,
  weight?: Types.Scale | 'none',
  top?: Types.Scale | 'none',
  right?: Types.Scale | 'none',
  bottom?: Types.Scale | 'none',
  left?: Types.Scale | 'none',
}
export type TaglessLineProps = PureLineProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export type LineProps = TaglessLineProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}