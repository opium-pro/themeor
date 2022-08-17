import { createStyleSheet, getClasses } from '../utils/styles.js'
import { Classes, Styles } from 'jss'
import { BOX_NAME } from './types.js'

export const useCss: () => Classes = () => getClasses(BOX_NAME)


export default function (normalizedConfig: any) {
  const {
    box: {
      fill,
      fillFancy,
      fillInverse,
      radius,
      shadow,
      glow,
      shadowInner,
      blur,
    }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`box`] = {
    borderRadius: 0,
    outline: 'none',
    border: 'none',
  }

  styles[`img`] = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }


  // Fills
  for (const key in fill) {
    styles[`fill-${key}`] = { backgroundColor: fill[key] }
  }
  for (const key in fillFancy) {
    styles[`fill-fancy-${key}`] = { backgroundImage: fillFancy[key] }
  }
  for (const key in fillInverse) {
    styles[`fill-inverse-${key}`] = { backgroundColor: fillInverse[key] }
  }



  // Radius
  for (const key in radius) {
    styles[`radius-${key}`] = { borderRadius: radius[key] }
  }
  for (const key in radius) {
    styles[`radius-top-${key}`] = {
      borderTopLeftRadius: radius[key],
      borderTopRightRadius: radius[key],
    }
    styles[`radius-bottom-${key}`] = {
      borderBottomLeftRadius: radius[key],
      borderBottomRightRadius: radius[key],
    }
    styles[`radius-right-${key}`] = {
      borderTopRightRadius: radius[key],
      borderBottomRightRadius: radius[key],
    }
    styles[`radius-left-${key}`] = {
      borderTopLeftRadius: radius[key],
      borderBottomLeftRadius: radius[key],
    }
  }
  for (const key in radius) {
    styles[`radius-tl-${key}`] = {
      borderTopLeftRadius: radius[key],
    }
    styles[`radius-tr-${key}`] = {
      borderTopRightRadius: radius[key],
    }
    styles[`radius-br-${key}`] = {
      borderBottomRightRadius: radius[key],
    }
    styles[`radius-bl-${key}`] = {
      borderBottomLeftRadius: radius[key],
    }
  }


  // Shadows
  for (const key in shadow) {
    styles[`shadow-${key}`] = { boxShadow: shadow[key] }
  }

  // Inner Shadows
  for (const key in shadowInner) {
    styles[`shadow-inner-${key}`] = { boxShadow: `inset ${shadowInner[key]}` }
  }

  // Glows
  for (const key in glow) {
    styles[`glow-${key}`] = { boxShadow: glow[key] }
  }

  // Blurs
  for (const key in blur) {
    styles[`blur-${key}`] = { backdropFilter: `blur(${blur[key]})` }
  }


  return createStyleSheet(BOX_NAME, styles)
}