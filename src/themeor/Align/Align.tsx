import React from 'react'
import cn from '../utils/class-name'
import { isInScale } from '../utils/opium-scale'
import { half, minus } from '../utils/change-css-value'
import { AlignProps } from './types'
import { withCommon, CommonComponent } from '../with-common'

export const Align: CommonComponent<AlignProps> = withCommon(({
  row,
  vert = "top",
  hor = "stretch",
  className,
  pattern,
  gapVert,
  gapHor,
  style = {},
  stack,
  forwardRef,
  children,
  ...restProps
}: AlignProps, ref) => {

  const newStyle = { ...style }
  if (!!pattern) { newStyle.gridTemplateColumns = pattern }

  if (!isInScale(gapVert) && !pattern) {
    newStyle.marginTop = minus(half(gapVert))
    newStyle.marginBottom = minus(half(gapVert))
  }
  if (!isInScale(gapHor) && !pattern) {
    newStyle.marginRight = minus(half(gapHor))
    newStyle.marginLeft = minus(half(gapHor))
  }
  if (!isInScale(gapVert) && !!pattern) {
    newStyle.rowGap = gapVert || undefined
  }
  if (!isInScale(gapHor) && !!pattern) {
    newStyle.columnGap = gapHor || undefined
  }

  const componentProps = {
    className: cn(
      `t-align`,
      row && `t-align-row`,
      !row && !stack && !pattern && `t-align-col`,
      vert && `t-align-vert-${vert}`,
      hor && `t-align-hor-${hor}`,
      isInScale(gapVert) && `t-align-vert-gap-${gapVert}`,
      isInScale(gapHor) && `t-align-hor-gap-${gapHor}`,
      stack && `t-align-stack`,
      stack && `t-align-row`,
      !!pattern && `t-align-pattern`,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  const hasGap = !pattern && (gapVert || gapHor)


  function wrapChildren(children: any): React.ReactNode {
    const wrapChildClass = cn(
      isInScale(gapVert) && `t-align-item-vert-gap-${gapVert}`,
      isInScale(gapHor) && `t-align-item-hor-gap-${gapHor}`,
    )

    const wrapChildStyle = {
      paddingRight: (!isInScale(gapHor) && half(gapHor)) || undefined,
      paddingLeft: (!isInScale(gapHor) && half(gapHor)) || undefined,
      paddingTop: (!isInScale(gapVert) && half(gapVert)) || undefined,
      paddingBottom: (!isInScale(gapVert) && half(gapVert)) || undefined,
      boxSizing: 'border-box' as any,
    }

    return React.Children.map(children, (child: any) => {
      return <div className={wrapChildClass} style={wrapChildStyle}>{child}</div>
    })
  }

  if (hasGap) {
    componentProps.children = wrapChildren(children)
  }


  return (
    <div ref={ref || forwardRef} {...componentProps} />
  )
})