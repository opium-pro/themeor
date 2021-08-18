import React from 'react'
import { CommonComponent } from './types'

let CommonTag: any = 'div'


export function setCommonTag(tag: any) {
  CommonTag = tag
}


export const Common: CommonComponent = ({
  stretch,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  style = {},
  children,
  forwardRef,
  ...restProps
}, name?: string) => {
  const newStyle = { ...style }

  if (stretch) { newStyle.flexGrow = 1 }

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

  const componentProps = {
    ...restProps,
    style: newStyle,
    children,
  }

  return typeof children === 'function'
    ? children(componentProps)
    : <CommonTag data-name={name} {...componentProps} ref={forwardRef} />
}