import React from 'react'
import { Font, Gap } from '../../../themeor'
import { ContentWrapper, Link } from '../index'

export interface Props {
  title?: any,
  moreLink?: string,
}

export class Wrapper extends React.PureComponent<Props> {
  render() {
    const { title, moreLink, children } = this.props
    

    return (
      <ContentWrapper>
        <Gap />
        <Font family="special" weight="800" size="x2l">{title}</Font>
        {moreLink && <Link href={moreLink}>See all props</Link>}
        <Gap size="sm" />
        <Gap />
        {children}
        <Gap size="xl" />
      </ContentWrapper>
    )
  }
}