import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'
import { minus } from '../utils/change-css-value'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  let styles = `
.gap {
  box-sizing: border-box;
}
`


  for (const key in size) {
    styles += `
.size-${key} {padding: ${size[key]};}
`
  }
  styles += `
.size-none {padding: 0;}
`

for (const key in size) {
    styles += `
.vert-${key} {padding-top: ${size[key]};padding-bottom: ${size[key]};}
.hor-${key} {padding-left: ${size[key]};padding-right: ${size[key]};}
`
  }
  styles += `
.vert-none {padding-top: 0;padding-bottom: 0;}
.hor-none {padding-left: 0;padding-right: 0;}
`

for (const key in size) {
    styles += `
.top-${key} {padding-top: ${size[key]};}
.right-${key} {padding-right: ${size[key]};}
.bottom-${key} {padding-bottom: ${size[key]};}
.left-${key} {padding-left: ${size[key]};}
`
  }
  styles += `
.top-none {padding-top: 0;}
.right-none {padding-right: 0;}
.bottom-none {padding-bottom: 0;}
.left-none {padding-left: 0;}
`

  setStyles(id, styles)
}