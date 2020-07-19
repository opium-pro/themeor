import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Theme, Box, Font, Align, Fit, ConfigTypes, Effect, Line, Gap } from '../themeor'
import { AppContext } from './context'
import { MenuAdapter } from './adapters'
import { SideMenu, Link } from './components'
import navigation from './navigation'

// Need this fot theme config
import lightTheme from './theme/theme-light.json'
import icons from './theme/icons'
import './theme/font-face.css'

interface AppProps {}

interface AppState {
  refContent?: any,
  refAside?: any,
  theme?: ConfigTypes.ThemeConfig,
  themeChange?: (theme: ConfigTypes.ThemeConfig) => void,
}

export default class App extends React.PureComponent<AppProps, AppState> {
  static contextType = AppContext

  refContent = (ref: any) => {
    this.setState({...this.state, refContent: ref })
  }

  refAside = (ref: any) => {
    this.setState({...this.state, refAside: ref })
  }

  themeChange = (theme: ConfigTypes.ThemeConfig) => {
    this.setState({...this.state, theme})
  }

  state = {
    theme: lightTheme,
    themeChange: this.themeChange,
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Theme config={this.state.theme} icons={icons as ConfigTypes.ThemeIcons}>
          <Font size="md" family="regular" fill="base" align="left" lineHeight="md">
            <Box.TryTagless fill="base">
              <Align.TryTagless pattern="240px 1fr">
                <Fit minWidth="1024px" cover="screen">

                  <Align.TryTagless>
                    <Fit.TryTagless height="100vh" scroll>
                      <Box fill="faint" forwardRef={this.refAside}>
                        <MenuAdapter
                          data={navigation}
                          component={SideMenu}
                          jumpTo="content-top-id"
                        />
                        <Link href="https://github.com/opium-pro/themeor">
                          <Gap>Github</Gap>
                        </Link>
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