import React from 'react'
import css from './Line.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import Merge from '../Merge'
import isCuctomVariable from '../utils/var-is-custom'
import newId from '../utils/new-id'

export interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string,
  inverse?: boolean,
  weight?: Types.Scale | 'none',
  top?: Types.Scale | 'none',
  right?: Types.Scale | 'none',
  bottom?: Types.Scale | 'none',
  left?: Types.Scale | 'none',
  MERGE_CHAIN?: true,
  MERGE?: boolean,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
}

export default class Line extends React.PureComponent<LineProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static id = newId()

  render() {
    const {
      className,
      MERGE,
      inverse,
      weight,
      fill,
      top,
      right,
      bottom,
      left,
      forwardedRef,
      MERGE_CHAIN,
      FORCE_MERGE,
      children,
      style = {},
      ...restProps
    } = this.props

    const {backIsStrong} = this.context

    if (isCuctomVariable(fill)) {
      style.borderColor = `var(${fill})`
    }

    const componentProps = {
      className: cn(
        css.line,
        (weight || (!top && !right && !left && !bottom)) && css[`weight-${weight || 'md'}`],
        top && css[`top-${top}`],
        right && css[`right-${right}`],
        bottom && css[`bottom-${bottom}`],
        left && css[`left-${left}`],
        fill && !isCuctomVariable(fill) && css[`fill-${fill}`],
        (inverse !== false) && (inverse || backIsStrong) && !isCuctomVariable(fill) && css.inverse,
        React.Children.count(children) === 0 && css.separator,
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