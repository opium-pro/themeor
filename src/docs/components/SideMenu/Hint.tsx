import React from 'react'
import {Font} from '../../../themeor'
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