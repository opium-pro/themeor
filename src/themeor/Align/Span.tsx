import React from 'react'
import Align from './align.js'
import { AlignSpanComponent, AlignSpanProps } from './types.js'
import { withTagless } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'


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