import React from 'react'
import Align from './Align'
import { AlignSpanComponent, AlignSpanProps } from './types'
import { withTagless } from '../with-tagless'


const Span = React.forwardRef((
  { col = 1, style, ...restProps }: AlignSpanProps,
  ref: any
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
})


Span.displayName = 'Align.Span'
export default withTagless(Span) as AlignSpanComponent