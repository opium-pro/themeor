import {FC} from 'react'
import { obfuscate, hash } from '../config'
import { CommonProps } from '../Common'

export const ICON_NAME = obfuscate ? hash('Icon') : 'Icon'

export type IconConfigProps = {
  fill?: string | false
  size?: string | false
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