import React from 'react'
import css from './Effect.module.css'
import cn from '../utils/class-name'
import {TryTagless} from '../TryTagless'
import {EffectProps, TaglessEffectProps} from './types'


Effect.TryTagless = (props: TaglessEffectProps) => <Effect {...props} TRY_TAGLESS />

export function Effect({
  className,
  hidden,
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  transparency,
  forwardRef,
  children,
  ...restProps
}: EffectProps, ref: React.Ref<any>) {

  const componentProps = {
    ...restProps,
    className: cn(
      css.effect,
      transparency && css[`transparency-${transparency}`],
      className
    ),
    children,
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  if (tryTagless) {
    return <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  }

  return <div ref={forwardRef} {...componentProps} />
}