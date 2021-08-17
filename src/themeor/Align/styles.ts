import { minus, half } from '../utils/change-css-value'
import jss, { Classes, Styles, StyleSheet } from 'jss'


export let css: Classes = {}
export let styleSheet: StyleSheet


export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`align`] = { display: 'flex' }


  for (const vert of ['center', 'top', 'bottom', 'stretch']) {
    styles[`vert-${vert}`] = {}
  }

  for (const hor of ['center', 'right', 'left', 'stretch']) {
    styles[`hor-${hor}`] = {}
  }

  styles[`col`] = { flexDirection: 'column' }
    ; (styles[`col`] as any)[`&$vert-center`] = { justifyContent: 'center' }
    ; (styles[`col`] as any)[`&$vert-top`] = { justifyContent: 'flex-start' }
    ; (styles[`col`] as any)[`&$vert-bottom`] = { justifyContent: 'flex-end' }
    ; (styles[`col`] as any)[`&$vert-stretch`] = { justifyContent: 'stretch' }
    ; (styles[`col`] as any)[`&$hor-center`] = { alignItems: 'center' }
    ; (styles[`col`] as any)[`&$hor-right`] = { alignItems: 'flex-end' }
    ; (styles[`col`] as any)[`&$hor-left`] = { alignItems: 'flex-start' }
    ; (styles[`col`] as any)[`&$hor-stretch`] = { alignItems: 'stretch' }

  styles[`stack`] = { flexWrap: 'wrap' }

  styles[`row`] = { flexDirection: 'row' }
    ; (styles[`row`] as any)[`&$vert-center`] = { alignItems: 'center' }
    ; (styles[`row`] as any)[`&$vert-top`] = { alignItems: 'flex-start' }
    ; (styles[`row`] as any)[`&$vert-bottom`] = { alignItems: 'flex-end' }
    ; (styles[`row`] as any)[`&$vert-stretch`] = { alignItems: 'stretch' }
    ; (styles[`row`] as any)[`&$hor-center`] = { justifyContent: 'center' }
    ; (styles[`row`] as any)[`&$hor-right`] = { justifyContent: 'flex-end' }
    ; (styles[`row`] as any)[`&$hor-left`] = { justifyContent: 'flex-start' }
    ; (styles[`row`] as any)[`&$hor-stretch`] = { justifyContent: 'stretch' }


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

    styles[`item__hor-gap-${key}`] = {
      paddingLeft: half(size[key]),
      paddingRight: half(size[key]),
      boxSizing: 'border-box',
    }

    styles[`item__vert-gap-${key}`] = {
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
    ; (styles[`pattern`] as any)[`&$vert-center`] = { alignItems: 'center' }
    ; (styles[`pattern`] as any)[`&$vert-top`] = { alignItems: 'start' }
    ; (styles[`pattern`] as any)[`&$vert-bottom`] = { alignItems: 'end' }
    ; (styles[`pattern`] as any)[`&$vert-stretch`] = { alignItems: 'stretch' }
    ; (styles[`pattern`] as any)[`&$hor-center`] = { justifyItems: 'center' }
    ; (styles[`pattern`] as any)[`&$hor-right`] = { justifyItems: 'end' }
    ; (styles[`pattern`] as any)[`&$hor-left`] = { justifyItems: 'start' }
    ; (styles[`pattern`] as any)[`&$hor-stretch`] = { justifyItems: 'stretch' }

  for (const key in size) {
    ; (styles[`pattern`] as any)[`&$hor-gap-${key}`] = { columnGap: size[key] }
      ; (styles[`pattern`] as any)[`&$vert-gap-${key}`] = { rowGap: size[key] }
  }


  if (styleSheet) {
    styleSheet.update(styles)
  } else {
    styleSheet = jss.createStyleSheet(styles, { classNamePrefix: 'align' })
    styleSheet.attach()
  }

  css = styleSheet.classes
  return styleSheet
}