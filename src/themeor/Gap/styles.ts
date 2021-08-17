import jss, { Classes, Styles, StyleSheet } from 'jss'


export let css: Classes = {}
export let styleSheet: StyleSheet


export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`gap`] = { boxSizing: 'border-box' }

  for (const key in size) {
    styles[`size-${key}`] = { padding: size[key] }
  }
  styles[`size-none`] = { padding: 0 }

  for (const key in size) {
    styles[`vert-${key}`] = {
      paddingTop: size[key],
      paddingBottom: size[key],
    }
    styles[`hor-${key}`] = {
      paddingLeft: size[key],
      paddingRight: size[key],
    }
  }
  styles[`vert-none`] = {
    paddingTop: 0,
    paddingBottom: 0,
  }
  styles[`hor-none`] = {
    paddingLeft: 0,
    paddingRight: 0,
  }

  for (const key in size) {
    styles[`top-${key}`] = { paddingTop: size[key] }
    styles[`right-${key}`] = { paddingRight: size[key] }
    styles[`bottom-${key}`] = { paddingBottom: size[key] }
    styles[`left-${key}`] = { paddingLeft: size[key] }
  }
  styles[`top-none`] = { paddingTop: 0 }
  styles[`right-none`] = { paddingRight: 0 }
  styles[`bottom-none`] = { paddingBottom: 0 }
  styles[`left-none`] = { paddingLeft: 0 }

  if (styleSheet) {
    styleSheet.update(styles)
  } else {
    styleSheet = jss.createStyleSheet(styles)
    styleSheet.attach()
  }
  css = styleSheet.classes
  return styleSheet
}