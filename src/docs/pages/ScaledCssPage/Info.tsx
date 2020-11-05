import React from 'react'
import { Gap, Font, Line, Align, Box } from '../../../themeor'
import { ContentWrapper, Code } from '../../components'
import opiumScale from '../../../themeor/utils/opium-scale'
import {Wrapper, Item} from '../../components/Examples'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Font size="lg">
          Many values have predefined scale in config file. In every case the steps are called similar to the cloths sizes:
        </Font>
        <Gap size="sm" />
        <Align stack gapVert="xs" gapHor="xs">
          {opiumScale().map((scale) => (
            <Code key={scale} inline>{scale}</Code>
          ))}
        </Align>

        <Gap />

        <Font size="lg">
          Medium scale <Code inline>'md'</Code> is usually used as default value.
        </Font>

        <Gap size="xl" />

        <Wrapper title="You define font size with it:">
          <Item
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

        <Wrapper title="... or gap size:">
          <Item
          markLines={[9,16,18,21]}
          code={`import React from 'react'
import {Gap, Font, Box, Line} from 'themeor'

class LineDemo extends React.Component {
  render() {
    return(
      <>
        <Box fill="accent">
          <Gap left="xl" top="sm">
            <Line fill="accent">
              <Font>Inner left and top gap</Font>
            </Line>
          </Gap>
        </Box>

        <Gap />
        <Font>Gaps between the components</Font>
        <Gap size="sm" />

        <Box fill="accent">
          <Gap vert="lg">
            <Line fill="accent">
              <Font>Inner vertical gap</Font>
            </Line>
          </Gap>
        </Box>
      </>
    )
  }
}`         }
        >
          
          <Box fill="accent">
            <Gap left="xl" top="sm">
              <Line fill="accent">
                <Font>Inner left and top gap</Font>
              </Line>
            </Gap>
          </Box>

          <Gap />
          <Font>Gaps between the components</Font>
          <Gap size="sm" />

          <Box fill="accent">
            <Gap vert="lg">
              <Line fill="accent">
                <Font>Inner vertical gap</Font>
              </Line>
            </Gap>
          </Box>
        </Item>
        </Wrapper>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}