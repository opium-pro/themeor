import React, { useEffect, useState, FC } from 'react'
import newId from '../utils/new-id.js'
import { ThemeContext, ConfigContext } from '../context.js'
import isDarkMode from '../utils/is-dark-mode.js'
import { ThemeProps, THEME_NAME } from './types.js'
import setBoxStyle from '../Box/styles.js'
import setFontStyle from '../Font/styles.js'
import setGapStyle from '../Gap/styles.js'
import setAlignStyle from '../Align/styles.js'
import setLineStyle from '../Line/styles.js'
import setIconStyle from '../Icon/styles.js'
import setReactionStyle from '../Reaction/styles.js'
import setAnimateStyle from '../Animate/styles.js'
import setFitStyle from '../Fit/styles.js'
import { normalizeConfig } from '../utils/normalize-config.js'
import { config as globalConfig } from '../config.js'


export const Theme: FC<ThemeProps> = ({
  children,
  icons,
  darkConfig,
  config = {},
  reset,
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
    const colorScheme = window?.matchMedia?.('(prefers-color-scheme: dark)')
    colorScheme?.addEventListener && colorScheme.addEventListener('change', changeColorMode)
    return () => {
      const colorScheme = window?.matchMedia?.('(prefers-color-scheme: dark)')
      colorScheme?.removeEventListener && colorScheme.removeEventListener('change', changeColorMode)
    }
  }, [currentConfig])

  useEffect(() => {
    changeColorMode()
  }, [config, darkConfig])

  useEffect(() => {
    reset && !globalConfig.isNative && require('./reset')
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
    setAnimateStyle(normalizedConfig)
    setIsReady(true)
  }, [currentConfig])

  useEffect(() => {
    if (!icons?.default && icons?.md) {
      icons.default = icons.md
    }
  }, [icons])

  const context: ThemeContext = {
    icons,
    themeId: id,
    darkMode: isDarkMode(),
    normalizedConfig: normalizeConfig(currentConfig),
  }

  if (!isReady) {
    return null
  }

  return (
    <ConfigContext.Provider value={{ config, darkConfig, icons, currentConfig, setCurrentConfig }}>
      <ThemeContext.Provider value={context}>
        {children}
      </ThemeContext.Provider>
    </ConfigContext.Provider>
  )
}


Theme.displayName = THEME_NAME