import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    line: {
      weight,
      fill,
      fillFancy,
      fillInversed,
    }
  } = normalizedConfig

  let styles = `
.t-line {
  border-style: solid;
  border-width: 0;
}

.t-line-fill-none {
  border-color: transparent;
}

.t-line-separator.t-line-fill-none {
  background-color: transparent;
}


.t-line-weight-none {border-width: 0;}
`

for (const key in weight) {
  styles += `
  .t-line-weight-${key} {
    border-width: ${weight[key]};
  }
  .t-line-top-${key} {
    border-top-width: ${weight[key]};
  }
  .t-line-right-${key} {
    border-right-width: ${weight[key]};
  }
  .t-line-bottom-${key} {
    border-bottom-width: ${weight[key]};
  }
  .t-line-left-${key} {
    border-left-width: ${weight[key]};
  }
  .t-line-separator.t-line-weight-${key} {
    border-width: 0;
    border-top-width: ${weight[key]};
  }
`
}

styles += `
.t-line-top-none {border-top-width: 0;}
.t-line-right-none {border-right-width: 0;}
.t-line-bottom-none {border-bottom-width: 0;}
.t-line-left-none {border-left-width: 0;}
`

// Fills
  for (const key in fill) {
    styles += `.t-line-fill-${key} {border-color: ${fill[key]}}
`

    for (const key in fillFancy) {
      styles += `.t-line-fill-${key}.t-line-fancy {border-image: ${fillFancy[key]}}
`
    }

    for (const key in fillInversed) {
      styles += `.t-line-fill-${key}.t-line-inverse {border-color: ${fillInversed[key]}}
`
    }
  }




  setStyles(id, styles)
}