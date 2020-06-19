import React from 'react'
import ReactDOM from 'react-dom'
import { Gap, Font, Align, Box, Reaction, Effect } from '../../../themeor'
import { Group } from './Group'
import { Item } from './Item'
import { WrapperProps } from '../../adapters/menu-types'
import { ThemeContext } from '../../../themeor'

export interface State {
  group: string,
}

export class Wrapper extends React.PureComponent<WrapperProps, State> {
  static contextType = ThemeContext
  setGroup = (group: string) => {
    this.setState({ group })
  }

  menu?: string[] = undefined

  autoSetMenu = () => {
    const menu: string[] = []
    React.Children.map(this.props.children, (group: any) => {
      const title = group?.props?.title
      if (group?.type === Group) {
        React.Children.map(group?.props?.children, (item: any) => {
          if (item?.type === Item && item?.props?.active) {
            this.setGroup(group?.props?.title)
          }
        })
        menu.push(title)
      }
    })
    if (!this.menu) {
      this.menu = menu
    }
    !this.state?.group && this.setGroup(this.menu[0])
  }

  componentDidMount() {
    this.autoSetMenu()
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps !== this.props) {
      this.autoSetMenu()
    }
  }

  renderMenu = () => {
    let startNode: any
    React.Children.map(this.props.children, (child: any) => {
      startNode = document.getElementById(child?.props?.startNodeId) || startNode
      if (child?.type !== Group) {
        return null
      }
    })

    const activeGroup = this.state?.group

    setTimeout(() => {
      if (!startNode) { return }

      ReactDOM.render((
        <ThemeContext.Provider value={this.context}>
          <Gap vert="md" hor="xs">
            <Box fill="base" radius="sm" shadow="md">
              <Gap size="x2s">
                <Align row pattern="1fr 1fr" gapHor="x2s">
                  {this.menu?.map((group) => (
                    <Reaction key={group} cursor="pointer">
                      {(r: any) => (
                        <Box.TryTagless
                          TRY_RECURSIVE_TAGLESS
                          radius="sm"
                          fill={group === activeGroup ? 'base' : 'none'}
                          strong={group === activeGroup}
                        >
                          <Gap size="xs">
                            <Font
                              align="center"
                              size="xs"
                              uppercase
                              fill={group === activeGroup ? 'base' : 'faint'}
                              letterSpacing="lg"
                              weight="700"
                            >
                              <button
                                {...r.props}
                                onClick={() => this.setGroup(group)}
                                type="button"
                              >
                                {group}
                              </button>
                            </Font>
                          </Gap>
                        </Box.TryTagless>
                      )}
                    </Reaction>
                  ))}
                </Align>
              </Gap>
            </Box>
          </Gap>
        </ThemeContext.Provider>
      ),
        startNode
      )
    }, 0)
  }

  render() {
    const {
      children,
      active,
      ...restProps
    } = this.props

    const menu = this.renderMenu()

    return (
      <Gap.TryTagless vert="sm" {...restProps}>
        {menu}
        <nav>
          {React.Children.map(children, (child: any) => {
            const title = child?.props?.title

            if (child?.type === Group) {
              return (this.state?.group === title) ? child : null
            } else {
              return child
            }
          })}
        </nav>
      </Gap.TryTagless>
    )
  }
}