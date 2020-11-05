import React from 'react'
import Align from './Align'
import {AlignSpanProps, TaglessAlignProps} from './types'

Span.TryTagless = (props: TaglessAlignProps) => <Span {...props} TRY_TAGLESS />

export default function Span(
  {col = 1, style, ...restProps}: AlignSpanProps,
  ref: React.Ref<any>
) {
  const newStyle: any = {
    ...style,
    gridColumnEnd: `span ${col}`
  }
  return (<Align {...restProps} style={newStyle}  />)
}