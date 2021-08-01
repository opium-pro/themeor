import React from 'react'
import { ThemeIcons } from './config-types'

export interface ThemeContext {
  shallInverseOn?: string[],
  template?: string | string[],
  TRY_TO_INVERSE?: boolean,
  icons?: ThemeIcons,
  // lineIcons?: boolean,
  themeId?: string,
  darkMode?: boolean,
  // defaultIconName?: string,
  gap?: object,
  fill?: object,
  inverseFill?: object,
  fancyFill?: object,
  font?: object,
  box?: {
    fill?: {[key: string]: string},
    shadow?: {[key: string]: string},
  },
  line?: object,
}

export const ThemeContext: React.Context<ThemeContext> = React.createContext({})

export const useTheme = () => React.useContext(ThemeContext)