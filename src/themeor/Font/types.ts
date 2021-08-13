import { CommonProps } from '../with-common'

export type FontProps = CommonProps & {
  fill?: string | false,
  inverse?: boolean,
  size?: string | false,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | false,
  lineHeight?: string | false,
  letterSpacing?: string | false,
  uppercase?: boolean,
  italic?: boolean,
  underline?: boolean,
  family?: string | false,
  align?: 'left' | 'right' | 'center' | false,
  inline?: boolean,
  noselect?: boolean,
  nowrap?: boolean,
  forwardRef?: any,
}