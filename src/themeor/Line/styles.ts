import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'

export const useCss: () => Classes = () => getClasses('line')


export default function (normalizedConfig: any) {
  const {
    line: {
      weight,
      fill,
      fillFancy,
      fillInversed,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`line`] = {
    borderStyle: 'solid',
    borderWidth: 0,
  }


  for (const key in weight) {
    styles[`weight-${key}`] = { borderWidth: weight[key] }
    styles[`weight-top-${key}`] = { borderTopWidth: weight[key] }
    styles[`weight-right-${key}`] = { borderRightWidth: weight[key] }
    styles[`weight-bottom-${key}`] = { borderBottomWidth: weight[key] }
    styles[`weight-left-${key}`] = { borderLeftWidth: weight[key] }

    styles[`separator-weight-${key}`] = {
      borderWidth: 0,
      borderTopWidth: weight[key]
    }
  }


  // Fills
  for (const key in fill) {
    styles[`fill-${key}`] = { borderColor: fill[key] }
  }
  for (const key in fillFancy) {
    styles[`fill-fancy-${key}`] = { borderImage: fillFancy[key] }
  }
  for (const key in fillInversed) {
    styles[`fill-inversed-${key}`] = { borderColor: fillInversed[key] }
  }



  return createStyleSheet('line', styles)
}