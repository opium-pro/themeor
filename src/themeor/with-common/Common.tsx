import React, { FC } from 'react'
import { CommonProps } from './types'
import { withTagless } from '../with-tagless'
// import cn from '../utils/class-name'


export type CommonComponent<Props = CommonProps> = FC<Props & CommonProps>


export const withCommon = (Component: CommonComponent) => {
  const makeComponent: CommonComponent = ({
    stretch,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    style = {},
    ...restProps
  }) => {
    const newStyle = { ...style }

    if (stretch) { newStyle.flexGrow = 1 }

    if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
    if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
    if (width) { newStyle.width = width }
    if (height) { newStyle.height = height }
    if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
    if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

    return (
      <Component {...restProps} style={newStyle} />
    )
  }

  type ComponentType = typeof Component & {
    TryTagless?: any
  }

  const CommonComponent: ComponentType = makeComponent
  CommonComponent.TryTagless = withTagless(makeComponent)

  return CommonComponent
}