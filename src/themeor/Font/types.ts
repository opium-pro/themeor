import { CommonProps } from '../Common'
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from '../config'

export const FONT_NAME = obfuscate ? hash('Font') : 'Font'

export type FontConfigProps = {
  fill?: string | false,
  size?: string | false,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | false,
  lineHeight?: string | false,
  letterSpacing?: string | false,
  family?: string | false,
  align?: 'left' | 'right' | 'center' | false,
}

export type FontProps = CommonProps & FontConfigProps & {
  inverse?: boolean,
  fancy?: boolean,
  uppercase?: boolean,
  italic?: boolean,
  underline?: boolean,
  inline?: boolean,
  noselect?: boolean,
  nowrap?: boolean,
  wrap?: boolean,
}

export type FontCompoennt = TaglessComponent<FontProps>