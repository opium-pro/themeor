import { setStyles } from '../utils/styles'
import { ICON_NAME } from './types'

export const id = 'themeor-icon'

export default function (normalizedConfig: any) {
  const {
    icon: {
      fill,
      fillFancy,
      fillInversed,
      size,
    }
  } = normalizedConfig

  let styles = `
.t-icon {
  box-sizing: content-box !important;
}
`

  for (const key in size) {
    styles += `
.t-icon-size-${key} {
  width: ${size[key]};
  height: ${size[key]};
  min-width: ${size[key]};
  min-height: ${size[key]};
}
`
  }

  styles += `
.t-icon.inverse {
  *[fill] {
    fill: var(--t-fill-base-weak);
  }

  *[stroke] {
    stroke: var(--t-fill-base-weak);
  }
}
`


  // Fills
  for (const key in fill) {
    styles += `
.t-icon-fill-${key} {
  *[fill] {
    fill: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }

  *[stroke] {
    stroke: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }
}
.t-icon-inverse.t-icon-fill-${key} {
  *[fill] {
    fill: var(--t-icon-fill-${key}-weak, var(--t-fill-${key}-weak));
  }

  *[stroke] {
    stroke: var(--t-icon-fill-${key}-weak, var(--t-fill-${key}-weak));
  }
}
`
  }


  for (const key of ['stroke', 'fill']) {
    styles += `
.t-icon-force-#{$force} {
  &.inverse {
    *[class],
    *[stroke],
    *[fill] {
      #{$force}: var(--t-fill-base-weak);
    }
  }
`
    for (const key in fill) {
      styles += `
&.t-icon-fill-${key} {
  *[class],
  *[stroke],
  *[fill] {
    #{$force}: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }
}
&.t-icon-inverse.t-icon-fill-${key} {
  *[class],
  *[stroke],
  *[fill] {
    #{$force}: var(--t-icon-fill-${key}-weak, var(--t-fill-${key}-weak));
  }
}
`
    }
  }

  styles += `
.t-icon-fill-none {
  * {
    fill: none !important;
    stroke: none !important;
  }
}

.t-icon-icon {
  *[fill="none"] {
    fill: none !important;
  }

  *[stroke="none"] {
    stroke: none !important;
  }
}
`


  setStyles(id, styles)

}