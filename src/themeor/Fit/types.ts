import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from "../config"

export const FIT_NAME = obfuscate ? hash('Fit') : 'Fit'

export type FitProps = CommonProps & {
  cover?: 'parent' | 'screen' | false,
  left?: string | false,
  top?: string | false,
  right?: string | false,
  bottom?: string | false,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | false,
  offset?: string | false,
  offsetTop?: string | false,
  offsetRight?: string | false,
  offsetBottom?: string | false,
  offsetLeft?: string | false,
  zIndex?: number | false,
  isNotParent?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
  sticky?: boolean,
}

export type FitComponent = TaglessComponent<FitProps>