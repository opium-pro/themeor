import getFills from './opium-fill'
import {isInScale} from './opium-scale'


export function isCustomFill (fill?: string | false | undefined | number): boolean {
  if (typeof fill !== 'string') { return false }

  return !getFills(true, true).includes(fill) && !isCustomVariable(fill)
}


export function isCustomVariable (variable?: string | false | number): boolean {
  if (typeof variable !== 'string') {
    return false
  } else if (variable.includes('--')) {
    return true
  }
  return false
}


export function isCustomValue (value?: string | number | false): boolean {
  if (!value) { return false }
  const additionalValues = ['none', 'max'] as any[]
  return isInScale(value) || isCustomFill(value) || isCustomVariable(value) || additionalValues.includes(value) || false
}