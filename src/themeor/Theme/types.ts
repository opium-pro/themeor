import {ThemeConfig, ThemeIcons} from '../config-types'

export type ThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons | false,
  global?: boolean,
  reset?: boolean,
  forwardRef?: any,
} & React.HTMLAttributes<HTMLDivElement>