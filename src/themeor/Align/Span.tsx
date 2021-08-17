import React from 'react'
import Align from './Align'
import { AlignSpanComponent, AlignSpanProps } from './types'
import { withTagless } from '../with-tagless'


const Span = ({ col = 1, style, ...restProps }: AlignSpanProps) => {
  const newStyle: any = {
    ...style,
    gridColumnEnd: `span ${col}`
  }

  const componentProps = {
    ...restProps,
    style: newStyle,
  }

  return Align(componentProps)
}


Span.displayName = 'Align.Span'
export default withTagless(Span) as AlignSpanComponent