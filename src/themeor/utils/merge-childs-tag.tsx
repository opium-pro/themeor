import React from 'react'
import * as opiumComponents from '../index'
import consoleMessage from './console-message'
import {ThemeContext} from '../context'


export default function(props: React.ComponentProps<any>, instance?: any): false | React.ClassicElement<any> {
  const {children, className, ...restProps} = props
  const context = {...instance.context}
  const {mergeHistory = []} = context

  if (!context) {
    return false
  }

  if (props.id && children.props.id) {
    consoleMessage({
      text: `Component hasn't merged his child because it met another "id" attribute\nParent id "${props.id}", child's id "${children.props.id}"`,
      source: instance,
    })

    return false
  }

  if (!children || typeof children !== 'object' || React.Children.count(children) !== 1 || !('type' in children)) {
    return false
  }

  if (mergeHistory.includes(children.type) || instance.constructor === children.type) {
    return false
  }

  const OnlyChild = children.type

  const mergedProps = {
    ...restProps,
    ...children.props,
    className: `${className} ${children.props.className || ''}`,
  }

  if (Object.values(opiumComponents).includes(children.type)) {
    mergeHistory.push(instance.constructor)
  }

  return (
    <ThemeContext.Provider value={context}>
      <OnlyChild {...mergedProps} />
    </ThemeContext.Provider>
  )
}