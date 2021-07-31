import React from 'react'
import css from './Icon.module.css'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import {isCustomValue, isCustomVariable} from '../utils/is-custom'
import consoleMessage from '../utils/console-message'
import {IconProps} from "./types"

export const Icon = React.forwardRef(({
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
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  TRY_TAGLESS,
  ...restProps
}: IconProps, ref: any) => {
  const newStyle = {...style}

  function handleRef (node: any) {
    if (!node) {return}

    typeof forwardRef === 'function' && forwardRef(node)
    // typeof ref === 'function' && ref(node)

    const pathList = node.querySelectorAll('path')

    if (isCustomVariable(fill)) {
      for (let path of pathList) {
        path.style.fill = `var(${fill})`
      }
    }
  }

  if (fill && isCustomValue(fill)) {
    consoleMessage({
      text: 'Sorry, themeor icons dont support yet custom values for fill. Use a variable instead',
      source: Icon,
    })
  }

  if (isCustomValue(size)) {
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

  const {icons, lineIcons, TRY_TO_INVERSE, defaultIconName} = useTheme()

  if (!name) {
    name = defaultIconName
  }

  const makeItLined = forceLine === true || lineIcons === true
  const makeItFilled = forceFill === true || lineIcons === false

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
      css.icon,
      makeItLined && css['force-stroke'],
      makeItFilled && css['force-fill'],
      !isCustomValue(fill) && !isCustomVariable(fill) && css[`fill-${fill}`],
      !isCustomValue(size) && css[`size-${size}`],
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && !isCustomVariable(fill) && css.inverse,
      className
    ),
    ref: handleRef,
  }

  return (
    <FinalIcon {...componentProps} />
  )
})