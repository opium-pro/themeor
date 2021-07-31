import React from 'react'
import css from './Font.module.css'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import {isCustomVariable, isCustomValue, isCustomFill} from '../utils/is-custom'
import {TryTagless} from '../TryTagless'
import {FontProps, TaglessFontProps} from './types'


Font.TryTagless = (props: TaglessFontProps) => <Font {...props} TRY_TAGLESS />

export function Font({
  className,
  fill,
  inverse,
  inline,
  weight,
  size,
  uppercase,
  underline,
  italic,
  family,
  nowrap,
  align,
  style = {},
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  noselect,
  lineHeight,
  forwardRef,
  letterSpacing,
  children,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  ...restProps
}: FontProps, ref?: React.Ref<any>) {
  const {TRY_TO_INVERSE} = useTheme()

  const newStyle = {...style}

  if(isCustomVariable(fill)) { newStyle.color = `var(${fill})` }

  if(isCustomValue(fill)) { newStyle.color = fill || undefined }
  if(isCustomValue(size)) { newStyle.fontSize = size || undefined }
  if(isCustomValue(weight)) { newStyle.fontWeight = weight as any }
  if(isCustomValue(letterSpacing)) { newStyle.letterSpacing = letterSpacing || undefined }
  if(isCustomValue(lineHeight)) { newStyle.lineHeight = lineHeight || undefined }
  if(isCustomValue(family)) { newStyle.fontFamily = family || undefined }

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

  const forceInverse = (inverse !== false) && (inverse || TRY_TO_INVERSE)

  const componentProps = {
    className: cn(
      css.font,
      underline && css.underline,
      underline === false && css[`non-underline`],
      inline && css.inline,
      inline === false && css.block,
      !isCustomValue(fill) && !isCustomVariable(fill) && css[`fill-${fill}`],
      forceInverse && !fill && css[`fill-base`],
      forceInverse && !isCustomVariable(fill) && css.inverse,
      (uppercase && css.uppercase) || ((uppercase === false) && css['non-uppercase']),
      (italic && css.italic )|| ((italic === false) && css['non-italic']),
      noselect && css.noselect,
      !isCustomValue(letterSpacing) && css[`letter-spacing-${letterSpacing}`],
      !isCustomValue(lineHeight) && css[`line-height-${lineHeight}`],
      !isCustomValue(size) && css[`size-${size}`],
      !isCustomValue(weight) && css[`weight-${weight}`],
      !isCustomValue(family) && css[`family-${family}`],
      align && css[`align-${align}`],
      nowrap && css.nowrap,
      className,
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  return tryTagless ? (
    <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={forwardRef} {...componentProps} />
  )
}