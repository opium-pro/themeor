import React from 'react'
import { useTheme, ThemeContext } from '../context'
import cn from '../utils/class-name'
import { Line } from '../Line'
import { BoxProps, BoxComponent } from './types'
import splitFill from '../utils/split-fill'
import { useConfig } from '../utils/use-config'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'


const Box = React.forwardRef((props: BoxProps, ref: any) => {
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
    img,
    noContext,
    forwardRef,
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

  if (fill && !boxConfig({ fill })) {
    if (fancy) {
      newStyle.backgroundImage = fill
    } else {
      newStyle.backgroundColor = fill
    }
  }

  if (radius && !boxConfig({ radius })) { newStyle.borderRadius = radius }
  if (radiusTop && !boxConfig({ radiusTop })) {
    newStyle.borderTopLeftRadius = radiusTop
    newStyle.borderTopRightRadius = radiusTop
  }
  if (radiusRight && !boxConfig({ radius: radiusRight })) {
    newStyle.borderTopRightRadius = radiusRight
    newStyle.borderBottomRightRadius = radiusRight
  }
  if (radiusLeft && !boxConfig({ radius: radiusLeft })) {
    newStyle.borderTopLeftRadius = radiusLeft
    newStyle.borderBottomLeftRadius = radiusLeft
  }
  if (radiusBottom && !boxConfig({ radius: radiusBottom })) {
    newStyle.borderBottomLeftRadius = radiusBottom
    newStyle.borderBottomRightRadius = radiusBottom
  }
  if (radiusTopLeft && !boxConfig({ radius: radiusTopLeft })) { newStyle.borderTopLeftRadius = radiusTopLeft }
  if (radiusTopRight && !boxConfig({ radius: radiusTopRight })) { newStyle.borderTopRightRadius = radiusTopRight }
  if (radiusBottomLeft && !boxConfig({ radius: radiusBottomLeft })) { newStyle.borderBottomLeftRadius = radiusBottomLeft }
  if (radiusBottomRight && !boxConfig({ radius: radiusBottomRight })) { newStyle.borderBottomRightRadius = radiusBottomRight }

  if (shadow && !boxConfig({ shadow })) { newStyle.boxShadow = shadow }
  if (shadowInner && !boxConfig({ shadowInner })) { newStyle.boxShadow = 'inset ' + shadowInner }
  if (blur && !boxConfig({ blur })) { newStyle.backdropFilter = `blur(${blur})` }
  if (glow && !boxConfig({ glow })) { newStyle.boxShadow = glow }


  // Setting classNames

  const componentProps = {
    ...restProps,
    forwardRef: ref || forwardRef,
    className: cn(
      't-box',
      img && 't-box-img',
      boxConfig({ fill }) && `t-box-fill-${fill}`,
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
    style: newStyle,
  }

  let renderBoxComponent = Common(componentProps)

  const hasBorder = borderFill || borderWeight

  if (hasBorder) {
    const { borderFill, borderWeight } = props

    renderBoxComponent = (
      <Line.TryTagless fill={borderFill} weight={borderWeight}>
        {Common(componentProps)}
      </Line.TryTagless>
    )
  }

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


export default withTagless(Box) as BoxComponent