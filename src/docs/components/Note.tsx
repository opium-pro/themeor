
import React from 'react'
import {Font, Box, Gap} from '../../themeor'

export interface NoteProps extends React.AllHTMLAttributes<HTMLElement> {}


export default class Note extends React.PureComponent<NoteProps> {
  render() {
    const {children, ...restProps} = this.props

    return(
      <Box fill="warning">
        <Gap>
          <Font fill="warning">
            {children}
          </Font>
        </Gap>
      </Box>
    )
  }
}