import { ThemeConfig, ThemeIcons } from '../types'

export type ThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons | false,
  reset?: boolean,
}