import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Font, Line} from '../themeor'
import smoothScroll from '../themeor/utils/smooth-scroll'
import {AppContext} from './context'

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string,
  onClick?: (e: any) => void
}

export default class Link extends React.PureComponent<LinkProps> {
  static contextType = AppContext

  handleClick = (e: any) => {
    const {onClick, href} = this.props
    onClick && onClick(e)

    if (href.indexOf('#') === 0) {
      smoothScroll(e)
    }
  }

  handleLocalClick = (e: any) => {
    const {onClick, href} = this.props
    onClick && onClick(e)

    if (href.indexOf('#') > 0) {
      smoothScroll(href.split('#')[1])
    } else {
      this.context.refContent.scrollTop = 0
    }
  }

  render() {
    const {children, href, onClick, ...restProps} = this.props
    let target: string | undefined = '_blank'

    let render = (
      <a target={target} href={href} onClick={this.handleClick} {...restProps}>
        {children}
      </a>
    )

    if (href.indexOf('#') === 0) {
      target = undefined
    } else if (href.indexOf('://') === -1) {
      target = undefined
      let to = href
      if (href.indexOf('#') > 0) {
        to = href.split('#')[0]
      }

      render = (
        <RouterLink to={to} onClick={this.handleLocalClick} {...restProps}>
          {children}
        </RouterLink>
      )
    }

    return (
      <Line.TryTagless TRY_RECURSIVE_TAGLESS fill="accent" bottom="md">
        <Font FORCE_TAGLESS fill="accent" inline>
          {render}
        </Font>
      </Line.TryTagless>
    )
  }
}