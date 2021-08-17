import { setStyles } from '../utils/styles'

export const id = 'themeor-font'

export default function (normalizedConfig: any) {
  const {
    font: {
      fill,
      fillInversed,
      fillFancy,
      size,
      weight,
      lineHeight,
      letterSpacing,
      family,
      align,
    }
  } = normalizedConfig

  let styles = `
.t-font {
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  font-style: inherit;
  text-decoration: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  white-space: inherit;
  user-select: inherit;
}

.t-font-inline {
  display: inline-block;
}

.t-font-block {
  display: block;
}

.t-font-underline {
  text-decoration: underline;
}

.t-font-non-underline {
  text-decoration: none;
}

.t-font-noselect {
  user-select: none;
}

.t-font-nowrap {
  white-space: nowrap;
}

.t-font-italic {
  font-style: italic;
}
.t-font-non-italic {
  font-style: normal;
}

.t-font-uppercase {
  text-transform: uppercase;
}
.t-font-non-uppercase {
  text-transform: none;
}
`


  // Fills
  for (const key in fill) {
    styles += `.t-font-fill-${key} {color: ${fill[key]}}
`

    for (const key in fillFancy) {
      styles += `
.t-font-fill-${key}.t-font-fancy {
  background-image: ${fillFancy[key]}};
  background-clip: text;
}
`
    }

    for (const key in fillInversed) {
      styles += `.t-font-fill-${key}.t-font-inverse {color: ${fillInversed[key]}}
`
    }
  }


  // Size
  for (const key in size) {
    styles += `
.t-font-size-${key} {font-size: ${size[key]};}`
  }

  // Weight
  for (const key in weight) {
    styles += `
.t-font-weight-${key} {font-weight: ${weight[key]};}`
  }

  // Line Height
  for (const key in lineHeight) {
    styles += `
.t-font-line-height-${key} {line-height: ${lineHeight[key]};}`
  }

  // Letter Spacing
  for (const key in letterSpacing) {
    styles += `
.t-font-letter-spacing-${key} {letter-spacing: ${letterSpacing[key]};}`
  }

  // Align
  for (const key in align) {
    styles += `
.t-font-align-${key} {text-align: ${align[key]};}`
  }

  // Family
  for (const key in family) {
    styles += `
.t-font-family-${key} {font-family: ${family[key]};}`
  }


  setStyles(id, styles)
}