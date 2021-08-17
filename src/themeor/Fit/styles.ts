import { setStyles } from '../utils/styles'
import { minus } from '../utils/change-css-value'

export const id = 'themeor-fit'

export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  let styles = `
.t-fit {
  position: relative;
}

.t-fit-is-not-parent {
  position: static;
}

.t-fit-inline {
  display: inline-block;
}

.t-fit-cover-screen {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.t-fit-cover-parent {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.t-fit-stick-parent {
  position: absolute;
}

.t-fit-clip {
  overflow: hidden;
}

.t-fit-block {
  display: block;
}

.t-fit-scroll {
  overflow: auto;
  // scroll-behavior: smooth;
}

.t-fit-stick-top-left{left: 0; top: 0; right: unset; bottom: unset;}
.t-fit-stick-top{left: unset; top: 0; right: unset; bottom: unset;}
.t-fit-stick-top-right{left: unset; top: 0; right: 0; bottom: unset;}
.t-fit-stick-right{left: unset; top: unset; right: 0; bottom: unset;}
.t-fit-stick-bottom-right{left: unset; top: unset; right: 0; bottom: 0;}
.t-fit-stick-bottom{left: unset; top: unset; right: unset; bottom: 0;}
.t-fit-stick-bottom-left{left: 0; top: unset; right: unset; bottom: 0;}
.t-fit-stick-left{left: 0; top: unset; right: unset; bottom: unset;}
`


  // Offset
  for (const key in size) {
    styles += `
.t-fit-offset-${key} {
  top: ${minus(size[key])};
  left: ${minus(size[key])};
  right: ${minus(size[key])};
  bottom: ${minus(size[key])};
}
.t-fit-offset-top-${key} {top: ${size[key]};}
.t-fit-offset-right-${key} {right: ${size[key]};}
.t-fit-offset-bottom-${key} {bottom: ${size[key]};}
.t-fit-offset-left-${key} {left: ${size[key]};}
`
  }

  styles += `
.t-fit-offset-none {top: 0; left: 0; right: 0; bottom: 0;}
.t-fit-offset-top-none {top: 0;}
.t-fit-offset-right-none {right: 0;}
.t-fit-offset-bottom-none {bottom: 0;}
.t-fit-offset-left-none {left: 0;}
`

  setStyles(id, styles)
}