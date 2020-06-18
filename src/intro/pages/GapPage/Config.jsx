import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, NavLink, Tag, Code, Title, Text } from '../../../components'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">Config</Font>

        <Gap />
        <Font size="lg">
          Here you can see an example of Gap configuration
        </Font>

        <Gap />
        <Code language="json">
          {`{
  "gap": {
    "x2s": "4px",
    "xs": "8px",
    "sm": "16px",
    "md": "24px",
    "lg": "32px",
    "xl": "40px",
    "x2l": "64px",
    "x3l": "80px"
  }
}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}