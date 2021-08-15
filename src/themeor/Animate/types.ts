import { CommonProps } from '../with-common'

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