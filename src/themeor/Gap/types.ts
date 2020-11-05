import * as Types from '../config-types'

export type PureGapProps = {
  size?: Types.Scale | 'none',
  vert?: Types.Scale | 'none',
  hor?: Types.Scale | 'none',
  top?: Types.Scale | 'none',
  right?: Types.Scale | 'none',
  bottom?: Types.Scale | 'none',
  left?: Types.Scale | 'none',
  inrow?: boolean,
}

export type TaglessGapProps = PureGapProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type GapProps = TaglessGapProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => any,
}