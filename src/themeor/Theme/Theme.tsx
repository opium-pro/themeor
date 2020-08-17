import React from 'react'
import {ThemeConfig, ThemeIcons} from '../config-types'
import cssVariables from '../utils/css-variable'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import TryTagless from '../TryTagless'
import css from './Theme.module.scss'
import cn from '../utils/class-name'
import isDarkMode from '../utils/is-dark-mode'

export interface PureThemeProps {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig,
  icons?: ThemeIcons,
  global?: boolean,
  reset?: boolean,
}
export interface TaglessThemeProps extends PureThemeProps {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}
export interface ThemeProps extends TaglessThemeProps, React.HTMLAttributes<HTMLDivElement> {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}

export interface ThemeState {
  currentConfig?: ThemeConfig
}

export default class Theme extends React.Component<ThemeProps, ThemeState> {
  static contextType = ThemeContext
  static TryTagless = (props: TaglessThemeProps) => <Theme TRY_TAGLESS {...props} />

  state: ThemeState = {
    currentConfig: this.props.config
  }

  isTrackingDarkMode: boolean = false

  componentDidMount() {
    this.trackDarkMode()
    this.setCurrentConfig()
    this.setVariables()
  }

  componentDidUpdate() {
    this.trackDarkMode()
    this.setCurrentConfig()
    this.setVariables()
  }

  componentWillUnmount() {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    colorScheme.addEventListener && colorScheme.removeEventListener('change', this.changeColorMode)
  }

  setCurrentConfig = () => {
    const {darkConfig, config} = this.props
    const hasToBeSet = (darkConfig && isDarkMode()) ? darkConfig : config
    
    if (hasToBeSet !== this.state.currentConfig) {
      this.setState({currentConfig: hasToBeSet})
    }
  }

  global?: boolean = false
  id: string = newId()

  trackDarkMode = () => {
    if (this.props.darkConfig && !this.isTrackingDarkMode) {
      this.isTrackingDarkMode = true
      const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      colorScheme.addEventListener && colorScheme.addEventListener('change', this.changeColorMode)
    }
  }

  changeColorMode = () => {
    const {darkConfig, config} = this.props

    if (isDarkMode()) {
      this.setState({currentConfig: darkConfig})
    } else {
      this.setState({currentConfig: config})
    }
  }

  setVariables = () => {
    const {themeContext, customVariables, meta, ...restVariables} = this.state.currentConfig
    cssVariables.unset(`style-${this.id}`)
    cssVariables.set({
      json: restVariables,
      prefix: 't',
      selector: this.global ? ':root' : `#${this.id}`,
      id: `style-${this.id}`,
    })
    cssVariables.set({
      json: customVariables,
      selector: this.global ? ':root' : `#${this.id}`,
      id: `style-${this.id}`,
    })

    if (themeContext?.template) {
      const template = typeof themeContext.template === 'string'
        ? themeContext.template
        : themeContext.template.join()

        localStorage.setItem(`themeor-template-global`, template)
    } else {
      localStorage.removeItem(`themeor-template-global`)
    }
  }

  render() {
    const {
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
      ...restProps
    } = this.props

    const {currentConfig = {}} = this.state

    const {themeContext = {}} = currentConfig
    const {shallInverseOn, template, ...custonContext} = themeContext
    const {themeId} = this.context

    reset && import('./reset')

    this.global = global
    if (themeId && global) {
      consoleMessage({
        text: 'You can set "global" prop only once. All nested globals will be ignored',
        type: 'error',
        source: this,
      })
      this.global = false
    }

    const context = {
      ...custonContext,
      shallInverseOn,
      template,
      icons,
      TRY_TO_INVERSE: false,
      themeId: this.id,
      darkMode: isDarkMode(),
    }

    const componentProps = {
      ...restProps,
      children,
      id: this.id,
      className: cn(
        css.theme,
        className
      ),
    }

    return (
      <ThemeContext.Provider value={context}>
        {this.global ? children : ((TRY_TAGLESS || TRY_RECURSIVE_TAGLESS || FORCE_TAGLESS) ? (
          <TryTagless force={FORCE_TAGLESS} recursive={TRY_RECURSIVE_TAGLESS} {...componentProps} />
        ) : (
          <div ref={forwardRef} {...componentProps} />
        ))}
      </ThemeContext.Provider>
    )
  }
}