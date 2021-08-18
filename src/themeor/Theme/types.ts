import { ThemeConfig, ThemeIcons } from '../types'

export const THEME_NAME = 'Theme'

export type ThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons | false,
  reset?: boolean,
}