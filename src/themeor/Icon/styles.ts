import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'
import { ICON_NAME } from './types'


export const useCss: () => Classes = () => getClasses(ICON_NAME)

export default function (normalizedConfig: any) {
  const {
    icon: {
      fill,
      fillFancy,
      fillInverse,
      size,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`icon`] = {
    boxSizing: 'content-box',
    '& svg': { width: '100%', height: '100%' },
  }

  for (const key in size) {
    styles[`size-${key}`] = {
      width: size[key],
      height: size[key],
      minWidth: size[key],
      minHeight: size[key],
    }
  }

  styles[`fill-inverse-${fill}`] = {}

  // Fills
  for (const key in fill) {
    styles[`fill-${key}`] = {
      '& *[fill]': { fill: fill[key] },
      '& *[stroke]': { stroke: fill[key] },
      '& *[fill="none"]': { fill: 'none' },
      '& *[stroke="none"]': { stroke: 'none' },
    }
  }

  for (const key in fillFancy) {
    styles[`fill-fancy-${key}`] = {
      '& *[fill]': { fill: fillFancy[key] },
      '& *[stroke]': { stroke: fillFancy[key] },
      '& *[fill="none"]': { fill: 'none' },
      '& *[stroke="none"]': { stroke: 'none' },
    }
  }

  for (const key in fillInverse) {
    styles[`fill-inverse-${key}`] = {
      '& *[fill]': { fill: fillInverse[key] },
      '& *[stroke]': { stroke: fillInverse[key] },
      '& *[fill="none"]': { fill: 'none' },
      '& *[stroke="none"]': { stroke: 'none' },
    }
  }

  // Forced fills
  for (const force of ['stroke', 'fill']) {
    for (const key in fill) {
      styles[`force-${force}-${key}`] = {
        '& *': { [force]: fill[key] },
        // '& *[class]': { [key]: fill[key] },
        // '& *[stroke]': { [key]: fill[key] },
        // '& *[fill]': { [key]: fill[key] },
      }
    }

    for (const key in fillFancy) {
      styles[`force-${force}-${key}-fancy`] = {
        '& *': { [force]: fillFancy[key] },
        // '& *[class]': { [key]: fillFancy[key] },
        // '& *[stroke]': { [key]: fillFancy[key] },
        // '& *[fill]': { [key]: fillFancy[key] },
      }
    }

    for (const key in fillInverse) {
      styles[`force-${force}-${key}-inverse`] = {
        '& *': { [force]: fillInverse[key] },
        // '& *[class]': { [key]: fillInverse[key] },
        // '& *[stroke]': { [key]: fillInverse[key] },
        // '& *[fill]': { [key]: fillInverse[key] },
      }
    }

  }

  return createStyleSheet(ICON_NAME, styles)
}