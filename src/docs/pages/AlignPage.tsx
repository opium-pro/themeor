import React from 'react'
import {Align} from '../../themeor'

interface _PageProps {}
interface _PageState {}

export default class _Page extends React.PureComponent<_PageProps, _PageState> {
  render() {
    return (<>
      <Align pattern="1fr 1fr">
        <Align.Span col={2}>0</Align.Span>
        <div>1</div>
        <div>1</div>
      </Align>
    </>)
  }
}