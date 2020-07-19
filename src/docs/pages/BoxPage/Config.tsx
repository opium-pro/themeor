import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, Tag, Code } from '../../components'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">Config</Font>

        <Gap />
        <Font size="lg">Here you can see an example of Box configuration</Font>

        <Gap />
        <Code language="json">
          {`{
  "box": {
    "radius": {
      "xs": "2px",
      "sm": "4px",
      "md": "12px",
      "lg": "16px",
      "xl": "20px",
      "x2l": "40px",
      "x3l": "60px"
    },
    "shadow": {
      "md": "0px 20px 40px rgba(59, 70, 128, 0.05)",
      "lg": "0px 20px 40px rgba(6, 7, 12, 0.10)"
    },
    "fill": {
      "base": {
        "strong": "#222428"
      },
      "accent": {
        "weak": "#202C3C",
        "weak-up": "#1F3451"
      },
      "faint": {
        "strong": "#323438",
        "weak-up": "rgba(255, 255, 255, 0.1)",
        "weak": "rgba(255, 255, 255, 0.05)"
      },
      "critic": {
        "weak": "#521E1E"
      }
    }
  }
}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}