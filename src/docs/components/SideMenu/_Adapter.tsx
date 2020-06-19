import React from 'react'
import {Font} from '../../../themeor'

export interface _ComponentProps extends React.AllHTMLAttributes<HTMLElement> {}


export default class _Component extends React.PureComponent<_ComponentProps> {
  render() {
    const {children, ...restProps} = this.props

    return(
      <div {...restProps}>
        {children}
      </div>
    )
  }
}