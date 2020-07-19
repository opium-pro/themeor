import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Box, Font, Gap, Fit, Line, Align, Template } from '../../themeor'
import { Button, Link, ContentWrapper } from '../components'

interface IntroPageProps extends RouteChildrenProps { }
interface IntroPageState { }

export default class IntroPage extends React.PureComponent<IntroPageProps, IntroPageState> {
  handleGettingStarted = (e: any) => {
    const { history } = this.props
    history.push('/getting-started')
  }

  handleDemo = (e: any) => {
    const { history } = this.props
    history.push('/demo')
  }

  render() {
    return (<>
      <Box fill="base">
        <Gap hor="x3l">

          <Font align="center" >
            <Align hor="center" >
              <Gap size="x3l" />

              <Template hasNot="corona">
                <Fit.TryTagless width="100%" height="200px">
                  <Align.TryTagless FORCE_TAGLESS vert="center" hor="center">
                    <Box strong fill="complement" radius="max" shadow="lg" img="/img/intro.jpg">
                      <Font family="special" size="x3l" weight="800">Themeor</Font>

                      <Fit width="240px" cover="parent" stick="top-left" left="-40px" top="-20px">
                        <img alt="" src="/img/meteor.svg" />
                      </Fit>

                      <Fit width="130px" cover="parent" stick="bottom-left" left="30%" bottom="-60px">
                        <img alt="" src="/img/ufo.svg" />
                      </Fit>

                      <Fit width="260px" cover="parent" stick="bottom-right" bottom="-50px" right="-40px">
                        <img alt="" src="/img/planet.svg" />
                      </Fit>
                    </Box>
                  </Align.TryTagless>
                </Fit.TryTagless>
              </Template>

              <Template has="corona">
                <Fit.TryTagless width="100%" height="200px">
                  <Align.TryTagless FORCE_TAGLESS vert="center" hor="center">
                    <Box strong fill="complement" radius="max" shadow="lg" img="/img/corona1.jpg">
                      <Font family="special" size="x3l" weight="800">Themeor</Font>
                    </Box>
                  </Align.TryTagless>
                </Fit.TryTagless>
              </Template>

              <Gap size="x2l" />

              <Font size="lg">
                Create sophisticated themes in React JS<br />
                  Fast. Without even knowing CSS
                </Font>

              <Gap size="lg" />
              <Align row>
                <Button.Primary onClick={this.handleGettingStarted}>Get Started</Button.Primary>
                <Gap />
                <Button onClick={this.handleDemo}>Check out demo</Button>
              </Align>

              <Gap size="lg" />

              <Font>
                by <Link href="http://opium.pro">opium.pro</Link>
              </Font>

              <Gap size="x2l" />
            </Align>
          </Font>
        </Gap>
      </Box>
      <Line fill="faint" />

      <ContentWrapper>
        <Gap size="x3l" />

        <Align pattern="1fr 1fr" gapHor="md">
          <div>
            <Font weight="700" size="xl">Basic usage:</Font><br /><br />
            <Font size="lg">
              <Link href="/color">1. Colors</Link><br /><br />
              <Link href="/scaled-css">2. Scaled CSS</Link><br /><br />
              <Link href="/box">3. Box</Link><br /><br />
              <Link href="/font">4. Font</Link><br /><br />
              <Link href="/line">5. Line</Link><br /><br />
              <Link href="/icon">6. Icon</Link><br /><br />
              <Link href="/gap">7. Gap</Link><br /><br />
            </Font>
          </div>

          <div>
            <Font weight="700" size="xl">Advanced usage:</Font><br /><br />
            <Font size="lg">
              <Link href="/align">8. Align</Link><br /><br />
              <Link href="/fit">9. Fit</Link><br /><br />
              <Link href="/reaction">10. Reaction</Link><br /><br />
              <Link href="/tagless">11. Tagless</Link><br /><br />
            </Font>
          </div>
        </Align>

        <Gap size="x3l" />
      </ContentWrapper>
    </>)
  }
}