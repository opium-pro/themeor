import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Color from './Color'
import ScaledCSS from './ScaledCSS'
import Info from './Info'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="This page is not ready yet"
        description="Here will be description"
        path={match?.url}
      >
        <Page name="Info" component={Info} path={`${match?.url}`} exact />
        <Page name="Color" component={Color} path={`${match?.url}/color`} />
        <Page name="ScaledCSS" component={ScaledCSS} path={`${match?.url}/scaled-css`} />
      </Wrapper>
    )
  }
}