import React from 'react'
import {ThemeIcons} from './config-types'

export const ThemeContext: React.Context<{
  shallInverseOn?: string[],
  template?: string | string[],
  backIsStrong?: boolean,
  icons?: ThemeIcons,
  themeId?: string,
}> = React.createContext({})