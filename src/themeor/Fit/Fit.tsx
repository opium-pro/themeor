import React from 'react'
import cn from '../utils/class-names'
import { FitComponent, FitProps, FIT_NAME } from './types'
import { minus } from '../utils/change-css-value'
import { Common } from '../Common'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'
import { withTagless } from '../with-tagless'
import {useCss} from './styles'

const Fit = ({
  left,
  top,
  right,
  bottom,
  offset,
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  zIndex,
  stick,
  isNotParent,
  static: isStatic,
  cover,
  scroll,
  style = {},
  inline,
  clip,
  className,
  children,
  sticky,
  fixed,
  absolute,
  ...restProps
}: FitProps, ref: any) => {

  const context = useTheme()
  const { fitConfig, customFitValue } = useConfig(context)
  const css = useCss()

  const newStyle = { ...style }
  if (customFitValue({shift: left})) { newStyle.left = left || undefined }
  if (customFitValue({shift: top})) { newStyle.top = top || undefined }
  if (customFitValue({shift: right})) { newStyle.right = right || undefined }
  if (customFitValue({shift: bottom})) { newStyle.bottom = bottom || undefined }
  if (customFitValue({zIndex})) { newStyle.zIndex = zIndex || undefined }
  if (customFitValue({offset})) { newStyle.margin = minus(offset) }
  if (customFitValue({offset: offsetTop})) { newStyle.marginTop = minus(offsetTop) }
  if (customFitValue({offset: offsetBottom})) { newStyle.marginBottom = minus(offsetBottom) }
  if (customFitValue({offset: offsetRight})) { newStyle.marginRight = minus(offsetRight) }
  if (customFitValue({offset: offsetLeft})) { newStyle.marginLeft = minus(offsetLeft) }

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css[`fit`],
      clip && css[`clip`],
      scroll && css[`scroll`],
      inline && css[`inline`],
      stick && css[`stick-${stick}`],
      cover && css[`cover-${cover}`],
      stick && !cover && css[`stick-parent`],
      fitConfig({zIndex}) && css[`z-index-${zIndex}`],
      fitConfig({offset}) && css[`offset-${offset}`],
      fitConfig({offset: offsetTop}) && css[`offset-top-${offsetTop}`],
      fitConfig({offset: offsetBottom}) && css[`offset-bottom-${offsetBottom}`],
      fitConfig({offset: offsetRight}) && css[`offset-right-${offsetRight}`],
      fitConfig({offset: offsetLeft}) && css[`offset-left-${offsetLeft}`],
      fitConfig({shift: top}) && css[`shift-top-${top}`],
      fitConfig({shift: bottom}) && css[`shift-bottom-${bottom}`],
      fitConfig({shift: right}) && css[`shift-right-${right}`],
      fitConfig({shift: left}) && css[`shift-left-${left}`],
      (isNotParent || isStatic) && css[`static`],
      sticky && css[`sticky`],
      fixed && css[`fixed`],
      absolute && css[`absolute`],
      inline === false && css[`block`],
      className
    ),
    style: newStyle,
    children,
  }

  return Common(componentProps, FIT_NAME)
}

Fit.displayName = FIT_NAME
export default withTagless(React.forwardRef(Fit)) as FitComponent