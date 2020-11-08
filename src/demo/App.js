import {Theme, Box, Font, Line} from '../themeor'
import configLight from './config-light'
import configDark from './config-light'

export default function App() {
  return (
    <Theme config={configLight} configDark={configDark}>

      <Box fill="demo-var">
        <Font size="lg">
          Try to change color mode in your system and see what happens
        </Font>

        <Line />
      </Box>

    </Theme>
  )
}