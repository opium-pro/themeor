import React from 'react'
import { default as Align } from './align.js'
import { default as Span } from './span.js'
import { AlignProps } from './types.js'

Align.Span = Span
Align.Spacer = (props: any) => <Align {...props} stretch />

export { Align }
export * from './types.js'