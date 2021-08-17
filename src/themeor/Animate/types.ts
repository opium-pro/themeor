import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'

export type AnimateProps = CommonProps & {
  onMount?: string,
  onUnmount?: string,
  onHover?: string,
  // onClick?: string,
  // onFocus?: string,
  duration?: number,
  delay?: number,
  repeat?: number,
  mounted?: boolean,
  // getTrigger?: (trigger?: (value: string) => void) => any,
  [X: string]: any,
}

export type AnimateComponent = TaglessComponent<AnimateProps>