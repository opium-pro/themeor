import React from 'react'
import {Align, Font, Fit} from '../themeor'


export default class ContentWrapper extends React.PureComponent<React.AllHTMLAttributes<HTMLElement>> {
  render() {
    const {children, ...restProps} = this.props
    return(
      <Align hor="center" {...restProps}>
        <Fit MERGE width="700px">
          <Font family="regular" weight="400" size="md">
            {children}
          </Font>
        </Fit>
      </Align>
    )
  }
}