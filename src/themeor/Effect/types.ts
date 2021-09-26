import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from "../config"

export const EFFECT_NAME = obfuscate ? hash('Effect') : 'Effect'

export type EffectProps = CommonProps & {
  transparency?: string | 'none' | 'max' | false,
  hidden?: boolean,
  rotate?: string | boolean
  property?: string | boolean
  timingFunction?: string | boolean
  duration?: string | boolean
  smooth?: boolean
  zoom?: number | boolean
}

export type EffectComponent = TaglessComponent<EffectProps>