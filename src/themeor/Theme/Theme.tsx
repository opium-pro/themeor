import React, { useEffect, useState, FC } from 'react'
import newId from '../utils/new-id'
import { ThemeContext } from '../context'
import isDarkMode from '../utils/is-dark-mode'
import { ThemeProps, THEME_NAME } from './types'
import setBoxStyle from '../Box/styles'
import setFontStyle from '../Font/styles'
import setGapStyle from '../Gap/styles'
import setAlignStyle from '../Align/styles'
// import setAlimateStyle from '../Alimate/styles'
import setLineStyle from '../Line/styles'
import setIconStyle from '../Icon/styles'
import setReactionStyle from '../Reaction/styles'
import setFitStyle from '../Fit/styles'
import setEffectStyle from '../Effect/styles'
import { normalizeConfig } from '../utils/normalize-config'


export const Theme: FC<ThemeProps> = ({
  children,
  icons,
  darkConfig,
  reset,
  config = {},
}) => {
  const [id] = useState(newId())
  const [currentConfig, setCurrentConfig] = React.useState(config)

  function changeColorMode() {
    if (darkConfig && isDarkMode()) {
      setCurrentConfig(darkConfig)
    } else if (currentConfig != config) {
      setCurrentConfig(config)
    }
  }

  useEffect(() => {
    changeColorMode()
  }, [config, darkConfig])

  // Update
  useEffect(() => {
    const normalizedConfig = normalizeConfig(currentConfig)
    setBoxStyle(normalizedConfig)
    setFontStyle(normalizedConfig)
    setAlignStyle(normalizedConfig)
    setGapStyle(normalizedConfig)
    setFitStyle(normalizedConfig)
    setLineStyle(normalizedConfig)
    setReactionStyle(normalizedConfig)
    setIconStyle(normalizedConfig)
    setEffectStyle(normalizedConfig)
  }, [currentConfig])


  // Track dark mode
  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    darkConfig && colorScheme.addEventListener && colorScheme.addEventListener('change', changeColorMode)
    return () => {
      colorScheme.removeEventListener && colorScheme.removeEventListener('change', changeColorMode)
    }
  }, [])

  reset && import('./reset')

  const context = {
    ...currentConfig,
    icons,
    themeId: id,
    darkMode: isDarkMode(),
    normalizedConfig: normalizeConfig(currentConfig),
  }

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}


Theme.displayName = THEME_NAME