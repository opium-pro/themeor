import React, { useEffect, useState, FC } from 'react'
import newId from '../utils/new-id.js'
import { ThemeContext, ConfigContext } from '../context.js'
import isDarkMode from '../utils/is-dark-mode.js'
import { ThemeProps, THEME_NAME } from './types.js'
import setBoxStyle from '../box/styles.js'
import setFontStyle from '../font/styles.js'
import setGapStyle from '../gap/styles.js'
import setAlignStyle from '../align/styles.js'
import setLineStyle from '../line/styles.js'
import setIconStyle from '../icon/styles.js'
import setReactionStyle from '../reaction/styles.js'
import setAnimateStyle from '../animate/styles.js'
import setFitStyle from '../fit/styles.js'
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
    reset && !globalConfig.isNative && import('./reset.js')
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