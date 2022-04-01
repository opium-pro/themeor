import { ThemeConfig, ThemeIcons } from '../types'
import { componentName } from '../utils/component-name'

export const THEME_NAME = componentName('Theme')

export type ThemeProps = {
  config?: ThemeConfig
  darkConfig?: ThemeConfig | false
  icons?: ThemeIcons
  reset?: boolean
}