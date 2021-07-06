import * as Types from '../config-types'

export type PureFontProps = {
  fill?: string | false,
  inverse?: boolean,
  size?: Types.Scale | false,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | false,
  lineHeight?: Types.Scale | false,
  letterSpacing?: Types.Scale | false,
  uppercase?: boolean,
  italic?: boolean,
  underline?: boolean,
  family?: Types.FontFamily | false,
  align?: 'left' | 'right' | 'center' | false,
  inline?: boolean,
  noselect?: boolean,
  nowrap?: boolean,
  width?: string | false | number,
  height?: string | false | number,
  maxWidth?: string | false | number,
  maxHeight?: string | false | number,
  minWidth?: string | false | number,
  minHeight?: string | false | number,
}

export type TaglessFontProps = PureFontProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type FontProps = TaglessFontProps & {
  TRY_TAGLESS?: boolean,
}