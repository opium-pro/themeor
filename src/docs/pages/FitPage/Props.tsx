import React from 'react'
import { Code, Link } from '../../components'
import { Wrapper, Group, Item, Value } from '../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Size Props">
          <Item name="width" type="string" default="undefined">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vw"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="height" type="string" default="undefined" description="">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vh"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="maxWidth" type="string" default="undefined" description="">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vw"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="maxHeight" type="string" default="undefined" description="">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vh"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="minWidth" type="string" default="undefined" description="">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vw"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="minHeight" type="string" default="undefined" description="">
            <Value examples={[`"200px"`,`"50%"`,`"auto"`,`"100vh"`]}>
              Any avalible CSS value for size
            </Value>
          </Item>

          <Item name="offset" type="string" default="undefined" description="Offset component beyond it's own boundaries">
            <Value examples={opiumScale()}>
              Any scalable value from <Link href="/gap">Gap component</Link>
            </Value>
          </Item>

          <Item name="left" type="string" default="undefined" description="Moves component's left boundary">
            <Value examples={[`"10px"`,`"5%"`,`"10vh"`]}>
              Any avalible CSS value for size
            </Value>
            <Value examples={[`"-10px"`,`"-5%"`,`"-10vh"`]}>
              Also negative values
            </Value>
          </Item>

          <Item name="top" type="string" default="undefined" description="Moves component's top boundary">
            <Value examples={[`"10px"`,`"5%"`,`"10vh"`]}>
              Any avalible CSS value for size
            </Value>
            <Value examples={[`"-10px"`,`"-5%"`,`"-10vh"`]}>
              Also negative values
            </Value>
          </Item>

          <Item name="right" type="string" default="undefined" description="Moves component's right boundary">
            <Value examples={[`"10px"`,`"5%"`,`"10vh"`]}>
              Any avalible CSS value for size
            </Value>
            <Value examples={[`"-10px"`,`"-5%"`,`"-10vh"`]}>
              Also negative values
            </Value>
          </Item>

          <Item name="bottom" type="string" default="undefined" description="Moves component's bottom boundary">
            <Value examples={[`"10px"`,`"5%"`,`"10vh"`]}>
              Any avalible CSS value for size
            </Value>
            <Value examples={[`"-10px"`,`"-5%"`,`"-10vh"`]}>
              Also negative values
            </Value>
          </Item>
        </Group>

        <Group title="Position Props">
          <Item name="cover" type="string" default="undefined" description="">
            <Value examples={[`"parent"`]}>
              Finds the nearest parent <Code inline>Fit</Code> component, becomes his size and appears above it via <Code inline language="css">position: absolute</Code>
            </Value>

            <Value examples={[`"screen"`]}>
              Becomes the size of the browser viewport and appears above it via <Code inline language="css">position: fixed</Code>
            </Value>
          </Item>

          <Item name="stick" type="string" default="undefined" description={(<>
            Plases component to a specific place of <Code inline>cover</Code>
          </>)}>
            <Value examples={[`"top-left"`,`"top"`,`"top-right"`,`"right"`,`"bottom-right"`,`"bottom-left"`,`"left"`]}>
              Side or corner
            </Value>
          </Item>

          <Item name="zIndex" type="number" default="undefined" description="">
            <Value examples={["4", "20", "69", "666"]}>Number of the layer</Value>
          </Item>

          <Item name="inline" type="boolean" default="undefined" description={(<>
            If <Code inline>true</Code>, makes the component <Code inline language="css">display: inline-block</Code>
          </>)} />
        </Group>

        <Group title="Other props">
          <Item name="scroll" type="boolean" default="undefined" description={(<>
            If <Code inline>true</Code>, makes the component <Code inline language="css">overflow: auto</Code> which means it will set scrollbars automatically
          </>)} />

          <Item name="clip" type="boolean" default="undefined" description={(<>
            If <Code inline>true</Code>, makes the component <Code inline language="css">overflow: hidden</Code>
          </>)} />

          <Item name="isNotParent" type="boolean" default="undefined" description={(<>
            If <Code inline>true</Code>, this component won't be considered parent when it's child has <Code inline>cover="parent"</Code>
          </>)} />

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