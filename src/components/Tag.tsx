import React from 'react'
import {Fit, Font, Line, Box, Gap, Reaction} from '../themeor'

export interface TagProps {}

export default class Tag extends React.PureComponent<TagProps> {
  render() {
    const {children} = this.props

    return (
      <Reaction track={['hover', 'focus']}>
        {(r: any) => (
          <Fit MERGE_CHAIN FORCE_MERGE minWidth="50px" {...r.props}>
            <Line weight="none" fill="accent">
              <Box radius="xs" fill={r.hover || r.focus ? 'accent-up' : 'accent'}>
                <Gap vert="x2s" hor="sm">
                  <Font align="center" fill="accent" weight="500" inline={false}>
                    {children}
                  </Font>
                </Gap>
              </Box>
            </Line>
          </Fit>
        )}
      </Reaction>
    )
  }
}