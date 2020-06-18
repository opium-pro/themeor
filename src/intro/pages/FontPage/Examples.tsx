import React from 'react'
import { Box, Font, Gap, Align, Fit } from '../../../themeor'
import {Link, Code} from '../../../components'
import {Wrapper, Item} from '../../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Text Color">
        <Item
          description={(<>
            You can change the color according to <Link href="/colors">Opium.Fill</Link>
          </>)}
          markLines={[8,9,10]}
          code={`import React from 'react'
import {Box, Font, Gap, Align} from 'themeor'

class FontDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr" gapHor="md">
        <Font fill="base" align="center">Black Text</Font>
        <Font fill="accent" align="center">Blue Text</Font>
        <Font fill="--demo-var" align="center">Custom Color</Font>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr 1fr">
            <Font fill="base" align="center">Black Text</Font>
            <Font fill="accent" align="center">Blue Text</Font>
            <Font fill="--demo-var" align="center">Custom Color</Font>
          </Align>
        </Item>

        <Item
          description={(<>
            Text will be automatically inversed (switched from strong to weak) if it's placed uppon strong background from <Code inline>config.themeContext.shallInverseOn</Code>
          </>)}
          markLines={[1,3]}
          code={`<Box fill="base" strong>
  <Gap>
    <Font fill="base" align="center">
      Inversed Text
    </Font>
  </Gap>
</Box>`         }
        >
            <Box fill="base" strong>
              <Gap>
                <Font fill="base" align="center">
                  Inversed Text
                </Font>
              </Gap>
            </Box>
        </Item>
      </Wrapper>

      <Wrapper title="Text Size">
        <Item
          description={(<>
            You can set any value according to <Link href="/scaled-css">Scaled CSS</Link>
          </>)}
          markLines={[8,9,10]}
          code={`import React from 'react'
import {Font, Align} from 'themeor'

class FontDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr">
        <Font size="sm" align="center">Small Text</Font>
        <Font size="md" align="center">Medium Text</Font>
        <Font size="lg" align="center">Large Text</Font>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr 1fr">
            <Font size="sm" align="center">Small Text</Font>
            <Font size="md" align="center">Medium Text</Font>
            <Font size="lg" align="center">Large Text</Font>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Other text props">
        <Item
          markLines={[8,9,10]}
          code={`import React from 'react'
import {Font, Align} from 'themeor'

class FontDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr">
        <Font weight="700" align="center">Bold Text</Font>
        <Font underline align="center">Underlined Text</Font>
        <Font uppercase align="center">Uppercased Text</Font>
      </Align>
    )
  }
}`         }
        >
          
          <Align pattern="1fr 1fr 1fr">
            <Font weight="700" align="center">Bold Text</Font>
            <Font underline align="center">Underlined Text</Font>
            <Font uppercase align="center">Uppercased Text</Font>
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}