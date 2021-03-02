import {ThemeConfig, ThemeIcons} from '../config-types'

export type PureThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons | false,
  global?: boolean,
  reset?: boolean,
}
export type TaglessThemeProps = PureThemeProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type ThemeProps = TaglessThemeProps & {
  TRY_TAGLESS?: boolean,
}