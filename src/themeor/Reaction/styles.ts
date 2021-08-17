import { setStyles } from '../utils/styles'

export const id = 'themeor-reaction'

export default function (normalizedConfig: any) {
  const {
    reaction: {
      speed,
    }
  } = normalizedConfig

  let styles = `
.t-reaction {
  pointer-events: all;
}
.t-reaction:focus {
    outline: none;
  }

.t-reaction-cursor-pointer {
  cursor: pointer;
}

.t-reaction-cursor-text {
  cursor: text;
}

.t-reaction-ignore {
  pointer-events: none;
}
`


  for (const key in speed) {
    styles += `
.t-reaction-speed-${key} {
  transition-duration: ${speed[key]};
  transition-property: color, background, fill, font-size, font-weight, width, height, top, left, right, bottom, opacity;
  transition-timing-function: ease;
}
`
  }


  setStyles(id, styles)
}