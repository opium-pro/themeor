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
  style = {},
  ...restProps
}: LineProps, ref: any) => {

  const { TRY_TO_INVERSE } = useTheme()
  const { lineConfig } = useConfig(useTheme())
  const css = useCss()

  const newStyle = { ...style }

  if (fill && !lineConfig({ fill })) {
    if (fancy) {
      newStyle.borderImage = lineConfig({ fillFancy: fill })
    } else {
      newStyle.borderColor = fill
    }
  }
  if (weight && !lineConfig({ weight })) { newStyle.borderWidth = weight }
  if (top && !lineConfig({ weight: top })) { newStyle.borderTopWidth = top }
  if (right && !lineConfig({ weight: right })) { newStyle.borderRightWidth = right }
  if (bottom && !lineConfig({ weight: bottom })) { newStyle.borderBottomWidth = bottom }
  if (left && !lineConfig({ weight: left })) { newStyle.borderLeftWidth = left }

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
      separator && lineConfig({ weight }) && css[`separator-weight-${weight}`],
      !separator && lineConfig({ weight }) && css[`weight-${weight}`],
      !separator && lineConfig({ weight: top }) && css[`weight-top-${top}`],
      !separator && lineConfig({ weight: right }) && css[`weight-right-${right}`],
      !separator && lineConfig({ weight: bottom }) && css[`weight-bottom-${bottom}`],
      !separator && lineConfig({ weight: left }) && css[`weight-left-${left}`],
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