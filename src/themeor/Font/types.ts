import * as Types from '../config-types'

export type PureFontProps = {
  fill?: string,
  inverse?: boolean,
  size?: Types.Scale,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  lineHeight?: Types.Scale,
  letterSpacing?: Types.Scale,
  uppercase?: boolean,
  italic?: boolean,
  underline?: boolean,
  family?: Types.FontFamily,
  align?: 'left' | 'right' | 'center',
  inline?: boolean,
  noselect?: boolean,
  nowrap?: boolean,
}

export type TaglessFontProps = PureFontProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type FontProps = TaglessFontProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}