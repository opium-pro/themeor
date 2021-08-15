import React from 'react'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import {isCustomValue, isCustomVariable} from '../utils/is-custom'
import {LineProps} from './types'
import { withCommon, CommonComponent } from '../with-common'


export const Line: CommonComponent<LineProps> = withCommon(({
  className,
  inverse,
  weight,
  fill,
  top,
  right,
  bottom,
  left,
  forwardRef,
  children,
  style = {},
  ...restProps
}: LineProps, ref: React.Ref<any>) => {

  const {TRY_TO_INVERSE} = useTheme()

  const newStyle = {...style}

  if (isCustomVariable(fill)) { newStyle.borderColor = `var(${fill})` }

  if (isCustomValue(fill)) { newStyle.borderColor = fill || undefined}
  if (isCustomValue(weight)) { newStyle.borderWidth = weight || undefined}
  if (isCustomValue(top)) { newStyle.borderTopWidth = top || undefined}
  if (isCustomValue(right)) { newStyle.borderRightWidth = right || undefined}
  if (isCustomValue(bottom)) { newStyle.borderBottomWidth = bottom || undefined}
  if (isCustomValue(left)) { newStyle.borderLeftWidth = left || undefined}

  const componentProps = {
    ...restProps,
    className: cn(
      `t-line`,
      (weight || (!right && !left && !top && !bottom)) && `t-line-weight-${weight || 'md'}`,
      !isCustomValue(top) && `t-line-top-${top}`,
      !isCustomValue(right) && `t-line-right-${right}`,
      !isCustomValue(bottom) && `t-line-bottom-${bottom}`,
      !isCustomValue(left) && `t-line-left-${left}`,
      !isCustomValue(fill) && !isCustomVariable(fill) && `t-line-fill-${fill}`,
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && !isCustomVariable(fill) && `t-line-inverse`,
      React.Children.count(children) === 0 && `t-line-separator`,
      className
    ),
    style: newStyle,
    children,
  }

  return <div ref={forwardRef} {...componentProps} />
})