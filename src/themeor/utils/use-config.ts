
function getConfig(context: any, component: any, param: any) {
  const { normalizedConfig } = context

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


export function useConfig(context: any) {
  const result = {} as {
    boxConfig: (params: { [key: string]: any }) => any
    fontConfig: (params: { [key: string]: any }) => any
    gapConfig: (params: { [key: string]: any }) => any
    lineConfig: (params: { [key: string]: any }) => any
    iconConfig: (params: { [key: string]: any }) => any
    reactionConfig: (params: { [key: string]: any }) => any
    effectConfig: (params: { [key: string]: any }) => any
  }

  result.boxConfig = (params) => {
    return getConfig(context, 'box', params)
  }

  result.fontConfig = (params) => {
    return getConfig(context, 'font', params)
  }

  result.gapConfig = (params) => {
    return getConfig(context, 'gap', params)
  }

  result.lineConfig = (params) => {
    return getConfig(context, 'line', params)
  }

  result.iconConfig = (params) => {
    return getConfig(context, 'icon', params)
  }

  result.reactionConfig = (params) => {
    return getConfig(context, 'reaction', params)
  }

  result.effectConfig = (params) => {
    return getConfig(context, 'effect', params)
  }

  return result
}