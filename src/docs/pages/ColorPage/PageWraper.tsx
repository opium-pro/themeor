import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import {Wrapper, Page} from '../../components/Documentation'
import {Link} from '../../components'
import Info from './Info'

export default class PageWraper extends React.PureComponent<RouteChildrenProps> {
  render() {
    const {match} = this.props

    return (
      <Wrapper
        title="1. Color"
        description={(<>
          You can use your own color conceptions or <Link href="https://medium.com/@opium.pro/standardisation-of-color-schemes-through-the-eyes-of-a-programmer-53cc25148470">Opium.Fill conception</Link> as a native one
        </>)}
        path={match?.url}
      >
        <Page name="Info" component={Info} path={`${match?.url}`} exact />
      </Wrapper>
    )
  }
}