import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { Box, Font, Gap, Fit, Line, Align } from '../../themeor'
import { Button, Link, ContentWrapper } from '../../components'

interface IntroPageProps extends RouteChildrenProps { }
interface IntroPageState { }

export default class IntroPage extends React.PureComponent<IntroPageProps, IntroPageState> {
  handleGettingStarted = (e: any) => {
    const { history } = this.props
    history.push('/getting-started')
  }

  render() {
    return (<>
      <Box fill="base">
        <Gap hor="x3l">

          <Font align="center" >
            <Align hor="center" >
              <Gap size="x2l" />

              <Fit.TryTagless width="100%" height="200px">
                <Align.TryTagless vert="center" hor="center">
                  <Box strong radius="max" shadow="lg" img="/img/intro.jpg">
                    <Font family="special" size="x3l" weight="800">Themeor</Font>

                    <Fit width="240px" parent stick="top-left" left="-40px" top="-20px">
                      <img alt="" src="/img/meteor.svg" />
                    </Fit>

                    <Fit width="130px" parent stick="bottom-left" left="30%" bottom="-60px">
                      <img alt="" src="/img/ufo.svg" />
                    </Fit>

                    <Fit width="260px" parent stick="bottom-right" bottom="-50px" right="-40px">
                      <img alt="" src="/img/planet.svg" />
                    </Fit>
                  </Box>
                </Align.TryTagless>
              </Fit.TryTagless>

              <Gap size="x2l" />

              <Font size="lg">
                Create sophisticated themes in React JS<br />
                  Fast. Without even knowing CSS
                </Font>

              <Gap size="lg" />

              <Button onClick={this.handleGettingStarted} label="Get Started" />

              <Gap size="lg" />

              <Font>
                by <Link href="http://opium.pro">opium.pro</Link>
              </Font>

              <Gap size="lg" />
            </Align>
          </Font>
        </Gap>
      </Box>
      <Line fill="faint" />

      <ContentWrapper>
        <Gap size="x3l" />

        Here will be demo of theme switching

        <Gap size="x3l" />
      </ContentWrapper>
    </>)
  }
}