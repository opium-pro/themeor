import { CommonProps, CommonComponent } from "../Common"
import { TaglessComponent } from "../with-tagless"

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