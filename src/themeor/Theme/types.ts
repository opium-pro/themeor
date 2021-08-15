import { ThemeConfig, ThemeIcons } from '../config-types'

export type ThemeProps = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons | false,
  reset?: boolean,
}