import { CommonProps, CommonComponent } from '../Common'

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
  forwardRef?: any,
}

export type AnimateComponent = CommonComponent<AnimateProps>