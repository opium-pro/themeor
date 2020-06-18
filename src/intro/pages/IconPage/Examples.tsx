import React from 'react'
import { Align, Icon } from '../../../themeor'
import {Link, Code} from '../../../components'
import {Wrapper, Item} from '../../../components/Examples'


export default class BoxPage_Examples extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Importing Icons">
        <Item
          description={(<>
            At first you need to prepare and pass your icons to the Theme
          </>)}
          markLines={[5,6,7,10,15,20]}
          code={`import React from 'react'
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
const iconSet = {xs: md, sm: md, md, lg: md, xl: md}

class App extends React.Component {
  render() {
    return (
      <Theme icons={iconSet}>
        Your app
      </Theme>
    )
  }
}`         }
        />
      </Wrapper>

      <Wrapper title="Calling Icons">
        <Item
          markLines={[8,9,10]}
          description="'placeholder' will be used as a default name"
          code={`import React from 'react'
import {Icon, Align} from 'themeor'

class IconDemo extends React.Component {
  render() {
    return(
      <Align row gapHor="lg" vert="center">
        <Icon />
        <Icon name="bell" fill="accent" size="lg" />
        <Icon name="search" fill="critic" size="xl" />
      </Align>
    )
  }
}`         }
        >
          <Align row gapHor="lg" vert="center">
            <Icon />
            <Icon name="bell" fill="accent" size="lg" />
            <Icon name="search" fill="critic" size="xl" />
          </Align>
        </Item>
      </Wrapper>
    </>)
  }
}