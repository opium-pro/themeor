import React from 'react'
import css from './Icon.module.scss'
import {ThemeContext} from '../context'
import cn from '../utils/class-name'
import * as Types from '../config-types'
import isCustomVariable from '../utils/var-is-custom'
import consoleMessage from '../utils/console-message'
import newId from '../utils/new-id'

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  fill?: string,
  inverse?: boolean,
  size: Types.Scale,
  name: string,
  forwardedRef?: (node: any) => void,
}

export default class Icon extends React.PureComponent<IconProps> {
  static contextType = ThemeContext
  static defaultProps = {size: 'md', name: 'placeholder', fill: 'base'}
  static id = newId()

  render() {
    const {
      className,
      fill,
      inverse,
      size,
      children,
      name,
      forwardedRef,
      ...restProps
    } = this.props

    if (children) {
      consoleMessage({
        text: 'Prop "children" is prohibited, it will be ignored',
        type: 'error',
        source: this,
      })
    }

    const {icons} = this.context

    if (!icons) {
      return null
    }

    if (!icons[size]) {
      consoleMessage({
        text: `There is no such size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
        type: 'error',
        source: this,
      })
      return null
    }

    const FinalIcon = icons[size][name]

    if (!FinalIcon) {
      consoleMessage({
        text: `There is no such Icon like "${name}" with size "${size}"\nCheck if you imported icons correctrly.\nMore info http://themoir.opium.pro/icons`,
        type: 'error',
        source: this,
      })
      return null
    }

    const {backIsStrong} = this.context

    const componentProps = {
      width: undefined,
      height: undefined,
      fill: undefined,
      className: cn(
        css.icon,
        fill && !isCustomVariable(fill) && css[`fill-${fill}`],
        size && css[`size-${size}`],
        (inverse !== false) && (inverse || backIsStrong) && !isCustomVariable(fill) && css.inverse,
        className
      ),
      ref: forwardedRef,
      ...restProps
    }

    // if (isCustomVariable(fill)) {}

    return (
      <FinalIcon {...componentProps} />
    )
  }
}