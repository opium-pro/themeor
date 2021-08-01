import { ThemeContext } from '../context'
import { ThemeConfig } from '../config-types'


export default function (config: ThemeConfig): ThemeContext {
  const newConfig = { ...config.themeContext, ...config }

  newConfig.fill = makeFlat(config.fill)
  newConfig.fancyFill = makeFlat({...config['fancy-fill'], ...config.fancyFill})
  newConfig.inverseFill = makeFlat({...config['inverse-fill'], ...config.inverseFill})
  newConfig.box = {
    radius: makeFlat(config.box?.radius),
    shadow: makeFlat(config.box?.shadow),
    shadowInner: makeFlat(config.box?.shadowInner),
    glow: makeFlat(config.box?.glow),
    fill: makeFlat({ ...config.fill, ...config.box?.fill }),
  }
  newConfig.font = {
    size: makeFlat(config.font?.size),
    family: makeFlat(config.font?.family),
    fill: makeFlat(config.font?.fill),
    lineHeight: makeFlat(config.font?.['line-height']),
    letterSpacing: makeFlat(config.font?.['letter-spacing']),
  }
  newConfig.line = {
    size: makeFlat(config.font?.size),
    family: makeFlat(config.font?.family),
    fill: makeFlat(config.font?.fill),
    lineHeight: makeFlat(config.font?.['line-height']),
    letterSpacing: makeFlat(config.font?.['letter-spacing']),
  }
  newConfig.gap = {
    size: makeFlat(config.font?.size),
    family: makeFlat(config.font?.family),
    fill: makeFlat(config.font?.fill),
    lineHeight: makeFlat(config.font?.['line-height']),
    letterSpacing: makeFlat(config.font?.['letter-spacing']),
  }

  return newConfig
}


function makeFlat(value: any, prefix?: string, original?: any) {
  if (typeof value !== 'object' && original && prefix) {
    original[`${prefix}`] = value
    return
  }

  if (!prefix) {
    const flatJson: any = {}
    for (const key in value) {
      makeFlat(value[key], key, flatJson)
    }
    return flatJson
  }

  for (const key in value) {
    makeFlat(value[key], `${prefix}-${key}`, original)
  }
}