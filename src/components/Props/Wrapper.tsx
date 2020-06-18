import React from 'react'
import { Font, Line, Gap, Align, Fit } from '../../themeor'
import { ContentWrapper, Code, Tag } from '../index'
import smoothScroll from '../../themeor/utils/smooth-scroll'

export interface Props {}

export class Wrapper extends React.PureComponent<Props> {

  render() {
    const { children } = this.props
    const tableHeaderProps: any = {letterSpacing: "lg", uppercase: true, weight: "600", size: "xs", fill: "faint"}

    return (<div>
      <ContentWrapper id="list">
        <Gap />
        <Font family="special" weight="800" size="x2l">Props</Font>

        {React.Children.map(children, (group: any, index: number) => (!!group && <>
          <Gap />
          {index > 0 && <Line fill="faint" />}
          <Gap />
          <Align template="3fr 1fr 1fr" vert="center" gapVert="xs" gapHor="x3l">
            <Font {...tableHeaderProps}>{group.props?.title}</Font>
            <Font {...tableHeaderProps}>Type</Font>
            <Font {...tableHeaderProps}>Default</Font>
            <Fit colSpan={3}></Fit>

            {React.Children.map(group.props?.children, (item: any) => (!!item && <>
              <Tag>
                <a onClick={smoothScroll} href={`#${item.props?.name}`}>{item.props?.name}</a>
              </Tag>
              {item.props?.type && <Code plain>{item.props?.type}</Code>}
              {item.props?.default && <Code plain>{item.props?.default}</Code>}
            </>))}
          </Align>
        </>))}

        {children}
        <Gap size="x2l" />
      </ContentWrapper>
    </div>)
  }
}