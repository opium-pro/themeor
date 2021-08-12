import React from 'react'
import css from './Effect.module.css'
import cn from '../utils/class-name'
import {TryTagless} from '../with-tagless'
import {EffectProps, TaglessEffectProps} from './types'
import {isCustomValue} from '../utils/is-custom'


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
  style={},
  ...restProps
}: EffectProps, ref: React.Ref<any>) {
  const newStyle = {...style}

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

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  if (tryTagless) {
    return <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  }

  return <div ref={forwardRef} {...componentProps} />
}