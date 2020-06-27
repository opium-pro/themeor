import React from 'react'
import { Font, Line, Gap, Box, Align, Fit } from '../../../themeor'
import { Switch } from 'react-router-dom'
import {PageMenu, Link, ContentWrapper} from '../index'
import {ItemType} from '../../adapters/MenuAdapter'
import {MenuAdapter} from '../../adapters'
import navigation from '../../navigation'
import Note from '../Note'

export interface Props {
  title?: string,
  description?: any,
  next?: string,
  prev?: string,
  path?: string,
  nonTheming?: boolean,
}

export class Wrapper extends React.PureComponent<Props> {

  menu = React.Children.count(this.props.children) > 1 && <MenuAdapter
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
    const { title, description, path, children, nonTheming } = this.props

    let prev = this.props.prev
    function findPrev(index: number): any {
      if (navigation[index - 1]) {
        return navigation[index - 1].path || findPrev(index - 1)
      }
    }
    let next = this.props.next
    function findNext(index: number): any {
      if (navigation[index + 1]) {
        return navigation[index + 1].path || findNext(index + 1)
      }
    }
    path && navigation.forEach((navItem, index) => {
      if (!prev && navItem.path === path) {
        prev = findPrev(index)
      }
      if (!next && navItem.path === path) {
        next = findNext(index)
      }
    })

    return (
    <Fit.TryTagless minHeight="100vh">

    <Align>
      <ContentWrapper >
        <Gap size="xl" />

        {title && <Font family="special" weight="800" size="x3l">
          {title}
        </Font>}

        {nonTheming && (<>
          <Note>
            <Align row vert="center" gapHor="md">
              <Font inline size="x2l">😊</Font>
              <Font>
                This component has nothing to deal with themes.<br />
                But you can use it to handle some cases faster then with CSS
              </Font>
            </Align>
          </Note>
        </>)}

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

      <Align.Spacer />

      <Line fill="faint-down" />

      <Box fill="faint-down">
        <Gap size="xl" />
          <ContentWrapper>
            <Align row vert="center">
              <Align.Spacer>
                {this.menu}
              </Align.Spacer>
              <Gap size="xl" />
              {prev && <Align hor="center"><Link href={prev}><Font size="lg" weight="700">&lt; Previous</Font></Link></Align>}
              <Gap size="xl" />
              {next && <Align hor="center"><Link href={next}><Font size="lg" weight="700">Next &gt;</Font></Link></Align>}
            </Align>
          </ContentWrapper>
        <Gap size="xl" />
      </Box>
      </Align>
    </Fit.TryTagless>
    )
  }
}