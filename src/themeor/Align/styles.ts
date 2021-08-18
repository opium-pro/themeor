import { minus, half } from '../utils/change-css-value'
import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'
import { ALIGN_NAME } from './types'


export const useCss: () => Classes = () => getClasses(ALIGN_NAME)


export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`align`] = { display: 'flex' }

  styles[`col`] = { flexDirection: 'column' }
  styles[`col-vert-center`] = { justifyContent: 'center' }
  styles[`col-vert-top`] = { justifyContent: 'flex-start' }
  styles[`col-vert-bottom`] = { justifyContent: 'flex-end' }
  styles[`col-vert-stretch`] = { justifyContent: 'stretch' }
  styles[`col-hor-center`] = { alignItems: 'center' }
  styles[`col-hor-right`] = { alignItems: 'flex-end' }
  styles[`col-hor-left`] = { alignItems: 'flex-start' }
  styles[`col-hor-stretch`] = { alignItems: 'stretch' }

  styles[`stack`] = { flexWrap: 'wrap' }

  styles[`row`] = { flexDirection: 'row' }
  styles[`row-vert-center`] = { alignItems: 'center' }
  styles[`row-vert-top`] = { alignItems: 'flex-start' }
  styles[`row-vert-bottom`] = { alignItems: 'flex-end' }
  styles[`row-vert-stretch`] = { alignItems: 'stretch' }
  styles[`row-hor-center`] = { justifyContent: 'center' }
  styles[`row-hor-right`] = { justifyContent: 'flex-end' }
  styles[`row-hor-left`] = { justifyContent: 'flex-start' }
  styles[`row-hor-stretch`] = { justifyContent: 'stretch' }


  // Gaps
  for (const key in size) {
    styles[`hor-gap-${key}`] = {
      marginLeft: minus(half(size[key])),
      marginRight: minus(half(size[key])),
    }
    styles[`vert-gap-${key}`] = {
      marginTop: minus(half(size[key])),
      marginBottom: minus(half(size[key])),
    }

    styles[`item-hor-gap-${key}`] = {
      paddingLeft: half(size[key]),
      paddingRight: half(size[key]),
      boxSizing: 'border-box',
    }

    styles[`item-vert-gap-${key}`] = {
      paddingTop: half(size[key]),
      paddingBottom: half(size[key]),
      boxSizing: 'border-box',
    }
  }

  // Pattern
  styles[`pattern`] = {
    display: 'grid',
    gridTemplateRows: 'auto',
  }
  styles[`pattern-vert-center`] = { alignItems: 'center' }
  styles[`pattern-vert-top`] = { alignItems: 'start' }
  styles[`pattern-vert-bottom`] = { alignItems: 'end' }
  styles[`pattern-vert-stretch`] = { alignItems: 'stretch' }
  styles[`pattern-hor-center`] = { justifyItems: 'center' }
  styles[`pattern-hor-right`] = { justifyItems: 'end' }
  styles[`pattern-hor-left`] = { justifyItems: 'start' }
  styles[`pattern-hor-stretch`] = { justifyItems: 'stretch' }

  for (const key in size) {
    styles[`pattern-hor-gap-${key}`] = { columnGap: size[key] }
    styles[`pattern-vert-gap-${key}`] = { rowGap: size[key] }
  }

  return createStyleSheet(ALIGN_NAME, styles)
}