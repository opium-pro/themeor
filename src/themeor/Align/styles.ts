import { setStyles } from '../utils/styles'
import newId from '../utils/new-id'
import { minus, half } from '../utils/change-css-value'

export const id = newId()

export default function (normalizedConfig: any) {
  const {
    gap: { size }
  } = normalizedConfig

  let styles = `
.t-align {
  display: flex;
}

.t-align-col {
  flex-direction: column;
}
.t-align-col.t-align-vert-center {
    justify-content: center;
  }
.t-align-col.t-align-vert-top {
  justify-content: flex-start;
}
.t-align-col.t-align-vert-bottom {
  justify-content: flex-end;
}
.t-align-col.t-align-vert-stretch {
  justify-content: stretch;
}

.t-align-col.t-align-hor-center {
  align-items: center;
}
.t-align-col.t-align-hor-right {
  align-items: flex-end;
}
.t-align-col.t-align-hor-left {
  align-items: flex-start;
}
.t-align-col.t-align-hor-stretch {
  align-items: stretch;
}

.t-align-stack {
  flex-wrap: wrap;
}

.t-align-row {
  flex-direction: row;
}
.t-align-row.t-align-hor-left {
  justify-content: flex-start;
}
.t-align-row.t-align-hor-center {
  justify-content: center;
}
.t-align-row.t-align-hor-right {
  justify-content: flex-end;
}
.t-align-row.t-align-hor-stretch {
  justify-content: stretch;
}

.t-align-row.t-align-vert-top {
  align-items: flex-start;
}
.t-align-row.t-align-vert-center {
  align-items: center;
}
.t-align-row.t-align-vert-bottom {
  align-items: flex-end;
}
.t-align-row.t-align-vert-stretch {
  align-items: stretch;
}
`


  // Gaps
  for (const key in size) {
    styles += `
.t-align-hor-gap-${key} {
  margin-left: ${minus(half(size[key]))};
  margin-right: ${minus(half(size[key]))};
}
.t-align-vert-gap-${key} {
  margin-top: ${minus(half(size[key]))};
  margin-bottom: ${minus(half(size[key]))};
}

.t-align-item-hor-gap-${key} {
  padding-left: ${half(size[key])};
  padding-right: ${half(size[key])};
  box-sizing: border-box;
}
.t-align-item-vert-gap-${key} {
  padding-top: ${half(size[key])};
  padding-bottom: ${half(size[key])};
  box-sizing: border-box;
}
`
  }

  styles += `
.t-align-pattern {
  display: grid;
  grid-template-rows: auto;
  margin: 0;
}

.t-align-pattern.t-align-hor-left {
  justify-items: left;
}
.t-align-pattern.t-align-hor-center {
  justify-items: center;
}
.t-align-pattern.t-align-hor-right {
  justify-items: end;
}
.t-align-pattern.t-align-hor-stretch {
  justify-items: stretch;
}

.t-align-pattern.t-align-vert-top {
  align-items: start;
}
.t-align-pattern.t-align-vert-center {
  align-items: center;
}
.t-align-pattern.t-align-vert-bottom {
  align-items: end;
}
.t-align-pattern.t-align-vert-stretch {
  align-items: stretch;
}
`

  for (const key in size) {
    styles += `
.t-align-pattern.t-align-hor-gap-${key} {
  column-gap: ${size[key]};
}
.t-align-pattern.t-align-vert-gap-${key} {
  row-gap: ${size[key]};
}
`
  }

  setStyles(id, styles)
}