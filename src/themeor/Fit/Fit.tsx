import React from 'react'
import css from './Fit.module.css'
import cn from '../utils/class-name'
import {TryTagless} from '../TryTagless'
import {FitProps, TaglessFitProps} from './types'
import {isCustomValue} from '../utils/is-custom'
import {minus} from '../utils/change-css-value'


Fit.TryTagless = (props: TaglessFitProps) => <Fit {...props} TRY_TAGLESS/>

export function Fit({
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
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
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  ...restProps
}: FitProps, ref: React.Ref<any>) {

  const newStyle = {...style}
  if (left || offset) { newStyle.left = left || offset || undefined }
  if (top || offset) { newStyle.top = top || offset || undefined }
  if (right || offset) { newStyle.right = right || offset || undefined }
  if (bottom || offset) { newStyle.bottom = bottom || offset || undefined }
  if (zIndex) { newStyle.zIndex = zIndex }
  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }
  if (isCustomValue(offset)) { newStyle.margin = minus(offset)}
  if (offsetTop) { newStyle.marginTop = minus(offsetTop)}
  if (offsetBottom) { newStyle.marginBottom = minus(offsetBottom)}
  if (offsetRight) { newStyle.marginRight = minus(offsetRight)}
  if (offsetLeft) { newStyle.marginLeft = minus(offsetLeft)}

  const componentProps = {
    className: cn(
      css.fit,
      clip && css.clip,
      scroll && css.scroll,
      inline && css.inline,
      stick && css[`stick-${stick}`],
      cover && css[`cover-${cover}`],
      stick && !cover && css[`stick-parent`],
      offset && css[`offset-${offset}`],
      isNotParent && css.isNotParent,
      inline === false && css.block,
      (!!height || cover || stick || offset) && !inline && css.block,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  if (tryTagless) {
    return <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  }

  return <div ref={forwardRef} {...componentProps} />
}