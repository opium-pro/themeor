import React from 'react'
import {Box, Font, Gap, Reaction} from '../../../themeor'
import {ItemProps} from '../../adapters/menu-types'


export class Item extends React.PureComponent<ItemProps> {
  render() {
    const {
      children,
      active,
      ...restProps
    } = this.props

    return (
      <Reaction track={['hover', 'focus']} cursor="pointer" {...restProps} smooth>
        {(rProps: any, r: any) => (

            <Gap.TryTagless
              TRY_RECURSIVE_TAGLESS
              vert="12px"
              hor="md"
            >
              <Box
                {...rProps}
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
                    style={{transition: 'all 0.2s ease'}}
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