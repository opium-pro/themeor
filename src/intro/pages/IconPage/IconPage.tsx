import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../../components/Documentation'
import Examples from './Examples'
import Props from './Props'
import Config from './Config'

export default class BoxPage extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="<Icon />"
        description="Controlls icons' color and size"
        prev="/line"
        next="/gap"
      >
        <Page name="Examples" component={Examples} path={`${match?.url}`} exact />
        <Page name="Props" component={Props} path={`${match?.url}/props`} />
        <Page name="Config" component={Config} path={`${match?.url}/config`} />
      </Wrapper>
    )
  }
}