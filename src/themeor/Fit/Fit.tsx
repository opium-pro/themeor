import React from 'react'
import css from './Fit.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import Merge from '../Merge'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface FitProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string,
  height?: string,
  maxWidth?: string,
  maxHeight?: string,
  minWidth?: string,
  minHeight?: string,
  screen?: boolean,
  parent?: boolean,
  left?: string,
  top?: string,
  right?: string,
  bottom?: string,
  spacer?: boolean,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left',
  offset?: Types.Scale,
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  zIndex?: number,
  notParent?: boolean,
  style?: any,
  colSpan?: number,
  rowSpan?: number,
  inline?: boolean,
  scroll?: boolean,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
  clip?: boolean,
}

export default class Fit extends React.PureComponent<FitProps> {
  static contextType = ThemeContext
  static defaultProps = {style: {}}
  static id = newId()

  render() {
    const {
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
      forwardedRef,
      className,
      spacer,
      MERGE,
      zIndex,
      stick,
      notParent,
      screen,
      parent,
      scroll,
      colSpan,
      rowSpan,
      style,
      inline,
      clip,
      children,
      MERGE_CHAIN,
      FORCE_MERGE,
      ...restProps
    } = this.props

    const newStyle = {...style}
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
    if (colSpan) { newStyle.gridColumnEnd = `span ${colSpan}` }
    if (rowSpan) { newStyle.gridRowEnd = `span ${rowSpan}` }

    const componentProps = {
      className: cn(
        css.fit,
        spacer && css.spacer,
        clip && css.clip,
        scroll && css.scroll,
        inline && css.inline,
        stick && css[`stick-${stick}`],
        parent && css.parent,
        screen && css.screen,
        offset && css[`offset-${offset}`],
        notParent && css.notParent,
        className
      ),
      style: newStyle,
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