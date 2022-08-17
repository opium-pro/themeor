import { CommonProps } from '../common/index.js'
import { TaglessComponent } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'

export const FIT_NAME = componentName('Fit')

export type FitConfigProps = {
  offset?: string | false,
  zIndex?: number | false,
}

export type FitProps = CommonProps & FitConfigProps & {
  cover?: 'parent' | 'screen' | false,
  left?: string | false | number,
  top?: string | false | number,
  right?: string | false | number,
  bottom?: string | false | number,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | false,
  offsetTop?: string | false | number,
  offsetRight?: string | false | number,
  offsetBottom?: string | false | number,
  offsetLeft?: string | false | number,
  zIndex?: number | false,
  isNotParent?: boolean,
  static?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
  sticky?: boolean,
  fixed?: boolean,
  absolute?: boolean,
  contents?: boolean,
}

export type FitComponent = TaglessComponent<FitProps>