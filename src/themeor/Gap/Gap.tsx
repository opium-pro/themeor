import React from 'react'
import cn from '../utils/class-name'
import consoleMessage from '../utils/console-message'
import {GapProps} from './types'
import {isCustomValue} from '../utils/is-custom'
import {CommonComponent, withCommon} from '../with-common'


export const Gap: CommonComponent<GapProps> = withCommon(({
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
  style={},
  ...restProps
}: GapProps, ref: React.Ref<any>) => {

  const [isInrow, setInrow] = React.useState(false)

  const newStyle = {...style}

  if (isCustomValue(size)) { newStyle.padding = size || undefined }
  if (isCustomValue(vert)) {
    newStyle.paddingTop = vert || undefined
    newStyle.paddingBottom = vert || undefined
  }
  if (isCustomValue(hor)) {
    newStyle.paddingRight = hor || undefined
    newStyle.paddingLeft = hor || undefined
  }
  if (isCustomValue(top)) { newStyle.paddingTop = top || undefined }
  if (isCustomValue(right)) { newStyle.paddingRight = right || undefined }
  if (isCustomValue(bottom)) { newStyle.paddingBottom = bottom || undefined }
  if (isCustomValue(left)) { newStyle.paddingLeft = left || undefined }

  // If is inside of flexbox row, make inrow automatically
  function handleRef(node: any) {
    if (!node) {return}
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
    className: cn(
      `t-gap`,
      !children && useInrow && notSpecified && `t-gap-left-${size || defaultGap}`,
      !children && !useInrow && notSpecified && `t-gap-top-${size || defaultGap}`,
      !isCustomValue(top) && `t-gap-top-${top}`,
      !isCustomValue(right) && `t-gap-right-${right}`,
      !isCustomValue(bottom) && `t-gap-bottom-${bottom}`,
      !isCustomValue(left) && `t-gap-left-${left}`,
      !isCustomValue(size) && !!children && `t-gap-size-${size}`,
      !isCustomValue(vert) && `t-gap-vert-${vert}`,
      !isCustomValue(hor) && `t-gap-hor-${hor}`,
      !size && !!children && notSpecified && `t-gap-size-${defaultGap}`,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  return (
    <div ref={handleRef} {...componentProps} />
  )
})