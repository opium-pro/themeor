import React from 'react'
import { ThemeIcons, ThemeConfig } from './types.js'

export type ThemeContext = {
  icons?: ThemeIcons
  themeId?: string
  darkMode?: boolean
  normalizedConfig?: ThemeConfig
}

export const ThemeContext = React.createContext({} as ThemeContext)
export const useTheme = () => React.useContext(ThemeContext)


export type ConfigContext = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig | false,
  icons?: ThemeIcons,
  currentConfig?: ThemeConfig,
  setCurrentConfig?: (config: ThemeConfig) => void,
}


export const ConfigContext: React.Context<ConfigContext> = React.createContext({})
export const useConfig = () => React.useContext(ConfigContext)