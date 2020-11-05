import React from 'react'
import css from './Line.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import TryTagless from '../TryTagless'
import isCustomVariable from '../utils/var-is-custom'
import {LineProps, TaglessLineProps} from './types'


Line.TryTagless = (props: TaglessLineProps) => <Line {...props} TRY_TAGLESS />

export default function Line({
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
}: LineProps, ref: React.Ref<any>) {

  const {TRY_TO_INVERSE} = React.useContext(ThemeContext)

  if (isCustomVariable(fill)) {
    style.borderColor = `var(${fill})`
  }

  const componentProps = {
    ...restProps,
    className: cn(
      css.line,
      (weight || (!right && !left && !top && !bottom)) && css[`weight-${weight || 'md'}`],
      top && css[`top-${top}`],
      right && css[`right-${right}`],
      bottom && css[`bottom-${bottom}`],
      left && css[`left-${left}`],
      fill && !isCustomVariable(fill) && css[`fill-${fill}`],
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && !isCustomVariable(fill) && css.inverse,
      React.Children.count(children) === 0 && css.separator,
      className
    ),
    style,
    children,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  if (tryTagless) {
    return <TryTagless {...componentProps} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} />
  }

  return <div ref={forwardRef} {...componentProps} />
}