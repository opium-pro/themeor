import React from 'react'
import {Fit, Font, Line, Box, Gap, Reaction} from '../../themeor'

export interface TagProps {}

export default class Tag extends React.PureComponent<TagProps> {
  render() {
    const {children} = this.props

    return (
      <Reaction track={['hover', 'focus']}>
        {(rProps: any, r: any) => (
          <Fit.TryTagless TRY_RECURSIVE_TAGLESS FORCE_TAGLESS minWidth="50px" {...rProps}>
            <Line weight="none" fill="accent">
              <Box radius="xs" fill={r.hover || r.focus ? 'accent-up' : 'accent'}>
                <Gap vert="x2s" hor="sm">
                  <Font align="center" fill="accent" weight="500" inline={false}>
                    {children}
                  </Font>
                </Gap>
              </Box>
            </Line>
          </Fit.TryTagless>
        )}
      </Reaction>
    )
  }
}