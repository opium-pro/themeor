# Create sophisticated themes in React JS. Fast. Without even knowing CSS

## I't still alpha
Sorry for the lack of documentation, it's in progress.
But all the components are ready to use.

---

`npm i themeor node-sass`

Here you can find a description of color concept: [Standardization of color schemes through the eyes of a programmer](https://medium.com/@opium.pro/standardisation-of-color-schemes-through-the-eyes-of-a-programmer-53cc25148470) But this concept is not obligatory to use, you can set your own colors in `config.customVariables`

For fast start download [the demo config file](https://github.com/opium-pro/themeor/blob/v-0.1.3/src/docs/theme/theme-light.json)

... and here is how you can use it:

```javascript
import React from 'react'
import theme from './theme-light.json' // here is your config file
import {Theme, Box, Font, Line, Fit, Align, Gap} from 'themeor'

export default function App() {
  return (
    <Theme config={theme}>
      <Font size="xl" weight="700">Imagine that I am your app</Font>

      <Gap />
      <Line fill="faint" />
      <Gap />

      <Align row gapHor="md" vert="center">
        <Box fill="accent" strong>
          <Gap vert="sm" hor="x2l">
            <Font size="sm" weight="700" uppercase>Text #1</Font>
          </Gap>
        </Box>

        <Line.TryTagless fill="critic">
          <Box fill="critic" radius="max">
            <Gap>
              <Font fill="critic">Text #2</Font>
            </Gap>
          </Box>
        </Line.TryTagless>

        <Box fill="base" strong radius="md">
          <Fit width="300px">
            <Gap size="sm">
              <Font underline align="center">Text #3</Font>
            </Gap>
          </Fit>
        </Box>
      </Align>
    </Theme>
  )
}
```