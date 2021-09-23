import React from 'react'
import { default as Align } from './Align'
import { default as Span } from './Span'
import { AlignProps } from './types'

Align.Span = Span
Align.Spacer = (props: any) => <Align {...props} stretch />

export { Align }
export * from './types'