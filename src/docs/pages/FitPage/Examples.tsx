import React from 'react'
import { Box, Font, Gap, Line, Fit, Align } from '../../../themeor'
import {Link, Code} from '../../components'
import {Wrapper, Item} from '../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Size">
        <Item
          markLines={[9,15,18,26,30]}
          code={`import React from 'react'
import {Fit, Line, Align} from 'themeor'

class Example extends React.Component {
  render() {
    return(
      <Align pattern="1fr 1fr 1fr" gapHor="xl">
        <Line>
          <Fit height="140px">
            Set height
          </Fit>
        </Line>

        <Line>
          <Fit height="50px">
            Parent
            <Line.TryTagless fill="critic">
              <Fit offset="md" cover="parent">
                <Font fill="critic">Child with offset</Font>
              </Fit>
            </Line.TryTagless>
          </Fit>
        </Line>

        <Line>
          <Fit height="150px">
            Parent
            <Gap />
            <Line.TryTagless fill="critic">
              <Fit cover="parent" top="30px" left="10px" bottom="-10px">
                <Font fill="critic">Child with custom offset</Font>
              </Fit>
            </Line.TryTagless>
          </Fit>
        </Line>
      </Align>
    )
  }
}`         }
        >
          <Align pattern="1fr 1fr 1fr" gapHor="xl">
            <Line>
              <Fit height="140px">
                Set height
              </Fit>
            </Line>

            <Line>
              <Fit height="50px">
                Parent
                <Line.TryTagless fill="critic">
                  <Fit offset="md" cover="parent">
                    <Font fill="critic">Child with offset</Font>
                  </Fit>
                </Line.TryTagless>
              </Fit>
            </Line>

            <Line>
              <Fit height="150px">
                Parent
                <Gap />
                <Line.TryTagless fill="critic">
                  <Fit cover="parent" top="30px" left="10px" bottom="-10px">
                    <Font fill="critic">Child with custom offset</Font>
                  </Fit>
                </Line.TryTagless>
              </Fit>
            </Line>
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}