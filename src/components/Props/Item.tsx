import React from 'react'
import { Font, Line, Gap, Align, Fit } from '../../themeor'
import { Code, Link } from '../index'
import {Value} from './Value'

export interface Props {
  type?: string,
  name?: string,
  default?: string,
  description?: any,
}

export class Item extends React.PureComponent<Props> {
  static Value = Value

  render() {
    const { children, name, description, default: defValue, type } = this.props
    const tableHeaderProps: any = {letterSpacing: "lg", uppercase: true, weight: "600", size: "xs", fill: "faint"}

    return (
      <>
        <Gap size="x3l" />
        <Line weight="x2l" />
        <Gap size="x2l" />
        <Gap id={name} vert="md">
          <Align row vert="center" gapHor="sm">
            <Font family="special" weight="800" size="x2l">
              {name}
            </Font>

            <Gap size="md" />

            {type && <Code inline>{`type: ${type}`}</Code>}
            {defValue && <Code inline>{`default: ${defValue}`}</Code>}
          </Align>

          <Font nowrap FORCE_TAGLESS>
            <Link href="#list">see all props</Link>
          </Font>
        </Gap>

        {!!description && <Font size="lg">{description}</Font>}

        {!!children && (<>
          <Gap size="xl" />
          <Align pattern="50% 50%" gapHor="md">
            <Font {...tableHeaderProps}>Option</Font>
            <Font {...tableHeaderProps}>Example</Font>
          </Align>

          <Gap size="xs" />
          <Line fill="faint" />
          <Gap />

          <Align pattern="50% 50%" gapHor="md" gapVert="md">
            {children}
          </Align>
        </>)}
      </>
    )
  }
}