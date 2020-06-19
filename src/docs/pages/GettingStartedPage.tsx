import React from 'react'
import {Font} from '../../themeor'
import {Link} from '../components'

interface _PageProps {}
interface _PageState {}

export default class _Page extends React.PureComponent<_PageProps, _PageState> {
  render() {
    return (<>
      Download fast start kit.<br /><br />
      But now only following pages are ready:<br /><br />
      <Link href="/box">Box</Link><br /><br />
      <Link href="/font">Font</Link><br /><br />
      <Link href="/line">Line</Link><br /><br />
      <Link href="/icon">Icon</Link><br /><br />
      <Link href="/gap">Gap</Link><br /><br />
    </>)
  }
}