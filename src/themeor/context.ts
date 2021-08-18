import React from 'react'
import { ThemeIcons } from './types'

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
    fill?: { [key: string]: string },
    shadow?: { [key: string]: string },
  },
  line?: object,
  icon?: object,
  normalizedConfig?: ThemeContext,
}

export const ThemeContext: React.Context<ThemeContext> = React.createContext({})

export const useTheme = () => React.useContext(ThemeContext)




export const ConfigContext: React.Context<any> = React.createContext({
  fill: {},
  fillFancy: {},
  fillInversed: {},
  box: {
    fill: {},
    radius: {},
    shadow: {},
    shadowInner: {},
    blur: {},
    glow: {},
  },
  font: {
    fill: {},
    size: {},
    family: {},
    lineHeight: {},
    letterSpacing: {},
  },
  line: {
    fill: {},
    weight: {},
  },
  icon: {
    fill: {},
    size: {},
    set: {},
  },
  gap: {
    size: {},
  },
  reaction: {
    speed: {},
  },
  effect: {
    transparency: {},
  },
  customVariables: {},
})