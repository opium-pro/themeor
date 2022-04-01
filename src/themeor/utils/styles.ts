import jss, { Classes, Styles, StyleSheet } from 'jss'
import preset from 'jss-preset-default'
import { config } from '../config'


const createGenerateId = () => {
  return (rule: any, { options }: any) => {
    const unicName = `${options.classNamePrefix || ''}__${rule.key}`
    const hashed = config.hash(unicName)

    if (config.isNative) {
      return `${rule.key}`
    }
    if (config.obfuscate) {
      return `${hashed}`
    }
    return `${unicName}__${hashed}`
  }
}

jss.setup({ ...preset(), createGenerateId })


export const styleSheets: { [key: string]: StyleSheet } = {}
export const initialStyles: { [key: string]: Styles } = {}


export function getClasses(name: string): Classes {
  return styleSheets[name]?.classes || {}
}

export function getInitialStyles(name: string): Styles {
  return initialStyles[name]
}


export function createStyleSheet(name: string, styles: Styles) {
  const styleSheet: StyleSheet = jss.createStyleSheet(styles, { classNamePrefix: name, })

  if (styleSheets[name]) {
    styleSheets[name].detach()
  }

  styleSheet.attach()
  styleSheets[name] = styleSheet
  initialStyles[name] = styles
  return styleSheets[name]
}


export function createStyleNode(id: string) {
  const styleNode = document.createElement('style')
  styleNode.id = id
  document.head.appendChild(styleNode)
  return styleNode
}


export function unsetStyles(id: string) {
  const styleNode = document.getElementById(id)
  if (styleNode) {
    styleNode.innerHTML = ''
  }
}


export function setStyles(id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.innerHTML = textNode
}


export function addStyles(id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.appendChild(document.createTextNode(textNode))
}