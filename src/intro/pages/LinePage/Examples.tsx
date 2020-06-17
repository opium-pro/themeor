import React from 'react'
import { Box, Font, Gap, Align, Line } from '../../../themeor'
import {Link, Code} from '../../../components'
import {Wrapper, Item} from '../../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Line Color and Weight">
        <Item
          description={(<>
            You can change the color according to <Link href="/colors">Opium.Fill</Link> or use variables from <Code inline>config.customVariables</Code>
          </>)}
          markLines={[8,9,10]}
          code={`import React from 'react'
import {Line, Align} from 'themeor'

class LineDemo extends React.Component {
  render() {
    return(
      <Align template="1fr 1fr 1fr" horGap="md">
        <Line />
        <Line fill="accent" weight="lg" />
        <Line fill="--demo-var" weight="xl" />
      </Align>
    )
  }
}`         }
        >
          
          <Align template="1fr 1fr 1fr" horGap="md">
            <Line />
            <Line fill="accent" weight="lg" />
            <Line fill="--demo-var" weight="xl" />
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Border Line">
        <Item
          description={(<>
            If Line component has children, it will create a border. To set border radius you need to use <Link href="/tag-merging">MERGE prop</Link> and also use <Link href="/box">Box component</Link>
          </>)}
          markLines={[8,14,20,21]}
          code={`import React from 'react'
import {Line, Box, Gap, Font, Align} from 'themeor'

class LineDemo extends React.Component {
  render() {
    return(
      <Align template="1fr 1fr 1fr" horGap="md">
        <Line>
          <Gap>
            <Font align="center">Border line</Font>
          </Gap>
        </Line>

        <Line right="md">
          <Gap>
            <Font align="center">Border right</Font>
          </Gap>
        </Line>

        <Line MERGE>
          <Box radius="max">
            <Gap>
              <Font align="center">Border radius</Font>
            </Gap>
          </Box>
        </Line>
      </Align>
    )
  }
}`         }
        >
          
          <Align template="1fr 1fr 1fr" horGap="md">
            <Line>
              <Gap>
                <Font align="center">Border line</Font>
              </Gap>
            </Line>

            <Line right="md">
              <Gap>
                <Font align="center">Border right</Font>
              </Gap>
            </Line>

            <Line MERGE>
              <Box radius="max">
                <Gap>
                  <Font align="center">Border radius</Font>
                </Gap>
              </Box>
            </Line>
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}