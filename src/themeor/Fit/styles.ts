import { minus } from '../utils/change-css-value.js'
import { createStyleSheet, getClasses } from '../utils/styles.js'
import { Classes, Styles } from 'jss'
import { FIT_NAME } from './types.js'


export const useCss: () => Classes = () => getClasses(FIT_NAME)

export default function (normalizedConfig: any) {
  const {
    fit: { offset, zIndex, shift }
  } = normalizedConfig

  const styles: Styles = {}

  styles[`fit`] = { position: 'relative' }

  styles[`cover-screen`] = {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }

  styles[`cover-parent`] = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }

  styles[`static`] = { position: 'static' }
  styles[`inline`] = { display: 'inline-block' }
  styles[`sticky`] = { position: 'sticky' }
  styles[`fixed`] = { position: 'fixed' }
  styles[`absolute`] = { position: 'absolute' }

  styles[`clip`] = {
    overflow: 'hidden',
  }

  styles[`block`] = {
    display: 'block',
  }

  styles[`contents`] = {
    display: 'contents',
  }

  styles[`scroll`] = {
    overflow: 'auto',
  }

  styles[`stick-parent`] = {
    position: 'absolute',
  }

  styles[`stick-top-left`] = {
    left: 0, top: 0,
    right: 'unset', bottom: 'unset',
  }
  styles[`stick-top`] = {
    left: 'unset', top: 0,
    right: 'unset', bottom: 'unset',
  }
  styles[`stick-top-right`] = {
    left: 'unset', top: 0,
    right: 0, bottom: 'unset',
  }
  styles[`stick-right`] = {
    left: 'unset', top: 'unset',
    right: 0, bottom: 'unset',
  }
  styles[`stick-bottom-right`] = {
    left: 'unset', top: 'unset',
    right: 0, bottom: 0,
  }
  styles[`stick-bottom`] = {
    left: 'unset', top: 'unset',
    right: 'unset', bottom: 0,
  }
  styles[`stick-bottom-left`] = {
    left: 0, top: 'unset',
    right: 'unset', bottom: 0,
  }
  styles[`stick-left`] = {
    left: 0, top: 'unset',
    right: 'unset', bottom: 'unset',
  }


  // Offset
  for (const key in offset) {
    styles[`offset-${key}`] = {
      marginTop: minus(offset[key]),
      marginLeft: minus(offset[key]),
      marginRight: minus(offset[key]),
      marginBottom: minus(offset[key]),
    }
  }

  for (const key in offset) {
    styles[`offset-top-${key}`] = {
      marginTop: minus(offset[key]),
    }
    styles[`offset-right-${key}`] = {
      marginRight: minus(offset[key]),
    }
    styles[`offset-bottom-${key}`] = {
      marginBottom: minus(offset[key]),
    }
    styles[`offset-left-${key}`] = {
      marginLeft: minus(offset[key]),
    }
  }


  for (const key in shift) {
    styles[`shift-top-${key}`] = {
      top: shift[key],
    }
    styles[`shift-right-${key}`] = {
      right: shift[key],
    }
    styles[`shift-bottom-${key}`] = {
      bottom: shift[key],
    }
    styles[`shift-left-${key}`] = {
      left: shift[key],
    }
  }

  // Z Index
  for (const key in zIndex) {
    styles[`z-index-${key}`] = { zIndex: zIndex[key] }
  }


  return createStyleSheet(FIT_NAME, styles)
}