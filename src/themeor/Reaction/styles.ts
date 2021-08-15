import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    reaction: {
      speed,
    }
  } = normalizedConfig

  let styles = ''


  for (const key in speed) {
    styles += `
.speed-${key} {
  transition-duration: ${speed[key]};
  transition-property: color, background, fill, font-size, font-weight, width, height, top, left, right, bottom, opacity;
  transition-timing-function: ease;
}
`
  }

  styles += `
.speed-none {
  transition-duration: 0ms;
  transition-property: all;
  transition-timing-function: ease;
}

.reaction {
  pointer-events: all;
}
.reaction:focus {
    outline: none;
  }

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.ignore {
  pointer-events: none;
}

`

  setStyles(id, styles)
}