import React from 'react'
import css from './Gap.module.css'
import cn from '../utils/class-name'
import consoleMessage from '../utils/console-message'
import {TryTagless} from '../with-tagless'
import {GapProps, TaglessGapProps} from './types'
import {isCustomValue} from '../utils/is-custom'


Gap.TryTagless = (props: TaglessGapProps) => <Gap {...props} TRY_TAGLESS />

export function Gap({
  className,
  size,
  top,
  vert,
  hor,
  right,
  bottom,
  left,
  children,
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  forwardRef,
  inrow,
  style={},
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  ...restProps
}: GapProps, ref: React.Ref<any>) {

  const [isInrow, setInrow] = React.useState(false)

  const newStyle = {...style}

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

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
    // typeof ref === 'function' && ref(node)

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
      css.gap,
      !children && useInrow && notSpecified && css[`left-${size || defaultGap}`],
      !children && !useInrow && notSpecified && css[`top-${size || defaultGap}`],
      !isCustomValue(top) && css[`top-${top}`],
      !isCustomValue(right) && css[`right-${right}`],
      !isCustomValue(bottom) && css[`bottom-${bottom}`],
      !isCustomValue(left) && css[`left-${left}`],
      !isCustomValue(size) && !!children && css[`size-${size}`],
      !isCustomValue(vert) && css[`vert-${vert}`],
      !isCustomValue(hor) && css[`hor-${hor}`],
      !size && !!children && notSpecified && css[`size-${defaultGap}`],
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  return tryTagless ? (
    <TryTagless forwardRef={handleRef} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={handleRef} {...componentProps} />
  )
}