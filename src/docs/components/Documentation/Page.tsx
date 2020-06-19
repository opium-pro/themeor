import React from 'react'
import { Route } from 'react-router-dom'

export interface Props {
  name: string,
  component: any,
  path: string,
  exact?: boolean,
}

export class Page extends React.PureComponent<Props> {
  render() {
    const {path, component, exact} = this.props
    return <Route path={path} component={component} exact={exact} />
  }
}