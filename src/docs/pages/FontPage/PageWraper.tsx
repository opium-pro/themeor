import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Examples from './Examples'
import Props from './Props'
import Config from './Config'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="Font"
        description="Controlls all text parameters. Such as color, size, letter spacing, weight, etc"
        path={match?.url}
      >
        <Page name="Examples" component={Examples} path={`${match?.url}`} exact />
        <Page name="Props" component={Props} path={`${match?.url}/props`} />
        <Page name="Config" component={Config} path={`${match?.url}/config`} />
      </Wrapper>
    )
  }
}