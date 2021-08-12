import React from 'react'
import css from './Align.module.css'
import cn from '../utils/class-name'
import { TryTagless } from '../with-tagless'
import consoleMessage from '../utils/console-message'
import { isInScale } from '../utils/opium-scale'
import { half, minus } from '../utils/change-css-value'
import { AlignProps, TaglessAlignProps } from './types'
import { Span } from './Span'
import { Spacer } from './Spacer'

Align.Span = Span
Align.Spacer = Spacer
Align.TryTagless = (props: TaglessAlignProps) => <Align {...props} TRY_TAGLESS />

export function Align({
  row,
  vert = "top",
  hor = "stretch",
  className,
  TRY_TAGLESS,
  pattern,
  gapVert,
  gapHor,
  style = {},
  stack,
  FORCE_TAGLESS,
  forwardRef,
  TRY_RECURSIVE_TAGLESS,
  children,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  ...restProps
}: AlignProps, ref: React.Ref<any>) {

  const newStyle = { ...style }
  if (!!pattern) { newStyle.gridTemplateColumns = pattern }

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }
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
      css.align,
      row && css.row,
      !row && !stack && !pattern && css.col,
      vert && css[`vert-${vert}`],
      hor && css[`hor-${hor}`],
      isInScale(gapVert) && css[`vert-gap-${gapVert}`],
      isInScale(gapHor) && css[`hor-gap-${gapHor}`],
      stack && css.stack,
      stack && css.row,
      !!pattern && css.pattern,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  let tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  const hasGap = !pattern && (gapVert || gapHor)


  function wrapChildren(children: any): React.ReactNode {
    const wrapChildClass = cn(
      isInScale(gapVert) && css[`item-vert-gap-${gapVert}`],
      isInScale(gapHor) && css[`item-hor-gap-${gapHor}`],
    )

    const wrapChildStyle = {
      paddingRight: (!isInScale(gapHor) && half(gapHor)) || undefined,
      paddingLeft: (!isInScale(gapHor) && half(gapHor)) || undefined,
      paddingTop: (!isInScale(gapVert) && half(gapVert)) || undefined,
      paddingBottom: (!isInScale(gapVert) && half(gapVert)) || undefined,
      boxSizing: 'border-box' as any,
    }

    return React.Children.map(children, (child: any) => {
      if (tryTagless && React.Children.count(children) === 1 && child.type?.TryTagless) {
        const Child = child.type
        const { children: subChildren, ...restChildProps } = child.props
        return (
          <Child
            {...restChildProps}
            TRY_TAGLESS={TRY_TAGLESS}
            FORCE_TAGLESS={FORCE_TAGLESS}
            TRY_RECURSIVE_TAGLESS={TRY_RECURSIVE_TAGLESS}
          >
            {wrapChildren(subChildren)}
          </Child>
        )
      } else {
        return <div className={wrapChildClass} style={wrapChildStyle}>{child}</div>
      }
    })
  }

  if (hasGap) {
    if (tryTagless) {
      consoleMessage({
        text: 'Using "gapVert" and "gapHor" at the same time with "TryTagless" and one of "row" or "stack" may cause unexpected behaviour in some cases. Try using "pattern" instead of "row" or "stack". Or use a composition with "Gap" component instead of "gapVert" and "gapHor" in props',
        type: 'warn',
        source: Align,
      })
    }
    componentProps.children = wrapChildren(children)
  }


  return tryTagless ? (
    <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={forwardRef} {...componentProps} />
  )
}