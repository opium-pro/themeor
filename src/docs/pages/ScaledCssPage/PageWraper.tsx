import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Examples from './Examples'
import Info from './Info'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="2. Scaled CSS"
        description="Here will be description"
        path={match?.url}
      >
        <Page name="Info" component={Info} path={`${match?.url}`} exact />
        <Page name="Examples" component={Examples} path={`${match?.url}/examples`} />
      </Wrapper>
    )
  }
}