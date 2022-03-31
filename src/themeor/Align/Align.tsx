import React from 'react'
import cn from '../utils/class-names'
import { half, minus } from '../utils/change-css-value'
import { AlignComponent, AlignProps, ALIGN_NAME } from './types'
import { withTagless } from '../with-tagless'
import { getConfig } from '../utils/get-config'
import { useTheme } from '../context'
import { Common } from '../Common'
import { useCss } from './styles'


const Align = ({
  row,
  vert = "top",
  hor = "stretch",
  className,
  pattern,
  gapVert,
  gapHor,
  style = {},
  stack,
  children,
  ...restProps
}: AlignProps, ref: any) => {
  const { gapConfig } = getConfig(useTheme().normalizedConfig)
  const css = useCss()

  const newStyle = { ...style }
  if (!!pattern) { newStyle.gridTemplateColumns = pattern }

  if (gapVert && !gapConfig({ size: gapVert }) && !pattern) {
    newStyle.marginTop = minus(half(gapVert))
    newStyle.marginBottom = minus(half(gapVert))
  }
  if (gapHor && !gapConfig({ size: gapHor }) && !pattern) {
    newStyle.marginRight = minus(half(gapHor))
    newStyle.marginLeft = minus(half(gapHor))
  }
  if (gapVert && !gapConfig({ size: gapVert }) && !!pattern) {
    newStyle.rowGap = gapVert || undefined
  }
  if (gapHor && !gapConfig({ size: gapHor }) && !!pattern) {
    newStyle.columnGap = gapHor || undefined
  }

  const mode = (!!pattern && 'pattern') || ((row || stack) && 'row') || 'col'

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css[`align`],
      css[mode],
      vert && css[`${mode}-vert-${vert}`],
      hor && css[`${mode}-hor-${hor}`],
      !pattern && gapConfig({ size: gapVert }) && css[`vert-gap-${gapVert}`],
      !pattern && gapConfig({ size: gapHor }) && css[`hor-gap-${gapHor}`],
      pattern && gapConfig({ size: gapVert }) && css[`pattern-vert-gap-${gapVert}`],
      pattern && gapConfig({ size: gapHor }) && css[`pattern-hor-gap-${gapHor}`],
      className
    ),
    style: newStyle,
    children,
  }

  const hasGap = !pattern && (gapVert || gapHor)


  function wrapChildren(children: any): React.ReactNode {
    const wrapChildClass = cn(
      gapConfig({ size: gapVert }) && css[`item-vert-gap-${gapVert}`],
      gapConfig({ size: gapHor }) && css[`item-hor-gap-${gapHor}`],
    )

    const wrapChildStyle = {
      paddingRight: (!gapConfig({ size: gapHor }) && half(gapHor)) || undefined,
      paddingLeft: (!gapConfig({ size: gapHor }) && half(gapHor)) || undefined,
      paddingTop: (!gapConfig({ size: gapVert }) && half(gapVert)) || undefined,
      paddingBottom: (!gapConfig({ size: gapVert }) && half(gapVert)) || undefined,
      boxSizing: 'border-box' as any,
    }

    return React.Children.map(children, (child: any) => {
      return Common({
        className: wrapChildClass,
        style: wrapChildStyle,
        children: child,
      }, 'align-item')
    })
  }

  if (hasGap) {
    componentProps.children = wrapChildren(children)
  }


  return Common(componentProps, ALIGN_NAME)
}


Align.displayName = ALIGN_NAME
export default withTagless(React.forwardRef(Align)) as AlignComponent