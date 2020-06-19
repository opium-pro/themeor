import React from 'react'
import {ThemeConfig, ThemeIcons} from '../config-types'
import cssVariables from '../utils/css-variable'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import TryTagless from '../TryTagless'
import './reset.scss'

export interface PureThemeProps {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig,
  icons?: ThemeIcons,
  global?: boolean,
  TRY_TAGLESS?: boolean,
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
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

export default class Theme extends React.Component<ThemeProps> {
  static contextType = ThemeContext
  static TryTagless = (props: TaglessThemeProps) => <Theme TRY_TAGLESS {...props} />

  componentDidUpdate() {
    this.setVariables()
  }

  componentDidMount() {
    this.setVariables()
  }

  global?: boolean = false
  id = newId()

  setVariables = () => {
    const {themeContext, customVariables, meta, ...restVariables} = this.props.config
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
      config = {},
      children,
      icons,
      TRY_TAGLESS,
      TRY_RECURSIVE_TAGLESS,
      FORCE_TAGLESS,
      forwardRef,
      ...restProps
    } = this.props
    const {themeContext = {}} = config
    const {shallInverseOn, template, ...custonContext} = themeContext
    const {themeId} = this.context

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
      backIsStrong: false,
      icons,
      themeId: this.id,
      mergeHistory: [],
    }

    const componentProps = {
      ...restProps,
      children,
      id: this.id,
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