import React from 'react'
import css from './Fit.module.scss'
import cn from '../utils/class-name'
import TryTagless from '../TryTagless'
import {FitProps, TaglessFitProps} from './types'


Fit.TryTagless = (props: TaglessFitProps) => <Fit {...props} TRY_TAGLESS/>

export default function Fit({
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
  zIndex,
  stick,
  isNotParent,
  cover,
  scroll,
  style,
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

  const newStyle: any = {...style}
  if (left || offset) { newStyle.left = left || offset }
  if (top || offset) { newStyle.top = top || offset }
  if (right || offset) { newStyle.right = right || offset }
  if (bottom || offset) { newStyle.bottom = bottom || offset }
  if (zIndex) { newStyle.zIndex = zIndex }
  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) }

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
      (height || cover || stick || offset) && !inline && css.block,
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