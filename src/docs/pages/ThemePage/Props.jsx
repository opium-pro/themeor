import React from 'react'
import { Wrapper, Group, Item } from '../../components/Props'

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