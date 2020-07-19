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
        <Font size="lg">
          Here you can see an example of Font configuration.<br />
          You need to unclude @font-face by yourself
        </Font>

        <Gap />
        <Code language="json">
          {`{
  "font": {
    "family": {
      "regular": "'Helvetica', sans-serif",
      "special": "'Montserrat', sans-serif"
    },
    "fill": {
      "faint": {
        "weak": "rgba(237, 241, 247, 0.5)"
      },
      "accent": {
        "weak": "#4294FF"
      }
    },
    "line-height": {
      "sm": "1.2",
      "md": "1.5"
    },
    "letter-spacing": {
      "md": "0",
      "lg": "0.05em"
    },
    "size": {
      "xs": "12px",
      "sm": "14px",
      "md": "16px",
      "lg": "20px",
      "xl": "28px",
      "x2l": "40px",
      "x3l": "80px"
    }
  }
}`}
        </Code>

        <Gap size="x2l" />
      </ContentWrapper>
    )
  }
}