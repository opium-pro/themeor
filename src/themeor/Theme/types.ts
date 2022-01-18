import { ThemeConfig, ThemeIcons } from '../types'
import { obfuscate, hash } from '../config'

export const THEME_NAME = obfuscate ? hash('Theme') : 'Theme'

export type ThemeProps = {
  config?: ThemeConfig
  darkConfig?: ThemeConfig | false
  icons?: ThemeIcons
  reset?: boolean
}