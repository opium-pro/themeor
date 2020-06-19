import React from 'react'
import {withRouter, Link, RouteComponentProps, RouteProps} from 'react-router-dom'
import {AppContext} from '../context'
import * as Types from './menu-types'


export interface ItemType extends RouteProps {
  key: string,
  value?: any,
  hint?: string,
  component?: any,
  path?: string,
  exact?: boolean,
}

export interface MenuConstructorProps extends RouteComponentProps {
  data?: ItemType[] | null,
  jumpTo?: string,
  smoothJump?: boolean,
  component: {
    Wrapper: React.ComponentClass<Types.WrapperProps>,
    Item: React.ComponentClass<Types.ItemProps>,
    Separator?: React.ComponentClass<Types.SeparatorProps>,
    Title?: React.ComponentClass<Types.TitleProps>,
    Spacer?: React.ComponentClass,
    Hint?: React.ComponentClass<Types.HintProps>,
  },
}


class MenuConstructor extends React.PureComponent<MenuConstructorProps> {
  static contextType = AppContext

  handleItemClick = (item: ItemType) => {
    const {jumpTo, smoothJump} = this.props
    if (jumpTo) {
      const target = document.getElementById(jumpTo)
      target?.scrollIntoView({
        behavior: smoothJump ? 'smooth' : 'auto',
      })
    }
    // const {history} = this.props
    // item.path && history.push(item.path)
  }

  renderItem = (item: ItemType) => {
    const Menu = this.props.component
    const {value, hint, path, key, exact} = item

    if (!value) {
      if (!Menu.Separator) { return null }
      return <Menu.Separator key={key} />
    }

    if (!path) {
      if (!Menu.Title) { return null }
      return <Menu.Title key={key}>{value}</Menu.Title>
    }

    const {pathname} = this.props.location
    return (
      <Menu.Item
        key={key}
        active={exact ? pathname === path : pathname.includes(path)}
      >
        <Link to={path} onClick={() => {this.handleItemClick(item)}}>
          {value}
          {hint && Menu.Hint && <Menu.Hint>{hint}</Menu.Hint>}
        </Link>
      </Menu.Item>
    )
  }

  render() {
    const Menu = this.props.component

    return (
      <Menu.Wrapper>
        {this.props.data?.map(this.renderItem)}
      </Menu.Wrapper>
    )
  }
}

export default withRouter(MenuConstructor)