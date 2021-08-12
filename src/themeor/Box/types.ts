export type PureBoxProps = {
  fill?: string | false,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | 'none' | false,
  radius?: string | 'none' | 'max' | false,
  radiusTop?: string | 'none' | 'max' | false,
  radiusBottom?: string | 'none' | 'max' | false,
  radiusRight?: string | 'none' | 'max' | false,
  radiusLeft?: string | 'none' | 'max' | false,
  radiusTopLeft?: string | 'none' | 'max' | false,
  radiusTopRight?: string | 'none' | 'max' | false,
  radiusBottomRight?: string | 'none' | 'max' | false,
  radiusBottomLeft?: string | 'none' | 'max' | false,
  shadow?: string | 'none' | false,
  shadowInner?: string | 'none' | false,
  glow?: string | 'none' | false,
  img?: string | false,
  noContext?: boolean,
  blur?: string | 'none' | false,
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