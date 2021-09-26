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
  rotate,
  smooth,
  property = smooth ? 'all' : undefined,
  timingFunction = 'ease',
  duration = '300ms',
  zoom,
  style = {},
  ...restProps
}: EffectProps, ref: any) => {
  const newStyle = { ...style }
  const { effectConfig } = useConfig(useTheme())

  if (transparency && !effectConfig({transparency})) {
    newStyle.opacity = transparency
  }

  if (rotate) { newStyle.transform = `rotate(${rotate})` }
  if (property) { newStyle.transitionProperty = property }
  if (timingFunction) { newStyle.transitionTimingFunction = timingFunction as any }
  if (duration) { newStyle.transitionDuration = duration as any }
  if (zoom) { newStyle.transform = `scale(${zoom})` }

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


Effect.displayName = EFFECT_NAME
export default withTagless(React.forwardRef(Effect)) as EffectComponent