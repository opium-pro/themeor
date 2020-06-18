import React from 'react'
import { Code, Link } from '../../../components'
import { Wrapper, Group, Item, Value } from '../../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Size Props">
          <Item name="size" type="string" default={`"md"`}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="vert" type="string" default="undefined" description={<>
            Sets vertical padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="hor" type="string" default="undefined" description={<>
            Sets horizontal padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="top" type="string" default="undefined" description={<>
            Sets top padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="right" type="string" default="undefined" description={<>
            Sets right padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="bottom" type="string" default="undefined" description={<>
            Sets bottom padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>

          <Item name="left" type="string" default="undefined" description={<>
            Sets left padding. If set, then <Code inline>size</Code> prop will be ignored
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>
        </Group>

        <Group title="Other Props">
          <Item name="inrow" type="boolean" default="undefined" description={<>
            Sets a horizontal gap instead of vertical one. Works only when there is no children. Sets automatically if Gap component is inside of <Code inline language="css">flex-direction: row</Code>
          </>} />

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