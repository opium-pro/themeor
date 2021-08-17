import React from 'react'
import cn from '../utils/class-name'
import { EffectComponent } from './types'
import { useConfig } from '../utils/use-config'
import { Common } from '../Common'
import { useTheme } from '../context'


export const Effect: EffectComponent = ({
  className,
  hidden,
  transparency,
  children,
  style = {},
  ...restProps
}) => {
  const newStyle = { ...style }
  const { effectConfig } = useConfig(useTheme())

  if (transparency && !effectConfig({transparency})) {
    newStyle.opacity = transparency
  }

  const componentProps = {
    ...restProps,
    className: cn(
      `t-effect`,
      hidden && `t-effect-hidden`,
      effectConfig({transparency}) && `t-effect-transparency-${transparency}`,
      className
    ),
    children,
    style: newStyle,
  }

  return Common(componentProps)
}