import React from 'react'
import cn from '../utils/class-name'
import { FitComponent } from './types'
import { minus } from '../utils/change-css-value'
import { withCommon } from '../with-common'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'

const Fit: FitComponent= ({
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
}, ref) => {

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
    ref: ref || forwardRef,
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

  return typeof children === 'function'
    ? children(componentProps)
    : <div {...componentProps} />
}

export default withCommon(Fit)