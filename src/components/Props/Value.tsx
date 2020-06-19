import React from 'react'
import { Font, Align, Fit, Line } from '../../themeor'
import {Code} from '../index'

export interface Props {
  examples: string[],
}


export class Value extends React.PureComponent<Props> {
  render() {
    const { examples, children } = this.props

    return (<>
      <Font>
        {children}
      </Font>

      <Align stack gapVert="x2s" gapHor="x2s">
        {examples.map((example) => (
          <Code key={example} inline>{example}</Code>
        ))}
      </Align>

      <Align.Span col={2}><Line fill="faint" /></Align.Span>
    </>)
  }
}