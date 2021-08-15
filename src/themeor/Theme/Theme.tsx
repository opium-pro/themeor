import React, { useEffect, useState } from 'react'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import { ThemeContext } from '../context'
import isDarkMode from '../utils/is-dark-mode'
import { ThemeProps } from './types'
import setBoxStyle from '../Box/styles'
import setFontStyle from '../Font/styles'
import { normalizeConfig } from '../utils/normalize-config'


export function Theme({
  global,
  children,
  icons,
  forwardRef,
  className,
  darkConfig,
  reset,
  config = {},
  ...restProps
}: ThemeProps, ref: React.Ref<any>) {
  const [id] = useState(newId())

  let useGlobal: boolean = !!global
  const [currentConfig, setCurrentConfig] = React.useState(config)
  const { themeId: parentThemeId } = React.useContext(ThemeContext)

  function changeColorMode() {
    if (darkConfig && isDarkMode()) {
      setCurrentConfig(darkConfig)
    } else if (currentConfig != config) {
      setCurrentConfig(config)
    }
  }

  const normalizedConfig = normalizeConfig(currentConfig)

  // Update
  useEffect(() => {
    setBoxStyle(normalizedConfig)
    setFontStyle(normalizedConfig)
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

  if (parentThemeId && global) {
    consoleMessage({
      text: 'You can set "global" prop only once. All nested globals will be ignored',
      type: 'error',
      source: Theme,
    })
    useGlobal = false
  }

  const context = {
    ...currentConfig,
    icons,
    themeId: id,
    darkMode: isDarkMode(),
    normalizedConfig,
  }

  const componentProps = {
    ...restProps,
    children,
    id,
    className,
  }

  function renderTheme() {
    if (useGlobal) {
      return children
    }

    return <div ref={forwardRef} {...componentProps} />
  }

  return (
    <ThemeContext.Provider value={context}>
      {renderTheme()}
    </ThemeContext.Provider>
  )
}