import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from "../config"

export const LINE_NAME = obfuscate ? hash('Line') : 'Line'

export type LineProps = CommonProps & {
  fill?: string | false,
  inverse?: boolean,
  fancy?: boolean,
  weight?: string | 'none' | false,
  top?: string | 'none' | false,
  right?: string | 'none' | false,
  bottom?: string | 'none' | false,
  left?: string | 'none' | false,
}

export type LineComponent = TaglessComponent<LineProps>