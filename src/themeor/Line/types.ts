import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from "../config"

export const LINE_NAME = obfuscate ? hash('Line') : 'Line'

export type LineConfigProps = {
  fill?: string | false
  weight?: string | 'none' | false
}

export type LineProps = CommonProps & LineConfigProps & {
  inverse?: boolean
  fancy?: boolean
  top?: string | 'none' | false
  right?: string | 'none' | false
  bottom?: string | 'none' | false
  left?: string | 'none' | false
  vert?: boolean
}

export type LineComponent = TaglessComponent<LineProps>