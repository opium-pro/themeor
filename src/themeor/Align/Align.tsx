import React from 'react'
import cn from '../utils/class-name'
import { half, minus } from '../utils/change-css-value'
import { AlignComponent, AlignProps } from './types'
import { withTagless } from '../with-tagless'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'
import { Common } from '../Common'
import { css } from './styles'

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
  const { gapConfig } = useConfig(useTheme())

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

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css[`align`],
      row && css[`row`],
      !row && !stack && !pattern && css[`col`],
      vert && css[`vert-${vert}`],
      hor && css[`hor-${hor}`],
      gapConfig({ size: gapVert }) && css[`vert-gap-${gapVert}`],
      gapConfig({ size: gapHor }) && css[`hor-gap-${gapHor}`],
      stack && css[`stack`],
      stack && css[`row`],
      !!pattern && css[`pattern`],
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
      return <div className={wrapChildClass} style={wrapChildStyle}>{child}</div>
    })
  }

  if (hasGap) {
    componentProps.children = wrapChildren(children)
  }


  return Common(componentProps)
}


export default withTagless(React.forwardRef(Align)) as AlignComponent