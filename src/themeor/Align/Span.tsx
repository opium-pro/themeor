import React from 'react'
import Align from './Align'
import { AlignSpanProps } from './types'
import { withCommon, CommonComponent } from '../with-common'


export const Span: CommonComponent<AlignSpanProps> = withCommon((
  { col = 1, style, ...restProps }: AlignSpanProps,
  ref: React.Ref<any>
) => {
  const newStyle: any = {
    ...style,
    gridColumnEnd: `span ${col}`
  }
  return (<Align {...restProps} ref={ref} style={newStyle} />)
})