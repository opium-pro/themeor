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
import { normalizeConfig } from '../utils/normalize-config'


export const Theme: FC<ThemeProps> = ({
  children,
  icons,
  darkConfig,
  reset,
  config = {},
}) => {
  const [id] = useState(newId())
  const [currentConfig, setCurrentConfig] = useState(config)
  const [isReady, setIsReady] = useState(false)

  function changeColorMode() {
    if (darkConfig && isDarkMode() && currentConfig != darkConfig) {
      setCurrentConfig(darkConfig)
    } else if (currentConfig != config) {
      setCurrentConfig(config)
    }
  }

  // Track dark mode
  useEffect(() => {
    const colorScheme = window?.matchMedia('(prefers-color-scheme: dark)')
    colorScheme.addEventListener && colorScheme.addEventListener('change', changeColorMode)
    return () => {
      const colorScheme = window?.matchMedia('(prefers-color-scheme: dark)')
      colorScheme.removeEventListener && colorScheme.removeEventListener('change', changeColorMode)
    }
  }, [currentConfig])

  useEffect(() => {
    changeColorMode()
  }, [config, darkConfig])

  useEffect(() => {
    reset && import('./reset')
  }, [reset])

  // Update
  useEffect(() => {
    const normalizedConfig = normalizeConfig(currentConfig)
    setFitStyle(normalizedConfig)
    setBoxStyle(normalizedConfig)
    setFontStyle(normalizedConfig)
    setGapStyle(normalizedConfig)
    setLineStyle(normalizedConfig)
    setReactionStyle(normalizedConfig)
    setIconStyle(normalizedConfig)
    setAlignStyle(normalizedConfig)
    setIsReady(true)
  }, [currentConfig])

  useEffect(() => {
    if (!icons?.default && icons?.md) {
      icons.default = icons.md
    }
  }, [icons])

  const context = {
    ...currentConfig,
    icons,
    themeId: id,
    darkMode: isDarkMode(),
    normalizedConfig: normalizeConfig(currentConfig),
  }

  if (!isReady) {
    return null
  }

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}


Theme.displayName = THEME_NAME