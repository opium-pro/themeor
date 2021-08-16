import { CommonComponent, CommonProps } from "../Common"

export type EffectProps = CommonProps & {
  transparency?: string | 'none' | 'max' | false,
  hidden?: boolean,
  forwardRef?: any,
}

export type EffectComponent = CommonComponent<EffectProps>