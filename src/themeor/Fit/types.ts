import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { componentName } from '../utils/component-name'

export const FIT_NAME = componentName('Fit')

export type FitConfigProps = {
  offset?: string | false,
  zIndex?: number | false,
}

export type FitProps = CommonProps & FitConfigProps & {
  cover?: 'parent' | 'screen' | false,
  left?: string | false,
  top?: string | false,
  right?: string | false,
  bottom?: string | false,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | false,
  offsetTop?: string | false,
  offsetRight?: string | false,
  offsetBottom?: string | false,
  offsetLeft?: string | false,
  zIndex?: number | false,
  isNotParent?: boolean,
  static?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
  sticky?: boolean,
  fixed?: boolean,
  absolute?: boolean,
}

export type FitComponent = TaglessComponent<FitProps>