import React from 'react'
import { Gap, Font } from '../../../themeor'
import { ContentWrapper, Code, Link } from '../../components'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">Config</Font>

        <Gap />
        <Font size="lg">
          Here you can see an example of Icon configuration
        </Font>

        <Gap />
        <Code language="json">
          {`{
  "icon": {
    "size": {
      "xs": "12px",
      "sm": "16px",
      "md": "24px",
      "lg": "32px",
      "xl": "40px"
    },
    "fill": {}
  }
}`}
        </Code>

        <Gap size="x2l" />
        <Font family="special" weight="800" size="x2l">Import Icons</Font>
        <Gap />
        <Font size="lg">
          Here is the way you can prepare your icons to pass them to Theme component. See <Link href="/getting-started">getting started</Link> for more information
        </Font>
        <Gap />
        <Code>
          {`import React from 'react'
import {Theme} from 'themeor'

// Import SVG
import ReactComponent as placeholder from './placeholder.svg'
import ReactComponent as bell from './bell.svg'
import ReactComponent as search from './search.svg'

// Form an object for medium size icons
const md = {placeholder, bell, search}

// Form an object to pass it to Theme component
// Can contain keys according to the Scale (from x3s to x3l)
// If you use the same icons for different sizes, you can dublicate them
const iconSet = {xs: md, sm: md, lg: md, xl: md}

class App extends React.Component {
  render() {
    return (
      <Theme icons={iconSet}>
        Your app
      </Theme>
    )
  }
}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}