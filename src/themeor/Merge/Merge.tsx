import React from 'react'
import consoleMessage from '../utils/console-message'
import newId from '../utils/new-id'
import {ThemeContext} from '../context'
import * as mergingComponents from '../merging'

export interface MergeProps {
  children?: any,
  recursive?: boolean,
  force?: boolean,
  forwardedRef?: (node: any) => void,
  [X: string]: any,
}

// Merge Element Tag
export default class Merge extends React.PureComponent<MergeProps> {
  static contextType = ThemeContext
  static id = newId()

  refuse = (message?: string) => {
    message && consoleMessage({text: message,source: this})
    const {recursive, force, forwardedRef, ...originalProps} = this.props
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
      forwardedRef,
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

    // We can MERGE only with regular tags, functions and objects
    if (!['string', 'function', 'object'].includes(typeof onlyChild.type)) {
      return this.refuse()
    }

    const childProps = onlyChild.props

    // Check that "id" attributes don't cover each other
    if (!force && parentId && childProps.id) {
      return this.refuse(`Component hasn't merged his child because it met another "id" attribute\nParent id "${parentId}", child's id "${childProps.id}"`)
    }

    // Don't MERGE if child starts a new chain
    if (!force && childProps.MERGE_CHAIN) {
      return this.refuse()
    }

    const Component = onlyChild.type
    const is_themeor_component = Object.values(mergingComponents).includes(Component)
    const child_is_not_against = childProps.MERGE !== false

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

    // Merge only with our components and regular tags
    if (!force && !is_themeor_component && typeof Component !== 'string') {
      return this.refuse()
    }

    if (is_themeor_component) {
      forwardedRef && (mergedProps.forwardedRef = forwardedRef)
    } else {
      forwardedRef && (mergedProps.ref = forwardedRef)
    }

    if (is_themeor_component && child_is_not_against) {
      mergedProps.MERGE_CHAIN = recursive || childProps.MERGE_CHAIN
      mergedProps.FORCE_MERGE = force || childProps.FORCE_MERGE
    }

    return <Component {...mergedProps} />
  }
}