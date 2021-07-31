import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import Examples from './Examples'
import Props from './Props'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (<>
      <Wrapper
        nonTheming
        title="Fit"
        description={(<>
          Responsible for block sizes and positioning
        </>)}
        path={match?.url}
      >
        <Page name="Examples" component={Examples} path={`${match?.url}`} exact />
        <Page name="Props" component={Props} path={`${match?.url}/props`} />
      </Wrapper>
    </>)
  }
}