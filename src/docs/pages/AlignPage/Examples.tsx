import React from 'react'
import { Box, Fit, Gap, Align, Line } from '../../../themeor'
import { Link, Code } from '../../components'
import { Wrapper, Item } from '../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Place the child at the middle of the parent">
        <Item
          description=""
          markLines={[9,12]}
          code={`import React from 'react'
import {Align, Fit, Line, Gap} from 'themeor'

class AlignDemo extends React.Component {
  render() {
    return(
      <Fit.TryTagless width="100%" height="200px">
        <Line.TryTagless>
          <Align vert="center" hor="center">
            <Fit cover="parent">Parent</Fit>

            <Line><Gap>Child</Gap></Line>
          </Align>
        </Line.TryTagless>
      </Fit.TryTagless>
    )
  }
}`         }
        >
          <Fit.TryTagless width="100%" height="200px">
            <Line.TryTagless>
              <Align vert="center" hor="center">
                <Fit cover="parent">Parent</Fit>

                <Line><Gap>Child</Gap></Line>
              </Align>
            </Line.TryTagless>
          </Fit.TryTagless>
        </Item>
      </Wrapper>


      <Wrapper title="Row and horizontal gap">
        <Item
          description=""
          markLines={[7]}
          code={`import React from 'react'
import {Align, Line, Gap} from 'themeor'

class AlignDemo extends React.Component {
  render() {
    return(
      <Align row gapHor="x2s">
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
      </Align>
    )
  }
}`         }
        >

          <Align row gapHor="x2s">
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Stack and vertical gap">
        <Item
          description=""
          markLines={[7]}
          code={`import React from 'react'
import {Align, Line, Gap} from 'themeor'

class AlignDemo extends React.Component {
  render() {
    return(
      <Align stack gapVert="xs">
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
      </Align>
    )
  }
}`         }
        >

          <Align stack gapVert="xs">
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Pattern, both gaps">
        <Item
          description=""
          markLines={[7]}
          code={`import React from 'react'
import {Align, Line, Gap} from 'themeor'

class AlignDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr auto 100px" gapVert="x2s" gapHor="x2s">
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
      </Align>
    )
  }
}`         }
        >

          <Align pattern="1fr auto 100px" gapVert="x2s" gapHor="x2s">
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
          </Align>
        </Item>
      </Wrapper>

      <Wrapper title="Pattern, both gaps, vertical stretch">
        <Item
          description=""
          markLines={[7]}
          code={`import React from 'react'
import {Align, Line, Gap} from 'themeor'

class AlignDemo extends React.Component {
  render() {
    return(
      <Align pattern="1fr auto 100px" gapVert="x2s" gapHor="x2s" vert="stretch">
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
        <Line><Gap>Row item</Gap></Line>
      </Align>
    )
  }
}`         }
        >

          <Align pattern="1fr auto 100px" gapVert="x2s" gapHor="x2s" vert="stretch">
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
            <Line><Gap>Row item</Gap></Line>
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}