import { normalizedConfig } from '../normalized-config'

export function getConfig(
  component: keyof typeof normalizedConfig,
  param: any
) {
  const result = []
  for (const key in param) {
    if (normalizedConfig[component] && normalizedConfig[component][key]) {
      result.push(normalizedConfig[component][key][param[key]])
    }
  }
  if (result.length <= 1) {
    return result[0]
  }
  return result
}


export function boxConfig(params: {[key: string]: any}) {
  return getConfig('box', params)
}

export function fontConfig(params: {[key: string]: any}) {
  return getConfig('font', params)
}

export function gapConfig(params: {[key: string]: any}) {
  return getConfig('gap', params)
}

export function lineConfig(params: {[key: string]: any}) {
  return getConfig('line', params)
}

export function iconConfig(params: {[key: string]: any}) {
  return getConfig('icon', params)
}

export function reactionConfig(params: {[key: string]: any}) {
  return getConfig('reaction', params)
}

export function effectConfig(params: {[key: string]: any}) {
  return getConfig('effect', params)
}