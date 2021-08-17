import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"

export type EffectProps = CommonProps & {
  transparency?: string | 'none' | 'max' | false,
  hidden?: boolean,
}

export type EffectComponent = TaglessComponent<EffectProps>