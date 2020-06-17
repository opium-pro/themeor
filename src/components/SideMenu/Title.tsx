import React from 'react'
import {Font, Gap} from '../../themeor'
import {TitleProps} from '../../adapters/menu-types'

export class Title extends React.PureComponent<TitleProps> {
  render() {
    return (
      <Gap vert="sm" hor="md">
        <Font
          uppercase
          fill="faint"
          letterSpacing="lg"
          size="xs"
        >
          {this.props.children}
        </Font>
      </Gap>
    )
  }
}
