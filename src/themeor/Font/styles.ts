import { createStyleSheet, getClasses } from '../utils/styles'
import { Classes, Styles } from 'jss'
import {FONT_NAME} from './types'


export const useCss: () => Classes = () => getClasses(FONT_NAME)


export default function (normalizedConfig: any) {
  const {
    font: {
      fill,
      fillInverse,
      fillFancy,
      size,
      weight,
      lineHeight,
      letterSpacing,
      family,
      align,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`font`] = {
    color: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'inherit',
    fontStyle: 'inherit',
    textDecoration: 'inherit',
    letterSpacing: 'inherit',
    whiteSpace: 'inherit',
    userSelect: 'inherit',
  }

  styles[`inline`] = { display: 'inline-block' }
  styles[`block`] = { display: 'block' }
  styles[`underline`] = { textDecoration: 'underline' }
  styles[`nounderline`] = { textDecoration: 'none' }
  styles[`noselect`] = { userSelect: 'none' }
  styles[`nowrap`] = { whiteSpace: 'nowrap' }
  styles[`wrap`] = { wordBreak: 'break-word' }
  styles[`italic`] = { fontStyle: 'italic' }
  styles[`noitalic`] = { fontStyle: 'normal' }
  styles[`uppercase`] = { textTransform: 'uppercase' }
  styles[`nouppercase`] = { textTransform: 'none' }


  // Fills
  for (const key in fill) {
    styles[`fill-${key}`] = { color: fill[key] }
  }
  for (const key in fillFancy) {
    styles[`fill-fancy-${key}`] = {
      backgroundImage: fillFancy[key],
      backgroundClip: 'text',
    }
  }
  for (const key in fillInverse) {
    styles[`fill-inverse-${key}`] = { color: fillInverse[key] }
  }


  // Size
  for (const key in size) {
    styles[`size-${key}`] = { fontSize: size[key] }
  }

  // Weight
  for (const key in weight) {
    styles[`weight-${key}`] = { fontWeight: weight[key] }
  }

  // Line Height
  for (const key in lineHeight) {
    styles[`line-height-${key}`] = { lineHeight: lineHeight[key] }
  }

  // Letter Spacing
  for (const key in letterSpacing) {
    styles[`letter-spacing-${key}`] = { letterSpacing: letterSpacing[key] }
  }

  // Align
  for (const key in align) {
    styles[`align-${key}`] = { textAlign: align[key] }
  }

  // Family
  for (const key in family) {
    styles[`family-${key}`] = { fontFamily: family[key] }
  }


  return createStyleSheet(FONT_NAME, styles)
}