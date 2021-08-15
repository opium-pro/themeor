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
.t-align-col.vert-center {
    justify-content: center;
  }
.t-align-col.vert-top {
  justify-content: flex-start;
}
.t-align-col.vert-bottom {
  justify-content: flex-end;
}
.t-align-col.vert-stretch {
  justify-content: stretch;
}

.t-align-col.hor-center {
  align-items: center;
}
.t-align-col.hor-right {
  align-items: flex-end;
}
.t-align-col.hor-left {
  align-items: flex-start;
}
.t-align-col.hor-stretch {
  align-items: stretch;
}

.t-align-stack {
  flex-wrap: wrap;
}

.t-align-row {
  flex-direction: row;
}
.t-align-row.hor-left {
  justify-content: flex-start;
}
.t-align-row.hor-center {
  justify-content: center;
}
.t-align-row.hor-right {
  justify-content: flex-end;
}
.t-align-row.hor-stretch {
  justify-content: stretch;
}

.t-align-row.vert-top {
  align-items: flex-start;
}
.t-align-row.vert-center {
  align-items: center;
}
.t-align-row.vert-bottom {
  align-items: flex-end;
}
.t-align-row.vert-stretch {
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

.t-align-pattern.hor-left {
  justify-items: left;
}
.t-align-pattern.hor-center {
  justify-items: center;
}
.t-align-pattern.hor-right {
  justify-items: end;
}
.t-align-pattern.hor-stretch {
  justify-items: stretch;
}

.t-align-pattern.vert-top {
  align-items: start;
}
.t-align-pattern.vert-center {
  align-items: center;
}
.t-align-pattern.vert-bottom {
  align-items: end;
}
.t-align-pattern.vert-stretch {
  align-items: stretch;
}
`

  for (const key in size) {
    styles += `
.t-align-pattern.hor-gap-${key} {
  column-gap: ${size[key]};
}
.t-align-pattern.vert-gap-${key} {
  row-gap: ${size[key]};
}
`
  }

  setStyles(id, styles)
}