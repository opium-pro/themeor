import { createStyleSheet, getClasses } from '../utils/styles.js'
import { Classes, Styles } from 'jss'
import { REACTION_NAME } from './types.js'

export const useCss: () => Classes = () => getClasses(REACTION_NAME)


export default function (normalizedConfig: any) {
  const {
    reaction: {
      duration,
      cursor,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`reaction`] = {
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
    styles[`duration-${key}`] = {
      transitionDuration: duration[key],
    }
  }


  return createStyleSheet(REACTION_NAME, styles)
}