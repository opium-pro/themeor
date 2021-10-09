import React from 'react'
import { Fit, Font, Line, Box, Gap, Reaction } from '../../themeor'

export interface TagProps { }

export default class Tag extends React.PureComponent<TagProps> {
  render() {
    const { children } = this.props

    return (
      <Reaction track={['hover', 'focus']}>
        {(rProps: any, r: any) => (
          <Box {...rProps} minWidth="50px" radius="xs" fill={r.hover || r.focus ? 'accent-up' : 'accent'}>
            <Gap.TryTagless vert="x2s" hor="sm">
              <Font.TryTagless align="center" fill="accent" weight="500" inline={false}>
                {children}
              </Font.TryTagless>
            </Gap.TryTagless>
          </Box>
        )}
      </Reaction>
    )
  }
}