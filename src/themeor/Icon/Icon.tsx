import React from 'react'
import {useTheme} from '../context'
import cn from '../utils/class-names'
import * as console from '../utils/console'
import {IconProps} from "./types"
import {useConfig} from '../utils/use-config'

const Icon = ({
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
}: IconProps, ref: any) => {
  const newStyle = {...style}
  const {icons, TRY_TO_INVERSE} = useTheme()

  const {iconConfig} = useConfig(useTheme())

  function handleRef (node: any) {
    if (!node) {return}

    typeof forwardRef === 'function' && forwardRef(node)
    typeof ref === 'function' && ref(node)

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

export default React.forwardRef(Icon)