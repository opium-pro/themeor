import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Theme, Box, Font, Align, Fit, ConfigTypes, Effect } from '../themeor'
import { AppContext } from '../components/context'
import { MenuAdapter } from '../adapters'
import {SideMenu} from '../components'
import navigation from './navigation'

// Need this fot theme config
import lightTheme from './theme/theme-light.json'
// import yellowTheme from './theme/theme-yellow.json'
// import darkTheme from './theme/theme-dark.json'
import icons from './theme/icons'
import './theme/font-face.css'

interface AppProps { }

interface AppState {
  refContent?: any,
  refAside?: any,
  loading?: boolean,
  isLoading?: (value: boolean) => void,
}

export default class App extends React.PureComponent<AppProps, AppState> {
  static contextType = AppContext

  isLoading = (value: boolean) => {
    this.setState({ loading: value })
  }

  refContent = (ref: any) => {
    this.setState({ refContent: ref })
  }

  refAside = (ref: any) => {
    this.setState({ refAside: ref })
  }

  state: AppState = {
    loading: false,
    isLoading: this.isLoading
  }

  render() {
    const { loading } = this.state

    return (
      <AppContext.Provider value={this.state}>
        <Theme config={lightTheme as ConfigTypes.ThemeConfig} icons={icons as ConfigTypes.ThemeIcons}>
          <Font size="md" family="regular" fill="base" align="left" lineHeight="md">
            <Box MERGE fill="base">
              <Align MERGE template="240px 1fr">
                <Fit minWidth="1024px" maxHeight="100%" screen>

                  <Align MERGE>
                    <Fit MERGE height="100%" scroll>
                      <Box fill="faint" forwardedRef={this.refAside}>
                        <MenuAdapter
                          data={navigation}
                          component={SideMenu}
                          jumpTo="content-top-id"
                        />
                        <Font>Github</Font>
                        <Font>NPM</Font>
                      </Box>
                    </Fit>
                  </Align>

                  <Fit height="100%">
                    <Fit parent MERGE scroll>
                      <Box shadow="lg" forwardedRef={this.refContent}>
                        <div id="content-top-id" />
                        <Switch>
                          {navigation.map(({key, exact, path, component}) => (
                            !!component && <Route key={key} exact={exact} path={path} component={component} />
                          ))}
                        </Switch>
                      </Box>
                    </Fit>

                    {loading && (
                      <Fit MERGE_CHAIN parent>
                        <Box fill="base">
                          <Effect transparency="xs" />
                        </Box>
                      </Fit>
                    )}

                  </Fit>

                </Fit>
              </Align>
            </Box>
          </Font>
        </Theme>
      </AppContext.Provider>
    )
  }
}