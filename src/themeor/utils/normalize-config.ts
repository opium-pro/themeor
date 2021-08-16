import { ThemeContext } from '../context'
import { ThemeConfig } from '../config-types'
import { allFills } from './opium-fill'


export function normalizeConfig (config: ThemeConfig): ThemeContext {
  const newConfig = { ...config.themeContext, ...config }
  const opiumFill = config?.fill?.base?.strong

  newConfig.fill = makeFlat(config.fill)
  newConfig.fillFancy = makeFlat({...config['fancy-fill'], ...config.fancyFill})
  newConfig.fillInverse = makeFlat({...config['inverse-fill'], ...config.inverseFill})
  newConfig.box = {
    radius: {
      none: '0',
      max: '1000px',
      ...makeFlat(config.box?.radius)
    },
    shadow: makeFlat(config.box?.shadow),
    shadowInner: makeFlat(config.box?.shadowInner),
    glow: makeFlat(config.box?.glow),
    fill: {...newConfig.fill, ...makeFlat(config.box?.fill)},
    fillFancy: makeFlat(newConfig.fillFancy),
  }
  newConfig.font = {
    size: makeFlat(config.font?.size),
    weight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900',
      ...makeFlat(config.font?.weight),
    },
    family: makeFlat(config.font?.family),
    fill: {...newConfig.fill, ...makeFlat(config.font?.fill)},
    lineHeight: makeFlat(config.font?.['line-height']),
    letterSpacing: makeFlat(config.font?.['letter-spacing']),
  }
  newConfig.line = {
    fill: makeFlat(config.font?.fill),
    weight: makeFlat(config.font?.fill),
  }
  newConfig.gap = {
    size: makeFlat(config.gap?.size || config.gap),
  }
  newConfig.icon = {
    fill: {...newConfig.fill, ...makeFlat(config.icon?.fill )},
    size: makeFlat(config.icon?.size),
  }

  if (opiumFill) {
    const boxFill: any = {}

    for (const opiumFill of allFills) {
      const splitFill = opiumFill.split('-')
      boxFill[opiumFill] = newConfig.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      newConfig.font.fill[opiumFill] = newConfig.font.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      newConfig.line.fill[opiumFill] = newConfig.line.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      newConfig.icon.fill[opiumFill] = newConfig.icon.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    }

    newConfig.box.fill = boxFill
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