import React from 'react'
import {ThemeIcons} from './config-types'

export const ThemeContext: React.Context<{
  shallInverseOn?: string[],
  template?: string | string[],
  TRY_TO_INVERSE?: boolean,
  icons?: ThemeIcons,
  lineIcons?: boolean,
  themeId?: string,
  darkMode?: boolean,
  defaultIconName?: string,
}> = React.createContext({})