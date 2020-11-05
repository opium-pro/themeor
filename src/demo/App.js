import {Theme, Font, Align} from 'themeor'
import configLight from './config-light'
import configDark from './config-light'

export default function App() {
  return (
    <Theme config={configLight} configDark={configDark}>

      <Box>
        <Fit cover="screen">
          <Align hor="center" vert="center">
            <Font>
              Try to change color mode in your system and see what happens
            </Font>

            <Gap />
          </Align>
        </Fit>
      </Box>

    </Theme>
  )
}