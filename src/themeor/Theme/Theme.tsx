import React from 'react'
import {ThemeConfig, ThemeIcons} from '../config-types'
import cssVariables from '../utils/css-variable'
import newId from '../utils/new-id'
import consoleMessage from '../utils/console-message'
import {ThemeContext} from '../context'
import Merge from '../Merge'
import './reset.scss'

export interface ThemeProps {
  config?: ThemeConfig,
  darkConfig?: ThemeConfig,
  icons?: ThemeIcons,
  global?: boolean,
  MERGE?: boolean,
  MERGE_CHAIN?: true,
  FORCE_MERGE?: true,
  forwardedRef?: (node: any) => void,
}

export default class Theme extends React.PureComponent<ThemeProps> {
  static contextType = ThemeContext
  static id = newId()

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
      config,
      children,
      icons,
      MERGE,
      MERGE_CHAIN,
      FORCE_MERGE,
      forwardedRef,
      ...restProps
    } = this.props
    const {themeContext: {shallInverseOn, template, ...custonContext}} = config
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

    if (typeof children === 'function') {
      return children(componentProps)
    }

    return (
      <ThemeContext.Provider value={context}>
        {this.global ? children : ((MERGE || MERGE_CHAIN || FORCE_MERGE) ? (
          <Merge forwardedRef={forwardedRef} force={FORCE_MERGE} recursive={MERGE_CHAIN} {...componentProps} />
        ) : (
          <div ref={forwardedRef} {...componentProps} />
        ))}
      </ThemeContext.Provider>
    )
  }
}