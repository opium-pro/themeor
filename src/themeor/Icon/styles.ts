import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'

export const id = newId()

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
.icon {
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
.fill-${key} {
  *[fill] {
    fill: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }

  *[stroke] {
    stroke: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }
}
.inverse.fill-${key} {
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
.force-#{$force} {
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
&.fill-${key} {
  *[class],
  *[stroke],
  *[fill] {
    #{$force}: var(--t-icon-fill-${key}-strong, var(--t-fill-${key}-strong));
  }
}
&.inverse.fill-${key} {
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
  .fill-none {
  * {
    fill: none !important;
    stroke: none !important;
  }
}

.icon {
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