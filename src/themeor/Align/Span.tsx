import React from 'react'
import Align from './Align'
import { AlignSpanComponent, AlignSpanProps } from './types'
import { withTagless } from '../with-tagless'
import { componentName } from '../utils/component-name'


const Span = ({ col = 1, style, ...restProps }: AlignSpanProps, ref: any) => {
  const newStyle: any = {
    ...style,
    gridColumnEnd: `span ${col}`
  }

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    style: newStyle,
  }

  return <Align {...componentProps} />
}


Span.displayName = componentName('Align.Span')
export default withTagless(React.forwardRef(Span)) as AlignSpanComponent