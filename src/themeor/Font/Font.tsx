import React from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-name'
import { isCustomVariable } from '../utils/is-custom'
import { TryTagless } from '../with-tagless'
import { FontProps, TaglessFontProps } from './types'
import { useConfig } from '../utils/use-config'


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
  const context = useTheme()
  const { TRY_TO_INVERSE } = context
  const { fontConfig } = useConfig(context)

  const newStyle = { ...style }

  if (!fontConfig({ fill })) { newStyle.color = `var(${fill})` }

  if (!fontConfig({ fill })) { newStyle.color = fill || undefined }
  if (!fontConfig({ size })) { newStyle.fontSize = size || undefined }
  if (!fontConfig({ weight })) { newStyle.fontWeight = weight as any }
  if (!fontConfig({ letterSpacing })) { newStyle.letterSpacing = letterSpacing || undefined }
  if (!fontConfig({ lineHeight })) { newStyle.lineHeight = lineHeight || undefined }
  if (!fontConfig({ family })) { newStyle.fontFamily = family || undefined }

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

  const forceInverse = (inverse !== false) && (inverse || TRY_TO_INVERSE)

  const componentProps = {
    className: cn(
      't-font',
      underline && 't-font-underline',
      underline === false && 't-font-non-underline',
      inline && 't-font-inline',
      inline === false && 't-font-block',
      fontConfig({ fill }) && !isCustomVariable(fill) && `t-font-fill-${fill}`,
      forceInverse && !fill && `t-font-fill-base`,
      forceInverse && !isCustomVariable(fill) && 't-font-inverse',
      (uppercase && 't-font-uppercase') || ((uppercase === false) && 't-font-non-uppercase'),
      (italic && 't-font-italic') || ((italic === false) && 't-font-non-italic'),
      noselect && 't-font-noselect',
      fontConfig({ letterSpacing }) && `t-font-letter-spacing-${letterSpacing}`,
      fontConfig({ lineHeight }) && `t-font-line-height-${lineHeight}`,
      fontConfig({ size }) && `t-font-size-${size}`,
      fontConfig({ weight }) && `t-font-weight-${weight}`,
      fontConfig({ family }) && `t-font-family-${family}`,
      align && `t-font-align-${align}`,
      nowrap && 't-font-nowrap',
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