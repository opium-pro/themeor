import React, { useRef } from 'react'
import cn from '../utils/class-names'
// import * as console from '../utils/console'
import { GapComponent, GapProps, GAP_NAME } from './types'
import { getConfig } from '../utils/get-config'
import { useTheme } from '../context'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'
import { useCss } from './styles'


const Gap = ({
  className,
  size,
  top,
  vert,
  hor,
  right,
  bottom,
  left,
  children,
  inline,
  style = {},
  ...restProps
}: GapProps, ref: any) => {
  const { gapConfig, customGapValue } = getConfig(useTheme().normalizedConfig)
  const css = useCss()
  const newStyle = { ...style }
  const defaultSize = 'default'
  const isDefined = !!(vert || hor || right || left || top || bottom)

  if (size && customGapValue({ size })) {
    newStyle.padding = children ? size : `${size} 0 0 ${size}`
  }
  if (vert && customGapValue({ size: vert })) {
    newStyle.paddingTop = vert
    newStyle.paddingBottom = vert
  }
  if (hor && customGapValue({ size: hor })) {
    newStyle.paddingRight = hor
    newStyle.paddingLeft = hor
  }
  if (top && customGapValue({ size: top })) { newStyle.paddingTop = top }
  if (right && customGapValue({ size: right })) { newStyle.paddingRight = right }
  if (bottom && customGapValue({ size: bottom })) { newStyle.paddingBottom = bottom }
  if (left && customGapValue({ size: left })) { newStyle.paddingLeft = left }

  if (!children && inline === true && !isDefined) { newStyle.paddingTop = 0 }
  if (!children && inline === false && !isDefined) { newStyle.paddingLeft = 0 }

  const componentProps = {
    ...restProps,
    className: cn(
      css[`gap`],
      inline && css[`inline`],
      !children && css[`empty`],
      (gapConfig({ size: (size) }) || !isDefined)
        && (children
          ? css[`size-${(size || defaultSize)}`]
          : `${css[`top-${(size || defaultSize)}`]} ${css[`left-${(size || defaultSize)}`]}`),
      gapConfig({ size: vert }) && css[`vert-${vert}`],
      gapConfig({ size: hor }) && css[`hor-${hor}`],
      gapConfig({ size: top }) && css[`top-${top}`],
      gapConfig({ size: right }) && css[`right-${right}`],
      gapConfig({ size: bottom }) && css[`bottom-${bottom}`],
      gapConfig({ size: left }) && css[`left-${left}`],
      className
    ),
    style: newStyle,
    children,
  }

  return Common(componentProps, GAP_NAME)
}


Gap.displayName = GAP_NAME
export default withTagless(React.forwardRef(Gap)) as GapComponent