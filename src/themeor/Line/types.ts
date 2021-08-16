import { CommonProps, CommonComponent } from "../Common"

export type LineProps = CommonProps & {
  fill?: string | false,
  inverse?: boolean,
  weight?: string | 'none' | false,
  top?: string | 'none' | false,
  right?: string | 'none' | false,
  bottom?: string | 'none' | false,
  left?: string | 'none' | false,
  forwardRef?: any,
}

export type LineComponent = CommonComponent<LineProps>