import React from 'react'
import css from './Fit.module.scss'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import {ThemeContext} from '../context'

export interface PureFitProps {
  width?: string,
  height?: string,
  maxWidth?: string,
  maxHeight?: string,
  minWidth?: string,
  minHeight?: string,
  cover?: 'parent' | 'screen',
  left?: string,
  top?: string,
  right?: string,
  bottom?: string,
  stick?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left',
  offset?: Types.Scale,
  zIndex?: number,
  notParent?: boolean,
  inline?: boolean,
  scroll?: boolean,
  clip?: boolean,
}
export interface TaglessFitProps extends PureFitProps {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export interface FitProps extends TaglessFitProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}

export default class Fit extends React.Component<FitProps> {
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
      TRY_TAGLESS,
      zIndex,
      stick,
      notParent,
      cover,
      scroll,
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

    const componentProps = {
      className: cn(
        css.fit,
        clip && css.clip,
        scroll && css.scroll,
        inline && css.inline,
        stick && css[`stick-${stick}`],
        cover && css[`cover-${cover}`],
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