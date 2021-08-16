import React from 'react'
import css from './Effect.module.css'
import cn from '../utils/class-name'
import { EffectComponent } from './types'
import { isCustomValue } from '../utils/is-custom'
import { Common } from '../Common'


export const Effect: EffectComponent = ({
  className,
  hidden,
  transparency,
  forwardRef,
  children,
  style={},
  ...restProps
}, ref) => {
  const newStyle = { ...style }

  if (transparency && isCustomValue(transparency)) {
    newStyle.opacity = transparency
  }

  const componentProps = {
    ...restProps,
    ref: ref || forwardRef,
    className: cn(
      css.effect,
      transparency && css[`transparency-${transparency}`],
      className
    ),
    children,
    style: newStyle,
  }

  return Common(componentProps)
}