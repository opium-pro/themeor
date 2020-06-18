import React from 'react'
import { Font, Line, Gap, Box, Align, Fit } from '../../themeor'
import { Switch } from 'react-router-dom'
import {PageMenu, Link, ContentWrapper} from '../index'
import {ItemType} from '../../adapters/MenuAdapter'
import {MenuAdapter} from '../../adapters'

export interface Props {
  title?: string,
  description?: any,
  next?: string,
  prev?: string,
}

export class Wrapper extends React.PureComponent<Props> {

  menu = <MenuAdapter
    component={PageMenu}
    data={React.Children.map(this.props.children, ({props}: any): ItemType => ({
      key: props.path,
      value: props.name,
      path: props.path,
      exact: props.exact,
    }))}
    smoothJump
    jumpTo="documentation-menu-id"
  />

  render() {
    const { title, description, next, prev, children } = this.props

    return (<div>
      <ContentWrapper >
        <Gap size="xl" />

        {title && <Font family="special" weight="800" size="x3l">
          {title}
        </Font>}

        {description && (<>
          <Gap />
          <Font.TryTagless size="xl" weight="300">
            {description}
          </Font.TryTagless></>
        )}

        <Gap size="lg" />
        <Gap id="documentation-menu-id" />

        {this.menu}
        <Gap size="lg" />
      </ContentWrapper>

      <Switch>
        {children}
      </Switch>

      <Line fill="faint" />

      <Box fill="faint">
        <Gap size="xl" />
          <ContentWrapper>
            <Align row vert="center">
              <Fit spacer>
                {this.menu}
              </Fit>
              <Gap size="xl" />
              {prev && <Align hor="center"><Link href={prev}><Font size="lg" weight="700">&lt; Previous</Font></Link></Align>}
              <Gap size="xl" />
              {next && <Align hor="center"><Link href={next}><Font size="lg" weight="700">Next &gt;</Font></Link></Align>}
            </Align>
          </ContentWrapper>
        <Gap size="xl" />
      </Box>
    </div>)
  }
}