import React, { forwardRef } from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-names'
import * as console from '../utils/console'
import { IconProps, ICON_NAME, IconComponent } from "./types"
import { useConfig } from '../utils/use-config'
import { useCss } from './styles'


const Icon = ({
  className,
  fill = "default",
  inverse,
  size = "default",
  style = {},
  children,
  name,
  forceLine,
  forceFill,
  forwardRef,
  fancy,
  ...restProps
}: IconProps, ref: any) => {
  const newStyle = { ...style }
  const { icons, TRY_TO_INVERSE } = useTheme()
  const css = useCss()

  const { iconConfig, customIconValue } = useConfig(useTheme())

  function handleRef(node: any) {
    if (!node) { return }

    typeof forwardRef === 'function' && forwardRef(node)
    typeof ref === 'function' && ref(node)

    const pathList = node.querySelectorAll('path')

    if (!iconConfig({ fill })) {
      for (let path of pathList) {
        path.style.fill = fill
      }
    }
  }

  if (customIconValue({ size })) {
    newStyle.width = size || undefined
    newStyle.height = size || undefined
  }

  if (children) {
    console.error(
      'Prop "children" is prohibited, it will be ignored',
      Icon
    )
  }

  // if (!name) {
  //   name = defaultIconName
  // }

  // const makeItLined = forceLine === true || lineIcons === true
  // const makeItFilled = forceFill === true || lineIcons === false

  if (!icons) {
    return null
  }

  // @ts-ignore
  if (!size || !icons[size]) {
    console.error(
      `There is no such size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
      Icon
    )
    return null
  }

  // @ts-ignore
  const FinalIcon = name && icons[size]?.[name]

  if (!FinalIcon) {
    console.error(
      `There is no such Icon like "${name}" with size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
      Icon
    )
    return null
  }

  const forseInverse = (inverse !== false) && (inverse || TRY_TO_INVERSE)

  const componentProps = {
    ...restProps,
    width: undefined,
    height: undefined,
    fill: undefined,
    style: newStyle,
    className: cn(
      css[`icon`],
      // makeItLined && css['force-stroke'],
      // makeItFilled && css['force-fill'],
      iconConfig({ fill }) && css[`fill-${fill}`],
      iconConfig({ size }) && css[`size-${size}`],
      forseInverse && iconConfig({ fillInversed: fill }) && css[`fill-inversed-${fill}`],
      fancy && iconConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      className
    ),
  }

  return (
    <FinalIcon {...componentProps} />
  )
}


Icon.displayName = ICON_NAME
export default React.forwardRef(Icon) as IconComponent