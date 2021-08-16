import React from 'react'
import cn from '../utils/class-name'
import { FitComponent, FitProps } from './types'
import { minus } from '../utils/change-css-value'
import { Common } from '../Common'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'
import { withTagless } from '../with-tagless'

const Fit= React.forwardRef(({
  left,
  top,
  right,
  bottom,
  offset,
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  zIndex,
  stick,
  isNotParent,
  cover,
  scroll,
  style = {},
  inline,
  clip,
  className,
  children,
  forwardRef,
  ...restProps
}: FitProps, ref: any) => {

  const context = useTheme()
  const { gapConfig } = useConfig(context)

  const newStyle = { ...style }
  if (left || offset) { newStyle.left = left || offset || undefined }
  if (top || offset) { newStyle.top = top || offset || undefined }
  if (right || offset) { newStyle.right = right || offset || undefined }
  if (bottom || offset) { newStyle.bottom = bottom || offset || undefined }
  if (zIndex) { newStyle.zIndex = zIndex }
  if (!gapConfig({size: offset})) { newStyle.margin = minus(offset) }
  if (offsetTop) { newStyle.marginTop = minus(offsetTop) }
  if (offsetBottom) { newStyle.marginBottom = minus(offsetBottom) }
  if (offsetRight) { newStyle.marginRight = minus(offsetRight) }
  if (offsetLeft) { newStyle.marginLeft = minus(offsetLeft) }

  const componentProps = {
    forwardRef: ref || forwardRef,
    className: cn(
      `t-fit`,
      clip && `t-fit-clip`,
      scroll && `t-fit-scroll`,
      inline && `t-fit-inline`,
      stick && `t-fit-stick-${stick}`,
      cover && `t-fit-cover-${cover}`,
      stick && !cover && `t-fit-stick-parent`,
      offset && `t-fit-offset-${offset}`,
      isNotParent && `t-fit-is-not-parent`,
      inline === false && `t-fit-block`,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  return Common(componentProps)
})

export default withTagless(Fit) as FitComponent