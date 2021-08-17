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
  children,
  style={},
  ...restProps
}) => {
  const newStyle = { ...style }

  if (transparency && isCustomValue(transparency)) {
    newStyle.opacity = transparency
  }

  const componentProps = {
    ...restProps,
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