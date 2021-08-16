import React from 'react'
import {Fit, Line, Box, Align} from '../../../themeor'
import {WrapperProps} from '../../adapters/menu-types'
import {Item} from './Item'


export class Wrapper extends React.PureComponent<WrapperProps> {
  static Item = Item

  render() {
    const {children} = this.props

    return (
      <Align hor="left">
          <Fit.TryTagless clip>
            <Box.TryTagless radius="sm" borderFill="faint">
              <Align.TryTagless row>
                <nav>
                  {children}
                </nav>
              </Align.TryTagless>
            </Box.TryTagless>
          </Fit.TryTagless>
      </Align>
    )
  }
}