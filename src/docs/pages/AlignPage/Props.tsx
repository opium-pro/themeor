import React from 'react'
import { Code, Link } from '../../components'
import { Wrapper, Group, Item, Value } from '../../components/Props'
import opiumScale from '../../utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Main Props">
          <Item name="row" type="boolean" default="undefined" description={<>
            Makes all the children to form a line by <Code inline language="css">display: flex</Code>
          </>} />
          <Item name="stack" type="boolean" default="undefined" description={<>
            Makes all the children to form a line by <Code inline language="css">display: flex</Code>, but if don't fit, items will be moved to a new line
          </>} />
          <Item name="pattern" type="string" default="undefined" description={<>
            Analogue of <Code inline language="css">grid-template-columns</Code> in CSS. Works like <Code inline>stack</Code>, but allows to predefine width of the columns
          </>}>
            <Value examples={[`"1fr 1fr"`, `"100px 1fr 100px"`, `"20% 100px auto"`]}>
              Using pixels, fragments, percents etc to define the width of each column
            </Value>
          </Item>
          <Item name="vert" type="string" default={`"top"`} description="Defines vertical alignment of children">
            <Value examples={[`"stretch"`, `"top"`, `"center"`, `"bottom"`]}>
              One of this 4 possible values
            </Value>
          </Item>
          <Item name="hor" type="string" default={`"stretch"`} description="Defines horizontal alignment of children">
            <Value examples={[`"stretch"`, `"top"`, `"center"`, `"bottom"`]}>
              One of this 4 possible values
            </Value>
          </Item>
          <Item name="gapVert" type="string" default="undefined" description={<>
            Vertical space between the children. Adds an additional wrapper <Code inline>div</Code> to each child
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>
          <Item name="gapHor" type="string" default="undefined" description={<>
            Horizontal space between the children. Adds an additional wrapper <Code inline>div</Code> to each child
          </>}>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.gap</Code>
            </Value>
          </Item>
        </Group>

        <Group title="Other props">
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