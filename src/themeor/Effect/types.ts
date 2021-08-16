import { CommonComponent, CommonProps } from "../Common"

export type EffectProps = CommonProps & {
  transparency?: string | 'none' | 'max' | false,
  hidden?: boolean,
}

export type EffectComponent = CommonComponent<EffectProps>