import React from 'react'
import { Code, Link } from '../../components'
import { Wrapper, Group, Item, Value } from '../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Color Props">
          <Item name="fill" type="string" default={`"base"`} description={(<>
            Sets icon color from Opium.Fill scheme. See <Link href="/colors">colors</Link> fro more information
            </>)}
          >
            <Value examples={[`"none"`]}>Transparent</Value>

            <Value examples={opiumFill()}>
              Any parent color from <Link href="/colors">Opium.Fill</Link><br />
              By default all colors are <Code inline>strong</Code>
            </Value>

            <Value examples={opiumFill(true, true, false)}>
              Any color shift from <Link href="/colors">Opium.Fill</Link>
            </Value>
          </Item>

          <Item name="inverse" type="boolean" default="undefined" description={(<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Makes the color <Code inline>weak</Code><br />
            Inverses automatically if background color is strong and included in <Code inline>config.themeContext.shallInverseOn</Code>
          </>)} />
        </Group>


        <Group title="Main Props">
          <Item name="size" type="string" default={`"md"`}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.icon.size</Code>
            </Value>
          </Item>

          <Item name="name" type="string" default={`"placeholder"`} description={(<>
            Any name that you have previously used in <Code inline>{`<Theme icons={icons} />`}</Code>
          </>)}>
            <Value examples={[`"placeholder"`, `"anyIconName"`]}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.line.weight</Code>
            </Value>
          </Item>
        </Group>

        <Group title="Other Props">
          <Item name="forwardRef" type="any" default="undefined" description={<>
            Passes <Code inline>ref</Code> prop to the rendering tag
          </>} />

          <Item name="HTML_attributes">
            <Value examples={["id", "className", "style", "onClick", "onMouseOver", "title", "tabIndex"]}>
              Any prop suitable for <Code inline>div</Code> element, such as:
            </Value>
          </Item>
        </Group>
      </Wrapper>
    )
  }
}