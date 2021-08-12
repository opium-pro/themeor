import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    box: {
      fill,
      fillFancy,
      fillInversed,
      radius,
      shadow,
      glow,
      shadowInner,
      blur,
    }
  } = normalizedConfig

  let styles = `
.t-box {
  border-radius: 0;
  outline: none;
  border: none;
}

.t-box-fill-none {background: transparent;}

.t-box-img {
  background-size: cover;
  background-position: center;
}
`


  // Fills
  for (const key in fill) {
    styles += `.t-box-fill-${key} {background-color: ${fill[key]}};
`

    for (const key in fillFancy) {
      styles += `.t-box-fill-${key}.t-box-fancy {background-image: ${fillFancy[key]}};
`
    }

    for (const key in fillInversed) {
      styles += `.t-box-fill-${key}.t-box-inverse {background-color: ${fillInversed[key]}};
`
    }
  }


  // Raduis
  const defaultMaxRadius = '1000px'
  styles += `
.t-box-radius-none {border-radius: 0;}
.t-box-radius-max {border-radius: ${defaultMaxRadius};}
`

  for (const key in radius) {
    styles += `.t-box-radius-${key} {border-radius: ${radius[key]}};
`
  }
  styles += `
.t-box-radius-top-none {border-top-left-radius: 0; border-top-right-radius: 0;}
.t-box-radius-bottom-none {border-bottom-left-radius: 0; border-bottom-right-radius: 0;}
.t-box-radius-right-none {border-bottom-right-radius: 0; border-top-right-radius: 0;}
.t-box-radius-left-none {border-bottom-left-radius: 0; border-top-left-radius: 0;}
.t-box-radius-top-max {border-top-left-radius: ${defaultMaxRadius}; border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-bottom-max {border-bottom-left-radius: ${defaultMaxRadius}; border-bottom-right-radius: ${defaultMaxRadius};}
.t-box-radius-right-max {border-bottom-right-radius: ${defaultMaxRadius}; border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-left-max {border-bottom-left-radius: ${defaultMaxRadius}; border-top-left-radius: ${defaultMaxRadius};}
`

  for (const key in radius) {
    styles += `
.t-box-radius-top-${key} {
  border-top-left-radius: ${radius[key]};
  border-top-right-radius: ${radius[key]};
}

.t-box-radius-bottom-${key} {
  border-bottom-left-radius: ${radius[key]};
  border-bottom-right-radius: ${radius[key]};
}
.t-box-radius-right-${key} {
  border-bottom-right-radius: ${radius[key]};
  border-top-right-radius: ${radius[key]};
}
.t-box-radius-left-${key} {
  border-bottom-left-radius: ${radius[key]};
  border-top-left-radius: ${radius[key]};
}
`
  }

  styles += `
.t-box-radius-tl-none {border-top-left-radius: 0;}
.t-box-radius-tr-none {border-top-right-radius: 0;}
.t-box-radius-br-none {border-bottom-right-radius: 0;}
.t-box-radius-bl-none {border-bottom-left-radius: 0;}
.t-box-radius-tl-max {border-top-left-radius: ${defaultMaxRadius};}
.t-box-radius-tr-max {border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-br-max {border-bottom-right-radius: ${defaultMaxRadius};}
.t-box-radius-bl-max {border-bottom-left-radius: ${defaultMaxRadius};}
`
  for (const key in radius) {
    styles += `
.t-box-radius-tl-${key} {
  border-top-left-radius: ${radius[key]};
}
.t-box-radius-tr-${key} {
  border-top-right-radius: ${radius[key]};
}
.t-box-radius-br-${key} {
  border-bottom-right-radius: ${radius[key]};
}
.t-box-radius-bl-${key} {
  border-bottom-left-radius: ${radius[key]};
}
`
  }


  // Shadows
  styles += `.t-box-shadow-none {box-shadow: none;}
`
  for (const key in shadow) {
    styles += `.t-box-shadow-${key} {box-shadow: ${shadow[key]};}
`
  }

  // Inner Shadows
  for (const key in shadowInner) {
    styles += `.t-box-shadow-inner-${key} {box-shadow: inset ${shadowInner[key]};}
`
  }

  // Glows
  for (const key in glow) {
    styles += `.t-box-glow-${key} {box-shadow: ${glow[key]};}
`
  }

  // Blurs
  styles += `.t-box-blur-none {backdrop-filter: none;}
`
  for (const key in blur) {
    styles += `.t-box-blur-${key} {backdrop-filter: blur(${blur[key]});}
`
  }

  setStyles(id, styles)
}