import { ThemeContext } from '../context'
import { ThemeConfig } from '../types'
import { allFills } from './opium-fill'


export function normalizeConfig (config: ThemeConfig): ThemeContext {
  const newConfig = { ...config.themeContext, ...config }
  const opiumFill = config?.fill?.base?.strong

  newConfig.fill = {
    none: 'transparent',
    ...makeFlat(config.fill),
  }
  newConfig.fillFancy = makeFlat({...config['fancy-fill'], ...config.fancyFill})
  newConfig.fillInversed = makeFlat(config.fillInversed)

  newConfig.box = {
    radius: {
      none: '0',
      max: '1000px',
      ...makeFlat(config.box?.radius),
    },
    shadow: makeFlat(config.box?.shadow),
    shadowInner: makeFlat(config.box?.shadowInner),
    glow: makeFlat(config.box?.glow),
    fill: {
      default: 'transparent',
      ...newConfig.fill,
      ...makeFlat(config.box?.fill)
    },
    fillInversed: {...newConfig.fillInversed, ...makeFlat(config.box?.fillInversed)},
    fillFancy: {...newConfig.fillFancy, ...makeFlat(config.box?.fillFancy)},
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
    align: {
      center: 'center',
      left: 'left',
      right: 'right',
    },
    family: makeFlat(config.font?.family),
    fill: {
      default: '#000',
      ...newConfig.fill,
      ...makeFlat(config.font?.fill),
    },
    fillInversed: {...newConfig.fillInversed, ...makeFlat(config.font?.fillInversed)},
    lineHeight: makeFlat(config.font?.['line-height']),
    letterSpacing: makeFlat(config.font?.['letter-spacing']),
  }

  newConfig.line = {
    fill: {
      default: '#000',
      ...newConfig.fill,
      ...makeFlat(config.line?.fill),
    },
    weight: {
      default: '1px',
      none: '0',
      ...makeFlat(config.line?.weight)
    },
  }

  newConfig.gap = {
    size: {
      default: '16px',
      ...makeFlat(config.gap?.size || config.gap),
    },
  }

  newConfig.icon = {
    fill: {
      default: '#000',
      ...newConfig.fill,
      ...makeFlat(config.icon?.fill )
    },
    size: makeFlat(config.icon?.size),
  }

  newConfig.reaction = {
    speed: {
      none: '0',
      ...makeFlat(config.reaction?.speed)
    },
  }

  newConfig.effect = {
    transparency: {
      none: '1',
      max: '0',
      ...makeFlat(config.effect?.transparency)
    },
  }

  // If use opium fill, then correct values to old config
  if (opiumFill) {
    const boxFill: any = {}
    const fontFill: any = {}
    const lineFill: any = {}
    const iconFill: any = {}

    const boxFillInv: any = {}
    const fontFillInv: any = {}
    const lineFillInv: any = {}
    const iconFillInv: any = {}

    const boxFillStrogn: any = {}

    for (const opiumFill of allFills) {
      const splitFill = opiumFill.split('-')
      boxFill[opiumFill] = newConfig.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      fontFill[opiumFill] = newConfig.font.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      lineFill[opiumFill] = newConfig.line.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      iconFill[opiumFill] = newConfig.icon.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]

      boxFillInv[opiumFill] = newConfig.box.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      fontFillInv[opiumFill] = newConfig.font.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      lineFillInv[opiumFill] = newConfig.line.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
      iconFillInv[opiumFill] = newConfig.icon.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]

      boxFillStrogn[opiumFill] = newConfig.box.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    }

    boxFill.none = fontFill.none = lineFill.none = iconFill.none = 'transparent'

    newConfig.box.fill = boxFill
    newConfig.font.fill = fontFill
    newConfig.line.fill = lineFill
    newConfig.icon.fill = iconFill

    newConfig.box.fillInversed = boxFillInv
    newConfig.font.fillInversed = fontFillInv
    newConfig.line.fillInversed = lineFillInv
    newConfig.icon.fillInversed = iconFillInv

    newConfig.box.fillStrong = boxFillStrogn
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