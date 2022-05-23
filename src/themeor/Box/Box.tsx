import React from 'react'
import { useBox, BoxContext } from './context'
import { useTheme } from '../context'
import cn from '../utils/class-names'
import { Line } from '../Line'
import { BoxProps, BoxComponent, BOX_NAME } from './types'
import { getConfig } from '../utils/get-config'
import { Common } from '../Common'
import { withTagless } from '../with-tagless'
import {useCss} from './styles'


const Box = (props: BoxProps, ref: any) => {
  const {
    className,
    fill = "default",
    borderFill,
    borderWeight,
    borderRight,
    borderLeft,
    borderTop,
    borderBottom,
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
    shadow,
    shadowInner,
    blur,
    glow,
    img,
    noContext,
    style = {},
    ...restProps
  } = props

  const context = useBox()
  const { normalizedConfig } = useTheme()
  const { boxConfig, customBoxValue } = getConfig(normalizedConfig)
  const newStyle = { ...style }
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
  if (customBoxValue({ radius })) {
    newStyle.borderTopLeftRadius = radius || undefined
    newStyle.borderTopRightRadius = radius || undefined
    newStyle.borderBottomLeftRadius = radius || undefined
    newStyle.borderBottomRightRadius = radius || undefined
  }
  if (customBoxValue({ radiusTop })) {
    newStyle.borderTopLeftRadius = radiusTop || undefined
    newStyle.borderTopRightRadius = radiusTop || undefined
  }
  if (customBoxValue({ radius: radiusRight })) {
    newStyle.borderTopRightRadius = radiusRight || undefined
    newStyle.borderBottomRightRadius = radiusRight || undefined
  }
  if (customBoxValue({ radius: radiusLeft })) {
    newStyle.borderTopLeftRadius = radiusLeft || undefined
    newStyle.borderBottomLeftRadius = radiusLeft || undefined
  }
  if (customBoxValue({ radius: radiusBottom })) {
    newStyle.borderBottomLeftRadius = radiusBottom || undefined
    newStyle.borderBottomRightRadius = radiusBottom || undefined
  }
  if (customBoxValue({ radius: radiusTopLeft })) { newStyle.borderTopLeftRadius = radiusTopLeft || undefined }
  if (customBoxValue({ radius: radiusTopRight })) { newStyle.borderTopRightRadius = radiusTopRight || undefined }
  if (customBoxValue({ radius: radiusBottomLeft })) { newStyle.borderBottomLeftRadius = radiusBottomLeft || undefined }
  if (customBoxValue({ radius: radiusBottomRight })) { newStyle.borderBottomRightRadius = radiusBottomRight || undefined }

  if (customBoxValue({ shadow })) { newStyle.boxShadow = shadow || undefined as any }
  if (customBoxValue({ shadowInner })) { newStyle.boxShadow = 'inset ' + shadowInner }
  if (customBoxValue({ blur })) { newStyle.backdropFilter = `blur(${blur})` }
  if (customBoxValue({ glow })) { newStyle.boxShadow = glow || undefined as any }

  // Setting classNames
  const componentProps = {
    forwardRef: ref,
    ...restProps,
    className: cn(
      css['box'],
      img && css['img'],
      boxConfig({ fill }) && css[`fill-${fill}`],
      inverse && boxConfig({ fillInverse: fill }) && css[`fill-inverse-${fill}`],
      fancy && boxConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      boxConfig({ shadow }) && css[`shadow-${shadow}`],
      boxConfig({ blur }) && css[`blur-${blur}`],
      boxConfig({ shadowInner }) && css[`shadow-inner-${shadowInner}`],
      boxConfig({ glow }) && css[`glow-${glow}`],
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
      <Line.TryTagless
        fill={borderFill}
        weight={borderWeight}
        left={borderLeft}
        right={borderRight}
        top={borderTop}
        bottom={borderBottom}
      >
        {Common(componentProps, BOX_NAME)}
      </Line.TryTagless>
    )
  }


  if (noContext) {
    return renderBoxComponent
  }

  // Automatically inverse text and other stuff on this background
  let inverseStatus: boolean | undefined
  inverseStatus = inverse || (!!fill && normalizedConfig?.shallInverseOn?.includes(fill))

  if (!fill || fill === 'none') {
    inverseStatus = context.TRY_TO_INVERSE
  }

  const newContext = {
    ...context,
    TRY_TO_INVERSE: inverseStatus,
  }

  return (
    <BoxContext.Provider value={newContext}>
      {renderBoxComponent}
    </BoxContext.Provider>
  )
}


Box.displayName = BOX_NAME
export default withTagless(React.forwardRef(Box)) as BoxComponent