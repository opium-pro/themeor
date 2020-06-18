import React from 'react'
import consoleMessage from '../utils/console-message'
import newId from '../utils/new-id'
import {ThemeContext} from '../context'
import * as mergingComponents from '../merging'

export interface TryTaglessProps {
  children?: any,
  recursive?: boolean,
  force?: boolean,
  forwardRef?: (node: any) => void,
  [X: string]: any,
}

// TryTagless Element Tag
class TryTagless extends React.PureComponent<TryTaglessProps> {
  static contextType = ThemeContext

  refuse = (message?: string) => {
    message && consoleMessage({text: message,source: this})
    const {recursive, force, forwardRef, ...originalProps} = this.props
    return <div {...originalProps} />
  }

  render () {
    const {
      children,
      className: parentClassName,
      style: parentStyle,
      id: parentId,
      recursive,
      force,
      forwardRef,
      ...parentProps
    } = this.props

    // Remove invalid children
    const nonEmpryChildren: any[] = []
    React.Children.forEach(children, (child) => {
      if (child) {
        nonEmpryChildren.push(child)
      }
    })

    // Check that at least one child is left after previous check
    if (nonEmpryChildren.length > 1) {
      return this.refuse()
    }
    const onlyChild = nonEmpryChildren[0]

    // Check if after previous checks we stiil have something to render
    if (!onlyChild) {
      return this.refuse()
    }

    // Check if it's not just plain text
    if (typeof onlyChild === 'string') {
      return this.refuse()
    }

    // We can TRY_TAGLESS only with regular tags, functions and objects
    if (!['string', 'function', 'object'].includes(typeof onlyChild.type)) {
      return this.refuse()
    }

    const childProps = onlyChild.props

    // Check that "id" attributes don't cover each other
    if (!force && parentId && childProps.id) {
      return this.refuse(`Component hasn't merged his child because it met another "id" attribute\nParent id "${parentId}", child's id "${childProps.id}"`)
    }

    // Don't TRY_TAGLESS if child starts a new chain
    if (!force && childProps.TRY_RECURSIVE_TAGLESS) {
      return this.refuse()
    }

    const Component = onlyChild.type
    const is_themeor_component = Object.values(mergingComponents).includes(Component)
    const child_is_not_against = childProps.TRY_TAGLESS !== false

    const mergedProps = {
      ...parentProps,
      ...childProps,
      style: {
        ...parentStyle,
        ...childProps.style,
      },
      className: `${parentClassName || ''} ${childProps.className || ''}`,
    }

    if (parentId) {
      mergedProps.id = parentId
    }

    // TryTagless only with our components and regular tags
    if (!force && !is_themeor_component && typeof Component !== 'string') {
      return this.refuse()
    }

    if (is_themeor_component) {
      forwardRef && (mergedProps.forwardRef = forwardRef)
    } else {
      forwardRef && (mergedProps.ref = forwardRef)
    }

    if (is_themeor_component && child_is_not_against) {
      mergedProps.TRY_RECURSIVE_TAGLESS = recursive || childProps.TRY_RECURSIVE_TAGLESS
      mergedProps.FORCE_TAGLESS = force || childProps.FORCE_TAGLESS
    }

    return <Component {...mergedProps} />
  }
}

const _TryTagless: any = React.forwardRef((props: TryTaglessProps, ref: any) => <TryTagless forwardRef={ref} {...props} />)
export default _TryTagless