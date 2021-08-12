import React from 'react'
import { useTheme, ThemeContext } from '../context'
import cn from '../utils/class-name'
import { Line } from '../Line'
import { BoxProps } from './types'
import splitFill from '../utils/split-fill'
import { useConfig } from '../utils/use-config'
import { withCommon, CommonComponent } from '../with-common'


export const Box: CommonComponent<BoxProps> = withCommon((props: BoxProps, ref?: React.Ref<any>) => {
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
    fancy,
    strong,
    shadow,
    shadowInner,
    blur,
    glow,
    children,
    img,
    noContext,
    style = {},
    ...restProps
  } = props

  const context = useTheme()
  const { boxConfig } = useConfig(context)
  const newStyle = { ...style }


  // Setting inline styles

  if (img) {
    newStyle.backgroundImage = `url('${img}')`
  }

  if (!boxConfig({ fill })) {
    if (fancy) {
      newStyle.backgroundImage = fill || undefined
    } else {
      newStyle.backgroundColor = fill || undefined
    }
  }

  if (!boxConfig({ radius })) { newStyle.borderRadius = radius || undefined }
  if (!boxConfig({ radiusTop })) {
    newStyle.borderTopLeftRadius = radiusTop || undefined
    newStyle.borderTopRightRadius = radiusTop || undefined
  }
  if (!boxConfig({ radius: radiusRight })) {
    newStyle.borderTopRightRadius = radiusRight || undefined
    newStyle.borderBottomRightRadius = radiusRight || undefined
  }
  if (!boxConfig({ radius: radiusLeft })) {
    newStyle.borderTopLeftRadius = radiusLeft || undefined
    newStyle.borderBottomLeftRadius = radiusLeft || undefined
  }
  if (!boxConfig({ radius: radiusBottom })) {
    newStyle.borderBottomLeftRadius = radiusBottom || undefined
    newStyle.borderBottomRightRadius = radiusBottom || undefined
  }
  if (!boxConfig({ radius: radiusTopLeft })) { newStyle.borderTopLeftRadius = radiusTopLeft || undefined }
  if (!boxConfig({ radius: radiusTopRight })) { newStyle.borderTopRightRadius = radiusTopRight || undefined }
  if (!boxConfig({ radius: radiusBottomLeft })) { newStyle.borderBottomLeftRadius = radiusBottomLeft || undefined }
  if (!boxConfig({ radius: radiusBottomRight })) { newStyle.borderBottomRightRadius = radiusBottomRight || undefined }

  if (!boxConfig({ shadow })) { newStyle.boxShadow = shadow || undefined }
  if (!boxConfig({ shadowInner })) { newStyle.boxShadow = 'inset ' + shadowInner || undefined }
  if (!boxConfig({ blur })) { newStyle.backdropFilter = blur ? `blur(${blur})` : undefined }
  if (!boxConfig({ glow })) { newStyle.boxShadow = glow || undefined }


  // Setting classNames

  const componentProps = {
    className: cn(
      't-box',
      img && 't-box-img',
      boxConfig({ fill }) && `t-box-fill-${fill}${strong ? '-strong' : '-weak'}`,
      (strong || inverse) && (!fill || fill === 'none') && `t-box-fill-base`,
      fancy && 't-box-fancy',
      boxConfig({ shadow }) && `t-box-shadow-${shadow}`,
      boxConfig({ blur }) && `t-box-blur-${blur}`,
      boxConfig({ shadowInner }) && `t-box-shadow-inner-${shadowInner}`,
      boxConfig({ glow }) && `t-box-glow-${shadowInner}`,
      boxConfig({ radius }) && `t-box-radius-${radius}`,
      boxConfig({ radius: radiusTop }) && `t-box-radius-top-${radiusTop}`,
      boxConfig({ radius: radiusRight }) && `t-box-radius-right-${radiusRight}`,
      boxConfig({ radius: radiusLeft }) && `t-box-radius-left-${radiusLeft}`,
      boxConfig({ radius: radiusBottom }) && `t-box-radius-bottom-${radiusBottom}`,
      boxConfig({ radius: radiusTopLeft }) && `t-box-radius-tl-${radiusTopLeft}`,
      boxConfig({ radius: radiusTopRight }) && `t-box-radius-tr-${radiusTopRight}`,
      boxConfig({ radius: radiusBottomLeft }) && `t-box-radius-bl-${radiusBottomLeft}`,
      boxConfig({ radius: radiusBottomRight }) && `t-box-radius-br-${radiusBottomRight}`,
      (inverse !== false) && (inverse || context.TRY_TO_INVERSE) && boxConfig({ fill }) && 't-box-inverse',
      className
    ),
    children,
    style: newStyle,
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

  const renderBoxComponent = (
    <div {...restProps} {...componentProps} />
  )

  if (noContext || !context.shallInverseOn) {
    return renderBoxComponent
  }

  // Automatically inverse text and other stuff on this background
  let inverseStatus: boolean | undefined
  inverseStatus = context.shallInverseOn?.includes(splitFill(fill)) && (!boxConfig({ fill }) || strong)


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
})