import { CommonProps } from "../Common"
import { TaglessComponent } from "../with-tagless"
import { obfuscate, hash } from "../config"

export const GAP_NAME = obfuscate ? hash('Gap') : 'Gap'

export type GapProps = CommonProps & {
  size?: string | 'none' | false,
  vert?: string | 'none' | false,
  hor?: string | 'none' | false,
  top?: string | 'none' | false,
  right?: string | 'none' | false,
  bottom?: string | 'none' | false,
  left?: string | 'none' | false,
  inrow?: boolean,
}

export type GapComponent = TaglessComponent<GapProps>