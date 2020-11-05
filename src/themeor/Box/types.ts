import * as Types from '../config-types'

export type PureBoxProps = {
  fill?: string,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string,
  borderWeight?: Types.Scale | 'none',
  radius?: Types.Scale | 'none' | 'max',
  radiusTop?: Types.Scale | 'none' | 'max',
  radiusBottom?: Types.Scale | 'none' | 'max',
  radiusRight?: Types.Scale | 'none' | 'max',
  radiusLeft?: Types.Scale | 'none' | 'max',
  radiusTopLeft?: Types.Scale | 'none' | 'max',
  radiusTopRight?: Types.Scale | 'none' | 'max',
  radiusBottomRight?: Types.Scale | 'none' | 'max',
  radiusBottomLeft?: Types.Scale | 'none' | 'max',
  shadow?: Types.Scale | 'none',
  shadowInner?: Types.Scale | 'none',
  glow?: Types.Scale | 'none',
  img?: string,
  noContext?: boolean,
  blur?: Types.Scale | 'none',
}

export type TaglessBoxProps = PureBoxProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type BoxProps = TaglessBoxProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}