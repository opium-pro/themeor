import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Info from './Info'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="Scaled CSS"
        path={match?.url}
      >
        <Page name="Info" component={Info} path={`${match?.url}`} exact />
      </Wrapper>
    )
  }
}