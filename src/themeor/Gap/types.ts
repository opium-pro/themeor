import * as Types from '../config-types'

export type PureGapProps = {
  size?: Types.Scale | 'none' | false,
  vert?: Types.Scale | 'none' | false,
  hor?: Types.Scale | 'none' | false,
  top?: Types.Scale | 'none' | false,
  right?: Types.Scale | 'none' | false,
  bottom?: Types.Scale | 'none' | false,
  left?: Types.Scale | 'none' | false,
  inrow?: boolean,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
}

export type TaglessGapProps = PureGapProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: (node: any) => any,
}

export type GapProps = TaglessGapProps & {
  TRY_TAGLESS?: boolean,
}