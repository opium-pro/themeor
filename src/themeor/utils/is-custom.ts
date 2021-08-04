import {allFills} from './opium-fill'
import {isInScale} from './opium-scale'
import {isInFills} from './opium-fill'


export function isCustomFill (fill?: string | false | undefined | number): boolean {
  if (typeof fill !== 'string') { return false }

  return !allFills.includes(fill) && !isCustomVariable(fill)
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

  if (isInScale(value)) {
    return false
  }

  if (isInFills(value)) {
    return false
  }

  return true
}