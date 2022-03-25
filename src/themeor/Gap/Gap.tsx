import React from 'react'
import cn from '../utils/class-names'
import * as console from '../utils/console'
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
  const [isinline, setinline] = React.useState(false)
  const { gapConfig } = getConfig(useTheme())
  const css = useCss()

  const newStyle = { ...style }

  const useinline = !children && (isinline || inline)
  const defaultGap = 'default'
  const notSpecified = !right && !left && !top && !bottom && !vert && !hor
  const sizeIsTop = !children && !useinline && notSpecified

  if (size && !sizeIsTop && !gapConfig({size})) { newStyle.padding = size || undefined }
  if (size && sizeIsTop && !gapConfig({size})) { newStyle.paddingTop = size || undefined }
  if (vert && !gapConfig({size: vert})) {
    newStyle.paddingTop = vert || undefined
    newStyle.paddingBottom = vert || undefined
  }
  if (hor && !gapConfig({size: hor})) {
    newStyle.paddingRight = hor || undefined
    newStyle.paddingLeft = hor || undefined
  }
  if (top && !gapConfig({size: top})) { newStyle.paddingTop = top || undefined }
  if (right && !gapConfig({size: right})) { newStyle.paddingRight = right || undefined }
  if (bottom && !gapConfig({size: bottom})) { newStyle.paddingBottom = bottom || undefined }
  if (left && !gapConfig({size: left})) { newStyle.paddingLeft = left || undefined }

  // If is inside of flexbox row, make inline automatically
  function handleRef(node: any) {
    if (!node) { return }
    typeof forwardRef === 'function' && forwardRef(node)
    typeof ref === 'function' && ref(node)

    if (inline === true) {
      setinline(true)
    } else if (inline === false) {
      setinline(false)
    }

    const parentStyles = getComputedStyle(node.parentElement)
    if (parentStyles.flexDirection === 'row' && parentStyles.display === 'flex') {
      setinline(true)
    } else {
      setinline(false)
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
      useinline && notSpecified && css[`left-${size || defaultGap}`],
      sizeIsTop && css[`top-${size || defaultGap}`],
      inline && css[`inline`],
      gapConfig({size: top}) && css[`top-${top}`],
      gapConfig({size: right}) && css[`right-${right}`],
      gapConfig({size: bottom}) && css[`bottom-${bottom}`],
      gapConfig({size: left}) && css[`left-${left}`],
      !sizeIsTop && gapConfig({size: size}) && !!children && css[`size-${size}`],
      gapConfig({size: vert}) && css[`vert-${vert}`],
      gapConfig({size: hor}) && css[`hor-${hor}`],
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