import React from 'react'
import {Fit, Font, Line, Box, Gap, Reaction} from '../../themeor'
import {ItemProps} from '../../adapters/menu-types'


export class Item extends React.PureComponent<ItemProps> {
  render() {
    const {children, active} = this.props

    return (
      <Reaction track={['hover', 'focus']}>
        {(r: any) => (
          <Fit MERGE_CHAIN>
            <Line weight="none" fill="accent">
              <Box
                fill={(r.hover || r.focus || active) ? 'accent' : 'base'}
                strong={active}
              >
                <Gap vert="sm" hor="lg">
                  <Font
                    {...r.props}
                    inline
                    size="lg"
                    fill={active ? "base" : "accent"}
                    weight="500"
                    noselect
                    FORCE_MERGE
                  >
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