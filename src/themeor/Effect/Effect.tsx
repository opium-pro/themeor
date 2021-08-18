import React from 'react'
import cn from '../utils/class-names'
import { EffectComponent, EffectProps, EFFECT_NAME } from './types'
import { useConfig } from '../utils/use-config'
import { Common } from '../Common'
import { useTheme } from '../context'
import { withTagless } from '../with-tagless'


const Effect = ({
  className,
  hidden,
  transparency,
  children,
  style = {},
  ...restProps
}: EffectProps, ref: any) => {
  const newStyle = { ...style }
  const { effectConfig } = useConfig(useTheme())

  if (transparency && !effectConfig({transparency})) {
    newStyle.opacity = transparency
  }

  const componentProps = {
    forwardRef: ref,
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

  return Common(componentProps, EFFECT_NAME)
}


export default withTagless(React.forwardRef(Effect)) as EffectComponent