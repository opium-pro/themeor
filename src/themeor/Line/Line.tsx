import React from 'react'
import css from './Line.module.css'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import {TryTagless} from '../TryTagless'
import {isCustomValue, isCustomVariable} from '../utils/is-custom'
import {LineProps, TaglessLineProps} from './types'


Line.TryTagless = (props: TaglessLineProps) => <Line {...props} TRY_TAGLESS />

export function Line({
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

  const {TRY_TO_INVERSE} = useTheme()

  const newStyle = {...style}

  if (isCustomVariable(fill)) { newStyle.borderColor = `var(${fill})` }

  if (isCustomValue(fill)) { newStyle.borderColor = fill || undefined}
  if (isCustomValue(weight)) { newStyle.borderWidth = weight || undefined}
  if (isCustomValue(top)) { newStyle.borderTopWidth = top || undefined}
  if (isCustomValue(right)) { newStyle.borderRightWidth = right || undefined}
  if (isCustomValue(bottom)) { newStyle.borderBottomWidth = bottom || undefined}
  if (isCustomValue(left)) { newStyle.borderLeftWidth = left || undefined}

  const componentProps = {
    ...restProps,
    className: cn(
      css.line,
      (weight || (!right && !left && !top && !bottom)) && css[`weight-${weight || 'md'}`],
      !isCustomValue(top) && css[`top-${top}`],
      !isCustomValue(right) && css[`right-${right}`],
      !isCustomValue(bottom) && css[`bottom-${bottom}`],
      !isCustomValue(left) && css[`left-${left}`],
      !isCustomValue(fill) && !isCustomVariable(fill) && css[`fill-${fill}`],
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && !isCustomVariable(fill) && css.inverse,
      React.Children.count(children) === 0 && css.separator,
      className
    ),
    style: newStyle,
    children,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  if (tryTagless) {
    return <TryTagless {...componentProps} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} />
  }

  return <div ref={forwardRef} {...componentProps} />
}