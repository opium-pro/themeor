import {FC} from 'react'
import { componentName } from '../utils/component-name.js'
import { CommonProps } from '../common/index.js'

export const ICON_NAME = componentName('Icon')

export type IconConfigProps = {
  fill?: string | false
  size?: string | false | number
}

export type IconProps = CommonProps & IconConfigProps & {
  inverse?: boolean
  name?: string | false
  forceLine?: boolean
  forceFill?: boolean
  fancy?: boolean
  forwardRef?: (node: any) => void
}


export type IconComponent = FC<IconProps>