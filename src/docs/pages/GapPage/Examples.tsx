import React from 'react'
import { Box, Font, Gap, Line } from '../../../themeor'
import {Link} from '../../components'
import {Wrapper, Item} from '../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Line Color and Weight">
        <Item
          description={(<>
            You can change gap size according to <Link href="/scaled-css">Scaled CSS</Link>
          </>)}
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
    </>)
  }
}