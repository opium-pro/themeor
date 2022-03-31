import React from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-names'
import { FontCompoennt, FontProps, FONT_NAME } from './types'
import { getConfig } from '../utils/get-config'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'
import { useCss } from './styles'
import { useBox } from '../Box'


const Font = ({
  className,
  fill = 'default',
  inverse,
  fancy,
  inline,
  weight,
  size,
  uppercase,
  underline,
  italic,
  family,
  nowrap,
  wrap,
  align,
  style = {},
  noselect,
  lineHeight,
  letterSpacing,
  children,
  ...restProps
}: FontProps, ref: any) => {
  const context = useBox()
  const { fontConfig } = getConfig(useTheme().normalizedConfig)
  const css = useCss()
  const newStyle = { ...style }

  if (fill && !fontConfig({ fill })) { newStyle.color = fill }
  if (size && !fontConfig({ size })) { newStyle.fontSize = size }
  if (weight && !fontConfig({ weight })) { newStyle.fontWeight = weight as any }
  if (letterSpacing && !fontConfig({ letterSpacing })) { newStyle.letterSpacing = letterSpacing }
  if (lineHeight && !fontConfig({ lineHeight })) { newStyle.lineHeight = lineHeight }
  if (family && !fontConfig({ family })) { newStyle.fontFamily = family }

  const forceInverse = (inverse !== false) && (inverse || context.TRY_TO_INVERSE)

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css['font'],
      (underline && css['underline']) || (underline === false && css['nounderline']),
      inline && css['inline'],
      inline === false && css['block'],
      fontConfig({ fill }) && css[`fill-${fill}`],
      forceInverse && fontConfig({ fillInverse: fill }) && css[`fill-inverse-${fill}`],
      fancy && fontConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      (uppercase && css['uppercase']) || ((uppercase === false) && css['nouppercase']),
      (italic && css['italic']) || ((italic === false) && css['noitalic']),
      noselect && css['noselect'],
      fontConfig({ letterSpacing }) && css[`letter-spacing-${letterSpacing}`],
      fontConfig({ lineHeight }) && css[`line-height-${lineHeight}`],
      fontConfig({ size }) && css[`size-${size}`],
      fontConfig({ weight }) && css[`weight-${weight}`],
      fontConfig({ family }) && css[`family-${family}`],
      align && css[`align-${align}`],
      nowrap && css['nowrap'],
      wrap && css['wrap'],
      className,
    ),
    style: newStyle,
    children,
  }

  return Common(componentProps, FONT_NAME)
}


Font.displayName = FONT_NAME
export default withTagless(React.forwardRef(Font)) as FontCompoennt