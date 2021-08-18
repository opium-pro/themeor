import {FC} from 'react'
import { obfuscate, hash } from '../config'

export const ICON_NAME = obfuscate ? hash('Icon') : 'Icon'

export type IconProps = {
  fill?: string | false,
  inverse?: boolean,
  size?: string | false,
  name?: string | false,
  forceLine?: boolean,
  forceFill?: boolean,
  forwardRef?: (node: any) => void,
} & React.HTMLAttributes<SVGElement>


export type IconComponent = FC<IconProps>