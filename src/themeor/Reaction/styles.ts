import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'
import { REACTION_NAME } from './types'

export const useCss: () => Classes = () => getClasses(REACTION_NAME)


export default function (normalizedConfig: any) {
  const {
    reaction: {
      duration,
      property,
      cursor,
      timingFunction,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`reaction`] = {
    pointerEvents: 'all',
    outline: 'none',
  }

  for (const key in cursor) {
    styles[`cursor-${key}`] = {
      cursor: cursor[key],
    }
  }

  styles[`ignore`] = {
    pointerEvents: 'none',
  }


  for (const key in duration) {
    styles[`speed-${key}`] = {
      transitionDuration: duration[key],
    }
  }

  for (const key in property) {
    styles[`property-${key}`] = {
      transitionProperty: property[key],
    }
  }

  for (const key in timingFunction) {
    styles[`timing-function-${key}`] = {
      transitionProperty: timingFunction[key],
    }
  }


  return createStyleSheet(REACTION_NAME, styles)
}