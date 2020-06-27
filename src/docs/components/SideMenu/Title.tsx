import React from 'react'
import {Font, Gap} from '../../../themeor'
import {TitleProps} from '../../adapters/menu-types'


export class Title extends React.PureComponent<TitleProps> {
  render() {
    return (
      <Font
        size="xs"
        fill="faint"
        weight="700"
        uppercase
        letterSpacing="lg"
      >
        <Gap hor="md" vert="sm">
          {this.props.children}
        </Gap>
      </Font>
    )
  }
}