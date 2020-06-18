import React from 'react'
import css from './Line.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import TryTagless from '../TryTagless'
import isCuctomVariable from '../utils/var-is-custom'

export interface PureLineProps {
  fill?: string,
  inverse?: boolean,
  weight?: Types.Scale | 'none',
  top?: Types.Scale | 'none',
  right?: Types.Scale | 'none',
  bottom?: Types.Scale | 'none',
  left?: Types.Scale | 'none',
}
export interface TaglessLineProps extends PureLineProps,  React.ComponentPropsWithoutRef<any> {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
}
export interface LineProps extends TaglessLineProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: (node: any) => void,
}

export default class Line extends React.PureComponent<LineProps> {
  static contextType = ThemeContext
  static defaultProps = {}
  static TryTagless = (props: TaglessLineProps) => <Line TRY_TAGLESS {...props} />

  render() {
    const {
      className,
      TRY_TAGLESS,
      inverse,
      weight,
      fill,
      top,
      right,
      bottom,
      left,
      forwardRef,
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
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

    return (TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
      <TryTagless forwardRef={forwardRef} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
    ) : (
      <div ref={forwardRef} {...componentProps} />
    )
  }
}