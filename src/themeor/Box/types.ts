import * as Types from '../config-types'

export type PureBoxProps = {
  fill?: string | false,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: Types.Scale | 'none' | false,
  radius?: Types.Scale | 'none' | 'max' | false,
  radiusTop?: Types.Scale | 'none' | 'max' | false,
  radiusBottom?: Types.Scale | 'none' | 'max' | false,
  radiusRight?: Types.Scale | 'none' | 'max' | false,
  radiusLeft?: Types.Scale | 'none' | 'max' | false,
  radiusTopLeft?: Types.Scale | 'none' | 'max' | false,
  radiusTopRight?: Types.Scale | 'none' | 'max' | false,
  radiusBottomRight?: Types.Scale | 'none' | 'max' | false,
  radiusBottomLeft?: Types.Scale | 'none' | 'max' | false,
  shadow?: Types.Scale | 'none' | false,
  shadowInner?: Types.Scale | 'none' | false,
  glow?: Types.Scale | 'none' | false,
  img?: string | false,
  noContext?: boolean,
  blur?: Types.Scale | 'none' | false,
  width?: string | false,
  height?: string | false,
  maxWidth?: string | false,
  maxHeight?: string | false,
  minWidth?: string | false,
  minHeight?: string | false,
}

export type TaglessBoxProps = PureBoxProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type BoxProps = TaglessBoxProps & {
  TRY_TAGLESS?: boolean,
}