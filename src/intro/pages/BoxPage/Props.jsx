import React from 'react'
import { Code, Link } from '../../../components'
import { Wrapper, Group, Item, Value } from '../../../components/Props'
import opiumFill from '../../../themeor/utils/opium-fill'
import opiumScale from '../../../themeor/utils/opium-scale'

export default class BoxPage_Props extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Group title="Color Props">
          <Item name="fill" type="string" default={`"none"`} description={(<>
            Sets background color from Opium.Fill scheme or custom variable from config. See <Link href="/colors">colors</Link> fro more information
            </>)}
          >
            <Value examples={[`"none"`]}>Transparent</Value>

            <Value examples={opiumFill()}>
              Any parent color from <Link href="/colors">Opium.Fill</Link><br />
              By default all colors are <Code inline>weak</Code>
            </Value>

            <Value examples={opiumFill(true, true, false)}>
              Any color shift from <Link href="/colors">Opium.Fill</Link>
            </Value>

            <Value examples={[`"--my-var"`]}>
              Custom CSS variable. Has to start with two dashes <Code inline>--</Code>&nbsp;
              Result will be the same as if set in CSS <Code inline language="css">var(--my-var)</Code>
            </Value>
          </Item>

          <Item name="strong" type="boolean" default="undefined" description={(<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Toggles fill color from  <Code inline>weak</Code> to  <Code inline>strong</Code>
          </>)} />

          <Item name="inverse" type="boolean" default="undefined" description={(<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Takes <Code inline>weak</Code> color not from parent color, but from background context
          </>)} />

          <Item name="fancy" type="boolean" default="undefined" description={(<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Takes gradient fill from config
          </>)} />
        </Group>


        <Group title="Radius Props">
          <Item name="radius" type="string" default="undefined"
            description="Sets border-radius for all 4 corners"
          >
            <Value examples={[`"none"`]}>No border-radius</Value>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.box.radius</Code>
            </Value>
            <Value examples={[`"max"`]}>Maximal avalible value to make a circle from rectangle</Value>
          </Item>

          <Item name="radiusTop" type="string" default="undefined" description={<>
            Sets border-radius for top corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusRight" type="string" default="undefined" description={<>
            Sets border-radius for right corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusBottom" type="string" default="undefined" description={<>
            Sets border-radius for bottom corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusLeft" type="string" default="undefined" description={<>
            Sets border-radius for left corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusTL" type="string" default="undefined" description={<>
            Sets border-radius for top left corner. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusTR" type="string" default="undefined" description={<>
            Sets border-radius for top right corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusBR" type="string" default="undefined" description={<>
            Sets border-radius for bottom right corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>

          <Item name="radiusBL" type="string" default="undefined" description={<>
            Sets border-radius for bottom left corners. See <Link href="#radius">radius</Link> for avalible values
          </>}/>
        </Group>

        <Group title="Other visual props">
          <Item name="shadow" type="string" default="undefined" description="Sets box-shadow">
            <Value examples={[`"none"`]}>No shadow</Value>
            <Value examples={opiumScale()}>
              <Link href="/scaled-css">Scaled value</Link> from <Code inline>config.box.shadow</Code>
            </Value>
          </Item>

          <Item name="img" type="string" default="undefined" description={<>
            Sets backglound image which is centerred and covers all the rectangle
          </>}>
            <Value examples={[`"/img/demo.png"`]}>
              Any valid path or path to the <Code inline>public</Code> folder
            </Value>
          </Item>
        </Group>

        <Group title="Other props">
          <Item name="noContext" type="boolean" default="undefined" description={<>
            Works only with <Link href="/colors">Opium.Fill</Link>. Ignore auto-passing <Code inline>inverse</Code> to children elements even if <Code inline>shallInverseOn</Code> is set
          </>} />

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