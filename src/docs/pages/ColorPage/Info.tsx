import React from 'react'
import { Gap, Font, Line, Align } from '../../../themeor'
import { ContentWrapper, NavLink, Tag, Code } from '../../components'
import {Wrapper, Item} from '../../components/Examples'


export default class BoxPage_Config extends React.PureComponent {
  render() {
    return (<>
      <Wrapper title="Opium.Fill usage">
        <Item
          description="Every color is devided on seven families (base, faint, accent, complement, critic, warning, success) and can be strong (bright, saturated version) or weak (unsaturated, barely distinguishable). You can set colors in config as following:"
          code={`{
  "fill": {
    "base": {
      "strong": "#000",
      "weak": "#fff"
    },
    "faint": {
      "strong": "#8994A6",
      "weak": "#F6F8FB",
    },
    "accent": {
      "strong": "#1273F3",
      "weak": "#EBF4FF",
    },
    "complement": {
      "strong": "#8889E2",
      "weak": "#EEECFD"
    },
    "critic": {
      "strong": "#F74545",
      "weak": "#FDEDED"
    },
    "warning": {
      "strong": "#E1922D",
      "weak": "#FCEBCF"
    },
    "success": {
      "strong": "#27AE60",
      "weak": "#DEF8E9"
    }
  }
}`}
        />

        <Item
          description="It also can be shifted up (darker) or down (lighter). Let's add some examples to the config:"
          markLines={[9,11,12,17]}
          code={`{
  "fill": {
    "base": {
      "strong": "#000",
      "weak": "#fff"
    },
    "faint": {
      "strong": "#8994A6",
      "strong-down": "#AAB",
      "weak": "#F6F8FB",
      "weak-up": "#EDF1F7",
      "weak-down": "#FAFBFD"
    },
    "accent": {
      "strong": "#1273F3",
      "weak": "#EBF4FF",
      "weak-up": "#DBEBFF"
    },
    "complement": {
      "strong": "#8889E2",
      "weak": "#EEECFD"
    },
    "critic": {
      "strong": "#F74545",
      "weak": "#FDEDED"
    },
    "warning": {
      "strong": "#E1922D",
      "weak": "#FCEBCF"
    },
    "success": {
      "strong": "#27AE60",
      "weak": "#DEF8E9"
    }
  }
}`}
        />

        <Item
          description="You can substitute colors for Box, Font, Line, Icon components. That's how you do it for Box:"
          code={`{
  "box": {
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
        />
      </Wrapper>

      <Wrapper title="Custom color usage">
        <Item></Item>
      </Wrapper>
    </>)
  }
}