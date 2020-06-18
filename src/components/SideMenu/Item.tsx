import React from 'react'
import {Box, Font, Gap, Reaction} from '../../themeor'
import {ItemProps} from '../../adapters/menu-types'


export class Item extends React.PureComponent<ItemProps> {
  render() {
    const {
      children,
      active,
      ...restProps
    } = this.props

    return (
      <Reaction track={['hover', 'focus']} cursor="pointer" {...restProps}>
        {(r: any) => (

            <Gap.TryTagless
              TRY_RECURSIVE_TAGLESS
              vert="sm"
              hor="md"
            >
              <Box
                {...r.props}
                radius="xs"
                fill={!active && (r.hover || r.focus) ? 'faint-up' : 'none'}
              >
                  <Font
                    size={active ? "lg" : "sm"}
                    fill={active ? 'accent' : 'base'}
                    weight={active ? '700' : '500'}
                    inline={false}
                    tabIndex={0}
                    FORCE_TAGLESS
                    noselect
                  >
                    {children}
                  </Font>
              </Box>
            </Gap.TryTagless>

        )}
      </Reaction>
    )
  }
}