import { setStyles, addStyles } from '../utils/styles'
import newId from '../utils/new-id'
import {ThemeContext} from '../context'

export const id = newId()

export default function (config: ThemeContext) {
  if (!config) {
    return
  }

  const {
    box: {
      fill,
      fancyFill,
      inverseFill,
      radius,
      shadow,
      glow,
      shadowInner,
      blur,
    }
  } = config

  setStyles(id, `
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
  `)


  // Fills
  for (const key in fill) {
    addStyles(id, `.t-box-fill-${key} {background-color: ${fill[key]}};`)

    for (const key in fancyFill) {
      addStyles(id, `.t-box-fill-${key}.t-box-fancy {background-image: ${fancyFill[key]}};`)
    }

    for (const key in inverseFill) {
      addStyles(id, `.t-box-fill-${key}.t-box-inverse {background-color: ${inverseFill[key]}};`)
    }
  }


  // Raduis
  const defaultMaxRadius = '1000px'
  addStyles(id, `
.t-box-radius-none {border-radius: 0;}
.t-box-radius-max {border-radius: ${defaultMaxRadius};}
`
  )
  for (const key in radius) {
    addStyles(id, `.t-box-radius-${key} {border-radius: ${radius[key]}};`)
  }
  addStyles(id, `
.t-box-radius-top-none {border-top-left-radius: 0; border-top-right-radius: 0;}
.t-box-radius-bottom-none {border-bottom-left-radius: 0; border-bottom-right-radius: 0;}
.t-box-radius-right-none {border-bottom-right-radius: 0; border-top-right-radius: 0;}
.t-box-radius-left-none {border-bottom-left-radius: 0; border-top-left-radius: 0;}
.t-box-radius-top-max {border-top-left-radius: ${defaultMaxRadius}; border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-bottom-max {border-bottom-left-radius: ${defaultMaxRadius}; border-bottom-right-radius: ${defaultMaxRadius};}
.t-box-radius-right-max {border-bottom-right-radius: ${defaultMaxRadius}; border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-left-max {border-bottom-left-radius: ${defaultMaxRadius}; border-top-left-radius: ${defaultMaxRadius};}
  `)
  for (const key in radius) {
    addStyles(id, `
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
    `)
  }

  addStyles(id, `
.t-box-radius-tl-none {border-top-left-radius: 0;}
.t-box-radius-tr-none {border-top-right-radius: 0;}
.t-box-radius-br-none {border-bottom-right-radius: 0;}
.t-box-radius-bl-none {border-bottom-left-radius: 0;}
.t-box-radius-tl-max {border-top-left-radius: ${defaultMaxRadius};}
.t-box-radius-tr-max {border-top-right-radius: ${defaultMaxRadius};}
.t-box-radius-br-max {border-bottom-right-radius: ${defaultMaxRadius};}
.t-box-radius-bl-max {border-bottom-left-radius: ${defaultMaxRadius};}
  `)
  for (const key in radius) {
    addStyles(id, `
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
    `)
  }


  // Shadows
  addStyles(id, `.t-box-shadow-none {box-shadow: none;}`)
  for (const key in shadow) {
    addStyles(id, `.t-box-shadow-${key} {box-shadow: ${shadow[key]};}`)
  }

  // Inner Shadows
  for (const key in shadowInner) {
    addStyles(id, `.t-box-shadow-inner-${key} {box-shadow: inset ${shadowInner[key]};}`)
  }

  // Glows
  for (const key in glow) {
    addStyles(id, `.t-box-glow-${key} {box-shadow: ${glow[key]};}`)
  }

  // Blurs
  addStyles(id, `.t-box-blur-none {backdrop-filter: none;}`)
  for (const key in blur) {
    addStyles(id, `.t-box-blur-${key} {backdrop-filter: blur(${blur[key]});}`)
  }
}