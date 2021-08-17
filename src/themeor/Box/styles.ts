import { setStyles } from '../utils/styles'

export const id = 'themeor-box'

export default function (normalizedConfig: any) {
  const {
    box: {
      fill,
      fillFancy,
      fillInversed,
      fillStrong,
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

.t-box-img {
  background-size: cover;
  background-position: center;
}
`


  // Fills
  for (const key in fill) {
    styles += `.t-box-fill-${key} {background-color: ${fill[key]}}
`
  }

  for (const key in fillStrong) {
    styles += `.t-box-fill-${key}.t-box-strong {background-color: ${fillStrong[key]}}
`
  }

  for (const key in fillFancy) {
    styles += `.t-box-fill-${key}.t-box-fancy {background-image: ${fillFancy[key]}}
`
  }

  for (const key in fillInversed) {
    styles += `.t-box-fill-${key}.t-box-inverse {background-color: ${fillInversed[key]}}
`
  }

  // Radius

  for (const key in radius) {
    styles += `.t-box-radius-${key} {border-radius: ${radius[key]}}
`
  }

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