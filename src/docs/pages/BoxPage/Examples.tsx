import React from 'react'
import { Box, Font, Gap, Align } from '../../../themeor'
import {Link, Code} from '../../components'
import {Wrapper, Item} from '../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Background Color">
        <Item
          description={(<>
            You can change the color according to <Link href="/colors">Opium.Fill</Link>
          </>)}
          markLines={[8,12,16]}
          code={`import React from 'react'
import {Box, Font, Gap, Align} from 'themeor'

class BoxDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr" gapHor="md">
        <Box fill="accent">
          <Gap><Font align="center">Light Blue</Font></Gap>
        </Box>

        <Box fill="accent" strong>
          <Gap><Font align="center">Blue</Font></Gap>
        </Box>

        <Box fill="accent" strong fancy>
          <Gap><Font align="center">Gradient Blue</Font></Gap>
        </Box>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr 1fr" gapHor="md">
            <Box fill="accent">
              <Gap><Font align="center">Light Blue</Font></Gap>
            </Box>

            <Box fill="accent" strong>
              <Gap><Font align="center">Blue</Font></Gap>
            </Box>

            <Box fill="accent" strong fancy>
              <Gap><Font align="center">Gradient Blue</Font></Gap>
            </Box>
          </Align>
        </Item>

        <Item
          description={(<>
            You can also use any other variable which you have previously set in config <Code inline>config.customVariables</Code>
          </>)}
          markLines={[1]}
          code={`<Box fill="--demo-var">
  <Gap><Font align="center">Custom Color</Font></Gap>
</Box>`         }
        >
          <Align pattern="1fr 1fr 1fr" gapHor="md">
            <Box fill="--demo-var">
              <Gap><Font align="center" fill="base">Custom Var</Font></Gap>
            </Box>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Border Radius">
        <Item
          description={(<>
            You can set any value according to <Link href="/scaled-css">Scaled CSS</Link>
          </>)}
          markLines={[8,12,16]}
          code={`import React from 'react'
import {Box, Font, Gap, Align} from 'themeor'

class BoxDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr" gapHor="md">
        <Box fill="accent" strong radius="md">
          <Gap><Font align="center">Medium Radius</Font></Gap>
        </Box>

        <Box fill="accent" strong radius="max">
          <Gap><Font align="center">Max Radius</Font></Gap>
        </Box>

        <Box fill="accent" strong radius="max" radiusBottomLeft="none">
          <Gap><Font align="center">Multiple Radius</Font></Gap>
        </Box>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr 1fr" gapHor="md">
            <Box fill="accent" strong radius="md">
              <Gap><Font align="center">Medium Radius</Font></Gap>
            </Box>

            <Box fill="accent" strong radius="max">
              <Gap><Font align="center">Max Radius</Font></Gap>
            </Box>

            <Box fill="accent" strong radius="max" radiusBottomLeft="none">
              <Gap><Font align="center">Multiple Radius</Font></Gap>
            </Box>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title={(<>Box shadow<br />and background image</>)}>
        <Item
          markLines={[8,12]}
          code={`import React from 'react'
import {Box, Font, Gap, Align} from 'themeor'

class BoxDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr" gapHor="md">
        <Box fill="base" shadow="md">
          <Gap><Font align="center">Medium Box Shadow</Font></Gap>
        </Box>

        <Box fill="accent" strong img="/img/intro.jpg">
          <Gap><Font align="center">Background Image</Font></Gap>
        </Box>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr" gapHor="md">
            <Box fill="base" shadow="md">
              <Gap><Font align="center">Medium Box Shadow</Font></Gap>
            </Box>

            <Box fill="accent" strong img="/img/intro.jpg">
              <Gap><Font align="center">Background Image</Font></Gap>
            </Box>
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}