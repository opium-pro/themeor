import React from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-names'
import { LineComponent, LineProps, LINE_NAME } from './types'
import { Common } from '../Common'
import { useConfig } from '../utils/use-config'
import { withTagless } from '../with-tagless'
import { useCss } from './styles'


const Line = ({
  className,
  inverse,
  weight,
  fill = 'default',
  top,
  right,
  bottom,
  left,
  children,
  fancy,
  vert,
  style = {},
  ...restProps
}: LineProps, ref: any) => {

  const { TRY_TO_INVERSE } = useTheme()
  const { lineConfig, customLineValue } = useConfig(useTheme())
  const css = useCss()

  const newStyle = { ...style }

  if (fill && customLineValue({ fill })) {
    if (fancy) {
      newStyle.borderImage = lineConfig({ fillFancy: fill })
    } else {
      newStyle.borderColor = fill
    }
  }
  if (weight && customLineValue({ weight })) { newStyle.borderWidth = weight }
  if (top && customLineValue({ weight: top })) { newStyle.borderTopWidth = top }
  if (right && customLineValue({ weight: right })) { newStyle.borderRightWidth = right }
  if (bottom && customLineValue({ weight: bottom })) { newStyle.borderBottomWidth = bottom }
  if (left && customLineValue({ weight: left })) { newStyle.borderLeftWidth = left }

  const separator = !children
  const noSpecificWeight = !right && !left && !top && !bottom

  if (noSpecificWeight && !weight) {
    weight = 'default'
  }

  const forseInverse = (inverse !== false) && (inverse || TRY_TO_INVERSE)

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css[`line`],
      (separator && !vert) && lineConfig({ weight }) && css[`separator-hor-${weight}`],
      (separator && vert) && lineConfig({ weight }) && css[`separator-vert-${weight}`],
      !separator && lineConfig({ weight }) && css[`weight-${weight}`],
      lineConfig({ weight: top }) && css[`weight-top-${top}`],
      lineConfig({ weight: right }) && css[`weight-right-${right}`],
      lineConfig({ weight: bottom }) && css[`weight-bottom-${bottom}`],
      lineConfig({ weight: left }) && css[`weight-left-${left}`],
      lineConfig({ fill }) && css[`fill-${fill}`],
      forseInverse && lineConfig({ fillInversed: fill }) && css[`fill-inversed-${fill}`],
      fancy && lineConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      className
    ),
    style: newStyle,
    children,
  }

  return Common(componentProps, LINE_NAME)
}

Line.displayName = LINE_NAME
export default withTagless(React.forwardRef(Line)) as LineComponent