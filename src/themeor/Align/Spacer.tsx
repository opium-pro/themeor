import React from 'react'
import {Align} from './Align'
import css from './Spacer.module.css'
import cn from '../utils/class-name'
import {AlignSpanProps, TaglessAlignProps} from './types'

Spacer.TryTagless = (props: TaglessAlignProps) => <Spacer {...props} TRY_TAGLESS />

export function Spacer(
  {className, ...restProps}: AlignSpanProps,
  ref: React.Ref<any>
) {
  return (
    <Align {...restProps} className={cn(className, css.spacer)} />
  )
}