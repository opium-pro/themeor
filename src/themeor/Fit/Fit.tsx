import React from 'react'
import css from './Fit.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import {ThemeContext} from '../context'
import newId from '../utils/new-id'

export interface PureFitProps {
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
  zIndex?: number,
  notParent?: boolean,
  colSpan?: number,
  rowSpan?: number,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
}
export interface TaglessFitProps extends PureFitProps,  React.ComponentPropsWithoutRef<any> {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
}
export interface FitProps extends TaglessFitProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => void,
}

export default class Fit extends React.PureComponent<FitProps> {
  static contextType = ThemeContext
  static defaultProps = {style: {}}
  static TryTagless = (props: TaglessFitProps) => <Fit TRY_TAGLESS {...props} />

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
      forwardRef,
      className,
      spacer,
      TRY_TAGLESS,
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
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
      ...restProps
    } = this.props

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

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}