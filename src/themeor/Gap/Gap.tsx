import React from 'react'
import cn from '../utils/class-name'
import consoleMessage from '../utils/console-message'
import { GapComponent, GapProps } from './types'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'
import { css } from './styles'


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
  inrow,
  style = {},
  ...restProps
}: GapProps, ref: any) => {

  const [isInrow, setInrow] = React.useState(false)
  const { gapConfig } = useConfig(useTheme())

  const newStyle = { ...style }

  if (size && !gapConfig({size})) { newStyle.padding = size || undefined }
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

  // If is inside of flexbox row, make inrow automatically
  function handleRef(node: any) {
    if (!node) { return }
    typeof forwardRef === 'function' && forwardRef(node)
    typeof ref === 'function' && ref(node)

    if (inrow === true) {
      setInrow(true)
    } else if (inrow === false) {
      setInrow(false)
    }

    const parentStyles = getComputedStyle(node.parentElement)
    if (parentStyles.flexDirection === 'row' && parentStyles.display === 'flex') {
      setInrow(true)
    } else {
      setInrow(false)
    }
  }

  if (inrow && !!children) {
    consoleMessage({
      source: Gap,
      text: "Prop 'inrow' will be neglected because it work only when there is no children",
      type: 'error',
    })
  }
  const useInrow = !children && (isInrow || inrow)

  const defaultGap = 'md'

  const notSpecified = !right && !left && !top && !bottom && !vert && !hor

  const componentProps = {
    ...restProps,
    className: cn(
      css[`gap`],
      !children && useInrow && notSpecified && css[`left-${size || defaultGap}`],
      !children && !useInrow && notSpecified && css[`top-${size || defaultGap}`],
      gapConfig({size: top}) && css[`top-${top}`],
      gapConfig({size: right}) && css[`right-${right}`],
      gapConfig({size: bottom}) && css[`bottom-${bottom}`],
      gapConfig({size: left}) && css[`left-${left}`],
      gapConfig({size: size}) && !!children && css[`size-${size}`],
      gapConfig({size: vert}) && css[`vert-${vert}`],
      gapConfig({size: hor}) && css[`hor-${hor}`],
      !size && !!children && notSpecified && css[`size-${defaultGap}`],
      className
    ),
    style: newStyle,
    children,
    forwardRef: handleRef,
  }

  return Common(componentProps)
}


export default withTagless(React.forwardRef(Gap)) as GapComponent