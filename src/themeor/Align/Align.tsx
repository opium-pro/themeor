import React from 'react'
import cn from '../utils/class-name'
import { half, minus } from '../utils/change-css-value'
import { AlignComponent, AlignProps } from './types'
import { withTagless } from '../with-tagless'
import { useConfig } from '../utils/use-config'
import { useTheme } from '../context'
import { Common } from '../Common'

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

  if (!gapConfig({ size: gapVert }) && !pattern) {
    newStyle.marginTop = minus(half(gapVert))
    newStyle.marginBottom = minus(half(gapVert))
  }
  if (!gapConfig({ size: gapHor }) && !pattern) {
    newStyle.marginRight = minus(half(gapHor))
    newStyle.marginLeft = minus(half(gapHor))
  }
  if (!gapConfig({ size: gapVert }) && !!pattern) {
    newStyle.rowGap = gapVert || undefined
  }
  if (!gapConfig({ size: gapHor }) && !!pattern) {
    newStyle.columnGap = gapHor || undefined
  }

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      `t-align`,
      row && `t-align-row`,
      !row && !stack && !pattern && `t-align-col`,
      vert && `t-align-vert-${vert}`,
      hor && `t-align-hor-${hor}`,
      gapConfig({ size: gapVert }) && `t-align-vert-gap-${gapVert}`,
      gapConfig({ size: gapHor }) && `t-align-hor-gap-${gapHor}`,
      stack && `t-align-stack`,
      stack && `t-align-row`,
      !!pattern && `t-align-pattern`,
      className
    ),
    style: newStyle,
    children,
  }

  const hasGap = !pattern && (gapVert || gapHor)


  function wrapChildren(children: any): React.ReactNode {
    const wrapChildClass = cn(
      gapConfig({ size: gapVert }) && `t-align-item-vert-gap-${gapVert}`,
      gapConfig({ size: gapHor }) && `t-align-item-hor-gap-${gapHor}`,
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