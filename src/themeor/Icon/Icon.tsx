import React from 'react'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import consoleMessage from '../utils/console-message'
import {IconProps} from "./types"
import {useConfig} from '../utils/use-config'

export const Icon = ({
  className,
  fill = "base",
  inverse,
  size = "md",
  style={},
  children,
  name,
  forceLine,
  forceFill,
  forwardRef,
  ...restProps
}: IconProps) => {
  const newStyle = {...style}
  const {icons, TRY_TO_INVERSE} = useTheme()

  const {iconConfig} = useConfig(useTheme())

  function handleRef (node: any) {
    if (!node) {return}

    typeof forwardRef === 'function' && forwardRef(node)

    const pathList = node.querySelectorAll('path')

    if (!iconConfig({fill})) {
      for (let path of pathList) {
        path.style.fill = fill
      }
    }
  }

  if (!iconConfig({size})) {
    newStyle.width = size || undefined
    newStyle.height = size || undefined
  }

  if (children) {
    consoleMessage({
      text: 'Prop "children" is prohibited, it will be ignored',
      type: 'error',
      source: Icon,
    })
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
    consoleMessage({
      text: `There is no such size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
      type: 'error',
      source: Icon,
    })
    return null
  }

  // @ts-ignore
  const FinalIcon = name && icons[size]?.[name]

  if (!FinalIcon) {
    consoleMessage({
      text: `There is no such Icon like "${name}" with size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
      type: 'error',
      source: Icon,
    })
    return null
  }

  const componentProps = {
    ...restProps,
    width: undefined,
    height: undefined,
    fill: undefined,
    style: newStyle,
    className: cn(
      `t-icon`,
      // makeItLined && css['force-stroke'],
      // makeItFilled && css['force-fill'],
      iconConfig({fill}) && `t-icon-fill-${fill}`,
      iconConfig({size}) && `t-icon-size-${size}`,
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && iconConfig({fill}) && `t-icon-inverse`,
      className
    ),
    ref: handleRef,
  }

  return (
    <FinalIcon {...componentProps} />
  )
}