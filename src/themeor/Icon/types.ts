import * as Types from '../config-types'

export type IconProps = React.HTMLAttributes<SVGElement> & {
  fill?: string | false,
  inverse?: boolean,
  size?: string | Types.Scale | false,
  name?: string | false,
  forceLine?: boolean,
  forceFill?: boolean,
  forwardRef?: (node: any) => void,
}