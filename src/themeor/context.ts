import React from 'react'
import { ThemeIcons, ThemeConfig } from './types'

export interface ThemeContext {
  shallInverseOn?: string[],
  template?: string | string[],
  TRY_TO_INVERSE?: boolean,
  icons?: ThemeIcons,
  // lineIcons?: boolean,
  themeId?: string,
  darkMode?: boolean,
  gap?: object,
  fill?: object,
  fillInverse?: object,
  fillFancy?: object,
  font?: object,
  box?: {
    fill?: { [key: string]: string },
    shadow?: { [key: string]: string },
  },
  line?: object,
  icon?: object,
  normalizedConfig?: ThemeContext,
}

export const ThemeContext: React.Context<ThemeContext> = React.createContext({})
export const useTheme = () => React.useContext(ThemeContext)

export type ConfigContext = {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig,
  icons?: ThemeIcons,
  currentConfig?: ThemeConfig,
  setCurrentConfig?: (config: ThemeConfig) => any,
}


export const ConfigContext: React.Context<ConfigContext> = React.createContext({})
export const useConfig = () => React.useContext(ConfigContext)