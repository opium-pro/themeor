import React from 'react'
import {Gap, Line} from '../../themeor'
import {SeparatorProps} from '../../adapters/menu-types'

export class Separator extends React.PureComponent<SeparatorProps> {
  render() {
    return (<>
      <Gap vert="xs">
        <Line inverse={false} fill="faint" />
      </Gap>
    </>)
  }
}