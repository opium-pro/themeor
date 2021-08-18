import React from 'react'
import { useTheme, ThemeContext } from '../context'
import cn from '../utils/class-names'
import { Line } from '../Line'
import { BoxProps, BoxComponent, BOX_NAME } from './types'
import { useConfig } from '../utils/use-config'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'
import {useCss} from './styles'


const Box = (props: BoxProps, ref: any) => {
  const {
    className,
    fill = "default",
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
    style = {},
    ...restProps
  } = props

  const context = useTheme()
  const { boxConfig } = useConfig(context)
  const newStyle = { ...style }
  const { normalizedConfig } = context
  const css = useCss()


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

  const forceInverse = (inverse !== false) && (inverse || context.TRY_TO_INVERSE)

  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css['box'],
      img && css['img'],
      boxConfig({ fill }) && css[`fill-${fill}`],
      forceInverse && boxConfig({ fillInversed: fill }) && css[`fill-inversed-${fill}`],
      strong && boxConfig({ fillStrong: fill }) && css[`fill-strong-${fill}`],
      fancy && boxConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      boxConfig({ shadow }) && css[`shadow-${shadow}`],
      boxConfig({ blur }) && css[`blur-${blur}`],
      boxConfig({ shadowInner }) && css[`shadow-inner-${shadowInner}`],
      boxConfig({ glow }) && css[`glow-${shadowInner}`],
      boxConfig({ radius }) && css[`radius-${radius}`],
      boxConfig({ radius: radiusTop }) && css[`radius-top-${radiusTop}`],
      boxConfig({ radius: radiusRight }) && css[`radius-right-${radiusRight}`],
      boxConfig({ radius: radiusLeft }) && css[`radius-left-${radiusLeft}`],
      boxConfig({ radius: radiusBottom }) && css[`radius-bottom-${radiusBottom}`],
      boxConfig({ radius: radiusTopLeft }) && css[`radius-tl-${radiusTopLeft}`],
      boxConfig({ radius: radiusTopRight }) && css[`radius-tr-${radiusTopRight}`],
      boxConfig({ radius: radiusBottomLeft }) && css[`radius-bl-${radiusBottomLeft}`],
      boxConfig({ radius: radiusBottomRight }) && css[`radius-br-${radiusBottomRight}`],
      className
    ),
    style: newStyle,
  }

  let renderBoxComponent = Common(componentProps, BOX_NAME)

  const hasBorder = borderFill || borderWeight

  if (hasBorder) {
    const { borderFill, borderWeight } = props

    renderBoxComponent = (
      <Line.TryTagless fill={borderFill} weight={borderWeight}>
        {Common(componentProps, BOX_NAME)}
      </Line.TryTagless>
    )
  }

  if (noContext || !normalizedConfig?.shallInverseOn) {
    return renderBoxComponent
  }

  // @ts-ignore
  const useOpiumFill: boolean = normalizedConfig?.fill?.[`base-strong`]

  // Automatically inverse text and other stuff on this background
  let inverseStatus: boolean | undefined
  inverseStatus = !!fill && normalizedConfig?.shallInverseOn?.includes(fill)
  
  if (useOpiumFill && !strong) {
    inverseStatus = false
  }


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


Box.displayName = BOX_NAME
export default withTagless(React.forwardRef(Box)) as BoxComponent