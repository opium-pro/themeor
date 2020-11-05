import React from 'react'
import { Fit } from '../../../themeor'
import { GroupProps } from '../../adapters/menu-types'

export class Group extends React.PureComponent<GroupProps> {
  render() {
    return (
      <Fit>
        {this.props.children}
      </Fit>
    )
  }
}
