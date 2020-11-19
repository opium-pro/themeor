import React from 'react'
import css from './Box.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import isCustomVariable from '../utils/var-is-custom'
import TryTagless from '../TryTagless'
import Line from '../Line'
import {BoxProps, TaglessBoxProps} from './types'
import splitFill from '../utils/split-fill'


Box.TryTagless = (props: TaglessBoxProps) => <Box {...props} TRY_TAGLESS />

export default function Box(props: BoxProps, ref?: React.Ref<any>) {
  const {
    className,
    fill = "none",
    borderFill,
    borderWeight,
    inverse,
    radius,
    radiusTop,
    radiusRight,
    radiusLeft,
    radiusBottom,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomRight,
    radiusBottomLeft,
    FORCE_TAGLESS,
    TRY_TAGLESS,
    fancy,
    strong,
    shadow,
    shadowInner,
    blur,
    glow,
    children,
    forwardRef,
    img,
    noContext,
    TRY_RECURSIVE_TAGLESS,
    style = {},
    ...restProps
  } = props

  const newStyle: any = {...style}

  if (img) {
    newStyle.backgroundImage = `url('${img}')`
  }

  if (isCustomVariable(fill)) {
    if (fancy) {
      newStyle.backgroundImage = `var(${fill})`
    } else {
      newStyle.backgroundColor = `var(${fill})`
    }
  }

  const context = React.useContext(ThemeContext)

  const componentProps = {
    className: cn(
      css.box,
      img && css.img,
      fill && !isCustomVariable(fill) && css[`fill-${fill}`],
      (strong || inverse) && (!fill || fill === 'none') && css[`fill-base`],
      fancy && css.fancy,
      strong && css.strong,
      shadow && css[`shadow-${shadow}`],
      blur && css[`blur-${blur}`],
      shadowInner && css[`shadow-inner-${shadowInner}`],
      glow && css[`glow-${shadowInner}`],
      radius && css[`radius-${radius}`],
      radiusTop && css[`radius-top-${radiusTop}`],
      radiusRight && css[`radius-right-${radiusRight}`],
      radiusLeft && css[`radius-left-${radiusLeft}`],
      radiusBottom && css[`radius-bottom-${radiusBottom}`],
      radiusTopLeft && css[`radius-tl-${radiusTopLeft}`],
      radiusTopRight && css[`radius-tr-${radiusTopRight}`],
      radiusBottomLeft && css[`radius-bl-${radiusBottomLeft}`],
      radiusBottomRight && css[`radius-br-${radiusBottomRight}`],
      (inverse !== false) && (inverse || context.TRY_TO_INVERSE) && !isCustomVariable(fill) && css.inverse,
      className
    ),
    children,
    style: newStyle,
    ...restProps,
  }

  const hasBorder = borderFill || borderWeight

  if (hasBorder) {
    const {borderFill, borderWeight, ...boxProps} = props
    return (
      <Line.TryTagless fill={borderFill} weight={borderWeight}>
        <Box {...boxProps} />
      </Line.TryTagless>
    )
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  const renderBoxComponent = tryTagless ? (
    <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
  ) : (
    <div ref={forwardRef} {...componentProps} />
  )

  if (noContext || !context.shallInverseOn) {
    return renderBoxComponent
  }

  // Automatically inverse text and other stuff on this background
  let inverseStatus: boolean | undefined = context.shallInverseOn?.includes(splitFill(fill)) && strong
  if (!fill || fill === 'none' || inverse || context.TRY_TO_INVERSE) {
    if (!strong) {
      inverseStatus = context.TRY_TO_INVERSE
    }
  }
  const newContext = {
    ...context,
    TRY_TO_INVERSE: inverseStatus,
  }

  return (
    <ThemeContext.Provider value={newContext}>
      {renderBoxComponent}
    </ThemeContext.Provider>
  )
}