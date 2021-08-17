import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    effect: { transparency }
  } = normalizedConfig

  let styles = `
.t-effect-hidden {
  display: none,
}
`


  // Offset
  for (const key in transparency) {
    styles += `
.t-effect-transparency-${key} {
  opacity: ${transparency[key]};
}
`

    setStyles(id, styles)
  }
}