import React from 'react'
import cssVariables from '../utils/css-variable'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import TryTagless from '../TryTagless'
import css from './Theme.module.scss'
import cn from '../utils/class-name'
import isDarkMode from '../utils/is-dark-mode'
import {ThemeProps, TaglessThemeProps} from './types'


Theme.TryTagless = (props: TaglessThemeProps) => <Theme {...props} TRY_TAGLESS />

export default function Theme({
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

  let useGlobal: boolean = !!global
  const id: string = newId()
  const [currentConfig, setCurrentConfig] = React.useState(config)
  const {themeId} = React.useContext(ThemeContext)
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
  React.useEffect(() => {
    trackDarkMode()
    setConfig()
    setVariables()
  })

  // Unmount
  React.useEffect(() => () => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    colorScheme.removeEventListener && colorScheme.removeEventListener('change', changeColorMode)
  })

  const {themeContext = {}} = currentConfig
  const {shallInverseOn, template, ...customContext} = themeContext

  reset && import('./reset')

  if (themeId && global) {
    consoleMessage({
      text: 'You can set "global" prop only once. All nested globals will be ignored',
      type: 'error',
      source: Theme,
    })
    useGlobal = false
  }

  const context = {
    ...customContext,
    shallInverseOn,
    template,
    icons,
    TRY_TO_INVERSE: false,
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