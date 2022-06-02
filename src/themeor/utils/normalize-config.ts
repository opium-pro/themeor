import { ThemeContext } from '../context'
import { ThemeConfig } from '../types'
import { allFills, baseFills } from './opium-fill'


export function normalizeConfig(config: any): ThemeConfig {
  const newConfig = { ...config }

  newConfig.fill = {
    none: 'transparent',
    ...makeFlat(config.fill),
  }
  newConfig.fillFancy = makeFlat({
    ...config.fillFancy,
  })
  newConfig.fillInverse = makeFlat({
    ...config.fillInverse,
  })

  newConfig.box = {
    radius: {
      default: 0,
      none: 0,
      max: 1000,
      ...makeFlat(config.box?.radius),
    },
    shadow: {
      default: 'none',
      none: 'none',
      ...makeFlat(config.box?.shadow)
    },
    shadowInner: {
      default: 'none',
      none: 'none',
      ...makeFlat(config.box?.shadowInner)
    },
    glow: {
      default: 'none',
      none: 'none',
      ...makeFlat(config.box?.glow)
    },
    blur: {
      default: 'none',
      none: 'none',
      ...makeFlat(config.box?.blur)
    },
    fill: {
      default: 'transparent',
      ...newConfig.fill,
      ...makeFlat(config.box?.fill)
    },
    fillInverse: {
      default: 'transparent',
      ...newConfig.fillInverse,
      ...makeFlat(config.box?.fillInverse)
    },
    fillFancy: {
      default: 'transparent',
      ...newConfig.fillFancy,
      ...makeFlat(config.box?.fillFancy)
    },
  }


  newConfig.font = {
    size: {
      ...makeFlat(config.font?.size),
    },
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
    family: {
      ...makeFlat(config.font?.family),
    },
    fill: {
      default: 'inherit',
      ...newConfig.fill,
      ...makeFlat(config.font?.fill),
    },
    fillInverse: {
      default: 'inherit',
      ...newConfig.fillInverse,
      ...makeFlat(config.font?.fillInverse),
    },
    fillFancy: {
      default: 'inherit',
      ...newConfig.fillFancy,
      ...makeFlat(config.font?.fillFancy),
    },
    lineHeight: {
      ...makeFlat(config.font?.['lineHeight']),
    },
    letterSpacing: {
      ...makeFlat(config.font?.['letterSpacing'])
    },
  }


  newConfig.line = {
    fill: {
      default: '#000',
      ...newConfig.fill,
      ...makeFlat(config.line?.fill),
    },
    fillInverse: {
      default: '#fff',
      ...newConfig.fillInverse,
      ...makeFlat(config.line?.fillInverse),
    },
    fillFancy: {
      default: '#000',
      ...newConfig.fillFancy,
      ...makeFlat(config.line?.fillFancy),
    },
    weight: {
      default: 1,
      none: 0,
      ...makeFlat(config.line?.weight),
    },
  }


  newConfig.gap = {
    size: {
      default: 16,
      none: 0,
      ...makeFlat(config.gap?.size || config.gap),
    },
  }


  newConfig.icon = {
    fill: {
      default: '#000',
      ...newConfig.fill,
      ...makeFlat(config.icon?.fill)
    },
    fillInverse: {
      default: '#fff',
      ...newConfig.fillInverse,
      ...makeFlat(config.icon?.fillInverse),
    },
    fillFancy: {
      default: '#000',
      ...newConfig.fillFancy,
      ...makeFlat(config.icon?.fillFancy),
    },
    size: {
      default: '24px',
      ...makeFlat(config.icon?.size),
    },
  }


  newConfig.reaction = {
    duration: {
      default: '250ms',
      none: '0ms',
      ...makeFlat(config.reaction?.duration),
    },
    cursor: {
      pointer: 'pointer',
      text: 'text',
      help: 'help',
      wait: 'wait',
      crosshair: 'crosshair',
      'not-allowed': 'not-allowed',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
      grab: 'grab',
      default: 'default',
      none: 'none',
      auto: 'auto',
      cell: 'cell',
      alias: 'alias',
      copy: 'copy',
      move: 'move',
      grabbing: 'grabbing',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
    },
    timingFunction: {
      default: 'ease',
      ease: 'ease',
      linear: 'linear',
    },
    property: {
      default: 'color, background, fill, font-size, font-weight, width, height, top, left, right, bottom, opacity',
      ...makeFlat(config.reaction?.property),
    },
  }


  newConfig.fit = {
    zIndex: {
      ...makeFlat(config.fit?.zIndex),
    },
    offset: {
      none: '0',
      ...newConfig.gap.size,
      ...makeFlat(config.fit?.offset),
    },
  }

  // If use opium fill, then correct values to old config
  const useOpiumFill = (config.fill?.base as any)?.strong
  if (useOpiumFill) {
    for (const fill of baseFills) {
      if (newConfig.shallInverseOn?.includes(fill)) {
        newConfig.shallInverseOn.push(`${fill}-up`)
        newConfig.shallInverseOn.push(`${fill}-down`)
      }
    }
    mutateToOpiumFill(newConfig)
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


function mutateToOpiumFill(newConfig: any) {
  const boxFill: any = {}
  const fontFill: any = {}
  const lineFill: any = {}
  const iconFill: any = {}

  const boxFillInv: any = {}
  const fontFillInv: any = {}
  const lineFillInv: any = {}
  const iconFillInv: any = {}

  const boxFillFancy: any = {}
  const fontFillFancy: any = {}
  const lineFillFancy: any = {}
  const iconFillFancy: any = {}

  const boxFillStrogn: any = {}

  for (const opiumFill of allFills) {
    const splitFill = opiumFill.split('-')
    boxFill[opiumFill] = newConfig.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    fontFill[opiumFill] = newConfig.font.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    lineFill[opiumFill] = newConfig.line.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    iconFill[opiumFill] = newConfig.icon.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]

    boxFillInv[opiumFill] = newConfig.box.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    fontFillInv[opiumFill] = newConfig.font.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    lineFillInv[opiumFill] = newConfig.line.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    iconFillInv[opiumFill] = newConfig.icon.fill[`${splitFill[0]}-weak${splitFill[1] ? `-${splitFill[1]}` : ''}`]

    boxFillFancy[opiumFill] = newConfig.box.fillFancy[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    fontFillFancy[opiumFill] = newConfig.font.fillFancy[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    lineFillFancy[opiumFill] = newConfig.line.fillFancy[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
    iconFillFancy[opiumFill] = newConfig.icon.fillFancy[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]

    boxFillStrogn[opiumFill] = newConfig.box.fill[`${splitFill[0]}-strong${splitFill[1] ? `-${splitFill[1]}` : ''}`]
  }

  boxFill.none = fontFill.none = lineFill.none = iconFill.none = 'transparent'

  boxFill.default = boxFill.none
  fontFill.default = `inherit`
  lineFill.default = lineFill[`base`]
  iconFill.default = iconFill[`base`]

  boxFillFancy.default = boxFillFancy.none
  fontFillFancy.default = `inherit`
  lineFillFancy.default = lineFillFancy[`base`]
  iconFillFancy.default = iconFillFancy[`base`]

  boxFillInv.default = boxFillInv.none
  fontFillInv.default = fontFillInv[`base`]
  lineFillInv.default = lineFillInv[`base`]
  iconFillInv.default = iconFillInv[`base`]

  boxFillStrogn.default = boxFillStrogn.none

  const { customFills } = newConfig

  newConfig.box.fill = {...customFills, ...boxFill}
  newConfig.font.fill = {...customFills, ...fontFill}
  newConfig.line.fill = {...customFills, ...lineFill}
  newConfig.icon.fill = {...customFills, ...iconFill}

  newConfig.box.fillInverse = boxFillInv
  newConfig.font.fillInverse = fontFillInv
  newConfig.line.fillInverse = lineFillInv
  newConfig.icon.fillInverse = iconFillInv

  newConfig.box.fillFancy = boxFillFancy
  newConfig.font.fillFancy = fontFillFancy
  newConfig.line.fillFancy = lineFillFancy
  newConfig.icon.fillFancy = iconFillFancy

  newConfig.box.fillStrong = boxFillStrogn
}