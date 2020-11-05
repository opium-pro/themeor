import {ThemeConfig, ThemeIcons} from '../config-types'

export type PureThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig,
  icons?: ThemeIcons,
  global?: boolean,
  reset?: boolean,
}
export type TaglessThemeProps = PureThemeProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type ThemeProps = TaglessThemeProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}