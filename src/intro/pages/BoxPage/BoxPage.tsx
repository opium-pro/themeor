import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../../components/Documentation'
import Examples from './Examples'
import Props from './Props'
import Config from './Config'

import {Box, Font} from '../../../themeor'

export default class BoxPage extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (<>
      <Wrapper
        title="Box"
        description="Use it if you need to draw a rectangle. It can control background color, border radius, box shadow, background image"
        prev="/scaled-css"
        next="/font"
      >
        <Page name="Examples" component={Examples} path={`${match?.url}`} exact />
        <Page name="Props" component={Props} path={`${match?.url}/props`} />
        <Page name="Config" component={Config} path={`${match?.url}/config`} />
      </Wrapper>
    </>)
  }
}