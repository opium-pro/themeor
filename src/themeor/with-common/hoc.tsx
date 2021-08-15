import React, { FC, forwardRef } from 'react'
import { CommonProps } from './types'
import { withTagless } from '../with-tagless'


export type CommonComponent<Props = CommonProps> = FC<Props & CommonProps> & {
  TryTagless?: any,
}


export const withCommon = (Component: CommonComponent<any>) => {
  const makeComponent: CommonComponent = forwardRef(({
    stretch,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    style = {},
    ...restProps
  }, ref: React.Ref<any>) => {
    const newStyle = { ...style }

    if (stretch) { newStyle.flexGrow = 1 }

    if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
    if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
    if (width) { newStyle.width = width }
    if (height) { newStyle.height = height }
    if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
    if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

    return Component({...restProps, style: newStyle}, ref)
  })

  const CommonComponent = makeComponent
  CommonComponent.TryTagless = withTagless(makeComponent)

  return CommonComponent
}