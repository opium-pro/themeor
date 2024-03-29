import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Theme, Box, Font, Align, Fit, ThemeConfig, ThemeIcons, Icon, Line, Gap } from '../themeor'
import { AppContext } from './context'
import { MenuAdapter } from './adapters'
import { SideMenu } from './components'
import navigation from './navigation'

// Need this fot theme config
import lightTheme from './theme/theme-light.json'
import darkTheme from './theme/theme-dark.json'
import icons from './theme/icons'
import './theme/font-face.css'

interface AppProps { }

interface AppState {
  refContent?: any,
  refAside?: any,
  theme?: ThemeConfig,
  themeChange?: (theme: ThemeConfig) => void,
  autoDetectTheme?: boolean,
  autoDetectChange?: (value: boolean) => void,
}

export default class App extends React.PureComponent<AppProps, AppState> {
  static contextType = AppContext

  refContent = (ref: any) => {
    this.setState({ ...this.state, refContent: ref })
  }

  refAside = (ref: any) => {
    this.setState({ ...this.state, refAside: ref })
  }

  themeChange = (theme: ThemeConfig) => {
    this.setState({ ...this.state, theme })
  }

  autoDetectChange = (value: boolean) => {
    this.setState({ ...this.state, autoDetectTheme: value })
  }

  state = {
    theme: lightTheme,
    themeChange: this.themeChange,
    autoDetectTheme: false,
    autoDetectChange: this.autoDetectChange,
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Theme reset config={this.state.theme} darkConfig={this.state.autoDetectTheme && darkTheme} icons={icons as ThemeIcons}>
          <Font size="md" family="regular" fill="base" align="left" lineHeight="md">
            <Box.TryTagless fill="base">
              <Align.TryTagless pattern="240px 1fr">
                <Fit minWidth="1024px" cover="screen">

                  <Align.TryTagless>
                    <Fit.TryTagless height="100vh" scroll>
                      <Box fill="faint" forwardRef={this.refAside}>
                        <Gap size="xs">
                          <Box.TryTagless fill="faint" strong radius="sm">
                            <Font.TryTagless FORCE_TAGLESS fill="base" inline={false}>
                              <a target="_blank" href="https://github.com/opium-pro/themeor">
                                <Gap size="xs">
                                  <Align row vert="center">
                                    <Icon size="lg" name="github" forceFill />
                                    <Gap size="x2s" />
                                  Go to Github
                                </Align>
                                </Gap>
                              </a>
                            </Font.TryTagless>
                          </Box.TryTagless>
                        </Gap>

                        <MenuAdapter
                          data={navigation}
                          component={SideMenu}
                          jumpTo="content-top-id"
                        />
                      </Box>
                    </Fit.TryTagless>
                  </Align.TryTagless>

                  <Fit height="100vh">
                    <Fit.TryTagless cover="parent" scroll>
                      <Line.TryTagless left="md" fill="faint-down">
                        <Box forwardRef={this.refContent}>
                          <div id="content-top-id" />
                          <Switch>
                            {navigation.map(({ key, exact, path, component }) => (
                              !!component && <Route key={key} exact={exact} path={path} component={component} />
                            ))}
                          </Switch>
                        </Box>
                      </Line.TryTagless>
                    </Fit.TryTagless>
                  </Fit>

                </Fit>
              </Align.TryTagless>
            </Box.TryTagless>
          </Font>
        </Theme>
      </AppContext.Provider>
    )
  }
}