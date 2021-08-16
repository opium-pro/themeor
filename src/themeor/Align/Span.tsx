import React from 'react'
import Align from './Align'
import { AlignSpanComponent } from './types'


export const Span: AlignSpanComponent = (
  { col = 1, style, ...restProps },
  ref
) => {
  const newStyle: any = {
    ...style,
    gridColumnEnd: `span ${col}`
  }

  const componentProps = {
    ...restProps,
    ref,
    style: newStyle
  }

  return Align(componentProps)
}

Span.displayName = 'Align.Span'