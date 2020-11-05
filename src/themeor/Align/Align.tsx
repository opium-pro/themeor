import React from 'react'
import css from './Align.module.scss'
import cn from '../utils/class-name'
import TryTagless from '../TryTagless'
import consoleMessage from '../utils/console-message'
import {AlignProps, TaglessAlignProps} from './types'
import Span from './Span'
import Spacer from './Spacer'

Align.Span = Span
Align.Spacer = Spacer
Align.TryTagless = (props: TaglessAlignProps) => <Align {...props} TRY_TAGLESS />

export default function Align({
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
  ...restProps
}: AlignProps, ref: React.Ref<any>) {

  const newStyle: any = {...style}
  if (!!pattern) { newStyle.gridTemplateColumns = pattern }

  const componentProps = {
    className: cn(
      css.align,
      row && css.row,
      !row && !stack && !pattern && css.col,
      vert && css[`vert-${vert}`],
      hor && css[`hor-${hor}`],
      gapVert && css[`vert-gap-${gapVert}`],
      gapHor && css[`hor-gap-${gapHor}`],
      stack && css.stack,
      stack && css.row,
      !!pattern && css.pattern,
      className
    ),
    style: newStyle,
    children,
    ...restProps,
  }

  const hasGap = !pattern && (gapVert || gapHor)
  if (hasGap) {
    if (TRY_TAGLESS) {
      consoleMessage({
        text: 'Sorry, but "gapVert" and "gapHor" can not be used at the same time with "TryTagless" and one of "row" or "stack". It may cause unexpected behaviour. Try using "pattern" instead of "row" or "stack". Or use a composition with "Gap" component instead of "gapVert" and "gapHor" in props',
        type: 'error',
        source: Align,
      })
    }

    const {children: componentChildren, ...restComponentProps} = componentProps
    const wrapChildClass = cn(
      gapVert && css[`item-vert-gap-${gapVert}`],
      gapHor && css[`item-hor-gap-${gapHor}`],
    )
    return (
      <Align {...restComponentProps}>
        {React.Children.map(children, (child: any) => {
          return <div className={wrapChildClass}>{child}</div>
        })}
      </Align>
    )
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS
  return tryTagless ? (
    <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={forwardRef} {...componentProps} />
  )
}