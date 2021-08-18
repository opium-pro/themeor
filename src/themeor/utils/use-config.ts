
function getConfig(context: any, component: any, param: any, reverse?: boolean) {
  const { normalizedConfig } = context

  const result = []
  for (const key in param) {
    const isDefined = (normalizedConfig[component]?.[key]?.[param[key]] !== undefined)

    if (!reverse) {
      result.push(normalizedConfig[component][key][param[key]])

    } else {
      const wrongType = !['string', 'number'].includes(typeof param[key])
      result.push(wrongType ? false : !isDefined)
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
    fitConfig: (params: { [key: string]: any }) => any
    customBoxValue: (params: { [key: string]: any }) => any
    customFontValue: (params: { [key: string]: any }) => any
    customGapValue: (params: { [key: string]: any }) => any
    customLineValue: (params: { [key: string]: any }) => any
    customIconValue: (params: { [key: string]: any }) => any
    customReactionValue: (params: { [key: string]: any }) => any
    customEffectValue: (params: { [key: string]: any }) => any
    customFitValue: (params: { [key: string]: any }) => any
  }


  result.boxConfig = (params) => {
    return getConfig(context, 'box', params)
  }
  result.customBoxValue = (params) => {
    return getConfig(context, 'box', params, true)
  }


  result.fontConfig = (params) => {
    return getConfig(context, 'font', params)
  }
  result.customFontValue = (params) => {
    return getConfig(context, 'font', params, true)
  }


  result.gapConfig = (params) => {
    return getConfig(context, 'gap', params)
  }
  result.customGapValue = (params) => {
    return getConfig(context, 'gap', params, true)
  }


  result.lineConfig = (params) => {
    return getConfig(context, 'line', params)
  }
  result.customLineValue = (params) => {
    return getConfig(context, 'line', params, true)
  }


  result.iconConfig = (params) => {
    return getConfig(context, 'icon', params)
  }
  result.customIconValue = (params) => {
    return getConfig(context, 'icon', params, true)
  }


  result.reactionConfig = (params) => {
    return getConfig(context, 'reaction', params)
  }
  result.customReactionValue = (params) => {
    return getConfig(context, 'reaction', params, true)
  }


  result.effectConfig = (params) => {
    return getConfig(context, 'effect', params)
  }
  result.customEffectValue = (params) => {
    return getConfig(context, 'effect', params, true)
  }


  result.fitConfig = (params) => {
    return getConfig(context, 'fit', params)
  }
  result.customFitValue = (params) => {
    return getConfig(context, 'fit', params, true)
  }

  return result
}