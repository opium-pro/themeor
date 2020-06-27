import React, { ReactNode } from 'react'
import {withRouter, Link, RouteComponentProps, RouteProps} from 'react-router-dom'
import {AppContext} from '../context'
import * as Types from './menu-types'
import navigation from '../navigation'


export interface ItemType extends RouteProps {
  key: string,
  value?: any,
  hint?: string,
  component?: any,
  path?: string,
  exact?: boolean,
  group?: string,
  groupMenu?: string[],
  startGroup?: boolean,
}

export interface MenuAdapterProps extends RouteComponentProps {
  data?: ItemType[] | null,
  jumpTo?: string,
  smoothJump?: boolean,
  component: {
    Wrapper: React.ComponentClass<Types.WrapperProps>,
    Item: React.ComponentClass<Types.ItemProps>,
    Separator?: React.ComponentClass<Types.SeparatorProps>,
    Group?: React.ComponentClass<Types.GroupProps>,
    Spacer?: React.ComponentClass,
    Hint?: React.ComponentClass<Types.HintProps>,
    Title?: React.ComponentClass<Types.TitleProps>,
  },
}


class MenuAdapter extends React.PureComponent<MenuAdapterProps> {
  static contextType = AppContext

  handleItemClick = (item: ItemType) => {
    const {jumpTo, smoothJump} = this.props
    if (jumpTo) {
      const target = document.getElementById(jumpTo)
      target?.scrollIntoView({
        behavior: smoothJump ? 'smooth' : 'auto',
      })
    }
  }

  currentGroup?:string = undefined
  groupMenuId?:string = undefined

  renderGroup = (item: ItemType, index: number) => {
    const Menu = this.props.component
    const {value, key} = item

    if (!Menu.Group) { return null }

    this.currentGroup = key
    const group = (
      <Menu.Group key={key} title={value} startNodeId={this.groupMenuId}>
        {navigation.slice(index + 1).map((newItem) => this.renderItem(newItem, key))}
      </Menu.Group>
    )
    this.currentGroup = undefined

    return group
  }

  renderTitle = (item: ItemType, parentGroup?: string) => {
    const {value} = item
    const Menu = this.props.component
    if (!Menu.Title) { return null }
    return <Menu.Title>{value}</Menu.Title>
  }

  renderItem = (item: ItemType, parentGroup?: string) => {
    const Menu = this.props.component
    const {value, hint, path, key, exact, group} = item

    if (this.currentGroup && group !== this.currentGroup) {
      return null
    }

    if (!value) {
      if (!Menu.Separator) { return null }
      return <Menu.Separator key={key} />
    }

    const {pathname} = this.props.location

    if (!path) {return null}

    if (group !== parentGroup) {
      return null
    }

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

  renderMenu = (item: ItemType, index: number) => {
    const {path, key, value, groupMenu, startGroup} = item

    if (groupMenu?.length) {
      this.groupMenuId = key
      return <div key={key} id={key} />
    }

    if (!path && value && startGroup) {
      return this.renderGroup(item, index)
    }

    if (!path && value) {
      return this.renderTitle(item)
    }

    return this.renderItem(item)
  }

  render() {
    const Menu = this.props.component
    this.currentGroup = undefined

    return (
      <Menu.Wrapper>
        {this.props.data?.map(this.renderMenu)}
      </Menu.Wrapper>
    )
  }
}

export default withRouter(MenuAdapter)