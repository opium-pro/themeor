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
  forwardRef,
  inline,
  style = {},
  ...restProps
}: GapProps, ref: any) => {
  const { gapConfig, customGapValue } = getConfig(useTheme().normalizedConfig)
  const css = useCss()
  const gapNode: any = useRef()

  const newStyle = { ...style }

  const defaultGap = 'default'
  const notSpecified = !right && !left && !top && !bottom && !vert && !hor
  detectInline()
  const emptyRow = !children && notSpecified && inline
  const emptyCol = !children && notSpecified && !inline

  if (size && !!children && customGapValue({ size })) { newStyle.padding = size }
  if (size && emptyRow && customGapValue({ size })) { newStyle.paddingLeft = size }
  if (size && emptyCol && customGapValue({ size })) { newStyle.paddingTop = size }
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

  // If is inside of flexbox row, make inline automatically
  function handleRef(node: any) {
    if (!node) { return }
    typeof forwardRef === 'function' && forwardRef(node)
    typeof ref === 'function' && ref(node)
    gapNode.current = node
  }

  function detectInline() {
    if (!gapNode.current) {
      return
    }

    const parentStyles = getComputedStyle(gapNode.current.parentElement)
    if (parentStyles.display === 'flex' && notSpecified && !children) {
      if (parentStyles.flexDirection.includes('row') && !inline) {
        inline = true
      }
      if (!parentStyles.flexDirection.includes('row') && inline) {
        inline = false
      }
    }
  }

  if (inline && !!children) {
    console.error(
      "Prop 'inline' will be neglected because it work only when there is no children",
      Gap
    )
  }
  

  const componentProps = {
    ...restProps,
    className: cn(
      css[`gap`],
      emptyRow && css[`left-${size || defaultGap}`],
      emptyCol && css[`top-${size || defaultGap}`],
      inline && css[`inline`],
      gapConfig({ size: top }) && css[`top-${top}`],
      gapConfig({ size: right }) && css[`right-${right}`],
      gapConfig({ size: bottom }) && css[`bottom-${bottom}`],
      gapConfig({ size: left }) && css[`left-${left}`],
      size && gapConfig({ size: size }) && !!children && css[`size-${size}`],
      gapConfig({ size: vert }) && css[`vert-${vert}`],
      gapConfig({ size: hor }) && css[`hor-${hor}`],
      !size && !!children && notSpecified && css[`size-${defaultGap}`],
      className
    ),
    style: newStyle,
    children,
    forwardRef: handleRef,
  }

  return Common(componentProps, GAP_NAME)
}


Gap.displayName = GAP_NAME
export default withTagless(React.forwardRef(Gap)) as GapComponent