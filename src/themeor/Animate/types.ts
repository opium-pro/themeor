export type PureAnimateProps = {
  onMount?: string,
  onUnmount?: string,
  onHover?: string,
  onClick?: string,
  onFocus?: string,
  duration?: number,
  delay?: number,
  repeat?: number,
  mounted?: boolean,
  getTrigger?: (trigger?: (value: string) => void) => any,
  [X: string]: any,
}

export type TaglessAnimateProps = PureAnimateProps & React.HTMLAttributes<HTMLElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type AnimateProps = TaglessAnimateProps & {
  TRY_TAGLESS?: boolean,
}