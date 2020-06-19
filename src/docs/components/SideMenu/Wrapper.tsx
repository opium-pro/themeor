import React from 'react'
import {Gap} from '../../../themeor'
import {WrapperProps} from '../../adapters/menu-types'

export class Wrapper extends React.PureComponent<WrapperProps> {
  render() {
    const {
      children,
      active,
      ...restProps
    } = this.props

    return (
      <Gap.TryTagless vert="sm" {...restProps}>
        <nav>
          {children}
        </nav>
      </Gap.TryTagless>
    )
  }
}