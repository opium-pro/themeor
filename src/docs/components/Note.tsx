
import React from 'react'
import {Font, Box, Gap, Align} from '../../themeor'

export interface NoteProps extends React.AllHTMLAttributes<HTMLElement> {}


export default class Note extends React.PureComponent<NoteProps> {
  render() {
    const {children, ...restProps} = this.props

    return(
      <Box fill="faint-up" radius="md">
        <Gap>
          <Font>
            {children}
          </Font>
        </Gap>
      </Box>
    )
  }
}