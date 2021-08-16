import { CommonProps, CommonComponent } from "../with-common"

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