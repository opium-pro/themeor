import React, { useRef } from 'react'
import { useTheme } from '../context'
import cn from '../utils/class-names'
import * as console from '../utils/console'
import { IconProps, ICON_NAME, IconComponent } from "./types"
import { getConfig } from '../utils/get-config'
import { useCss } from './styles'
import { setStyles } from '../utils/styles'

let id = 0

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
  const thisId = useRef(++id)
  const newStyle = { ...style }
  const { icons, TRY_TO_INVERSE } = useTheme()
  const css = useCss()

  const { iconConfig, customIconValue } = getConfig(useTheme())

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
    newStyle.minWidth = size || undefined
    newStyle.minHeight = size || undefined
    size = 'default'
  }

  let additionalClassName
  if (customIconValue({ fill })) {
    additionalClassName = `t-icon-fill-${thisId.current}`
    setStyles(additionalClassName, `
      .${additionalClassName} *[fill]:not([fill="none"]) {fill: ${fill}}
      .${additionalClassName} *[stroke]:not([stroke="none"]) {stroke: ${fill}}
    `)
  }

  if (children) {
    console.error(
      'Prop "children" is prohibited, it will be ignored',
      Icon
    )
  }

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
      forceLine && css[`force-stroke-${fill}${forseInverse ? '-inverse' : fancy ? '-fancy' : ''}`],
      forceFill && css[`force-fill-${fill}${forseInverse ? '-inverse' : fancy ? '-fancy' : ''}`],
      iconConfig({ fill }) && css[`fill-${fill}`],
      iconConfig({ size }) && css[`size-${size}`],
      forseInverse && iconConfig({ fillInverse: fill }) && css[`fill-inverse-${fill}`],
      fancy && iconConfig({ fillFancy: fill }) && css[`fill-fancy-${fill}`],
      additionalClassName,
      className
    ),
  }

  return (
    <FinalIcon {...componentProps} />
  )
}


Icon.displayName = ICON_NAME
export default React.forwardRef(Icon) as IconComponent