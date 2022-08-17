import { ThemeConfig, ThemeIcons } from '../types.js'
import { componentName } from '../utils/component-name.js'

export const THEME_NAME = componentName('Theme')

export type ThemeProps = {
  config?: ThemeConfig
  darkConfig?: ThemeConfig | false
  icons?: ThemeIcons
  reset?: boolean
}