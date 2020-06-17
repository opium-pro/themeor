import React from 'react'
import {Box, Font, Gap, Reaction} from '../../themeor'
import {ItemProps} from '../../adapters/menu-types'


export class Hint extends React.PureComponent<ItemProps> {
  render() {
    return (
      <Font
        size="xs"
        fill="faint"
        weight="500"
      >
        {this.props.children}
      </Font>
    )
  }
}