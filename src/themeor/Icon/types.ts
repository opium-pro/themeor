import * as Types from '../config-types'

export type IconProps = React.HTMLAttributes<SVGElement> & {
  fill?: string,
  inverse?: boolean,
  size?: Types.Scale,
  name?: string,
  forwardRef?: (node: any) => void,

  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  TRY_TAGLESS?: boolean,
}