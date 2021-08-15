import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'
import { minus } from '../utils/change-css-value'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  let styles = `
.fit {
  position: relative;
}

.isNotParent {
  position: static;
}

.inline {
  display: inline-block;
}

.cover-screen {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.cover-parent {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.stick-parent {
  position: absolute;
}

.clip {
  overflow: hidden;
}

.block {
  display: block;
}

.scroll {
  overflow: auto;
  // scroll-behavior: smooth;
}

.stick-top-left{left: 0; top: 0; right: unset; bottom: unset;}
.stick-top{left: unset; top: 0; right: unset; bottom: unset;}
.stick-top-right{left: unset; top: 0; right: 0; bottom: unset;}
.stick-right{left: unset; top: unset; right: 0; bottom: unset;}
.stick-bottom-right{left: unset; top: unset; right: 0; bottom: 0;}
.stick-bottom{left: unset; top: unset; right: unset; bottom: 0;}
.stick-bottom-left{left: 0; top: unset; right: unset; bottom: 0;}
.stick-left{left: 0; top: unset; right: unset; bottom: unset;}
`


  // Offset
  for (const key in size) {
    styles += `
.offset-${key} {
  top: ${minus(size[key])};
  left: ${minus(size[key])};
  right: ${minus(size[key])};
  bottom: ${minus(size[key])};
}
.offset-top-${key} {top: ${size[key]};}
.offset-right-${key} {right: ${size[key]};}
.offset-bottom-${key} {bottom: ${size[key]};}
.offset-left-${key} {left: ${size[key]};}
`
  }

  styles += `
.offset-none {top: 0; left: 0; right: 0; bottom: 0;}
.offset-top-none {top: 0;}
.offset-right-none {right: 0;}
.offset-bottom-none {bottom: 0;}
.offset-left-none {left: 0;}
`

  setStyles(id, styles)
}