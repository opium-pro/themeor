import React from 'react'
import consoleMessage from '../utils/console-message'
import {Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect} from '../index'
import {TryTaglessProps} from './types'

// TryTagless Element Tag
export default function TryTagless(props: TryTaglessProps) {
  const {
    children,
    className: parentClassName,
    style: parentStyle,
    id: parentId,
    recursive,
    force,
    forwardRef,
    ...parentProps
  } = props

  function refuse (message?: string) {
    message && consoleMessage({text: message,source: TryTagless})
    const {recursive, force, forwardRef, ...originalProps} = props
    return <div {...originalProps} />
  }

  // Remove invalid children
  const nonEmpryChildren: any[] = []
  React.Children.forEach(children, (child) => {
    if (child) {
      nonEmpryChildren.push(child)
    }
  })

  // Check that at least one child is left after previous check
  if (nonEmpryChildren.length > 1) {
    return refuse()
  }
  const onlyChild = nonEmpryChildren[0]

  // Check if after previous checks we stiil have something to render
  if (!onlyChild) {
    return refuse()
  }

  // Check if it's not just plain text
  if (typeof onlyChild === 'string') {
    return refuse()
  }

  // We can TRY_TAGLESS only with regular tags, functions and objects
  if (!['string', 'function', 'object'].includes(typeof onlyChild.type)) {
    return refuse()
  }

  const childProps = onlyChild.props

  // Check that "id" attributes don't cover each other
  if (!force && parentId && childProps.id) {
    return refuse(`OnlyChild hasn't merged his child because it met another "id" attribute\nParent id "${parentId}", child's id "${childProps.id}"`)
  }

  // Don't TRY_TAGLESS if child starts a new chain
  if (!force && childProps.TRY_RECURSIVE_TAGLESS) {
    return refuse()
  }

  const OnlyChildComponent = onlyChild.type
  const mergingComponents = [Theme, Box, Font, Line, Icon, Fit, Align, Gap, Effect]
  let child_is_themeor_component = mergingComponents.includes(OnlyChildComponent)
    || !!mergingComponents.find((mergingComponent: any) => mergingComponent.TryTagless === OnlyChildComponent)

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
  if (!force && !child_is_themeor_component && typeof OnlyChildComponent !== 'string') {
    return refuse()
  }

  if (child_is_themeor_component) {
    forwardRef && (mergedProps.forwardRef = forwardRef)
  } else {
    forwardRef && (mergedProps.ref = forwardRef)
  }

  if (child_is_themeor_component && child_is_not_against) {
    mergedProps.TRY_RECURSIVE_TAGLESS = recursive || childProps.TRY_RECURSIVE_TAGLESS
    mergedProps.FORCE_TAGLESS = force || childProps.FORCE_TAGLESS
  }

  return <OnlyChildComponent {...mergedProps} />
}