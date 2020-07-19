import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, NavLink, Tag, Code } from '../../components'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">Config</Font>

        <Gap />
        <Font size="lg">
          Will be gere soon
        </Font>

        <Gap />
        <Code language="json">
          {`{}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}