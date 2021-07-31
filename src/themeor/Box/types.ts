import * as Types from '../config-types'

export type PureBoxProps = {
  fill?: string | false,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | Types.Scale | 'none' | false,
  radius?: string | Types.Scale | 'none' | 'max' | false,
  radiusTop?: string | Types.Scale | 'none' | 'max' | false,
  radiusBottom?: string | Types.Scale | 'none' | 'max' | false,
  radiusRight?: string | Types.Scale | 'none' | 'max' | false,
  radiusLeft?: string | Types.Scale | 'none' | 'max' | false,
  radiusTopLeft?: string | Types.Scale | 'none' | 'max' | false,
  radiusTopRight?: string | Types.Scale | 'none' | 'max' | false,
  radiusBottomRight?: string | Types.Scale | 'none' | 'max' | false,
  radiusBottomLeft?: string | Types.Scale | 'none' | 'max' | false,
  shadow?: string | Types.Scale | 'none' | false,
  shadowInner?: string | Types.Scale | 'none' | false,
  glow?: string | Types.Scale | 'none' | false,
  img?: string | false,
  noContext?: boolean,
  blur?: string | Types.Scale | 'none' | false,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
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