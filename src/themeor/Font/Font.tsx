import React from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-name'
import { isCustomVariable } from '../utils/is-custom'
import { FontProps } from './types'
import { useConfig } from '../utils/use-config'
import { withCommon, CommonComponent } from '../with-common'


export const Font: CommonComponent<FontProps> = withCommon(({
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
  noselect,
  lineHeight,
  forwardRef,
  letterSpacing,
  children,
  ...restProps
}: FontProps, ref?: React.Ref<any>) => {
  const context = useTheme()
  const { TRY_TO_INVERSE } = context
  const { fontConfig } = useConfig(context)

  const newStyle = { ...style }

  if (!fontConfig({ fill })) { newStyle.color = fill || undefined }
  if (!fontConfig({ size })) { newStyle.fontSize = size || undefined }
  if (!fontConfig({ weight })) { newStyle.fontWeight = weight as any }
  if (!fontConfig({ letterSpacing })) { newStyle.letterSpacing = letterSpacing || undefined }
  if (!fontConfig({ lineHeight })) { newStyle.lineHeight = lineHeight || undefined }
  if (!fontConfig({ family })) { newStyle.fontFamily = family || undefined }

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

  return (
    <div ref={forwardRef} {...componentProps} />
  )
})