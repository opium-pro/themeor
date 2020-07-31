import React from 'react'
import { Code, Link } from '../../components'
import { Font } from '../../../themeor'
import { Wrapper, Group, Item, Value } from '../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Color Props">
          <Item name="fill" type="string" default={`"base"`} description={(<>
            Sets line color from Opium.Fill scheme or custom variable from <Code inline>config.customVariables</Code> See <Link href="/colors">colors</Link> fro more information
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


        <Group title="Line Weight Props">
          <Item name="weight" type="string" default={`"md"`}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.line.weight</Code>
            </Value>
          </Item>

          <Item name="top" type="string" default="undefined" description={(<>
            Sets top line weight in case if has children. If set, them <Code inline>weight</Code> prop won't use its default value
          </>)}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.line.weight</Code>
            </Value>
          </Item>

          <Item name="right" type="string" default="undefined" description={(<>
            Sets right line weight in case if has children. If set, them <Code inline>weight</Code> prop won't use its default value
          </>)}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.line.weight</Code>
            </Value>
          </Item>

          <Item name="bottom" type="string" default="undefined" description={(<>
            Sets bottom line weight in case if has children. If set, them <Code inline>weight</Code> prop won't use its default value
          </>)}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.line.weight</Code>
            </Value>
          </Item>

          <Item name="left" type="string" default="undefined" description={(<>
            Sets left line weight in case if has children. If set, them <Code inline>weight</Code> prop won't use its default value
          </>)}>
            <Value examples={opiumScale()}>
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