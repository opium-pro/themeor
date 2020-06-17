import React from 'react'
import {Fit, Line, Box, Align} from '../../themeor'
import {WrapperProps} from '../../adapters/menu-types'
import {Item} from './Item'


export class Wrapper extends React.PureComponent<WrapperProps> {
  static Item = Item

  render() {
    const {children} = this.props

    return (
      <Align hor="left">
        <Line fill="faint" MERGE_CHAIN>
          <Fit clip>
            <Box radius="sm">
              <Align row>
                <nav>
                  {children}
                </nav>
              </Align>
            </Box>
          </Fit>
        </Line>
      </Align>
    )
  }
}