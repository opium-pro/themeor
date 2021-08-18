import jss, { Classes, Styles, StyleSheet } from 'jss'
import preset from 'jss-preset-default'


export let obfuscate = false
export let isNative = false

export function setObfuscate(value: boolean) {
  obfuscate = value
}

export function setIsNative(value: boolean) {
  isNative = value
}

const createGenerateId = () => {
  let counter = 0
  return (rule: any, {options}: any) => {
    if (isNative) {
      return `${rule.key}`
    }
    if (obfuscate) {
      return `t${counter++}`
    }
    return `${options.classNamePrefix || ''}__${rule.key}__t${counter++}`
  }
}

jss.setup({...preset(), createGenerateId})


export const styleSheets: {[key: string]: StyleSheet} = {}
export const initialStyles: {[key: string]: Styles} = {}


export function getClasses(name: string): Classes {
  return styleSheets[name]?.classes || {}
}

export function getInitialStyles(name: string): Styles {
  return initialStyles[name]
}


export function createStyleSheet(name: string, styles: Styles) {
  if (styleSheets[name]) {
    styleSheets[name].update(styles)
  } else {
    styleSheets[name] = jss.createStyleSheet(styles, { classNamePrefix: name })
    styleSheets[name].attach()
  }

  initialStyles[name] = styles
  return styleSheets[name]
}


export function createStyleNode(id: string) {
  const styleNode = document.createElement('style')
  styleNode.id = id
  document.head.appendChild(styleNode)
  return styleNode
}


export function unsetStyles (id: string) {
  const styleNode = document.getElementById(id)
  if (styleNode) {
    styleNode.innerHTML = ''
  }
}


export function setStyles (id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.innerHTML = textNode
}


export function addStyles (id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.appendChild(document.createTextNode(textNode))
}