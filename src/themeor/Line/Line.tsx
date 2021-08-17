import React from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-name'
import { LineComponent, LineProps } from './types'
import { Common } from '../Common'
import { useConfig } from '../utils/use-config'
import { withTagless } from '../with-tagless'


const Line = ({
  className,
  inverse,
  weight,
  fill,
  top,
  right,
  bottom,
  left,
  children,
  style = {},
  ...restProps
}: LineProps) => {

  const { TRY_TO_INVERSE } = useTheme()
  const { lineConfig } = useConfig(useTheme())

  const newStyle = { ...style }

  if (fill && !lineConfig({fill})) { newStyle.borderColor = fill || undefined }
  if (weight && !lineConfig({weight})) { newStyle.borderWidth = weight || undefined }
  if (top && !lineConfig({weight: top})) { newStyle.borderTopWidth = top || undefined }
  if (right && !lineConfig({weight: right})) { newStyle.borderRightWidth = right || undefined }
  if (bottom && !lineConfig({weight: bottom})) { newStyle.borderBottomWidth = bottom || undefined }
  if (left && !lineConfig({weight: left})) { newStyle.borderLeftWidth = left || undefined }

  const componentProps = {
    ...restProps,
    className: cn(
      `t-line`,
      (weight || (!right && !left && !top && !bottom)) && `t-line-weight-${weight || 'md'}`,
      lineConfig({weight: top}) && `t-line-top-${top}`,
      lineConfig({weight: right}) && `t-line-right-${right}`,
      lineConfig({weight: bottom}) && `t-line-bottom-${bottom}`,
      lineConfig({weight: left}) && `t-line-left-${left}`,
      lineConfig({fill}) && `t-line-fill-${fill}`,
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && `t-line-inverse`,
      !children && `t-line-separator`,
      className
    ),
    style: newStyle,
    children,
  }

  return Common(componentProps)
}


export default withTagless(Line) as LineComponent