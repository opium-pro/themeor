import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'
import { LINE_NAME } from './types'

export const useCss: () => Classes = () => getClasses(LINE_NAME)


export default function (normalizedConfig: any) {
  const {
    line: {
      weight,
      fill,
      fillFancy,
      fillInverse,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`line`] = {
    borderStyle: 'solid',
    // borderLeftWidth: 0,
    // borderTopWidth: 0,
    // borderRightWidth: 0,
    // borderBottomWidth: 0,
  }


  for (const key in weight) {
    styles[`weight-${key}`] = { borderWidth: weight[key] }
    styles[`weight-top-${key}`] = { borderTopWidth: weight[key] }
    styles[`weight-right-${key}`] = { borderRightWidth: weight[key] }
    styles[`weight-bottom-${key}`] = { borderBottomWidth: weight[key] }
    styles[`weight-left-${key}`] = { borderLeftWidth: weight[key] }

    styles[`separator-hor-${key}`] = {
      borderWidth: 0,
      borderTopWidth: weight[key]
    }

    styles[`separator-vert-${key}`] = {
      borderWidth: 0,
      borderRightWidth: weight[key]
    }
  }


  // Fills
  for (const key in fill) {
    styles[`fill-${key}`] = { borderColor: fill[key] }
  }
  for (const key in fillFancy) {
    styles[`fill-fancy-${key}`] = { borderImage: fillFancy[key] }
  }
  for (const key in fillInverse) {
    styles[`fill-inverse-${key}`] = { borderColor: fillInverse[key] }
  }



  return createStyleSheet(LINE_NAME, styles)
}