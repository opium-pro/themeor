import { CommonProps } from '../Common/index.js'
import { TaglessComponent } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'

export const FONT_NAME = componentName('Font')

export type FontConfigProps = {
  fill?: string | false,
  size?: string | false | number,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | false,
  lineHeight?: string | false | number,
  letterSpacing?: string | false | number,
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
  prewrap?: boolean,
  wrap?: boolean,
}

export type FontCompoennt = TaglessComponent<FontProps>