import React from 'react'
import css from './Font.module.css'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import isCustomVariable from '../utils/var-is-custom'
import TryTagless from '../TryTagless'
import {FontProps, TaglessFontProps} from './types'


Font.TryTagless = (props: TaglessFontProps) => <Font {...props} TRY_TAGLESS />

export default function Font({
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
  ...restProps
}: FontProps, ref?: React.Ref<any>) {
  const {TRY_TO_INVERSE} = React.useContext(ThemeContext)

  const newStyle: any = {...style}

  if(isCustomVariable(fill)) {
    newStyle.color = `var(${fill})`
  }

  const forceInverse = (inverse !== false) && (inverse || TRY_TO_INVERSE)

  const componentProps = {
    className: cn(
      css.font,
      underline && css.underline,
      underline === false && css[`non-underline`],
      inline && css.inline,
      inline === false && css.block,
      fill && !isCustomVariable(fill) && css[`fill-${fill}`],
      forceInverse && !fill && css[`fill-base`],
      forceInverse && !isCustomVariable(fill) && css.inverse,
      (uppercase && css.uppercase) || ((uppercase === false) && css['non-uppercase']),
      (italic && css.italic )|| ((italic === false) && css['non-italic']),
      noselect && css.noselect,
      letterSpacing && css[`letter-spacing-${letterSpacing}`],
      lineHeight && css[`line-height-${lineHeight}`],
      size && css[`size-${size}`],
      weight && css[`weight-${weight}`],
      family && css[`family-${family}`],
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