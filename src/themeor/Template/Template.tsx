import React from 'react'
import {ThemeContext} from '../context'
import consoleMessage from '../utils/console-message'

export interface TemplateProps {
  is?: string,
  isNot?: string,
  has?: string,
  hasNot?: string,
}

export default class Template extends React.Component<TemplateProps> {
  static contextType = ThemeContext

  static get = () => {
    return localStorage.getItem('themeor-template-global')
  }

  static is = (name: string) => {
    const template = Template.get()
    return template === name
  }

  static isNot = (name: string) => {
    const template = Template.get()
    return template !== name
  }

  static has = (name: string) => {
    const template = Template.get()
    return template?.includes(name)
  }

  static hasNot = (name: string) => {
    const template = Template.get()
    return !template?.includes(name)
  }

  render() {
    const {template = []} = this.context
    const {children, ...rules} = this.props

    consoleMessage({
      text: 'This component is depricated and will be removed in version 0.2. Try using ThemeContext instead.',
      type: 'warn',
      source: this,
    })

    const ruleNames = Object.keys(rules)
    let resolve = false

    const resolveIs = rules.is ? template.join() === rules.is : true
    const resolveIsNot = rules.isNot ? template.join() !== rules.isNot : true
    const resolveHas = rules.has ? template.includes(rules.has) : true
    const resolveHasNot = rules.hasNot ? !template.includes(rules.hasNot) : true

    if (rules.is) {
      resolve = resolveIs
      ruleNames.length > 1 && consoleMessage({
        text: 'You can not use prop "is" with other props at the same time.\nOther props will be ignored.',
        type: 'error',
        source: this,
      })
    } else if (rules.isNot) {
      resolve = resolveIsNot
      ruleNames.length > 1 && consoleMessage({
        text: 'You can not use prop "isNot" with other props at the same time.\nOther props will be ignored.',
        type: 'error',
        source: this
      })
    } else {
      resolve = resolveHas && resolveHasNot
    }

    return resolve ? children : null
  }
}