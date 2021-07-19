import React, {forwardRef} from 'react'
import css from './Icon.module.css'
import {useTheme} from '../context'
import cn from '../utils/class-name'
import isCustomVariable from '../utils/var-is-custom'
import consoleMessage from '../utils/console-message'
import {IconProps} from "./types"

export const Icon = forwardRef(({
  className,
  fill = "base",
  inverse,
  size = "md",
  children,
  name,
  line,
  forwardRef,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  TRY_TAGLESS,
  ...restProps
}: IconProps, ref: any) => {

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

  const makeItLine = (typeof line !== 'undefined') ? line : lineIcons

  if (!icons) {
    return null
  }

  if (!size || !icons[size]) {
    consoleMessage({
      text: `There is no such size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
      type: 'error',
      source: Icon,
    })
    return null
  }

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
    className: cn(
      css.icon,
      makeItLine ? css['line'] : css['not-line'],
      fill && !isCustomVariable(fill) && css[`fill-${fill}`],
      size && css[`size-${size}`],
      (inverse !== false) && (inverse || TRY_TO_INVERSE) && !isCustomVariable(fill) && css.inverse,
      className
    ),
    ref: handleRef,
  }

  return (
    <FinalIcon {...componentProps} />
  )
})