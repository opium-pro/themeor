import React from 'react'
import { Fit, Font, Line, Box, Gap, Reaction } from '../../../themeor'
import { ItemProps } from '../../adapters/menu-types'


export class Item extends React.PureComponent<ItemProps> {
  render() {
    const { children, active } = this.props

    return (
      <Reaction smooth track={['hover', 'focus']}>
        {(rProps: any, r: any) => (
          <Box.TryTagless
            fill={(r.hover || r.focus || active) ? 'accent' : 'base'}
            strong={active}
            {...rProps}
          >
            <Gap.TryTagless vert="sm" hor="lg">
              <Font.TryTagless
                inline
                size="lg"
                fill={active ? "base" : "accent"}
                weight="500"
                noselect
                nowrap
                FORCE_TAGLESS
              >
                {children}
              </Font.TryTagless>
            </Gap.TryTagless>
          </Box.TryTagless>
        )}
      </Reaction>
    )
  }
}