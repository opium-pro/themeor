import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, NavLink, Tag, Code, Title, Text } from '../../components'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">Config</Font>

        <Gap />
        <Font size="lg">
          Here you can see an example of Line configuration
        </Font>

        <Gap />
        <Code language="json">
          {`{
  "line": {
    "fill": {
      "faint": {
        "strong-down": "rgba(0, 43, 107, 0.04)",
        "strong": "rgba(0, 43, 107, 0.11)",
        "strong-up": "rgba(0, 43, 107, 0.20)",
        "weak": "rgba(255, 255, 255, 0.1)"
      }
    },
    "weight": {
      "md": "1px",
      "lg": "2px",
      "xl": "4px",
      "x2l": "6px"
    }
  }
}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}