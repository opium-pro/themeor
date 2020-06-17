import React from 'react'
import css from './Font.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import newId from '../utils/new-id'
import isCuctomVariable from '../utils/var-is-custom'
import Merge from '../Merge'

export interface FontProps extends React.HTMLAttributes<HTMLDivElement> {
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
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  FORCE_MERGE?: true,
  noselect?: boolean,
  nowrap?: boolean,
  forwardedRef?: (node: any) => void,
}

export default class Font extends React.PureComponent<FontProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static id = newId()

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
      MERGE,
      MERGE_CHAIN,
      FORCE_MERGE,
      noselect,
      lineHeight,
      forwardedRef,
      letterSpacing,
      children,
      ...restProps
    } = this.props

    const {backIsStrong} = this.context

    if(isCuctomVariable(fill)) {
      style.color = `var(${fill})`
    }

    const forceInverse = (inverse !== false) && (inverse || backIsStrong)

    const componentProps = {
      className: cn(
        css.font,
        underline && css.underline,
        inline && css.inline,
        inline === false && css.block,
        fill && !isCuctomVariable(fill) && css[`fill-${fill}`],
        forceInverse && !fill && css[`fill-base`],
        forceInverse && !isCuctomVariable(fill) && css.inverse,
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

    if (typeof children === 'function') {
      return children(componentProps)
    }

    return (MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
      <Merge forwardedRef={forwardedRef} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
    ) : (
      <div ref={forwardedRef} {...componentProps} />
    )
  }
}