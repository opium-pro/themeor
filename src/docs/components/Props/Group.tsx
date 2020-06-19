import React from 'react'
import { Value } from './Value'

export interface Props {
  title?: string,
}

export class Group extends React.PureComponent<Props> {
  static Value = Value

  render() {
    const { children } = this.props
    return children
  }
}