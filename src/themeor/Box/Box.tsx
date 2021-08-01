import React from 'react'
import { useTheme, ThemeContext } from '../context'
import cn from '../utils/class-name'
import { TryTagless } from '../TryTagless'
import { Line } from '../Line'
import { BoxProps, TaglessBoxProps } from './types'
import splitFill from '../utils/split-fill'
import { isCustomFill, isCustomVariable, isCustomValue } from '../utils/is-custom'


Box.TryTagless = (props: TaglessBoxProps) => <Box {...props} TRY_TAGLESS />

export function Box(props: BoxProps, ref?: React.Ref<any>) {
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
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    ...restProps
  } = props

  const newStyle = { ...style }

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

  if (isCustomFill(fill)) {
    if (fancy) {
      newStyle.backgroundImage = fill || undefined
    } else {
      newStyle.backgroundColor = fill || undefined
    }
  }

  if (isCustomValue(radius)) { newStyle.borderRadius = radius || undefined }
  if (isCustomValue(radiusTop)) {
    newStyle.borderTopLeftRadius = radiusTop || undefined
    newStyle.borderTopRightRadius = radiusTop || undefined
  }
  if (isCustomValue(radiusRight)) {
    newStyle.borderTopRightRadius = radiusRight || undefined
    newStyle.borderBottomRightRadius = radiusRight || undefined
  }
  if (isCustomValue(radiusLeft)) {
    newStyle.borderTopLeftRadius = radiusLeft || undefined
    newStyle.borderBottomLeftRadius = radiusLeft || undefined
  }
  if (isCustomValue(radiusBottom)) {
    newStyle.borderBottomLeftRadius = radiusBottom || undefined
    newStyle.borderBottomRightRadius = radiusBottom || undefined
  }
  if (isCustomValue(radiusTopLeft)) { newStyle.borderTopLeftRadius = radiusTopLeft || undefined }
  if (isCustomValue(radiusTopRight)) { newStyle.borderTopRightRadius = radiusTopRight || undefined }
  if (isCustomValue(radiusBottomLeft)) { newStyle.borderBottomLeftRadius = radiusBottomLeft || undefined }
  if (isCustomValue(radiusBottomRight)) { newStyle.borderBottomRightRadius = radiusBottomRight || undefined }

  if (isCustomValue(shadow)) { newStyle.boxShadow = shadow || undefined }
  if (isCustomValue(shadowInner)) { newStyle.boxShadow = 'inset ' + shadowInner || undefined }
  if (isCustomValue(blur)) { newStyle.backdropFilter = blur ? `blur(${blur})` : undefined }
  if (isCustomValue(glow)) { newStyle.boxShadow = glow || undefined }

  const context = useTheme()

  if (maxWidth || width) { newStyle.maxWidth = maxWidth || width || undefined }
  if (minWidth || width) { newStyle.minWidth = minWidth || (maxWidth ? undefined : width) || undefined }
  if (width) { newStyle.width = width }
  if (height) { newStyle.height = height }
  if (maxHeight || height) { newStyle.maxHeight = maxHeight || height || undefined }
  if (minHeight || height) { newStyle.minHeight = minHeight || (maxHeight ? undefined : height) || undefined }

  const componentProps = {
    className: cn(
      't-box',
      img && 't-box-img',
      !isCustomFill(fill) && !isCustomVariable(fill) && `t-box-fill-${fill}-${strong ? 'strong' : 'weak'}`,
      (strong || inverse) && (!fill || fill === 'none') && `t-box-fill-base`,
      fancy && 't-box-fancy',
      configShadow[shadow] && `t-box-shadow-${shadow}`,
      !isCustomValue(blur) && `t-box-blur-${blur}`,
      !isCustomValue(shadowInner) && `t-box-shadow-inner-${shadowInner}`,
      !isCustomValue(glow) && `t-box-glow-${shadowInner}`,
      !isCustomValue(radius) && `t-box-radius-${radius}`,
      !isCustomValue(radiusTop) && `t-box-radius-top-${radiusTop}`,
      !isCustomValue(radiusRight) && `t-box-radius-right-${radiusRight}`,
      !isCustomValue(radiusLeft) && `t-box-radius-left-${radiusLeft}`,
      !isCustomValue(radiusBottom) && `t-box-radius-bottom-${radiusBottom}`,
      !isCustomValue(radiusTopLeft) && `t-box-radius-tl-${radiusTopLeft}`,
      !isCustomValue(radiusTopRight) && `t-box-radius-tr-${radiusTopRight}`,
      !isCustomValue(radiusBottomLeft) && `t-box-radius-bl-${radiusBottomLeft}`,
      !isCustomValue(radiusBottomRight) && `t-box-radius-br-${radiusBottomRight}`,
      (inverse !== false) && (inverse || context.TRY_TO_INVERSE) && !isCustomVariable(fill) && 't-box-inverse',
      className
    ),
    children,
    style: newStyle,
    ...restProps,
  }

  const hasBorder = borderFill || borderWeight

  if (hasBorder) {
    const { borderFill, borderWeight, ...boxProps } = props
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
  let inverseStatus: boolean | undefined
  inverseStatus = context.shallInverseOn?.includes(splitFill(fill)) && (isCustomFill(fill) || strong)


  if (context.TRY_TO_INVERSE && !inverse) {
    inverseStatus = false
  }

  if (!fill || fill === 'none' || inverse) {
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