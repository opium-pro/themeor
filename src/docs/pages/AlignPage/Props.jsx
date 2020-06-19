import React from 'react'
import { Code, Link } from '../../components'
import { Wrapper, Group, Item, Value } from '../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="...">
          <Item name="..." type="" default="" description="" />
        </Group>
      </Wrapper>
    )
  }
}