import * as Types from '../config-types'

export type IconProps = React.HTMLAttributes<SVGElement> & {
  fill?: string | false,
  inverse?: boolean,
  size?: Types.Scale | false,
  name?: string | false,
  line?: boolean,
  forwardRef?: (node: any) => void,

  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  TRY_TAGLESS?: boolean,
}