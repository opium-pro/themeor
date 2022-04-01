import React from 'react'
import { CommonComponent } from './types'
import { config } from '../config'

const { CommonTag } = config


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
  transition,
  opacity,
  zoom,
  rotate,
  transform,
  cursor,
  pointerEvents,
  getNode,
  delay,
  hidden,
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
  if (transition === true) {
    newStyle.transitionDuration = '300ms'
    newStyle.transitionProperty = 'all'
    newStyle.transitionTimingFunction = 'ease'
  } else if (transition) {
    newStyle.transition = transition as string
  }
  if (opacity) { newStyle.opacity = opacity }
  if (cursor) { newStyle.cursor = cursor }
  if (delay) { newStyle.transitionDelay = delay }
  if (pointerEvents) { newStyle.pointerEvents = pointerEvents as any }
  if (hidden) { newStyle.display = 'none' }

  if (zoom || rotate || transform) { newStyle.transform = '' }
  if (zoom) { newStyle.transform += `scale(${zoom}) ` }
  if (rotate) { newStyle.transform += `rotate(${rotate}) ` }
  if (transform) { newStyle.transform += transform }

  const componentProps = {
    ...restProps,
    style: newStyle,
    children,
  }

  const dontPassName = typeof CommonTag === 'string'

  return typeof children === 'function'
    ? children(componentProps)
    : <CommonTag
      data-themeor={dontPassName ? undefined : name}
      {...componentProps}
      ref={forwardRef || getNode}
    />
}