import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Info from './Info'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="Demo"
        description="Result will be applied to every page here. So also check out how the other pages are chanding"
        path={match?.url}
      >
        <Page name="Info" component={Info} path={`${match?.url}`} exact />
      </Wrapper>
    )
  }
}