import { setStyles } from '../utils/styles'

export const id = 'themeor-gap'

export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  let styles = `
.t-gap {
  box-sizing: border-box;
}
`


  for (const key in size) {
    styles += `
.t-gap-size-${key} {padding: ${size[key]};}
`
  }
  styles += `
.t-gap-size-none {padding: 0;}
`

for (const key in size) {
    styles += `
.t-gap-vert-${key} {padding-top: ${size[key]};padding-bottom: ${size[key]};}
.t-gap-hor-${key} {padding-left: ${size[key]};padding-right: ${size[key]};}
`
  }
  styles += `
.t-gap-vert-none {padding-top: 0;padding-bottom: 0;}
.t-gap-hor-none {padding-left: 0;padding-right: 0;}
`

for (const key in size) {
    styles += `
.t-gap-top-${key} {padding-top: ${size[key]};}
.t-gap-right-${key} {padding-right: ${size[key]};}
.t-gap-bottom-${key} {padding-bottom: ${size[key]};}
.t-gap-left-${key} {padding-left: ${size[key]};}
`
  }
  styles += `
.t-gap-top-none {padding-top: 0;}
.t-gap-right-none {padding-right: 0;}
.t-gap-bottom-none {padding-bottom: 0;}
.t-gap-left-none {padding-left: 0;}
`

  setStyles(id, styles)
}