import { ThemeConfig, ConfigurableComponents } from '../types'


function selectConfig (
  normalizedConfig: ThemeConfig,
  component: ConfigurableComponents,
  compare: { [prop: string]: any },
  boolean?: boolean
) {
  const result: any | any[] = []
  for (const key in compare) {
    const value = (normalizedConfig[component] as any)?.[key]?.[compare[key]]
    const isDefined = value !== undefined

    if (!boolean) {
      result.push(value)
    } else {
      const wrongType = !['string', 'number'].includes(typeof compare[key])
      result.push(wrongType ? false : !isDefined)
    }
  }
  if (result.length <= 1) {
    return result[0]
  }
  return result
}


export const getConfig = (normalizedConfig: ThemeConfig = {}) => ({
  boxConfig: (compare: { [key in keyof ThemeConfig['box']]: any }) =>
    selectConfig(normalizedConfig, 'box', compare),
  customBoxValue: (compare: { [key in keyof ThemeConfig['box']]: any }) =>
    selectConfig(normalizedConfig, 'box', compare, true),


  fontConfig: (compare: { [key in keyof ThemeConfig['font']]: any }) =>
    selectConfig(normalizedConfig, 'font', compare),
  customFontValue: (compare: { [key in keyof ThemeConfig['font']]: any }) =>
    selectConfig(normalizedConfig, 'font', compare, true),


  gapConfig: (compare: { [key in keyof ThemeConfig['gap']]: any }) =>
    selectConfig(normalizedConfig, 'gap', compare),
  customGapValue: (compare: { [key in keyof ThemeConfig['gap']]: any }) =>
    selectConfig(normalizedConfig, 'gap', compare, true),


  lineConfig: (compare: { [key in keyof ThemeConfig['line']]: any }) =>
    selectConfig(normalizedConfig, 'line', compare),
  customLineValue: (compare: { [key in keyof ThemeConfig['line']]: any }) =>
    selectConfig(normalizedConfig, 'line', compare, true),


  iconConfig: (compare: { [key in keyof ThemeConfig['icon']]: any }) =>
    selectConfig(normalizedConfig, 'icon', compare),
  customIconValue: (compare: { [key in keyof ThemeConfig['icon']]: any }) =>
    selectConfig(normalizedConfig, 'icon', compare, true),


  reactionConfig: (compare: { [key in keyof ThemeConfig['reaction']]: any }) =>
    selectConfig(normalizedConfig, 'reaction', compare),
  customReactionValue: (compare: { [key in keyof ThemeConfig['reaction']]: any }) =>
    selectConfig(normalizedConfig, 'reaction', compare, true),


  fitConfig: (compare: { [key in keyof ThemeConfig['fit']]: any }) =>
    selectConfig(normalizedConfig, 'fit', compare),
  customFitValue: (compare: { [key in keyof ThemeConfig['fit']]: any }) =>
    selectConfig(normalizedConfig, 'fit', compare, true),
})