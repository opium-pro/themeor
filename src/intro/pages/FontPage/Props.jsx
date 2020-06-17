import React from 'react'
import { Code, Link } from '../../../components'
import { Font } from '../../../themeor'
import { Wrapper, Group, Item, Value } from '../../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Color Props">
          <Item name="fill" type="string" default={`inherit`} description={(<>
            Sets text color from Opium.Fill scheme or custom variable from <Code inline>config.customVariables</Code> See <Link href="/colors">colors</Link> fro more information
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

            <Value examples={[`"--my-var"`]}>
              Custom CSS variable. Has to start with two dashes <Code inline>--</Code>&nbsp;
              Result will be the same as if set in CSS <Code inline language="css">var(--my-var)</Code>
            </Value>
          </Item>

          <Item name="inverse" type="boolean" default="undefined" description={(<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Maked the color <Code inline>weak</Code><br />
            Inverses automatically if background color is strong and included in <Code inline>config.themeContext.shallInverseOn</Code>
          </>)} />
        </Group>


        <Group title="Text Props">
          <Item name="size" type="string" default="inherit">
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.font.size</Code>
            </Value>
          </Item>

          <Item name="weight" type="string" default="inherit">
            <Value examples={[`"100"`, `"200"`, `"300"`, `"400"`, `"500"`, `"600"`, `"700"`, `"800"`, `"900"`]}>
              CSS numeric keyword value
            </Value>
          </Item>

          <Item name="family" type="string" default="inherit" description={<>
            Value from <Code inline>config.font.family</Code><br />
            Please don't forget to unclude @font-face by yourself if needed
          </>}>
            <Value examples={[`"regular"`, `"special"`]}>
              Regular or special font family
            </Value>
          </Item>

          <Item name="align" type="string" default="inherit">
            <Value examples={[`"left"`, `"center"`, `"right"`]}>
              It's pretty obvious
            </Value>
          </Item>

          <Item name="underline" type="boolean" default="inherit" description={<>
            If <Code inline>true</Code>, makes the text <Font inline underline>underlined</Font>
          </>}/>

          <Item name="italic" type="boolean" default="inherit" description={<>
            If <Code inline>true</Code>, makes the text <Font inline italic>italic</Font>
          </>}/>

          <Item name="inline" type="boolean" default="undefined" description={<>
            If <Code inline>true</Code>, makes the text <Code language="css" inline>display: inline-block</Code>
          </>}/>

          <Item name="lineHeight" type="string" default="inherit">
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.font.lineHeight</Code>
            </Value>
          </Item>

          <Item name="letterSpacing" type="string" default="inherit">
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.font.letterSpacing</Code>
            </Value>
          </Item>

          <Item name="uppercase" type="boolean" default="inherit" description={<>
            If <Code inline>true</Code>, makes the text <Font inline uppercase>uppercase</Font>
          </>}/>

          <Item name="noselect" type="boolean" default="inherit" description={<>
            If <Code inline>true</Code>, the text wont't be avalible for selection
          </>}/>

          <Item name="nowrap" type="boolean" default="inherit" description={<>
            If <Code inline>true</Code>, the text will be placed in one row no matrer what
          </>}/>
        </Group>

        <Group title="Other props">

          <Item name="MERGE" type="boolean" default="undefined" description={<>
            If possible, doesn't create separate tag, but passes all the props to the only child. See <Link href="/tag-merging">Tag Merging</Link> for more information
          </>} />

          <Item name="MERGE_CHAIN" type="boolean" default="undefined" description={<>
            If possible, doesn't create separate tag, but passes all the props to the only child. And also passes <Code inline>MERGE_CHAIN="true"</Code> to the child themeor component. See <Link href="/tag-merging">Tag Merging</Link> for more information
          </>} />

          <Item name="FORCE_MERGE" type="boolean" default="undefined" description={<>
            Works like <Code inline>MERGE</Code>, but passes props even into non-themeor components. Be careful, in that case child component must accept at least <Code inline>className</Code> and <Code inline>style</Code> props to work properly. See <Link href="/tag-merging">Tag Merging</Link> for more information
          </>} />

          <Item name="forwardedRef" type="function" default="undefined" description={<>
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