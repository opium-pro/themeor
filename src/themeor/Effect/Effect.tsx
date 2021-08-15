import React from 'react'
import css from './Effect.module.css'
import cn from '../utils/class-name'
import { EffectProps } from './types'
import { isCustomValue } from '../utils/is-custom'
import { withCommon, CommonComponent } from '../with-common'


export const Effect: CommonComponent<EffectProps> = withCommon(({
  className,
  hidden,
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  transparency,
  forwardRef,
  children,
  style={},
  ...restProps
}: EffectProps, ref: React.Ref<any>) => {
  const newStyle = { ...style }

  if (transparency && isCustomValue(transparency)) {
    newStyle.opacity = transparency
  }

  const componentProps = {
    ...restProps,
    ref,
    className: cn(
      css.effect,
      transparency && css[`transparency-${transparency}`],
      className
    ),
    children,
    style: newStyle,
  }

  return <div ref={forwardRef} {...componentProps} />
})