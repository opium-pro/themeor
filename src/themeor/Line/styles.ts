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
.line {
  border-style: solid;
  border-width: 0;
}

.fill-none {
  border-color: transparent;
}

.separator.fill-none {
  background-color: transparent;
}


.weight-none {border-width: 0;}
`

for (const key in weight) {
  styles += `
  .weight-${key} {
    border-width: ${weight[key]};
  }
  .top-${key} {
    border-top-width: ${weight[key]};
  }
  .right-${key} {
    border-right-width: ${weight[key]};
  }
  .bottom-${key} {
    border-bottom-width: ${weight[key]};
  }
  .left-${key} {
    border-left-width: ${weight[key]};
  }
  .separator.weight-${key} {
    border-width: 0;
    border-top-width: ${weight[key]};
  }
`
}

styles += `
.top-none {border-top-width: 0;}
.right-none {border-right-width: 0;}
.bottom-none {border-bottom-width: 0;}
.left-none {border-left-width: 0;}
`

// Fills
  for (const key in fill) {
    styles += `.t-line-fill-${key} {border-color: ${fill[key]}};
`

    for (const key in fillFancy) {
      styles += `.t-line-fill-${key}.t-line-fancy {border-image: ${fillFancy[key]}};
`
    }

    for (const key in fillInversed) {
      styles += `.t-line-fill-${key}.t-line-inverse {border-color: ${fillInversed[key]}};
`
    }
  }






  setStyles(id, styles)
}