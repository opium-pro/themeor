import React from 'react'
import css from './Font.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import newId from '../utils/new-id'
import isCustomVariable from '../utils/var-is-custom'
import TryTagless from '../TryTagless'

export interface PureFontProps {
  fill?: string,
  inverse?: boolean,
  size?: Types.Scale,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  lineHeight?: Types.Scale,
  letterSpacing?: Types.Scale,
  uppercase?: boolean,
  italic?: boolean,
  underline?: boolean,
  family?: Types.FontFamily,
  align?: 'left' | 'right' | 'center',
  inline?: boolean,
  noselect?: boolean,
  nowrap?: boolean,
}
export interface TaglessFontProps extends PureFontProps {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export interface FontProps extends TaglessFontProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}

export default class Font extends React.Component<FontProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static TryTagless = (props: TaglessFontProps) => <Font TRY_TAGLESS {...props} />

  render() {
    const {
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
    } = this.props

    const {backIsStrong} = this.context

    if(isCustomVariable(fill)) {
      style.color = `var(${fill})`
    }

    const forceInverse = (inverse !== false) && (inverse || backIsStrong)

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
        className
      ),
      style,
      children,
      ...restProps,
    }

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}