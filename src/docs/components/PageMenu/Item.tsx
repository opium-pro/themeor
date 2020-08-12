import React from 'react'
import {Fit, Font, Line, Box, Gap, Reaction} from '../../../themeor'
import {ItemProps} from '../../adapters/menu-types'


export class Item extends React.PureComponent<ItemProps> {
  render() {
    const {children, active} = this.props

    return (
      <Reaction smooth track={['hover', 'focus']}>
        {(rProps: any, r: any) => (
          <Fit.TryTagless TRY_RECURSIVE_TAGLESS>
            <Line weight="none" fill="accent">
              <Box
                fill={(r.hover || r.focus || active) ? 'accent' : 'base'}
                strong={active}
              >
                <Gap vert="sm" hor="lg">
                  <Font
                    {...rProps}
                    inline
                    size="lg"
                    fill={active ? "base" : "accent"}
                    weight="500"
                    noselect
                    nowrap
                    FORCE_TAGLESS
                  >
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