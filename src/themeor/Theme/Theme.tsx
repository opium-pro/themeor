import React, { useEffect, useState } from 'react'
import cssVariables from '../utils/css-variable'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import {TryTagless} from '../TryTagless'
import css from './Theme.module.css'
import cn from '../utils/class-name'
import isDarkMode from '../utils/is-dark-mode'
import {ThemeProps, TaglessThemeProps} from './types'
import setBoxStyle from '../Box/box-style'
import normilizeConfig from '../utils/normalize-config'


Theme.TryTagless = (props: TaglessThemeProps) => <Theme {...props} TRY_TAGLESS />

export function Theme({
  global,
  children,
  icons,
  TRY_TAGLESS,
  TRY_RECURSIVE_TAGLESS,
  FORCE_TAGLESS,
  forwardRef,
  className,
  darkConfig,
  reset,
  config = {},
  ...restProps
}: ThemeProps, ref: React.Ref<any>) {
  const [id] = useState(newId())

  let useGlobal: boolean = !!global
  const [currentConfig, directSetCurrentConfig] = React.useState(config)
  const {themeId: parentThemeId} = React.useContext(ThemeContext)

  function setCurrentConfig(config: any) {
    directSetCurrentConfig(normilizeConfig(config))
  }

  let isTrackingDarkMode: boolean = false

  function changeColorMode() {
    if (isDarkMode()) {
      setCurrentConfig(darkConfig)
    } else {
      setCurrentConfig(config)
    }
  }

  function trackDarkMode() {
    if (darkConfig && !isTrackingDarkMode) {
      isTrackingDarkMode = true
      const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      colorScheme.addEventListener && colorScheme.addEventListener('change', changeColorMode)
    }
  }

  function setVariables() {
    const {themeContext, customVariables, meta, ...restVariables} = currentConfig
    cssVariables.unset(`style-${id}`)
    cssVariables.set({
      json: restVariables,
      prefix: 't',
      selector: useGlobal ? ':root' : `#${id}`,
      id: `style-${id}`,
    })
    cssVariables.set({
      json: customVariables,
      selector: useGlobal ? ':root' : `#${id}`,
      id: `style-${id}`,
    })
  }

  function setConfig() {
    const newConfig = (darkConfig && isDarkMode()) ? darkConfig : config
    
    if (newConfig !== currentConfig) {
      setCurrentConfig(newConfig)
    }
  }

  // Update
  useEffect(() => {
    trackDarkMode()
    setConfig()
    setVariables()
  })

  // Update components styles
  useEffect(() => {
    setBoxStyle(currentConfig)
  }, [currentConfig])

  // Unmount
  useEffect(() => () => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    colorScheme.removeEventListener && colorScheme.removeEventListener('change', changeColorMode)
  })


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
  }

  const componentProps = {
    ...restProps,
    children,
    id: id,
    className: cn(
      css.theme,
      className
    ),
  }

  const tryTagless = TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS

  function renderTheme() {
    if (useGlobal) {
      return children
    }

    if (tryTagless) {
      return <TryTagless {...componentProps} force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} />
    }

    return <div ref={forwardRef} {...componentProps} />
  }

  return (
    <ThemeContext.Provider value={context}>
      {renderTheme()}
    </ThemeContext.Provider>
  )
}